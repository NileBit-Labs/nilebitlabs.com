import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Brain,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Lightbulb,
  Network,
  PenTool,
  Smartphone,
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
import { cn } from "@/lib/utils";
import NileBotTrigger from "@/components/nilebot/NileBotTrigger";

export const metadata: Metadata = {
  title: "Product Engineering and Emerging Technology",
  description:
    "NileBit Labs builds dependable web, mobile, AI, and blockchain systems for ambitious teams from Kampala, Uganda.",
  alternates: { canonical: "/" },
};

const proofItems = [
  "Full-Stack Engineering",
  "Artificial Intelligence",
  "Blockchain & Web3",
  "Global Delivery",
];

const primaryCapabilities = [
  {
    title: "Software Engineering",
    description:
      "Production-ready web platforms, internal systems, APIs, and full-stack products built around business constraints.",
    icon: Code2,
  },
  {
    title: "Artificial Intelligence",
    description:
      "Machine learning workflows, applied AI features, automation systems, and intelligent product experiences.",
    icon: Brain,
  },
  {
    title: "Blockchain",
    description:
      "Smart-contract systems, Web3 applications, decentralized product experiences, and blockchain integrations.",
    icon: Blocks,
  },
];

const supportingCapabilities = [
  { title: "Mobile Development", icon: Smartphone },
  { title: "Cloud", icon: Cloud },
  { title: "UI/UX", icon: PenTool },
  { title: "Consulting", icon: Lightbulb },
];

const selectedWork = [
  {
    title: "SK Computer Store",
    category: "Commerce platform",
    image: "/img/portfolio/skcomputerstore.png",
    challenge:
      "A computer hardware business needed a modern storefront with product discovery and payments.",
    solution:
      "Built a responsive commerce experience with a focused product catalogue and checkout foundation.",
    technologies: ["Next.js", "Tailwind CSS", "Stripe"],
    status: "Live product work",
    featured: true,
  },
  {
    title: "Driver Behavior Monitoring",
    category: "AI system",
    image: "/img/portfolio/ai-driver.jpg",
    challenge:
      "Road-safety workflows need faster visibility into risky driver behavior.",
    solution:
      "Designed an AI monitoring concept using computer vision and edge-processing patterns.",
    technologies: ["TensorFlow", "Computer Vision", "Edge Computing"],
    status: "AI project",
  },
  {
    title: "Foozana",
    category: "Mobile product",
    image: "/img/portfolio/foozana.jpg",
    challenge:
      "Nutrition and wellness users need a simple mobile product experience.",
    solution:
      "Created a mobile wellness application foundation focused on diet and nutrition workflows.",
    technologies: ["Flutter", "Firebase", "Mobile"],
    status: "Mobile app",
  },
];

const workSteps = [
  "Discover",
  "Architect",
  "Build",
  "Validate",
  "Launch",
  "Improve",
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "TensorFlow",
  "Solana",
  "Rust",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Tailwind CSS",
];

const problems = [
  "Digital transformation",
  "Operational efficiency",
  "Customer experiences",
  "Intelligent automation",
  "Decentralized products",
];

const leaders = [
  {
    name: "Douglas Bagambe",
    role: "CEO & Co-Founder",
    image: "/img/team/douglas.jpg",
  },
  {
    name: "Elioda Muhangi",
    role: "CTO & Co-Founder",
    image: "/img/team/elioda.jpg",
  },
  {
    name: "Collins Shema",
    role: "COO & Co-Founder",
    image: "/img/team/shema.jpg",
  },
];

const insights = [
  {
    title: "AI and Machine Learning Trends to Watch in 2025",
    category: "AI & ML",
    href: "/insights/applied-ai-product-decisions",
  },
  {
    title: "Modern Software Development: Best Practices for 2025",
    category: "Software Development",
    href: "/insights/modern-software-development-principles",
  },
  {
    title: "The Future of Web3: Decentralized Apps and Beyond",
    category: "Web3",
    href: "/insights/blockchain-product-fit",
  },
];

function ProductSystemMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="rounded-card border border-border bg-surface p-3 shadow-soft">
        <div className="rounded-card border border-border bg-background">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-error" />
            <span className="h-2.5 w-2.5 rounded-full bg-warning" />
            <span className="h-2.5 w-2.5 rounded-full bg-success" />
            <span className="ml-3 text-caption text-muted">
              NileBit delivery system
            </span>
          </div>
          <div className="grid gap-4 p-4 md:grid-cols-2">
            <div className="space-y-3">
              {["Discovery", "Architecture", "Build", "Launch"].map(
                (item, index) => (
                  <div
                    key={item}
                    className={cn(
                      "rounded-card border border-border p-3",
                      index === 1 ? "bg-primary-light" : "bg-surface"
                    )}
                  >
                    <p className="text-caption text-muted">Phase 0{index + 1}</p>
                    <p className="mt-1 text-body-sm font-semibold text-heading">
                      {item}
                    </p>
                  </div>
                )
              )}
            </div>
            <div className="rounded-card border border-border bg-surface-elevated p-4">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-eyebrow text-primary">System map</p>
                  <p className="mt-2 text-heading-4 text-heading">
                    Product architecture
                  </p>
                </div>
                <Cpu className="h-5 w-5 text-primary" strokeWidth={1.75} />
              </div>
              <div className="space-y-3">
                <div className="h-3 w-3/4 rounded-pill bg-heading" />
                <div className="h-3 w-1/2 rounded-pill bg-muted" />
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {["Web", "AI", "Cloud", "Data"].map((item) => (
                    <div
                      key={item}
                      className="rounded-card border border-border bg-background p-4 text-center text-body-sm font-medium text-heading"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-card border border-primary/30 bg-primary-light p-4">
                  <p className="text-caption text-primary">Delivery note</p>
                  <p className="mt-2 text-body-sm text-heading">
                    Business context before technical implementation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkCard({
  project,
}: {
  project: (typeof selectedWork)[number];
}) {
  return (
    <Card
      elevated={project.featured}
      className={cn(
        "grid gap-6",
        project.featured && "lg:grid-cols-2 lg:items-center"
      )}
    >
      <div
        className={cn(
          "image-frame relative aspect-[16/10]",
          !project.featured && "aspect-[4/3]"
        )}
      >
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes={project.featured ? "(min-width: 1024px) 38rem, 100vw" : "(min-width: 1024px) 24rem, 100vw"}
          className="object-cover"
        />
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <Badge tone="primary">{project.category}</Badge>
          <span className="text-caption text-muted">{project.status}</span>
        </div>
        <h3 className="mt-5 text-heading-3 text-heading">{project.title}</h3>
        <dl className="mt-6 space-y-4">
          <div>
            <dt className="text-eyebrow text-primary">Challenge</dt>
            <dd className="mt-2 text-body text-muted">{project.challenge}</dd>
          </div>
          <div>
            <dt className="text-eyebrow text-primary">Solution</dt>
            <dd className="mt-2 text-body text-muted">{project.solution}</dd>
          </div>
        </dl>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <Tag key={technology}>{technology}</Tag>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default function Home() {
  return (
    <div className="bg-background text-body-color">
      <Section spacing="lg" className="min-h-screen">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="max-w-readable">
            <Badge tone="primary">Product engineering company</Badge>
            <h1 className="mt-8 text-display-lg text-heading">
              Engineering software that moves businesses forward.
            </h1>
            <p className="mt-7 text-body-lg text-muted">
              NileBit Labs is a product engineering and emerging technology
              company building dependable web, mobile, AI, and blockchain
              systems for ambitious teams.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <NileBotTrigger size="lg" />
              <Button href="/work" variant="secondary" size="lg">
                View Selected Work
              </Button>
            </div>
            <p className="mt-7 text-body-sm text-muted">
              Based in Kampala, Uganda. Delivering globally.
            </p>
          </div>
          <ProductSystemMockup />
        </Container>
      </Section>

      <Section spacing="sm" className="border-y border-border bg-surface">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {proofItems.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2
                  className="h-4 w-4 text-primary"
                  strokeWidth={1.75}
                />
                <p className="text-body-sm font-medium text-heading">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <SectionHeader
            eyebrow="Our expertise"
            title="Focused capability for serious product work."
            description="We combine core software engineering with applied intelligence and emerging technology where it creates a real product advantage."
          />
          <div className="mt-14 grid gap-grid lg:grid-cols-3">
            {primaryCapabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <Card key={capability.title} className="min-h-full">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                  <h3 className="mt-7 text-heading-3 text-heading">
                    {capability.title}
                  </h3>
                  <p className="mt-4 text-body text-muted">
                    {capability.description}
                  </p>
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
                  className="flex min-h-touch items-center gap-3 rounded-card border border-border px-4"
                >
                  <Icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
                  <span className="text-body-sm font-medium text-heading">
                    {capability.title}
                  </span>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-surface">
        <Container>
          <SectionHeader
            eyebrow="Selected work"
            title="Examples of systems, products, and technical direction."
            description="A focused view of project work using existing NileBit Labs assets. Outcomes should be expanded as case studies become documented."
          />
          <div className="mt-14 space-y-grid">
            <WorkCard project={selectedWork[0]} />
            <div className="grid gap-grid lg:grid-cols-2">
              {selectedWork.slice(1).map((project) => (
                <WorkCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container size="content">
          <p className="text-eyebrow text-primary">Our approach</p>
          <h2 className="mt-5 text-heading-2 text-heading">
            Great software starts with understanding the business before writing
            code.
          </h2>
          <div className="mt-8 space-y-6 text-body-lg text-muted">
            <p>
              NileBit Labs works from the problem backward. We clarify the
              business goal, the operational constraints, the users, and the
              technical risks before committing to a solution.
            </p>
            <p>
              That discipline keeps products useful, teams aligned, and
              technology decisions grounded in what the product actually needs.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-surface">
        <Container>
          <SectionHeader
            eyebrow="How we work"
            title="A clear path from first conversation to shipped product."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-6">
            {workSteps.map((step, index) => (
              <div key={step} className="relative">
                <div className="rounded-card border border-border bg-background p-5">
                  <p className="text-caption text-muted">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-heading-4 text-heading">{step}</h3>
                </div>
                {index < workSteps.length - 1 ? (
                  <div className="hidden lg:absolute lg:left-full lg:top-1/2 lg:block lg:h-px lg:w-6 lg:bg-border" />
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeader
            eyebrow="Technology philosophy"
            title="We choose technologies based on product requirements, not trends."
            description="The stack should serve the product: performance, maintainability, security, team velocity, and long-term cost."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {technologies.map((technology) => (
              <div
                key={technology}
                className="rounded-card border border-border bg-surface px-4 py-3 text-body-sm font-medium text-heading"
              >
                {technology}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-surface">
        <Container>
          <SectionHeader
            eyebrow="Problems we solve"
            title="Business problems first. Technology second."
          />
          <div className="mt-12 grid gap-grid md:grid-cols-2 lg:grid-cols-5">
            {problems.map((problem) => (
              <Card key={problem} className="min-h-full">
                <Network
                  className="h-4 w-4 text-primary"
                  strokeWidth={1.75}
                />
                <h3 className="mt-5 text-heading-4 text-heading">{problem}</h3>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="md">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-eyebrow text-primary">Leadership</p>
              <h2 className="mt-5 text-heading-2 text-heading">
                Founder-led, delivery-focused.
              </h2>
              <p className="mt-6 text-body-lg text-muted">
                NileBit Labs is led by a founding team responsible for product,
                technology, and operations.
              </p>
              <Button href="/about" variant="secondary" className="mt-8">
                Meet the Team
              </Button>
            </div>
            <div className="grid gap-grid sm:grid-cols-3">
              {leaders.map((leader) => (
                <Card key={leader.name}>
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={96}
                    height={96}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                  <h3 className="mt-5 text-heading-4 text-heading">
                    {leader.name}
                  </h3>
                  <p className="mt-2 text-body-sm text-muted">{leader.role}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <SectionHeader
              eyebrow="Insights"
              title="Technical thinking from the team."
              description="A lean editorial layer for ideas around product engineering, AI, software systems, and emerging technology."
            />
            <div className="space-y-4">
              {insights.map((insight) => (
                <Link
                  key={insight.href}
                  href={insight.href}
                  className="group block rounded-card border border-border bg-background p-5 transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <p className="text-caption text-primary">
                    {insight.category}
                  </p>
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <h3 className="text-heading-4 text-heading">
                      {insight.title}
                    </h3>
                    <ArrowRight
                      className="mt-1 h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-primary"
                      strokeWidth={1.75}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="md">
        <Container>
          <CTA
            title="Have something in mind?"
            description="Tell NileBot what you’re building. It can help structure your requirements and prepare the conversation with our team."
            action={<div className="flex flex-col gap-3 sm:flex-row"><NileBotTrigger /><Button href="/contact" variant="secondary">Contact Our Team</Button></div>}
          />
        </Container>
      </Section>
    </div>
  );
}
