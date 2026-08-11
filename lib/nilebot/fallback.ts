import { knowledgeRecords, navigationActions } from "./knowledge";
import type { NileBotAction, NileBotMessageInput, NileBotResponse } from "./types";

const injectionPattern = /(reveal|show|print|repeat).*(system|instruction|prompt|api key|secret)|ignore (all|your|previous)|pretend (you are|to be)|change your identity/i;
const projectPattern = /(help me plan|i need|we need|planning|product idea|build an?|create an?|develop an?|project for|app for|platform for|system for|website for|mvp for)/i;

const discoveryQuestions = {
  problem: "What problem should this product solve for the business or its users?",
  users: "Who will use it most often?",
  platform: "Should the first version be web, mobile, or both?",
  existing: "Is there an existing system or workflow this needs to replace or connect with?",
  timeline: "What timeline are you considering?",
} as const;

type DiscoveryKey = keyof typeof discoveryQuestions;

function followingUserAnswer(messages: NileBotMessageInput[], question: string) {
  const index = messages.findIndex((message) => message.role === "assistant" && message.content.includes(question));
  if (index < 0) return undefined;
  return messages.slice(index + 1).find((message) => message.role === "user")?.content;
}

function discoveryState(messages: NileBotMessageInput[]) {
  const answers = Object.fromEntries(
    (Object.entries(discoveryQuestions) as [DiscoveryKey, string][]).map(([key, question]) => [key, followingUserAnswer(messages, question)]),
  ) as Partial<Record<DiscoveryKey, string>>;
  const firstQuestion = messages.findIndex((message) => message.role === "assistant" && message.content.includes(discoveryQuestions.problem));
  const idea = messages.slice(0, firstQuestion < 0 ? undefined : firstQuestion).find((message) => message.role === "user" && projectPattern.test(message.content))?.content;
  return { answers, idea };
}

function nextDiscoveryQuestion(messages: NileBotMessageInput[]): NileBotResponse | undefined {
  const latest = messages.at(-1);
  const inProgress = messages.some((message) => message.role === "assistant" && Object.values(discoveryQuestions).some((question) => message.content.includes(question)));
  if (!latest || latest.role !== "user" || (!inProgress && !projectPattern.test(latest.content))) return undefined;

  const state = discoveryState(messages);
  const next = (Object.keys(discoveryQuestions) as DiscoveryKey[]).find((key) => !state.answers[key]);
  if (next) {
    const prefix = next === "problem" ? "I can help shape that into a concise project brief. " : "";
    return { message: `${prefix}${discoveryQuestions[next]}`, actions: [], mode: "fallback" };
  }

  const project = state.idea && !/^help me plan/i.test(state.idea) ? state.idea : state.answers.problem;
  const platform = state.answers.platform ? `${state.answers.platform.charAt(0).toLowerCase()}${state.answers.platform.slice(1)}` : "digital";
  const brief = [
    `Project\n${project || "A new digital product"}`,
    `Need\n${state.answers.problem}`,
    `Primary users\n${state.answers.users}`,
    `Likely solution\n${platform} product, shaped around the stated workflow${state.answers.existing?.toLowerCase() === "no" ? "." : ` and the existing-system context: ${state.answers.existing}.`}`,
    "Relevant capabilities\nProduct discovery, UI/UX, software engineering, and the appropriate mobile, web, cloud, AI, or blockchain work after technical assessment.",
    `Timeline\n${state.answers.timeline}`,
    "Open questions\nDetailed scope, integrations, budget, constraints, and delivery milestones should be confirmed with the team.",
  ].join("\n\n");
  return {
    message: "Here is a concise brief based on what you shared. Review it before sending it to the NileBit Labs team.",
    actions: [{ label: "Send this to NileBit Labs", href: "/contact" }],
    mode: "fallback",
    projectBrief: brief,
  };
}

function scoreRecord(content: string, keywords: readonly string[]) {
  const normalized = content.toLowerCase();
  return keywords.reduce((score, keyword) => score + (normalized.includes(keyword) ? keyword.split(" ").length : 0), 0);
}

function actionsFor(href?: string): NileBotAction[] {
  if (!href) return [];
  const action = Object.values(navigationActions).find((candidate) => candidate.href === href);
  return action ? [action] : [{ label: "Open Page", href }];
}

export function fallbackResponse(messages: NileBotMessageInput[]): NileBotResponse {
  const latest = messages.at(-1)?.content.trim() || "";
  if (injectionPattern.test(latest)) {
    return { message: "I can’t provide private instructions, credentials, or change my role. I can help with verified NileBit Labs information or project planning.", actions: [navigationActions.services], mode: "fallback" };
  }

  const discovery = nextDiscoveryQuestion(messages);
  if (discovery) return discovery;

  const ranked = knowledgeRecords
    .map((record) => ({ record, score: scoreRecord(latest, record.keywords) }))
    .sort((a, b) => b.score - a.score);
  if (ranked[0]?.score) {
    return { message: ranked[0].record.summary, actions: actionsFor(ranked[0].record.href), mode: "fallback" };
  }

  return {
    message: "I can’t verify that from the approved NileBit Labs information. I can help with the company, services, selected work, leadership, delivery process, Insights, or starting a project.",
    actions: [navigationActions.services, navigationActions.contact],
    mode: "fallback",
  };
}
