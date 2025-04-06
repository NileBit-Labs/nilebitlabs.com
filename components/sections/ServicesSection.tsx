import Link from "next/link";

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-orange-500 mb-4">
              Custom Software Development
            </h3>
            <p className="text-gray-600">
              Tailored solutions to meet your business needs, built with the
              latest technologies.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-orange-500 mb-4">
              AI & Machine Learning
            </h3>
            <p className="text-gray-600">
              Leverage AI to automate processes and gain insights from your
              data.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
