import { ArrowUpRight } from "lucide-react";
import type { RefObject } from "react";

export default function NileBotLauncher({ onOpen, buttonRef }: { onOpen: () => void; buttonRef: RefObject<HTMLButtonElement | null> }) {
  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onOpen}
      aria-haspopup="dialog"
      className="group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex min-h-touch items-center gap-3 rounded-button border border-border bg-surface-elevated px-4 py-3 text-left shadow-soft transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:bottom-6 md:right-6"
    >
      <span className="font-mono text-caption font-semibold text-primary" aria-hidden="true">{"{||}"}</span>
      <span>
        <span className="block text-body-sm font-semibold text-heading">NileBot</span>
        <span className="hidden text-caption text-muted sm:block">Ask about your project</span>
      </span>
      <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" strokeWidth={1.75} aria-hidden="true" />
    </button>
  );
}
