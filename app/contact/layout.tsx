import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Discuss a software, mobile, AI, blockchain, cloud, design, or technology consulting project with NileBit Labs in Kampala, Uganda.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact NileBit Labs", description: "Start a practical conversation about your product or engineering project.", url: "/contact", type: "website" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) { return children; }
