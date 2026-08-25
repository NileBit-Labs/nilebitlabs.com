import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("Contact", "Contact NileBit Labs in Kampala, Uganda to discuss a software, mobile, AI, blockchain, cloud, design, or technology consulting project.", "/contact");

export default function ContactLayout({ children }: { children: React.ReactNode }) { return children; }
