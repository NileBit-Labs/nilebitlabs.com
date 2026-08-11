import Link from "next/link";
import type { NileBotMessage as Message } from "@/lib/nilebot/types";
import { cn } from "@/lib/utils";

export default function NileBotMessage({ message, onAction }: { message: Message; onAction?: (label: string) => void }) {
  const isVisitor = message.role === "user";
  return (
    <div className={cn("flex", isVisitor ? "justify-end" : "justify-start")}>
      <div className={cn("max-w-[88%] rounded-card border px-4 py-3", isVisitor ? "border-primary/30 bg-primary-light text-heading" : "border-border bg-surface text-body-color")}>
        <p className="whitespace-pre-wrap text-body-sm leading-relaxed">{message.content}</p>
        {message.actions?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {message.actions.map((action) => {
              const href = message.projectBrief && action.href === "/contact" ? `/contact?project=${encodeURIComponent(message.projectBrief)}` : action.href;
              return <Link key={`${action.label}-${action.href}`} href={href} onClick={() => onAction?.(action.label)} className="inline-flex min-h-touch items-center rounded-button border border-border bg-background px-3 py-2 text-caption font-semibold text-heading transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">{action.label}</Link>;
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
