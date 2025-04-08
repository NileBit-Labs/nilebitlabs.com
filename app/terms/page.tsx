/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";

export default function Terms() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-24 bg-dark bg-opacity-80 bg-[url('/img/hero/tech-bg.jpg')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-500 uppercase tracking-widest mb-4">
            Legal Information
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Terms and Conditions
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Please read our Terms and Conditions carefully before using our
            services.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Terms of Service</h2>
          <p className="text-gray-600 mb-6">Last Updated: April 08, 2025</p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                1. Acceptance of Terms
              </h3>
              <p className="text-gray-600">
                By accessing or using any services provided by NileBit Labs
                ("we," "us," or "our"), you agree to be bound by these Terms and
                Conditions ("Terms"). If you do not agree, please refrain from
                using our services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                2. Services
              </h3>
              <p className="text-gray-600">
                NileBit Labs provides software development, AI solutions,
                blockchain development, and related services as outlined on our
                website. We reserve the right to modify or discontinue any
                service at any time without prior notice.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                3. User Responsibilities
              </h3>
              <p className="text-gray-600">
                You agree to use our services only for lawful purposes and in a
                manner consistent with all applicable laws and regulations. You
                are responsible for maintaining the confidentiality of any
                account credentials provided by us.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                4. Intellectual Property
              </h3>
              <p className="text-gray-600">
                All content, software, and materials provided by NileBit Labs
                are our property or licensed to us and are protected by
                intellectual property laws. You may not reproduce, distribute,
                or create derivative works without our express permission,
                except as agreed in a separate contract.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                5. Payment Terms
              </h3>
              <p className="text-gray-600">
                Fees for our services will be outlined in project agreements or
                invoices. Payments are due within 30 days unless otherwise
                specified. Late payments may incur a penalty of 1.5% per month
                on the outstanding balance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                6. Limitation of Liability
              </h3>
              <p className="text-gray-600">
                NileBit Labs shall not be liable for any indirect, incidental,
                or consequential damages arising from the use of our services.
                Our total liability shall not exceed the amount paid by you for
                the specific service in question.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                7. Termination
              </h3>
              <p className="text-gray-600">
                We may terminate or suspend your access to our services at our
                discretion, with or without cause, and with or without notice.
                Upon termination, your right to use our services ceases
                immediately.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                8. Governing Law
              </h3>
              <p className="text-gray-600">
                These Terms are governed by the laws of Uganda. Any disputes
                shall be resolved in the courts of Kampala, Uganda.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                9. Changes to Terms
              </h3>
              <p className="text-gray-600">
                We may update these Terms from time to time. The updated version
                will be posted on this page, and continued use of our services
                constitutes acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                10. Contact Us
              </h3>
              <p className="text-gray-600">
                For questions about these Terms, please contact us at{" "}
                <Link
                  href="mailto:douglasbagambe4@gmail.com"
                  className="text-orange-500 hover:underline"
                >
                  info@nilebitlabs.com
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
