import Link from "next/link";

export default function Blog() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200" />{" "}
            {/* Placeholder for blog image */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                The Future of AI in Software
              </h3>
              <p className="text-gray-600 mb-4">
                Exploring how AI is transforming the software industry.
              </p>
              <Link
                href="/blog/future-of-ai"
                className="text-orange-500 hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200" />{" "}
            {/* Placeholder for blog image */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                Scaling with Cloud Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                How cloud technology can help your business grow.
              </p>
              <Link
                href="/blog/cloud-solutions"
                className="text-orange-500 hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200" />{" "}
            {/* Placeholder for blog image */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                Cybersecurity Trends 2025
              </h3>
              <p className="text-gray-600 mb-4">
                Stay ahead with the latest cybersecurity practices.
              </p>
              <Link
                href="/blog/cybersecurity-trends"
                className="text-orange-500 hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
