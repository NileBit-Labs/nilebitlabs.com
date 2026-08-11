import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Brain,
  CheckCircle2,
  Code2,
  Compass,
  Globe2,
  MapPin,
  Rocket,
} from "lucide-react";
import {
  Badge,
  Button,
  Card,
  Container,
  CTA,
  Section,
  SectionHeader,
} from "@/components/ui/design-system";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about NileBit Labs, a product engineering and emerging technology company based in Kampala, Uganda.",
  alternates: { canonical: "/about" },
};

const purposeStatements = [
  {
    title: "Our Mandate",
    description:
      "We are responsible for helping clients turn important operational, product, and technology problems into reliable software systems they can use and improve.",
  },
  {
    title: "Our Mission",
    description:
      "We create value by combining product thinking, clear engineering execution, and practical technology choices across software, mobile, AI, blockchain, cloud, design, and consulting.",
  },
  {
    title: "Our Vision",
    description:
      "We are building NileBit Labs into a durable technology company trusted for serious engineering work, meaningful products, and credible execution across African and global markets.",
  },
];

const principles = [
  {
    title: "Understand before building",
    description:
      "We start with the business problem, users, constraints, and risks before making technical decisions.",
  },
  {
    title: "Technology must serve the product",
    description:
      "We use software, AI, blockchain, cloud, and mobile technologies only where they make the product stronger.",
  },
  {
    title: "Quality is a long-term decision",
    description:
      "Architecture, maintainability, testing, and performance determine whether a product keeps creating value after launch.",
  },
  {
    title: "Clear communication builds trust",
    description:
      "Clients should understand what is being built, why it matters, what tradeoffs exist, and what happens next.",
  },
  {
    title: "Simplicity improves systems",
    description:
      "We avoid unnecessary complexity because simpler systems are easier to use, operate, secure, and extend.",
  },
  {
    title: "Every product should evolve",
    description:
      "Good products are built with change in mind, so future features and requirements do not require starting again.",
  },
];

const operatingModel = [
  "Discovery before development",
  "Clear project planning",
  "Collaborative communication",
  "Iterative delivery",
  "Engineering quality",
  "Testing and validation",
  "Post-launch improvement",
];

const leaders = [
  {
    name: "Douglas Bagambe",
    role: "CEO & Co-Founder",
    image: "/img/team/douglas.jpg",
    focus:
      "Company strategy, business development, partnerships, technical leadership, and blockchain/software engineering.",
  },
  {
    name: "Elioda Muhangi",
    role: "CTO & Co-Founder",
    image: "/img/team/elioda.jpg",
    focus:
      "Technology strategy, system architecture, research, artificial intelligence, machine learning, and engineering quality.",
  },
  {
    name: "Collins Shema",
    role: "COO & Co-Founder",
    image: "/img/team/shema.jpg",
    focus:
      "Operations, project coordination, delivery processes, client experience, and quality assurance.",
  },
];

const futureDirections = [
  "A durable product engineering company",
  "A trusted technical partner",
  "Stronger internal engineering capability",
  "Meaningful proprietary products",
  "Partnerships across industries and markets",
  "Continuous investment in AI, blockchain, software, and product development",
];

function CompanySignalVisual() {
  return (
    <div className="rounded-card border border-border bg-surface p-4 shadow-soft">
      <div className="rounded-card border border-border bg-background p-5">
        <div className="flex items-start justify-between gap-4 border-b border-border pb-5">
          <div>
            <p className="text-eyebrow text-primary">NileBit Labs</p>
            <h2 className="mt-3 text-heading-4 text-heading">
              Kampala base. Global delivery standard.
            </h2>
          </div>
          <MapPin className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden="true" />
        </div>
        <div className="mt-6 grid gap-3">
          {[
            { label: "Product thinking", icon: Compass },
            { label: "Software engineering", icon: Code2 },
            { label: "Applied intelligence", icon: Brain },
            { label: "Emerging technology", icon: Blocks },
            { label: "Global collaboration", icon: Globe2 },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex min-h-touch items-center gap-4 rounded-card border border-border bg-surface px-4"
              >
                <Icon className="h-4 w-4 text-primary" strokeWidth={1.75} aria-hidden="true" />
                <span className="text-body-sm font-semibold text-heading">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function FounderCard({ leader }: { leader: (typeof leaders)[number] }) {
  return (
    <Card className="min-h-full">
      <div className="flex items-start gap-5">
        <Image
          src={leader.image}
          alt={`${leader.name}, ${leader.role} at NileBit Labs`}
          width={96}
          height={96}
          className="h-20 w-20 shrink-0 rounded-full object-cover"
        />
        <div>
          <h3 className="text-heading-4 text-heading">{leader.name}</h3>
          <p className="mt-1 text-body-sm font-medium text-primary">
            {leader.role}
          </p>
        </div>
      </div>
      <p className="mt-6 text-body text-muted">{leader.focus}</p>
    </Card>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-background text-body-color">
      <Section spacing="lg">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="max-w-readable">
            <Badge tone="primary">About NileBit Labs</Badge>
            <h1 className="mt-8 text-display-lg text-heading">
              Technology should solve real problems.
            </h1>
            <p className="mt-7 text-body-lg text-muted">
              NileBit Labs is a product engineering and emerging technology
              company based in Kampala, Uganda. We build reliable software,
              mobile products, AI systems, blockchain applications, cloud
              foundations, and user experiences for clients locally and
              globally.
            </p>
            <p className="mt-7 text-body-sm text-muted">
              Based in Kampala, Uganda. Serving clients locally and globally.
            </p>
            <div className="mt-9">
              <Button href="/contact" size="lg">
                Discuss Your Project
              </Button>
            </div>
          </div>
          <CompanySignalVisual />
        </Container>
      </Section>

      <Section spacing="lg" className="bg-surface">
        <Container size="content">
          <p className="text-eyebrow text-primary">Our story</p>
          <h2 className="mt-5 text-heading-2 text-heading">
            We exist because useful technology requires more than writing code.
          </h2>
          <div className="mt-8 space-y-6 text-body-lg text-muted">
            <p>
              We have seen how difficult it can be for businesses to turn ideas
              into dependable products. A feature list can look clear at the
              beginning, but real software has to account for users, operations,
              data, security, performance, and change.
            </p>
            <p>
              NileBit Labs combines product thinking with engineering execution.
              We work across conventional software and emerging technologies
              because clients need practical systems, not technology for its own
              sake.
            </p>
            <p>
              Our goal is to build products that remain useful, maintainable,
              and scalable after launch. That requires understanding the problem
              deeply, choosing the right architecture, and communicating clearly
              throughout the work.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <SectionHeader
            eyebrow="Our purpose"
            title="The responsibility behind the company we are building."
            description="Our mandate, mission, and vision define what we deliver now and the long-term standard we are working toward."
          />
          <div className="mt-14 grid gap-grid lg:grid-cols-3">
            {purposeStatements.map((statement) => (
              <Card key={statement.title} className="min-h-full">
                <h3 className="text-heading-3 text-heading">
                  {statement.title}
                </h3>
                <p className="mt-5 text-body text-muted">
                  {statement.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-surface">
        <Container>
          <SectionHeader
            eyebrow="What we believe"
            title="Principles that shape how we work."
            description="These beliefs keep our work grounded when a product becomes complex."
          />
          <div className="mt-14 divide-y divide-border border-y border-border">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="grid gap-4 py-7 md:grid-cols-[0.45fr_0.55fr]"
              >
                <h3 className="text-heading-4 text-heading">
                  {principle.title}
                </h3>
                <p className="text-body text-muted">{principle.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-eyebrow text-primary">How we operate</p>
            <h2 className="mt-5 text-heading-2 text-heading">
              Founder-led standards, structured delivery, and room to adapt.
            </h2>
            <div className="mt-8 space-y-6 text-body-lg text-muted">
              <p>
                We begin by understanding the project context before development
                starts. That gives the work a stronger plan, clearer priorities,
                and a better technical foundation.
              </p>
              <p>
                Our operating model is collaborative and iterative. We plan the
                work, communicate decisions, deliver in focused increments,
                validate what has been built, and continue improving after
                launch.
              </p>
            </div>
          </div>
          <div className="grid gap-3">
            {operatingModel.map((item) => (
              <div
                key={item}
                className="flex min-h-touch items-center gap-4 rounded-card border border-border bg-surface px-4"
              >
                <CheckCircle2 className="h-4 w-4 text-primary" strokeWidth={1.75} aria-hidden="true" />
                <span className="text-body-sm font-semibold text-heading">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-surface">
        <Container>
          <SectionHeader
            eyebrow="Leadership"
            title="A balanced founding team across strategy, technology, and delivery."
            description="NileBit Labs is led by founders responsible for company direction, engineering standards, operations, and client experience."
          />
          <div className="mt-14 grid gap-grid lg:grid-cols-3">
            {leaders.map((leader) => (
              <FounderCard key={leader.name} leader={leader} />
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container size="content">
          <p className="text-eyebrow text-primary">Kampala roots, global outlook</p>
          <h2 className="mt-5 text-heading-2 text-heading">
            We do not need to hide where we are from to build for serious
            clients.
          </h2>
          <div className="mt-8 space-y-6 text-body-lg text-muted">
            <p>
              NileBit Labs is based in Kampala, Uganda. That location gives us
              perspective, ambition, and direct access to growing technology
              markets with real problems to solve.
            </p>
            <p>
              Our delivery model is designed for clients anywhere. We combine
              local understanding with international-quality execution, clear
              communication, and engineering standards that do not depend on
              geography.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="lg" className="bg-surface">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Badge tone="primary">Long-term direction</Badge>
            <h2 className="mt-6 text-heading-2 text-heading">
              The company we are building is bigger than one project.
            </h2>
            <p className="mt-6 text-body-lg text-muted">
              We are building NileBit Labs into a technical partner known for
              durable software, strong internal capability, useful proprietary
              products, and serious work across industries and markets.
            </p>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {futureDirections.map((direction) => (
              <div key={direction} className="flex gap-4 py-5">
                <Rocket className="mt-1 h-4 w-4 shrink-0 text-primary" strokeWidth={1.75} aria-hidden="true" />
                <p className="text-body font-medium text-heading">
                  {direction}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="md">
        <Container>
          <CTA
            title="Build with a team that thinks beyond launch."
            description="Every serious project starts with understanding the problem, the users, the risks, and the system that needs to exist."
            action={
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/contact">
                  Discuss Your Project
                </Button>
                <Button href="/work" variant="secondary">
                  Explore Our Work
                  <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </Button>
              </div>
            }
          />
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex min-h-touch items-center text-body-sm font-medium text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Review our capabilities
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
