import { notFound } from "next/navigation";

// Mock data (replace with actual data fetching logic)
const posts: { [key: string]: { title: string; content: string } } = {
  "future-of-ai": {
    title: "The Future of AI in Software",
    content: "AI is revolutionizing software development...",
  },
  "cloud-solutions": {
    title: "Scaling with Cloud Solutions",
    content: "Cloud technology offers scalability...",
  },
  "cybersecurity-trends": {
    title: "Cybersecurity Trends 2025",
    content: "The latest trends in cybersecurity...",
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
        <p className="text-gray-600">{post.content}</p>
      </div>
    </section>
  );
}
