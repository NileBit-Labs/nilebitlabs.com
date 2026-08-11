import { Button, Container, Section } from "@/components/ui/design-system";

export default function NotFound() {
  return <Section spacing="lg"><Container size="content" className="text-center"><p className="text-eyebrow text-primary">404</p><h1 className="mt-6 text-heading-1 text-heading">This page does not exist.</h1><p className="mt-5 text-body-lg text-muted">The address may have changed, or the page may no longer be part of the NileBit Labs website.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Button href="/">Return Home</Button><Button href="/contact" variant="secondary">Contact NileBit Labs</Button></div></Container></Section>;
}
