import { permanentRedirect } from "next/navigation";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const legacySlugs: Record<string, string> = {
  "blockchain-revolution": "blockchain-product-fit",
  "solana-future": "blockchain-product-fit",
  "ai-ml-trends": "applied-ai-product-decisions",
  "ai-agents": "applied-ai-product-decisions",
  "software-dev": "modern-software-development-principles",
  "full-stack-dev": "modern-software-development-principles",
  "embedded-systems": "modern-software-development-principles",
  "web-mobile-dev": "mvp-without-throwaway-foundations",
  "future-of-web3": "blockchain-product-fit",
};

export default async function BlogPostRedirect({ params }: BlogPageProps) {
  const { slug } = await params;
  permanentRedirect(`/insights/${legacySlugs[slug] ?? slug}`);
}
