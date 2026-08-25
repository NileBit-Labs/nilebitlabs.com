import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Brain,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  LayoutDashboard,
  Lightbulb,
  MessageSquare,
  Network,
  PenTool,
  PanelTop,
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

export const metadata: Metadata = createPageMetadata("Services", "Software engineering, AI, blockchain, mobile, cloud, UI/UX, and technology consulting services from NileBit Labs in Kampala, Uganda.", "/services");

const expertisePillars = [
  {
    title: "Software Engineering",
    summary:
      "Full-stack product engineering for web platforms, business systems, APIs, and custom software.",
    solves:
      "Helps teams replace manual workflows, launch new digital products, modernize platforms, and improve reliability.",
    receives:
      "Clients receive production-ready interfaces, backends, integrations, documentation, and launch support.",
    icon: Code2,
  },
  {
    title: "Artificial Intelligence",
    summary:
      "Applied AI and machine learning for automation, prediction, workflow assistance, and intelligent product features.",
    solves:
      "Helps businesses reduce repetitive work, extract meaning from data, and create smarter customer or internal tools.",
    receives:
      "Clients receive AI feature planning, model or API integration, workflow design, evaluation, and deployment guidance.",
    icon: Brain,
  },
  {
    title: "Blockchain & Web3",
    summary:
      "Decentralized product engineering for smart contracts, Web3 applications, wallets, and blockchain integrations.",
    solves:
      "Helps teams build transparent, programmable, asset-based, or community-owned digital products.",
    receives:
      "Clients receive product architecture, smart-contract implementation, frontend integration, and testnet-to-launch support.",
    icon: Blocks,
  },
];

const supportingCapabilities = [
  {
    title: "Mobile Development",
    description: "Cross-platform mobile products for customer and operational workflows.",
    icon: Smartphone,
  },
  {
    title: "Cloud Infrastructure",
    description: "Deployment, hosting, automation, and infrastructure planning for reliable products.",
    icon: Cloud,
  },
  {
    title: "UI/UX Design",
    description: "User flows, interfaces, and product experiences shaped around clarity and adoption.",
    icon: PenTool,
  },
  {
    title: "Technology Consulting",
    description: "Technical direction, product scoping, architecture review, and implementation planning.",
    icon: Lightbulb,
  },
];

const productCategories = [
  {
    title: "Business Platforms",
    description: "Custom systems that support operations, teams, reporting, and business workflows.",
    icon: LayoutDashboard,
  },
  {
    title: "Customer Portals",
    description: "Secure customer-facing products for account access, service delivery, and self-service.",
    icon: PanelTop,
  },
  {
    title: "Internal Systems",
    description: "Tools for staff, operations, approvals, inventory, sales, support, and administration.",
    icon: Workflow,
  },
  {
    title: "Mobile Applications",
    description: "Mobile products for customers, field teams, founders, communities, and service delivery.",
    icon: Smartphone,
  },
  {
    title: "AI Assistants",
    description: "Assistive workflows for support, research, data entry, operations, and product experiences.",
    icon: MessageSquare,
  },
  {
    title: "Automation",
    description: "Process automation that connects tools, reduces repetitive work, and improves execution.",
    icon: Cpu,
  },
  {
    title: "Web3 Products",
    description: "Wallet-connected apps, token-enabled systems, decentralized workflows, and blockchain UX.",
    icon: Blocks,
  },
  {
    title: "Custom Platforms",
    description: "Purpose-built software where off-the-shelf tools cannot support the business model.",
    icon: Network,
  },
];

const processSteps = [
  {
    title: "Discover",
    description: "Clarify the business goal, users, constraints, risks, and success criteria.",
  },
  {
    title: "Plan",
    description: "Define scope, milestones, responsibilities, and the delivery path.",
  },
  {
    title: "Design",
    description: "Shape user flows, system structure, interfaces, and key product decisions.",
  },
  {
    title: "Build",
    description: "Engineer the product in focused increments with regular review.",
  },
  {
    title: "Test",
    description: "Validate behavior, edge cases, performance, accessibility, and release readiness.",
  },
  {
    title: "Launch",
    description: "Deploy, monitor, hand over, and support the first real users.",
  },
  {
    title: "Support",
    description: "Improve the product as requirements, usage, and business needs evolve.",
  },
];

const technologyGroups = [
  {
    title: "Product Interfaces",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Application Systems",
    items: ["Node.js", "Python", "PostgreSQL", "APIs"],
  },
  {
    title: "Intelligence",
    items: ["TensorFlow", "Computer Vision", "NLP", "Automation"],
  },
  {
    title: "Distributed Products",
    items: ["Solana", "Rust", "Smart Contracts", "Wallet UX"],
  },
  {
    title: "Infrastructure",
    items: ["AWS", "Docker", "CI/CD", "Monitoring"],
  },
];

const faqs = [
  {
    question: "What kind of projects is NileBit Labs best suited for?",
    answer:
      "We are best suited for teams that need custom software, product engineering, AI-enabled workflows, blockchain products, or technical direction before building.",
  },
  {
    question: "Can you work from an early idea?",
    answer:
      "Yes. We can help clarify the product, define scope, choose an architecture, and turn the idea into a buildable plan before implementation starts.",
  },
  {
    question: "Do you work with existing systems?",
    answer:
      "Yes. We can improve, integrate, rebuild, or extend existing applications when the codebase and business context are available.",
  },
  {
    question: "Do you provide design as part of development?",
    answer:
      "Yes. UI/UX is part of how we shape products. For larger projects, design can become a dedicated workstream before engineering begins.",
  },
  {
    question: "How do engagements usually start?",
    answer:
      "They start with a conversation about the business goal, expected users, current constraints, timeline, and the kind of technical help required.",
  },
];

function ServicesSystemVisual() {
  return (
    <div className="rounded-card border border-border bg-surface p-4 shadow-soft">
      <div className="rounded-card border border-border bg-background p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-eyebrow text-primary">Capability map</p>
            <h2 className="mt-3 text-heading-4 text-heading">
              From business problem to shipped system
            </h2>
          </div>
          <CheckCircle2 className="h-5 w-5 text-primary" strokeWidth={1.75} />
        </div>
        <div className="mt-8 grid gap-3">
          {["Problem", "Architecture", "Product", "Launch"].map(
            (item, index) => (
              <div
                key={item}
                className="grid grid-cols-[auto_1fr] items-center gap-4 rounded-card border border-border bg-surface p-4"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-pill bg-primary-light text-caption font-semibold text-primary">
                  0{index + 1}
                </span>
                <div>
                  <p className="text-body-sm font-semibold text-heading">
                    {item}
                  </p>
                  <div className="mt-2 h-2 w-full rounded-pill bg-border" />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-background text-body-color">
      <Section spacing="lg">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="max-w-readable">
            <Badge tone="primary">Services</Badge>
            <h1 className="mt-8 text-display-lg text-heading">
              Engineering capability for products that need to work.
            </h1>
            <p className="mt-7 text-body-lg text-muted">
              NileBit Labs builds web platforms, mobile products, AI workflows,
              and blockchain systems for teams that need dependable software
              shaped around real business goals.
            </p>
            <div className="mt-9">
              <NileBotTrigger size="lg" />
            </div>
          </div>
          <ServicesSystemVisual />
        </Container>
      </Section>

      <Section spacing="lg" className="bg-surface">
        <Container>
          <SectionHeader
            eyebrow="Our expertise"
            title="Three core pillars. One product engineering mindset."
            description="Every engagement starts with the problem and moves toward the simplest dependable system that can support the business."
          />
          <div className="mt-14 grid gap-grid lg:grid-cols-3">
            {expertisePillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <Card key={pillar.title} className="min-h-full">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                  <h2 className="mt-7 text-heading-3 text-heading">
                    {pillar.title}
                  </h2>
                  <div className="mt-6 space-y-5">
                    <div>
                      <p className="text-eyebrow text-primary">What it is</p>
                      <p className="mt-2 text-body text-muted">
                        {pillar.summary}
                      </p>
                    </div>
                    <div>
                      <p className="text-eyebrow text-primary">Problems solved</p>
                      <p className="mt-2 text-body text-muted">
                        {pillar.solves}
                      </p>
                    </div>
                    <div>
                      <p className="text-eyebrow text-primary">What you receive</p>
                      <p className="mt-2 text-body text-muted">
                        {pillar.receives}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {supportingCapabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <div
                  key={capability.title}
                  className="rounded-card border border-border bg-background p-5"
                >
                  <Icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
                  <h3 className="mt-5 text-heading-4 text-heading">
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-body-sm text-muted">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <SectionHeader
            eyebrow="What we build"
            title="Products and systems, not generic service packages."
            description="The output depends on the business problem. These are the common forms our work takes."
          />
          <div className="mt-14 grid gap-grid md:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((category) => {
              const Icon = category.icon;

              return (
                <Card key={category.title} className="min-h-full">
                  <Icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
                  <h2 className="mt-5 text-heading-4 text-heading">
                    {category.title}
                  </h2>
                  <p className="mt-3 text-body-sm text-muted">
                    {category.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-surface">
        <Container size="content">
          <p className="text-eyebrow text-primary">Engineering principles</p>
          <h2 className="mt-5 text-heading-2 text-heading">
            We build for the product you need now and the system you will need
            later.
          </h2>
          <div className="mt-8 space-y-6 text-body-lg text-muted">
            <p>
              Understanding comes before implementation. We need to know the
              business model, users, constraints, risks, and operating context
              before choosing a stack or writing code.
            </p>
            <p>
              Architecture matters because software becomes expensive when it is
              hard to change. We care about maintainability, performance,
              security, and clear ownership from the start.
            </p>
            <p>
              Long-term thinking does not mean slow delivery. It means building
              the smallest reliable version of the right system, then improving
              it with evidence.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <SectionHeader
            eyebrow="Delivery process"
            title="A modern delivery path with clear decisions at every stage."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-7">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="h-full rounded-card border border-border bg-surface p-5">
                  <p className="text-caption text-muted">0{index + 1}</p>
                  <h2 className="mt-4 text-heading-4 text-heading">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-body-sm text-muted">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 ? (
                  <div className="hidden lg:absolute lg:left-full lg:top-8 lg:block lg:h-px lg:w-5 lg:bg-border" />
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-surface">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeader
            eyebrow="Technology philosophy"
            title="We choose technologies based on product requirements, not trends."
            description="The stack should make the product easier to ship, maintain, scale, and improve. Tools are grouped by what they help us deliver."
          />
          <div className="space-y-4">
            {technologyGroups.map((group) => (
              <Card key={group.title}>
                <h2 className="text-heading-4 text-heading">{group.title}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <SectionHeader
            eyebrow="FAQs"
            title="Questions clients usually ask before we start."
          />
          <div className="mt-12 divide-y divide-border border-y border-border">
            {faqs.map((faq) => (
              <div key={faq.question} className="grid gap-4 py-7 lg:grid-cols-2">
                <h2 className="text-heading-4 text-heading">{faq.question}</h2>
                <p className="text-body text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="md" className="bg-surface">
        <Container>
          <CTA
            title="Need a product, platform, or technical plan?"
            description="Start with a conversation about the business problem, expected users, timeline, and technical risk."
            action={<div className="flex flex-col gap-3 sm:flex-row"><NileBotTrigger /><Button href="/contact" variant="secondary">Contact Our Team</Button></div>}
          />
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-body-sm font-medium text-muted transition-colors hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Back to homepage
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
