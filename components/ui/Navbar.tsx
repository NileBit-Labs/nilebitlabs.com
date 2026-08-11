"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Container } from "./design-system";
import BrandLogo from "./BrandLogo";
import { cn } from "@/lib/utils";
import NileBotTrigger from "../nilebot/NileBotTrigger";
import { isNavigationItemActive, primaryNavigation } from "@/lib/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  useEffect(() => { setIsOpen(false); }, [pathname]);
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setIsOpen(false); };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <Container>
        <nav className="flex h-20 items-center justify-between" aria-label="Primary navigation">
          <Link
            href="/"
            className="flex min-h-touch items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={closeMenu}
          >
            <BrandLogo priority />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {primaryNavigation.map((item) => {
              const active = isNavigationItemActive(pathname, item.href);
              return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn("relative rounded-button px-4 py-2 text-sm font-medium text-muted transition-colors after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-pill after:bg-primary after:transition-transform hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary", active && "font-semibold text-heading after:scale-x-100")}
              >
                {item.label}
              </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <NileBotTrigger size="sm" />
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex min-h-touch min-w-touch items-center justify-center rounded-button border border-border text-heading transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" /> : <Menu className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />}
          </button>
        </nav>
      </Container>

      <div id="mobile-navigation" className={cn("border-t border-border bg-background lg:hidden", isOpen ? "block" : "hidden")}>
        <Container className="py-4">
          <div className="grid gap-2">
            {primaryNavigation.map((item) => {
              const active = isNavigationItemActive(pathname, item.href);
              return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={active ? "page" : undefined}
                className={cn("relative flex min-h-touch items-center rounded-card px-4 text-base font-medium text-muted transition-colors after:absolute after:bottom-1 after:left-4 after:h-0.5 after:w-6 after:origin-left after:scale-x-0 after:rounded-pill after:bg-primary after:transition-transform hover:bg-surface hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary", active && "font-semibold text-heading after:scale-x-100")}
              >
                {item.label}
              </Link>
              );
            })}
            <NileBotTrigger className="mt-2" onClick={closeMenu} />
            <Button href="/contact" variant="secondary" onClick={closeMenu}>Contact Our Team</Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
