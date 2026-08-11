"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Badge, Button, Card, Checkbox, Container, Field, Input, Label, Section, Select, Textarea } from "@/components/ui/design-system";

const initialForm = { name: "", email: "", company: "", projectType: "", summary: "", budget: "", timeline: "", website: "", consent: false };

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const project = new URLSearchParams(window.location.search).get("project")?.trim().slice(0, 3000);
    if (project) setForm((current) => ({ ...current, projectType: current.projectType || "Not sure yet", summary: current.summary || project }));
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const result = (await response.json()) as { message?: string; error?: string };
      if (!response.ok) throw new Error(result.error || "We could not send your inquiry.");
      setStatus("success");
      setMessage(result.message || "Thank you. We will respond as soon as we can.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We could not send your inquiry. Please email us directly.");
    }
  }

  return (
    <div>
      <Section spacing="lg">
        <Container>
          <div className="max-w-4xl">
            <Badge tone="primary">Contact</Badge>
            <h1 className="mt-8 text-display-lg text-heading">Let&apos;s discuss what you need to build.</h1>
            <p className="mt-7 max-w-readable text-body-lg text-muted">Tell us about the business goal, the users, and what needs to become possible. We will respond with the most useful next step.</p>
          </div>
        </Container>
      </Section>

      <Section tone="surface" spacing="lg">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-eyebrow text-primary">Start a conversation</p>
              <h2 className="mt-5 text-heading-2 text-heading">A clear first conversation, not a sales script.</h2>
              <p className="mt-5 text-body text-muted">Share as much context as you have. If the scope is still uncertain, that is a useful place to begin.</p>
              <address className="mt-9 space-y-5 not-italic text-body text-muted">
                <a href="mailto:info@nilebitlabs.com" className="flex min-h-touch items-center gap-3 transition-colors hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><Mail className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden="true" /> info@nilebitlabs.com</a>
                <a href="tel:+256770919975" className="flex min-h-touch items-center gap-3 transition-colors hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><Phone className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden="true" /> +256 770 919 975</a>
                <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} aria-hidden="true" /> Makerere Kavule, Kampala, Uganda</p>
              </address>
              <div className="mt-9 border-t border-border pt-7 text-body-sm text-muted"><p>Monday–Friday, 9:00 AM–5:00 PM</p><p className="mt-2">Saturday, 10:00 AM–2:00 PM</p><p className="mt-2">East Africa Time</p></div>
            </div>

            <Card elevated className="p-6 md:p-8">
              <h2 className="text-heading-3 text-heading">Discuss Your Project</h2>
              <p className="mt-3 text-body text-muted">Required fields are marked with an asterisk.</p>
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-6 md:grid-cols-2">
                  <Field><Label htmlFor="name">Name *</Label><Input id="name" name="name" autoComplete="name" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></Field>
                  <Field><Label htmlFor="email">Email *</Label><Input id="email" name="email" type="email" autoComplete="email" required maxLength={254} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></Field>
                </div>
                <Field><Label htmlFor="company">Company / Organization</Label><Input id="company" name="company" autoComplete="organization" maxLength={120} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} /></Field>
                <Field><Label htmlFor="projectType">Project type *</Label><Select id="projectType" name="projectType" required value={form.projectType} onChange={(e) => setForm({ ...form, projectType: e.target.value })}><option value="">Select the closest fit</option><option>Web or software engineering</option><option>Mobile application</option><option>Artificial intelligence or machine learning</option><option>Blockchain or Web3</option><option>Cloud infrastructure</option><option>UI/UX design</option><option>Technology consulting</option><option>Not sure yet</option></Select></Field>
                <Field><Label htmlFor="summary">Project summary *</Label><Textarea id="summary" name="summary" required maxLength={3000} rows={7} placeholder="What are you trying to achieve, and what is getting in the way?" value={form.summary} onChange={(e) => setForm({ ...form, summary: e.target.value })} /></Field>
                <div className="grid gap-6 md:grid-cols-2">
                  <Field><Label htmlFor="budget">Budget range (optional)</Label><Select id="budget" name="budget" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}><option value="">Prefer not to say yet</option><option>Under $5,000</option><option>$5,000–$15,000</option><option>$15,000–$50,000</option><option>$50,000+</option><option>Need help estimating</option></Select></Field>
                  <Field><Label htmlFor="timeline">Timeline (optional)</Label><Select id="timeline" name="timeline" value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })}><option value="">No fixed timeline</option><option>As soon as practical</option><option>Within 1–3 months</option><option>Within 3–6 months</option><option>More than 6 months</option></Select></Field>
                </div>
                <div className="hidden" aria-hidden="true"><Label htmlFor="website">Website</Label><Input id="website" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} /></div>
                <div className="flex items-start gap-3"><Checkbox id="consent" name="consent" required checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} /><label htmlFor="consent" className="text-body-sm text-muted">I agree that NileBit Labs may use these details to respond to my inquiry, as described in the <a href="/privacy" className="font-medium text-heading underline underline-offset-4 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Privacy Policy</a>. *</label></div>
                <Button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Discuss Your Project"}</Button>
                <div aria-live="polite" aria-atomic="true">{message ? <p role={status === "error" ? "alert" : "status"} className={status === "error" ? "text-body-sm text-error" : "text-body-sm text-success"}>{message}</p> : null}</div>
              </form>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
