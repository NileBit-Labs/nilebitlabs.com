import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../../data/blogPosts";

export default function BlogSection() {
  // Get only the first 4 posts for the homepage section
  const featuredPosts = blogPosts.slice(0, 4);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">From Our Blog</h2>
          <p className="mt-4 text-xl text-gray-600">
            Latest insights on technology trends and innovations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredPosts.map((post) => (
            <div
              key={post.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-orange-500">{post.category}</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-2">
                  {post.title.length > 60
                    ? post.title.substring(0, 60) + "..."
                    : post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {post.excerpt.length > 100
                    ? post.excerpt.substring(0, 100) + "..."
                    : post.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-orange-500 hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
