"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/design-system";

export const nileBotOpenEvent = "nilebot:open";

export default function NileBotTrigger({ children = "Talk to NileBot", className, variant = "primary", size = "md", onClick }: { children?: ReactNode; className?: string; variant?: "primary" | "secondary" | "ghost"; size?: "sm" | "md" | "lg"; onClick?: () => void }) {
  return (
    <Button
      className={className}
      variant={variant}
      size={size}
      ariaControls="nilebot-dialog"
      ariaHasPopup="dialog"
      onClick={() => {
        onClick?.();
        window.dispatchEvent(new CustomEvent(nileBotOpenEvent, { detail: { trigger: document.activeElement } }));
      }}
    >
      {children}
    </Button>
  );
}
