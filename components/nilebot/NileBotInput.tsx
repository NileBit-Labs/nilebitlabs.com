"use client";

import { ArrowUp } from "lucide-react";
import { useState, type FormEvent, type KeyboardEvent, type RefObject } from "react";

export default function NileBotInput({ onSend, disabled, inputRef }: { onSend: (content: string) => void; disabled: boolean; inputRef: RefObject<HTMLTextAreaElement | null> }) {
  const [value, setValue] = useState("");

  function submit(event?: FormEvent) {
    event?.preventDefault();
    const content = value.trim();
    if (!content || disabled) return;
    onSend(content);
    setValue("");
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); submit(); }
  }

  return (
    <form onSubmit={submit} className="border-t border-border bg-background p-3 md:p-4">
      <label htmlFor="nilebot-input" className="sr-only">Message NileBot</label>
      <div className="flex items-end gap-2 rounded-card border border-border bg-surface p-2 focus-within:ring-2 focus-within:ring-primary">
        <textarea
          ref={inputRef}
          id="nilebot-input"
          rows={1}
          maxLength={1200}
          value={value}
          disabled={disabled}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about NileBit Labs or your project…"
          className="max-h-28 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-body-sm text-heading placeholder:text-muted focus:outline-none disabled:opacity-60"
        />
        <button type="submit" disabled={disabled || !value.trim()} aria-label="Send message" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-40">
          <ArrowUp className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
      <p className="mt-2 px-1 text-[0.6875rem] leading-relaxed text-muted">Please avoid sharing passwords, API keys, or other sensitive credentials.</p>
    </form>
  );
}
