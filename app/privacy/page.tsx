import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/design-system";

export const metadata: Metadata = { title: "Privacy Policy", description: "How NileBit Labs handles information submitted through this website.", alternates: { canonical: "/privacy" } };

const sections = [
  ["Information you provide", "We receive information you choose to submit through the project inquiry form or by contacting us directly. This may include your name, email address, organization, project details, budget range, timeline, and correspondence."],
  ["How we use it", "We use this information to understand and respond to inquiries, assess potential work, communicate about an engagement, maintain necessary business records, and protect the website and our communications from misuse."],
  ["Service providers", "Website hosting, email, and other operational providers may process limited information on our behalf. Their handling of information is governed by their own terms and our arrangements with them. We do not sell personal information submitted through this website."],
  ["NileBot", "NileBot keeps its conversation history in your browser session rather than permanently storing it in a NileBit Labs database. When production AI mode is enabled, messages you send to NileBot are processed by the configured AI provider to generate a response. Do not share passwords, API keys, or other sensitive credentials. When AI mode is not configured, NileBot uses the website’s local factual knowledge instead."],
  ["Retention and security", "We retain inquiry information only as long as reasonably needed for communication, business records, legal obligations, or dispute resolution. We use reasonable technical and organizational safeguards, but no internet transmission or storage system can be guaranteed completely secure."],
  ["Your choices", "You may ask us to correct or delete information you submitted, subject to records we must reasonably retain. You can make a request by emailing info@nilebitlabs.com. We may need to verify the request before acting on it."],
  ["External links", "This website may link to third-party services. NileBit Labs does not control their privacy practices, so you should review their policies when visiting them."],
  ["Changes", "We may update this policy when the website or our practices change. The current version will be published on this page with its effective date."],
] as const;

export default function PrivacyPage() { return <LegalPage eyebrow="Privacy" title="Privacy Policy" intro="A plain-language explanation of how information submitted through this website is handled." sections={sections} />; }

function LegalPage({ eyebrow, title, intro, sections }: { eyebrow: string; title: string; intro: string; sections: readonly (readonly [string, string])[] }) {
  return <div><Section spacing="lg"><Container size="content"><p className="text-eyebrow text-primary">{eyebrow}</p><h1 className="mt-6 text-heading-1 text-heading">{title}</h1><p className="mt-6 text-body-lg text-muted">{intro}</p><p className="mt-5 text-caption text-muted">Effective August 11, 2026</p></Container></Section><Section tone="surface" spacing="lg"><Container size="content"><div className="space-y-10">{sections.map(([heading, body]) => <section key={heading}><h2 className="text-heading-3 text-heading">{heading}</h2><p className="mt-4 text-body-lg text-muted">{body}</p></section>)}<section><h2 className="text-heading-3 text-heading">Contact</h2><p className="mt-4 text-body-lg text-muted">Questions about this policy can be sent to <a href="mailto:info@nilebitlabs.com" className="text-heading underline underline-offset-4 hover:text-primary">info@nilebitlabs.com</a>.</p></section></div></Container></Section></div>;
}
