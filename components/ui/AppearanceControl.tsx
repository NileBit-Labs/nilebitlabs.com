"use client";

import { Laptop, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type Appearance = "system" | "dark" | "light";

const options = [
  { value: "system", label: "System appearance", icon: Laptop },
  { value: "dark", label: "Dark appearance", icon: Moon },
  { value: "light", label: "Light appearance", icon: Sun },
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
      {options.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          type="button"
          aria-label={label}
          aria-pressed={appearance === value}
          title={label}
          onClick={() => { setAppearance(value); applyAppearance(value); }}
          className={cn(
            "inline-flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            appearance === value && "bg-surface-elevated text-heading shadow-sm",
          )}
        >
          <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}
