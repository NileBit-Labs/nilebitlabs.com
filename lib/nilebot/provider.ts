import { buildSystemPrompt } from "./prompt";
import type { NileBotAction, NileBotMessageInput, NileBotResponse } from "./types";

const allowedRoutes = new Set(["/", "/services", "/work", "/about", "/insights", "/contact", "/faq"]);

interface ProviderConfig { apiKey: string; apiUrl: string; model: string }

function record(value: unknown): Record<string, unknown> | undefined {
  return value && typeof value === "object" ? value as Record<string, unknown> : undefined;
}

function extractContent(payload: unknown) {
  const root = record(payload);
  const choices = Array.isArray(root?.choices) ? root.choices : [];
  const first = record(choices[0]);
  const message = record(first?.message);
  return typeof message?.content === "string" ? message.content : undefined;
}

function parseModelResponse(content: string): Omit<NileBotResponse, "mode"> {
  const cleaned = content.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
  try {
    const value = record(JSON.parse(cleaned));
    const message = typeof value?.message === "string" ? value.message.trim().slice(0, 2400) : "";
    const actions: NileBotAction[] = (Array.isArray(value?.actions) ? value.actions : [])
      .map(record)
      .filter((action): action is Record<string, unknown> => Boolean(action))
      .map((action) => ({ label: typeof action.label === "string" ? action.label.slice(0, 50) : "", href: typeof action.href === "string" ? action.href : "" }))
      .filter((action) => action.label && allowedRoutes.has(action.href))
      .slice(0, 2);
    const projectBrief = typeof value?.projectBrief === "string" ? value.projectBrief.trim().slice(0, 2400) : undefined;
    if (message) return { message, actions, projectBrief };
  } catch { /* Fall through to a safe plain-text response. */ }
  return { message: cleaned.slice(0, 2400) || "I couldn’t prepare a response. Please try again.", actions: [] };
}

export async function requestProvider(config: ProviderConfig, messages: NileBotMessageInput[]): Promise<NileBotResponse> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(config.apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${config.apiKey}` },
      body: JSON.stringify({ model: config.model, temperature: 0.2, max_tokens: 600, messages: [{ role: "system", content: buildSystemPrompt() }, ...messages] }),
      signal: controller.signal,
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Provider request failed");
    const content = extractContent(await response.json());
    if (!content) throw new Error("Provider returned no content");
    return { ...parseModelResponse(content), mode: "ai" };
  } finally {
    clearTimeout(timeout);
  }
}
