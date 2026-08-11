"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { nileBotOpenEvent } from "./NileBotTrigger";
import type { NileBotMessage, NileBotResponse } from "@/lib/nilebot/types";

const NileBotPanel = dynamic(() => import("./NileBotPanel"), { ssr: false });
const storageKey = "nilebot-session-v2";
const initialMessage: NileBotMessage = { id: "nilebot-intro", role: "assistant", content: "Tell me what you’re planning to build. I’ll help clarify the idea, identify relevant NileBit Labs capabilities, and prepare a project brief for our team." };

function createId() { return typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`; }

function restoreMessages(): NileBotMessage[] {
  try {
    const value = JSON.parse(sessionStorage.getItem(storageKey) || "null") as unknown;
    if (!Array.isArray(value)) return [initialMessage];
    const messages = value.filter((item): item is NileBotMessage => Boolean(item && typeof item === "object" && "id" in item && "role" in item && "content" in item && typeof item.id === "string" && (item.role === "user" || item.role === "assistant") && typeof item.content === "string")).slice(-20).map((message) => message.id === initialMessage.id ? initialMessage : message);
    return messages.length ? messages : [initialMessage];
  } catch { return [initialMessage]; }
}

export default function NileBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<NileBotMessage[]>([initialMessage]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string>();
  const activeTriggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => { setMessages(restoreMessages()); }, []);
  useEffect(() => { try { sessionStorage.setItem(storageKey, JSON.stringify(messages)); } catch { /* Session persistence is optional. */ } }, [messages]);
  useEffect(() => {
    const openNileBot = (event: Event) => {
      const trigger = (event as CustomEvent<{ trigger?: EventTarget | null }>).detail?.trigger;
      activeTriggerRef.current = trigger instanceof HTMLElement ? trigger : document.activeElement instanceof HTMLElement ? document.activeElement : null;
      setOpen(true);
    };
    window.addEventListener(nileBotOpenEvent, openNileBot);
    return () => window.removeEventListener(nileBotOpenEvent, openNileBot);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") close(); };
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  function close() { setOpen(false); requestAnimationFrame(() => activeTriggerRef.current?.focus({ preventScroll: true })); }
  function reset() { setMessages([initialMessage]); setError(undefined); try { sessionStorage.removeItem(storageKey); } catch { /* Session storage is optional. */ } }

  async function send(content: string) {
    if (pending) return;
    setError(undefined);
    const isRetry = messages.at(-1)?.role === "user" && messages.at(-1)?.content === content;
    const nextMessages = isRetry ? messages : [...messages, { id: createId(), role: "user" as const, content }];
    setMessages(nextMessages);
    setPending(true);
    try {
      const conversation = nextMessages.filter((message) => message.id !== initialMessage.id).slice(-12).map(({ role, content: messageContent }) => ({ role, content: messageContent }));
      const response = await fetch("/api/nilebot", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: conversation }) });
      const result = await response.json() as NileBotResponse & { error?: string };
      if (!response.ok) throw new Error(result.error || "NileBot could not respond.");
      const assistantMessage: NileBotMessage = { id: createId(), role: "assistant", content: result.message, actions: result.actions, projectBrief: result.projectBrief, mode: result.mode };
      setMessages((current) => [...current, assistantMessage].slice(-20));
    } catch (failure) {
      setError(failure instanceof Error ? failure.message : "NileBot could not respond. Please try again.");
    } finally { setPending(false); }
  }

  const mode = [...messages].reverse().find((message) => message.role === "assistant" && message.mode)?.mode;
  return open ? createPortal(<NileBotPanel messages={messages} mode={mode} pending={pending} error={error} onSend={send} onClose={close} onReset={reset} />, document.body) : null;
}
