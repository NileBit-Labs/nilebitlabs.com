"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button, Container } from "./design-system";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <Container>
        <nav className="flex h-20 items-center justify-between" aria-label="Primary navigation">
          <Link
            href="/"
            className="flex min-h-touch items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={closeMenu}
          >
            <Image
              src="/nilebit-logo-darkmode.svg"
              alt="NileBit Labs"
              width={160}
              height={64}
              priority
              className="h-14 w-auto"
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-button px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button href="/contact" size="sm">
              Start a Conversation
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex min-h-touch min-w-touch items-center justify-center rounded-button border border-border text-heading transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
          </button>
        </nav>
      </Container>

      <div className={cn("border-t border-border bg-background lg:hidden", isOpen ? "block" : "hidden")}>
        <Container className="py-4">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="flex min-h-touch items-center rounded-card px-4 text-base font-medium text-heading transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact" className="mt-2" onClick={closeMenu}>
              Start a Conversation
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
