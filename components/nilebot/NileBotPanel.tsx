"use client";

import { RotateCcw, X } from "lucide-react";
import { useEffect, useRef } from "react";
import NileBotInput from "./NileBotInput";
import NileBotMessage from "./NileBotMessage";
import type { NileBotMessage as Message, NileBotMode } from "@/lib/nilebot/types";

const starters = ["What does NileBit Labs build?", "Explore your work", "Help me plan a project", "How do I contact the team?"];

export default function NileBotPanel({ messages, mode, pending, error, onSend, onClose, onReset }: { messages: Message[]; mode?: NileBotMode; pending: boolean; error?: string; onSend: (content: string) => void; onClose: () => void; onReset: () => void }) {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLElement>(null);

  useEffect(() => { inputRef.current?.focus(); }, []);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" }); }, [messages, pending, error]);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'));
      const first = focusable[0];
      const last = focusable.at(-1);
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    dialog.addEventListener("keydown", trapFocus);
    return () => dialog.removeEventListener("keydown", trapFocus);
  }, []);

  return (
    <div className="fixed inset-0 z-[70] bg-background/60 backdrop-blur-[2px] md:bg-transparent md:backdrop-blur-none" onMouseDown={(event) => { if (event.currentTarget === event.target) onClose(); }}>
      <section ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="nilebot-title" aria-describedby="nilebot-description" className="absolute inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] top-3 flex flex-col overflow-hidden rounded-card border border-border bg-background shadow-soft md:inset-auto md:bottom-6 md:right-6 md:h-[min(44rem,calc(100vh-3rem))] md:w-[27rem]">
        <header className="flex items-center justify-between gap-4 border-b border-border bg-surface px-4 py-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2"><span className="font-mono text-caption font-semibold text-primary" aria-hidden="true">{"{||}"}</span><h2 id="nilebot-title" className="text-body font-semibold text-heading">NileBot</h2></div>
            <p id="nilebot-description" className="mt-0.5 text-caption text-muted">{mode === "ai" ? "NileBit Labs AI assistant" : mode === "fallback" ? "NileBit Labs knowledge assistant" : "NileBit Labs assistant"}</p>
          </div>
          <div className="flex items-center gap-1">
            <button type="button" onClick={onReset} className="inline-flex min-h-touch min-w-touch items-center justify-center rounded-full text-muted transition-colors hover:bg-surface-elevated hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="New conversation" title="New conversation"><RotateCcw className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" /></button>
            <button type="button" onClick={onClose} className="inline-flex min-h-touch min-w-touch items-center justify-center rounded-full text-muted transition-colors hover:bg-surface-elevated hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="Close NileBot"><X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" /></button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-5" aria-live="polite" aria-busy={pending}>
          <div className="space-y-4">
            {messages.map((message) => <NileBotMessage key={message.id} message={message} />)}
            {messages.length === 1 ? <div className="grid gap-2 pt-2">{starters.map((starter) => <button key={starter} type="button" onClick={() => onSend(starter)} className="min-h-touch rounded-card border border-border bg-surface px-4 py-3 text-left text-body-sm font-medium text-heading transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">{starter}</button>)}</div> : null}
            {pending ? <div className="max-w-[88%] rounded-card border border-border bg-surface px-4 py-3 text-body-sm text-muted" role="status">Finding the most relevant information…</div> : null}
            {error ? <div className="max-w-[88%] rounded-card border border-error/30 bg-surface px-4 py-3 text-body-sm text-error" role="alert"><p>{error}</p><button type="button" onClick={() => { const last = [...messages].reverse().find((message) => message.role === "user"); if (last) onSend(last.content); }} className="mt-2 min-h-touch font-semibold underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Retry</button></div> : null}
            <div ref={endRef} />
          </div>
        </div>
        <NileBotInput onSend={onSend} disabled={pending} inputRef={inputRef} />
      </section>
    </div>
  );
}
