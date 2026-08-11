import { NextResponse } from "next/server";
import { fallbackResponse } from "@/lib/nilebot/fallback";
import { requestProvider } from "@/lib/nilebot/provider";
import type { NileBotMessageInput } from "@/lib/nilebot/types";

const limits = new Map<string, { count: number; resetAt: number }>();
const allowedRoles = new Set(["user", "assistant"]);

function isRateLimited(request: Request) {
  const client = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  const now = Date.now();
  if (limits.size > 1000) limits.clear();
  const current = limits.get(client);
  if (!current || current.resetAt <= now) { limits.set(client, { count: 1, resetAt: now + 10 * 60 * 1000 }); return false; }
  current.count += 1;
  return current.count > 30;
}

function parseMessages(value: unknown): NileBotMessageInput[] | null {
  if (!value || typeof value !== "object") return null;
  const messages = (value as Record<string, unknown>).messages;
  if (!Array.isArray(messages) || messages.length < 1 || messages.length > 12) return null;
  const parsed: NileBotMessageInput[] = [];
  let totalLength = 0;
  for (const item of messages) {
    if (!item || typeof item !== "object") return null;
    const candidate = item as Record<string, unknown>;
    if (typeof candidate.role !== "string" || !allowedRoles.has(candidate.role) || typeof candidate.content !== "string") return null;
    const content = candidate.content.trim();
    if (!content || content.length > 1200) return null;
    totalLength += content.length;
    if (totalLength > 8000) return null;
    parsed.push({ role: candidate.role as NileBotMessageInput["role"], content });
  }
  if (parsed.at(-1)?.role !== "user") return null;
  return parsed;
}

export async function POST(request: Request) {
  if (isRateLimited(request)) return NextResponse.json({ error: "Too many requests. Please wait before trying again." }, { status: 429, headers: { "Retry-After": "600" } });
  let input: unknown;
  try { input = await request.json(); } catch { return NextResponse.json({ error: "The request must contain valid JSON." }, { status: 400 }); }
  const messages = parseMessages(input);
  if (!messages) return NextResponse.json({ error: "The conversation is invalid or too long." }, { status: 400 });

  const apiKey = process.env.NILEBOT_API_KEY;
  const apiUrl = process.env.NILEBOT_API_URL;
  const model = process.env.NILEBOT_MODEL;
  if (!apiKey || !apiUrl || !model) return NextResponse.json(fallbackResponse(messages));

  try {
    const url = new URL(apiUrl);
    if (url.protocol !== "https:") throw new Error("Provider URL must use HTTPS");
    return NextResponse.json(await requestProvider({ apiKey, apiUrl: url.toString(), model }, messages));
  } catch {
    return NextResponse.json({ error: "NileBot could not reach its AI provider. Please try again or use the Contact page." }, { status: 502 });
  }
}
