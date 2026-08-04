import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button, Container, Divider } from "./design-system";

interface FooterLink {
  label: string;
  href: string;
}

const companyLinks: FooterLink[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const legalLinks: FooterLink[] = [
  { label: "FAQs", href: "/faq" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background text-body-color">
      <Container className="py-section-sm">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link
              href="/"
              className="inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Image
                src="/nilebit-logo-darkmode.svg"
                alt="NileBit Labs"
                width={180}
                height={72}
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm text-body text-muted">
              Product engineering and emerging technology from Kampala, Uganda,
              built for clients with serious software ambitions.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="secondary" size="sm">
                Plan a Project
              </Button>
            </div>
          </div>

          <nav aria-label="Company links">
            <h2 className="text-eyebrow text-primary">Company</h2>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-body-sm text-muted transition-colors hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal links">
            <h2 className="text-eyebrow text-primary">Resources</h2>
            <ul className="mt-5 space-y-3">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-body-sm text-muted transition-colors hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
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
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
                <span>Makerere Kavule, Kampala, Uganda</span>
              </p>
              <p className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
                <a className="hover:text-heading" href="mailto:info@nilebitlabs.com">
                  info@nilebitlabs.com
                </a>
              </p>
              <p className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} />
                <a className="hover:text-heading" href="tel:+256770919175">
                  +256 770 919 175
                </a>
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/NileBit-Labs"
                aria-label="NileBit Labs on GitHub"
                className="inline-flex min-h-touch min-w-touch items-center justify-center rounded-button border border-border text-muted transition-colors hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Github className="h-4 w-4" strokeWidth={1.75} />
              </a>
              <a
                href="https://linkedin.com/company/nilebitlabs"
                aria-label="NileBit Labs on LinkedIn"
                className="inline-flex min-h-touch min-w-touch items-center justify-center rounded-button border border-border text-muted transition-colors hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </div>
          </address>
        </div>

        <Divider className="my-8" />

        <div className="flex flex-col gap-3 text-caption text-muted md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} NileBit Labs. All rights reserved.</p>
          <p>Where technology meets innovation.</p>
        </div>
      </Container>
    </footer>
  );
}
