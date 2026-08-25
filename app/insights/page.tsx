import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge, Card, Container, CTA, Section, SectionHeader } from "@/components/ui/design-system";
import { insightCategories, insights } from "@/data/insights";
import NileBotTrigger from "@/components/nilebot/NileBotTrigger";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("Insights", "Practical thinking from NileBit Labs on product engineering, applied AI, blockchain infrastructure, MVP decisions, and dependable software.", "/insights");

export default function InsightsPage() {
  const featured = insights.find((insight) => insight.featured) ?? insights[0];
  const remaining = insights.filter((insight) => insight.slug !== featured.slug);

  return (
    <div>
      <Section spacing="lg">
        <Container>
          <div className="max-w-4xl">
            <Badge tone="primary">Insights</Badge>
            <h1 className="mt-8 text-display-lg text-heading">Clear thinking for products that have to work in the real world.</h1>
            <p className="mt-7 max-w-readable text-body-lg text-muted">
              Practical perspectives from NileBit Labs on engineering decisions, emerging technology, and building software with a useful life beyond launch.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-border bg-surface" spacing="sm">
        <Container>
          <div className="flex flex-wrap items-center gap-3" aria-label="Insight categories">
            <span className="mr-2 text-caption font-semibold uppercase tracking-[0.12em] text-muted">Topics</span>
            {insightCategories.map((category) => <Badge key={category}>{category}</Badge>)}
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <SectionHeader eyebrow="Featured insight" title="A considered approach to software delivery." />
          <Link href={`/insights/${featured.slug}`} className="group mt-10 grid overflow-hidden rounded-card border border-border bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:grid-cols-2">
            <div className="relative min-h-72 overflow-hidden">
              {featured.image ? <Image src={featured.image} alt="" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" /> : null}
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-eyebrow text-primary">{featured.category}</p>
              <h2 className="mt-5 text-heading-2 text-heading">{featured.title}</h2>
              <p className="mt-5 text-body text-muted">{featured.excerpt}</p>
              <div className="mt-7 flex items-center justify-between gap-4 text-body-sm text-muted">
                <span>{featured.readingTime}</span>
                <span className="inline-flex items-center gap-2 font-semibold text-heading">Read insight <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} /></span>
              </div>
            </div>
          </Link>
        </Container>
      </Section>

      <Section tone="surface" spacing="lg">
        <Container>
          <SectionHeader eyebrow="Latest" title="Notes on building, deciding, and improving." description="A focused collection from the areas where we work." />
          <div className="mt-10 grid gap-grid lg:grid-cols-3">
            {remaining.map((insight) => (
              <Link key={insight.slug} href={`/insights/${insight.slug}`} className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <Card className="flex h-full flex-col transition-colors group-hover:border-primary">
                  <p className="text-eyebrow text-primary">{insight.category}</p>
                  <h2 className="mt-5 text-heading-3 text-heading">{insight.title}</h2>
                  <p className="mt-4 flex-1 text-body text-muted">{insight.excerpt}</p>
                  <div className="mt-7 flex items-center justify-between text-caption text-muted">
                    <span>{insight.readingTime}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:text-primary" strokeWidth={1.75} />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="md">
        <Container><CTA title="Have a product decision worth thinking through?" description="Share the business goal, the constraints, and what needs to become possible." action={<NileBotTrigger />} /></Container>
      </Section>
    </div>
  );
}
