"use client";

import Link from "next/link";

export default function FAQ() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-24 bg-dark bg-opacity-80 bg-[url('/img/hero/tech-bg.jpg')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-500 uppercase tracking-widest mb-4">
            Your Questions Answered
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Find answers to common questions about our services, processes, and
            support.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            All Your FAQs
          </h2>

          <div className="space-y-6">
            {/* General Questions */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                What services does NileBit Labs offer?
              </h3>
              <p className="text-gray-600">
                We provide full-stack software development, AI and machine
                learning solutions, blockchain development, cloud services,
                cybersecurity, and fintech solutions. See our{" "}
                <Link
                  href="/services"
                  className="text-orange-500 hover:underline"
                >
                  Services page
                </Link>{" "}
                for details.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                How can I get a quote for my project?
              </h3>
              <p className="text-gray-600">
                Submit your project details via our{" "}
                <Link
                  href="/contact"
                  className="text-orange-500 hover:underline"
                >
                  Contact form
                </Link>
                , and we’ll provide a tailored quote within 48 hours.
              </p>
            </div>

            {/* Project-Related Questions */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                How long does a typical project take?
              </h3>
              <p className="text-gray-600">
                Project timelines vary based on scope. Small projects may take
                4-8 weeks, while complex solutions can take 3-6 months or more.
                We’ll provide a detailed timeline during planning.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                Can you work with existing codebases?
              </h3>
              <p className="text-gray-600">
                Yes, we can integrate with or enhance existing codebases,
                provided we have access to the source code and documentation.
              </p>
            </div>

            {/* Support Questions */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                What kind of support do you offer post-launch?
              </h3>
              <p className="text-gray-600">
                We offer maintenance packages including bug fixes, updates, and
                performance optimization. Details are available on our{" "}
                <Link
                  href="/support"
                  className="text-orange-500 hover:underline"
                >
                  Support page
                </Link>
                .
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                How do I report a technical issue?
              </h3>
              <p className="text-gray-600">
                Contact our support team at{" "}
                <Link
                  href="mailto:support@nilebitlabs.com"
                  className="text-orange-500 hover:underline"
                >
                  support@nilebitlabs.com
                </Link>{" "}
                with a description of the issue and any relevant details (e.g.,
                error messages).
              </p>
            </div>

            {/* Billing Questions */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept bank transfers, credit cards, and mobile money
                payments (e.g., MTN Mobile Money, Airtel Money). Payment details
                will be provided in your invoice.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                Can I cancel a project after it starts?
              </h3>
              <p className="text-gray-600">
                Cancellation terms depend on your contract. Typically, you may
                cancel with 30 days’ notice, subject to payment for work
                completed. Contact us for specifics.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">
              Still have questions? Reach out to us!
            </p>
            <Link
              href="/contact"
              className="inline-block border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
