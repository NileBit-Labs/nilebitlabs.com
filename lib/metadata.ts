import type { Metadata } from "next";

export const siteUrl = "https://nilebitlabs.com";
export const siteName = "NileBit Labs";
export const defaultDescription =
  "NileBit Labs is a Kampala-based product engineering company building dependable web, mobile, AI, and blockchain products for clients in Uganda and globally.";

export function createPageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: path,
      siteName,
      locale: "en_UG",
      type: "website",
      images: [{ url: "/images/og/nilebit-labs-og.png", width: 1200, height: 630, alt: "NileBit Labs — Product Engineering, AI and Blockchain" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: ["/images/og/nilebit-labs-og.png"],
    },
  };
}
