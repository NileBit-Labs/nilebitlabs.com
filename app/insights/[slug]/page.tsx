import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { Card, Container, CTA, Section } from "@/components/ui/design-system";
import { getInsight, getRelatedInsights, insights } from "@/data/insights";
import NileBotTrigger from "@/components/nilebot/NileBotTrigger";

interface InsightPageProps { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return insights.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const insight = getInsight((await params).slug);
  if (!insight) return { title: "Insight Not Found" };
  const path = `/insights/${insight.slug}`;
  return {
    title: insight.title,
    description: insight.excerpt,
    alternates: { canonical: path },
    openGraph: {
      title: `${insight.title} | NileBit Labs`,
      description: insight.excerpt,
      type: "article",
      url: path,
      siteName: "NileBit Labs",
      locale: "en_UG",
      publishedTime: insight.publishedAt,
      images: insight.image ? [{ url: insight.image, alt: insight.title, width: 1200, height: 630 }] : undefined,
    },
    twitter: { card: "summary_large_image", title: `${insight.title} | NileBit Labs`, description: insight.excerpt, images: insight.image ? [insight.image] : undefined },
  };
}

export default async function InsightPage({ params }: InsightPageProps) {
  const insight = getInsight((await params).slug);
  if (!insight) notFound();
  const related = getRelatedInsights(insight);
  const canonicalUrl = `https://nilebitlabs.com/insights/${insight.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: insight.title,
        description: insight.excerpt,
        datePublished: insight.publishedAt,
        author: { "@id": "https://nilebitlabs.com/#organization" },
        publisher: { "@id": "https://nilebitlabs.com/#organization" },
        mainEntityOfPage: canonicalUrl,
        image: insight.image ? `https://nilebitlabs.com${insight.image}` : undefined,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://nilebitlabs.com/" },
          { "@type": "ListItem", position: 2, name: "Insights", item: "https://nilebitlabs.com/insights" },
          { "@type": "ListItem", position: 3, name: insight.title, item: canonicalUrl },
        ],
      },
    ],
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <Section spacing="lg">
        <Container size="content">
          <Link href="/insights" className="inline-flex items-center gap-2 text-body-sm font-semibold text-muted transition-colors hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><ArrowLeft className="h-4 w-4" strokeWidth={1.75} /> All insights</Link>
          <nav className="mt-10 text-caption text-muted" aria-label="Breadcrumb"><Link href="/" className="hover:text-heading">Home</Link><span aria-hidden="true"> / </span><Link href="/insights" className="hover:text-heading">Insights</Link><span aria-hidden="true"> / </span><span className="text-heading">{insight.category}</span></nav>
          <p className="mt-8 text-eyebrow text-primary">{insight.category}</p>
          <h1 className="mt-5 text-heading-1 text-heading">{insight.title}</h1>
          <p className="mt-7 text-body-lg text-muted">{insight.introduction}</p>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-body-sm text-muted">
            <time dateTime={insight.publishedAt}>{new Intl.DateTimeFormat("en", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(insight.publishedAt))}</time>
            <span>{insight.readingTime}</span><span>NileBit Labs</span>
          </div>
        </Container>
      </Section>

      {insight.image ? <Container size="page"><div className="image-frame relative aspect-[16/7]"><Image src={insight.image} alt="" fill priority sizes="(min-width: 1280px) 76rem, 100vw" className="object-cover" /></div></Container> : null}

      <Section spacing="lg">
        <Container size="content">
          <div className="space-y-12">
            {insight.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-heading-3 text-heading">{section.heading}</h2>
                <div className="mt-5 space-y-5 text-body-lg text-body-color">{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                {section.points ? <ul className="mt-6 space-y-3 border-l border-primary pl-6 text-body text-body-color">{section.points.map((point) => <li key={point}>{point}</li>)}</ul> : null}
              </section>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="surface" spacing="lg">
        <Container>
          <h2 className="text-heading-2 text-heading">Related insights</h2>
          <div className="mt-9 grid gap-grid md:grid-cols-2">{related.map((item) => <Link key={item.slug} href={`/insights/${item.slug}`} className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><Card className="h-full transition-colors group-hover:border-primary"><p className="text-eyebrow text-primary">{item.category}</p><h3 className="mt-4 text-heading-3 text-heading">{item.title}</h3><p className="mt-4 text-body text-muted">{item.excerpt}</p><span className="mt-6 inline-flex items-center gap-2 text-body-sm font-semibold text-heading">Read insight <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} /></span></Card></Link>)}</div>
        </Container>
      </Section>

      <Section spacing="md"><Container><CTA title="Need to turn a complex idea into a dependable product?" description="Use NileBot to clarify the product, constraints, and engineering path forward." action={<NileBotTrigger />} /></Container></Section>
    </article>
  );
}
