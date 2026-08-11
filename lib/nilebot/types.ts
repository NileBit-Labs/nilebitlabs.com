export type NileBotRole = "user" | "assistant";
export type NileBotMode = "ai" | "fallback";

export interface NileBotMessageInput {
  role: NileBotRole;
  content: string;
}

export interface NileBotMessage extends NileBotMessageInput {
  id: string;
  actions?: NileBotAction[];
  projectBrief?: string;
  mode?: NileBotMode;
}

export interface NileBotAction {
  label: string;
  href: string;
}

export interface NileBotResponse {
  message: string;
  actions: NileBotAction[];
  mode: NileBotMode;
  projectBrief?: string;
}

export interface KnowledgeRecord {
  id: string;
  title: string;
  summary: string;
  keywords: readonly string[];
  href?: string;
}
