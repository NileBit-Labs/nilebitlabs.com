import type { Metadata } from "next";
import { Button, Card, Container, CTA, Section, SectionHeader } from "@/components/ui/design-system";
import NileBotTrigger from "@/components/nilebot/NileBotTrigger";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("Frequently Asked Questions", "Answers about working with NileBit Labs on software engineering, mobile, applied AI, blockchain, project delivery, and ongoing product support.", "/faq");

const questions = [
  ["What does NileBit Labs build?", "We design and engineer web platforms, custom software, mobile applications, applied AI capabilities, and blockchain products. We also support projects with cloud infrastructure, UI/UX design, and technical consulting."],
  ["How do projects begin?", "We begin with a conversation about the business goal, users, constraints, current systems, and known risks. From there, we recommend a practical discovery or implementation path."],
  ["Do you work with startups?", "Yes. We work with founders and growing teams when there is a clear problem to solve and a realistic commitment to shaping, building, and improving the product."],
  ["Can you work with existing systems?", "Yes. We can assess an existing codebase, integration, or workflow and recommend whether to extend, modernize, or replace specific parts. Access and technical quality affect what is practical."],
  ["Do you build MVPs?", "Yes. We treat an MVP as the smallest complete product that can test an important assumption. We reduce scope while preserving the foundations needed for safe operation and useful learning."],
  ["How are timelines estimated?", "Timelines depend on scope, technical uncertainty, integrations, content readiness, and feedback speed. We estimate after understanding the work and communicate assumptions rather than promising a generic delivery window."],
  ["What happens after launch?", "Post-launch work can include monitoring, issue resolution, product improvements, new capabilities, and technical handover. The appropriate arrangement is agreed for each engagement."],
  ["Do you work with international clients?", "Yes. NileBit Labs is based in Kampala, Uganda, and can collaborate remotely with clients in other markets using clear milestones, documentation, and regular communication."],
  ["How can I contact NileBit Labs?", "Use the project inquiry form or email info@nilebitlabs.com. You can also call the primary company number during East Africa business hours."],
] as const;

export default function FaqPage() {
  return <div>
    <Section spacing="lg"><Container><div className="max-w-4xl"><p className="text-eyebrow text-primary">FAQ</p><h1 className="mt-8 text-display-lg text-heading">Useful answers before we begin.</h1><p className="mt-7 max-w-readable text-body-lg text-muted">A straightforward overview of how NileBit Labs approaches product and engineering engagements.</p></div></Container></Section>
    <Section tone="surface" spacing="lg"><Container><SectionHeader eyebrow="Working together" title="Common questions, answered clearly." /><div className="mt-10 grid gap-grid lg:grid-cols-2">{questions.map(([question, answer]) => <Card key={question}><h2 className="text-heading-4 text-heading">{question}</h2><p className="mt-4 text-body text-muted">{answer}</p></Card>)}</div></Container></Section>
    <Section spacing="md"><Container><CTA title="Have a question specific to your project?" description="Tell NileBot what you are considering and where you need clarity." action={<div className="flex flex-col gap-3 sm:flex-row"><NileBotTrigger /><Button href="/contact" variant="secondary">Contact Our Team</Button></div>} /></Container></Section>
  </div>;
}
