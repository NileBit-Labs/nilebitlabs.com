"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { Container, Divider } from "./design-system";
import BrandLogo from "./BrandLogo";
import AppearanceControl from "./AppearanceControl";
import { isNavigationItemActive } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}

const companyLinks: FooterLink[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const legalLinks: FooterLink[] = [
  { label: "FAQs", href: "/faq" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer id="site-footer" className="border-t border-border bg-background text-body-color">
      <Container className="py-section-sm">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link
              href="/"
              className="inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <BrandLogo width={180} className="h-16 w-auto" />
            </Link>
            <p className="mt-5 max-w-sm text-body text-muted">
              Product engineering and emerging technology from Kampala, Uganda,
              built for clients with serious software ambitions.
            </p>
          </div>

          <nav aria-label="Company links">
            <h2 className="text-eyebrow text-primary">Company</h2>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isNavigationItemActive(pathname, item.href) ? "page" : undefined}
                    className={cn("inline-flex items-center gap-2 text-body-sm text-muted transition-colors hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary", isNavigationItemActive(pathname, item.href) && "font-medium text-heading")}
                  >
                    {isNavigationItemActive(pathname, item.href) ? <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" /> : null}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <h2 className="text-eyebrow text-primary">Appearance</h2>
              <div className="mt-4">
                <AppearanceControl />
              </div>
            </div>
          </nav>

          <nav aria-label="Legal links">
            <h2 className="text-eyebrow text-primary">Resources</h2>
            <ul className="mt-5 space-y-3">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={cn("inline-flex items-center gap-2 text-body-sm text-muted transition-colors hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary", pathname === item.href && "font-medium text-heading")}
                  >
                    {pathname === item.href ? <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" /> : null}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic">
            <h2 className="text-eyebrow text-primary">Contact</h2>
            <div className="mt-5 space-y-4 text-body-sm text-muted">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} aria-hidden="true" />
                <span>Makerere Kavule, Kampala, Uganda</span>
              </p>
              <p className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} aria-hidden="true" />
                <a className="hover:text-heading" href="mailto:info@nilebitlabs.com">
                  info@nilebitlabs.com
                </a>
              </p>
              <p className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} aria-hidden="true" />
                <a className="hover:text-heading" href="tel:+256770919975">
                  +256 770 919 975
                </a>
              </p>
            </div>
          </address>
        </div>

        <Divider className="my-8" />

        <div className="text-caption text-muted">
          <p>© {currentYear} NileBit Labs. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
