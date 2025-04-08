import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    slug: "blockchain-revolution",
    title: "The Blockchain Revolution: Transforming Industries in 2025",
    excerpt:
      "Discover how blockchain technology is reshaping industries like finance, healthcare, and supply chain with its decentralized power.",
    image: "/img/blog/blockchain.jpg",
    category: "Blockchain",
    date: "April 10, 2025",
  },
  {
    slug: "solana-future",
    title: "Why Solana is the Future of Scalable Blockchain Solutions",
    excerpt:
      "Solana’s high-speed, low-cost transactions are making it a game-changer in the blockchain space. Here’s why it matters.",
    image: "/img/blog/solana.jpg",
    category: "Solana",
    date: "April 8, 2025",
  },
  {
    slug: "ai-ml-trends",
    title: "AI and Machine Learning Trends to Watch in 2025",
    excerpt:
      "From generative AI to automated ML pipelines, explore the trends shaping the future of AI and machine learning.",
    image: "/img/blog/ai-ml.jpg",
    category: "AI & ML",
    date: "April 5, 2025",
  },
  {
    slug: "ai-agents",
    title: "AI Agents: The Next Frontier in Automation",
    excerpt:
      "AI agents are transforming how we interact with technology. Learn how they’re driving efficiency and innovation.",
    image: "/img/blog/ai-agents.jpg",
    category: "AI Agents",
    date: "April 3, 2025",
  },
  {
    slug: "software-dev",
    title: "Modern Software Development: Best Practices for 2025",
    excerpt:
      "A deep dive into the best practices for modern software development, from agile methodologies to DevOps integration.",
    image: "/img/blog/software-dev.jpg",
    category: "Software Development",
    date: "April 1, 2025",
  },
  {
    slug: "web-mobile-dev",
    title: "Web and Mobile Development: Building for the Future",
    excerpt:
      "Explore the latest trends in web and mobile development, from PWAs to cross-platform frameworks.",
    image: "/img/blog/web-mobile.jpg",
    category: "Web & Mobile",
    date: "March 30, 2025",
  },
  {
    slug: "full-stack-dev",
    title: "Full Stack Development: The Art of Building End-to-End Solutions",
    excerpt:
      "Learn what it takes to build comprehensive solutions with full stack development in 2025.",
    image: "/img/blog/full-stack.jpg",
    category: "Full Stack",
    date: "March 28, 2025",
  },
  {
    slug: "embedded-systems",
    title: "Embedded Systems: Powering the Internet of Things in 2025",
    excerpt:
      "Discover how embedded systems are driving the IoT revolution and what’s next for this technology.",
    image: "/img/blog/embedded.jpg",
    category: "Embedded Systems",
    date: "March 26, 2025",
  },
  {
    slug: "future-of-web3",
    title: "The Future of Web3: Decentralized Apps and Beyond",
    excerpt:
      "Web3 is redefining the internet with decentralized apps and user ownership. Here’s what’s next.",
    image: "/img/blog/web3.jpg",
    category: "Web3",
    date: "March 24, 2025",
  },
];

const categories = [
  "Blockchain",
  "Solana",
  "AI & ML",
  "AI Agents",
  "Software Development",
  "Web & Mobile",
  "Full Stack",
  "Embedded Systems",
];

export default function Blog() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-24 flex items-center justify-center bg-dark bg-opacity-80 bg-[url('/img/hero/tech-bg.jpg')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-500 uppercase tracking-widest mb-4">
            NileBit Labs Blog
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Insights on Technology and Innovation
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Stay ahead with the latest trends, insights, and best practices in
            blockchain, AI, software development, and more.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <h2 className="text-4xl font-bold mb-12">Latest Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <div
                    key={post.slug}
                    className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-orange-500">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          {post.date}
                        </span>
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
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <Link
                        href="#"
                        className="text-orange-500 hover:underline"
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg shadow-md p-6 mt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Recent Posts
                </h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-orange-500 hover:underline"
                      >
                        {post.title}
                      </Link>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
