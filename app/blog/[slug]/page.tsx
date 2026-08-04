import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";

interface BlogPostSummary {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
}

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPost({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = (blogPosts as BlogPostSummary[]).find(
    (item) => item.slug === slug
  );

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-heading py-section-md text-background">
      <div className="mx-auto w-full max-w-readable px-layout-sm md:px-layout-md lg:px-layout-lg">
        <Link
          href="/blog"
          className="text-body-sm font-medium text-primary hover:text-primary-hover"
        >
          Back to insights
        </Link>
        <div className="mt-8">
          <p className="text-eyebrow text-primary">{post.category}</p>
          <h1 className="mt-4 text-heading-1 text-background">{post.title}</h1>
          <div className="mt-5 flex flex-wrap gap-3 text-body-sm text-muted">
            <span>{post.date}</span>
            <span>By NileBit Labs</span>
          </div>
        </div>
        <div className="image-frame relative mt-10 aspect-[16/9]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 768px) 44rem, 100vw"
            className="object-cover"
          />
        </div>
        <div className="mt-10 space-y-6 text-body-lg text-background/75">
          <p>{post.excerpt}</p>
          <p>
            This insight is being prepared as part of the new NileBit Labs
            editorial system.
          </p>
        </div>
      </div>
    </article>
  );
}
