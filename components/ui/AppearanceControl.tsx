"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type Appearance = "system" | "dark" | "light";

const options = [
  { value: "system", label: "System" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
] as const;

function applyAppearance(appearance: Appearance) {
  document.documentElement.dataset.theme = appearance;
  document.documentElement.style.colorScheme = appearance === "system" ? "light dark" : appearance;
  try { localStorage.setItem("nilebit-appearance", appearance); } catch { /* The theme still applies for this page. */ }
}

export default function AppearanceControl({ className }: { className?: string }) {
  const [appearance, setAppearance] = useState<Appearance>("system");

  useEffect(() => {
    let stored: string | null = null;
    try { stored = localStorage.getItem("nilebit-appearance"); } catch { /* System remains the default. */ }
    const initial = stored === "dark" || stored === "light" ? stored : "system";
    setAppearance(initial);
    applyAppearance(initial);
  }, []);

  return (
    <div className={cn("inline-flex rounded-button border border-border bg-surface p-1", className)} role="group" aria-label="Appearance">
      {options.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          aria-label={`Use ${label.toLowerCase()} appearance`}
          aria-pressed={appearance === value}
          title={label}
          onClick={() => { setAppearance(value); applyAppearance(value); }}
          className={cn(
            "inline-flex min-h-8 items-center justify-center rounded-full px-3 text-caption font-medium text-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            appearance === value && "bg-surface-elevated text-heading shadow-sm",
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
