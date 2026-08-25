import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Brain,
  Building2,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Layers3,
  Rocket,
  Smartphone,
  Workflow,
} from "lucide-react";
import {
  Badge,
  Button,
  Card,
  Container,
  CTA,
  Section,
  SectionHeader,
  Tag,
} from "@/components/ui/design-system";
import NileBotTrigger from "@/components/nilebot/NileBotTrigger";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Work",
  "Explore NileBit Labs engineering work across live institutional platforms, commerce, applied AI, mobile products, and blockchain applications.",
  "/work",
);

const featuredCaseStudy = {
  title: "Rubaare Secondary School",
  category: "Institutional Platform",
  image: "/images/work/rubaare-secondary-school.webp",
  imageAlt: "Rubaare Secondary School website designed and developed by NileBit Labs",
  overview:
    "A live institutional website and digital information platform for a secondary school in Ntungamo District, Uganda.",
  problem:
    "Rubaare Secondary School needed a modern public platform capable of presenting academic and admissions information clearly while supporting frequently changing school content.",
  challenge:
    "The website needed to bring school information, academics, admissions, leadership, news, events, documents, fees, and contact pathways into one structured experience that remains useful across desktop and mobile.",
  solution:
    "NileBit Labs designed and engineered a responsive institutional platform with structured content management, searchable resources, publishing workflows, downloadable documents, and a production SEO foundation.",
  architecture:
    "A Next.js and TypeScript application with Sanity content architecture, deployed on Vercel for reliable public delivery.",
  technologies: ["Next.js", "TypeScript", "Sanity", "Vercel"],
  status: "Live in production at rubaaress.sc.ug.",
  liveUrl: "https://rubaaress.sc.ug/",
};

const selectedCaseStudies = [
  {
    title: "SK Computer Store",
    category: "Commerce platform",
    image: "/img/portfolio/skcomputerstore.png",
    problem:
      "A computer hardware business needed a clearer digital storefront for product discovery and a structured buying journey.",
    solution:
      "A responsive commerce experience with a focused product catalogue and an integration-ready checkout foundation.",
    technologies: ["Next.js", "Tailwind CSS", "Stripe"],
  },
  {
    title: "Driver Behavior Monitoring",
    category: "AI system",
    image: "/img/portfolio/ai-driver.jpg",
    problem:
      "Road-safety teams need faster visibility into risky driver behavior and fatigue signals.",
    solution:
      "An AI monitoring concept using computer vision patterns and edge-processing considerations for real-time assessment.",
    technologies: ["TensorFlow", "Computer Vision", "Edge Computing"],
  },
  {
    title: "Foozana",
    category: "Mobile product",
    image: "/img/portfolio/foozana.jpg",
    problem:
      "Nutrition and wellness users need a simple mobile experience for diet-related workflows.",
    solution:
      "A mobile wellness application foundation focused on core nutrition interactions and a clean app structure.",
    technologies: ["Flutter", "Firebase", "Mobile"],
  },
  {
    title: "Solana Lottery Platform",
    category: "Blockchain product",
    image: "/img/portfolio/soltery.png",
    problem:
      "Lottery products need transparent rules, auditable participation, and automated prize logic.",
    solution:
      "A Web3 product concept using Solana program architecture and a React interface for decentralized participation flows.",
    technologies: ["Solana", "Rust", "React"],
  },
  {
    title: "TeraSalesAI",
    category: "AI automation",
    image: "/img/portfolio/terasalesai.jpg",
    problem:
      "Sales and operations teams often lose time to repetitive communication and manual analysis.",
    solution:
      "An AI-agent product direction for workflow automation, customer interaction support, and data-driven assistance.",
    technologies: ["Python", "NLP", "GPT Integration"],
  },
];

const thinkingTopics = [
  {
    title: "Architecture",
    text: "The system shape matters early. We look at data, integrations, permissions, performance, and ownership before committing to implementation details.",
  },
  {
    title: "Maintainability",
    text: "A useful product should remain understandable after launch. We prefer clear boundaries, reusable modules, and code that future teams can reason about.",
  },
  {
    title: "Scalability",
    text: "Scale is not only traffic. It includes more users, more workflows, more data, more roles, and more business expectations.",
  },
  {
    title: "User Experience",
    text: "The interface should make the product easier to operate. Product decisions are evaluated against real user tasks, not decoration.",
  },
  {
    title: "Security",
    text: "Security belongs in the architecture, not at the end. Authentication, authorization, data exposure, and operational risk are considered throughout delivery.",
  },
  {
    title: "Testing and Performance",
    text: "Testing protects the business from regressions. Performance keeps the product usable under real conditions.",
  },
];

const capabilities = [
  {
    title: "New product development",
    description:
      "From first product definition to launch-ready web, mobile, AI, or blockchain systems.",
    icon: Rocket,
  },
  {
    title: "Platform modernization",
    description:
      "Improving existing systems through better architecture, maintainability, and user experience.",
    icon: Layers3,
  },
  {
    title: "Internal business systems",
    description:
      "Operational tools, admin platforms, dashboards, and workflow systems built around how teams actually work.",
    icon: Building2,
  },
  {
    title: "AI integration",
    description:
      "Applied intelligence, assistants, automation, and machine-learning workflows connected to real product needs.",
    icon: Brain,
  },
  {
    title: "Blockchain products",
    description:
      "Smart-contract backed products, Web3 applications, and decentralized workflows where blockchain is justified.",
    icon: Boxes,
  },
  {
    title: "Mobile applications",
    description:
      "Focused iOS and Android product experiences for customers, operators, and field teams.",
    icon: Smartphone,
  },
  {
    title: "Business automation",
    description:
      "Software that reduces repetitive work, connects tools, and improves execution across teams.",
    icon: Workflow,
  },
];

const lifecycle = [
  "Discovery",
  "Planning",
  "Architecture",
  "Development",
  "Testing",
  "Deployment",
  "Continuous Improvement",
];

const faqs = [
  {
    question: "How do projects begin?",
    answer:
      "We begin with a focused conversation about the business goal, users, constraints, timeline, and technical risks before proposing a scope.",
  },
  {
    question: "Can NileBit Labs work with existing systems?",
    answer:
      "Yes. We can review an existing product, identify weak points, and plan improvements without forcing a full rebuild.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes. We work with early-stage teams when the product has a clear problem, a serious owner, and a realistic path to validation.",
  },
  {
    question: "Do you build MVPs?",
    answer:
      "Yes. We build MVPs when the scope is disciplined and the first version is designed to test the right assumptions.",
  },
  {
    question: "How do you estimate timelines?",
    answer:
      "Timelines depend on scope, complexity, integrations, content readiness, and decision speed. We estimate after discovery, not before understanding the work.",
  },
];

function WorkSystemVisual() {
  return (
    <div className="rounded-card border border-border bg-surface p-3 shadow-soft">
      <div className="rounded-card border border-border bg-background p-5">
        <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
          <div>
            <p className="text-eyebrow text-primary">Case study model</p>
            <p className="mt-2 text-heading-4 text-heading">
              Problem to product
            </p>
          </div>
          <Cpu className="h-5 w-5 text-primary" strokeWidth={1.75} />
        </div>
        <div className="mt-5 grid gap-3">
          {[
            { label: "Business need", icon: Database },
            { label: "System architecture", icon: Layers3 },
            { label: "Engineering delivery", icon: Code2 },
            { label: "Validation loop", icon: CheckCircle2 },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="grid grid-cols-[auto_1fr] items-center gap-4 rounded-card border border-border bg-surface px-4 py-3"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary-light text-primary">
                  <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-caption text-muted">0{index + 1}</p>
                  <p className="text-body-sm font-semibold text-heading">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function FeaturedCaseStudy() {
  return (
    <Card elevated className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <Badge tone="primary">{featuredCaseStudy.category}</Badge>
          <span className="text-caption text-muted">Featured case study</span>
        </div>
        <h2 className="mt-6 text-heading-2 text-heading">
          {featuredCaseStudy.title}
        </h2>
        <p className="mt-5 text-body-lg text-muted">
          {featuredCaseStudy.overview}
        </p>
        <dl className="mt-8 grid gap-6">
          {[
            ["Problem", featuredCaseStudy.problem],
            ["Challenge", featuredCaseStudy.challenge],
            ["Solution", featuredCaseStudy.solution],
            ["Architecture", featuredCaseStudy.architecture],
            ["Current Status", featuredCaseStudy.status],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="text-eyebrow text-primary">{label}</dt>
              <dd className="mt-2 text-body text-muted">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8">
          <p className="text-eyebrow text-primary">Technology</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {featuredCaseStudy.technologies.map((technology) => (
              <Tag key={technology}>{technology}</Tag>
            ))}
          </div>
        </div>
        <Link href={featuredCaseStudy.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-touch items-center justify-center gap-2 rounded-button border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-heading transition-colors hover:bg-surface-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
          Visit Live Site <ExternalLink className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
        </Link>
      </div>
      <div className="image-frame relative aspect-[16/11] overflow-hidden">
        <Image
          src={featuredCaseStudy.image}
          alt={featuredCaseStudy.imageAlt}
          fill
          sizes="(min-width: 1024px) 40rem, 100vw"
          className="object-cover"
          priority
        />
      </div>
    </Card>
  );
}

function CaseStudyCard({
  caseStudy,
}: {
  caseStudy: (typeof selectedCaseStudies)[number];
}) {
  return (
    <Card className="grid gap-6">
      <div className="image-frame relative aspect-[16/10] overflow-hidden">
        <Image
          src={caseStudy.image}
          alt={`${caseStudy.title} project preview`}
          fill
          sizes="(min-width: 1024px) 36rem, 100vw"
          className="object-cover"
        />
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <Badge tone="primary">{caseStudy.category}</Badge>
        </div>
        <h3 className="mt-5 text-heading-3 text-heading">{caseStudy.title}</h3>
        <dl className="mt-6 grid gap-5">
          <div>
            <dt className="text-eyebrow text-primary">Problem</dt>
            <dd className="mt-2 text-body text-muted">{caseStudy.problem}</dd>
          </div>
          <div>
            <dt className="text-eyebrow text-primary">Solution</dt>
            <dd className="mt-2 text-body text-muted">{caseStudy.solution}</dd>
          </div>
          <div>
            <dt className="text-eyebrow text-primary">Technology</dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {caseStudy.technologies.map((technology) => (
                <Tag key={technology}>{technology}</Tag>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </Card>
  );
}

export default function WorkPage() {
  return (
    <div className="bg-background text-body-color">
      <Section spacing="lg" className="min-h-screen">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="max-w-readable">
            <Badge tone="primary">Engineering case studies</Badge>
            <h1 className="mt-8 text-display-lg text-heading">
              Work shaped by the problem, not the technology trend.
            </h1>
            <p className="mt-7 text-body-lg text-muted">
              NileBit Labs approaches every engagement by understanding the
              business goal, users, constraints, and risks before choosing the
              technical path. The result is software designed to solve the right
              problem.
            </p>
            <div className="mt-9">
              <NileBotTrigger size="lg" />
            </div>
          </div>
          <WorkSystemVisual />
        </Container>
      </Section>

      <Section spacing="lg" className="bg-surface">
        <Container>
          <SectionHeader
            eyebrow="Featured case study"
            title="A closer look at product engineering in practice."
            description="A live institutional platform built for clear public information, structured publishing, and dependable access across devices."
          />
          <div className="mt-14">
            <FeaturedCaseStudy />
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <SectionHeader
            eyebrow="Selected work"
            title="Additional projects across software, AI, mobile, and blockchain."
            description="A focused selection of product and engineering work across different technical contexts."
          />
          <div className="mt-14 grid gap-grid lg:grid-cols-2">
            {selectedCaseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.title} caseStudy={caseStudy} />
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-surface">
        <Container size="content">
          <p className="text-eyebrow text-primary">Engineering thinking</p>
          <h2 className="mt-5 text-heading-2 text-heading">
            Strong products come from technical decisions that keep the business
            moving after launch.
          </h2>
          <div className="mt-8 space-y-6 text-body-lg text-muted">
            <p>
              NileBit Labs treats software engineering as product work. The goal
              is not to write code quickly and leave complexity behind. The goal
              is to shape a system that users can operate, teams can maintain,
              and the business can trust.
            </p>
            <p>
              That means architecture, maintainability, scalability, user
              experience, security, testing, and performance are not separate
              concerns. They are part of the same product decision.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {thinkingTopics.map((topic) => (
              <div key={topic.title}>
                <h3 className="text-heading-4 text-heading">{topic.title}</h3>
                <p className="mt-3 text-body text-muted">{topic.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <SectionHeader
            eyebrow="Delivery capabilities"
            title="Engagements built around business outcomes."
            description="The work changes by client, but the expectation stays the same: clear thinking, dependable engineering, and a product that can continue improving."
          />
          <div className="mt-14 grid gap-grid md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <Card key={capability.title} className="min-h-full">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden="true" />
                  <h3 className="mt-6 text-heading-4 text-heading">
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-body text-muted">
                    {capability.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-surface">
        <Container>
          <SectionHeader
            eyebrow="Development lifecycle"
            title="A structured path from ambiguity to improvement."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-7">
            {lifecycle.map((step, index) => (
              <div key={step} className="relative">
                <div className="rounded-card border border-border bg-background p-5">
                  <p className="text-caption text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-heading-4 text-heading">{step}</h3>
                </div>
                {index < lifecycle.length - 1 ? (
                  <div className="hidden lg:absolute lg:left-full lg:top-1/2 lg:block lg:h-px lg:w-5 lg:bg-border" />
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeader
              eyebrow="Project FAQs"
              title="Common questions before an engagement begins."
              description="Short answers for teams evaluating NileBit Labs as an engineering partner."
            />
            <div className="divide-y divide-border border-y border-border">
              {faqs.map((faq) => (
                <div key={faq.question} className="py-6">
                  <h3 className="text-heading-4 text-heading">{faq.question}</h3>
                  <p className="mt-3 text-body text-muted">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="md" className="bg-surface">
        <Container>
          <CTA
            title="Build something that lasts."
            description="Start with the business problem, then shape the engineering plan around it."
            action={
              <div className="flex flex-col gap-3 sm:flex-row"><NileBotTrigger /><Button href="/contact" variant="secondary">Contact Our Team<ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.75} aria-hidden="true" /></Button></div>
            }
          />
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex min-h-touch items-center text-body-sm font-medium text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Review NileBit Labs services
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
