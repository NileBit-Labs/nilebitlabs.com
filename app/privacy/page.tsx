/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";

export default function Privacy() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-24 bg-dark bg-opacity-80 bg-[url('/img/hero/tech-bg.jpg')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-500 uppercase tracking-widest mb-4">
            Our Commitment
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Your privacy matters to us. Learn how we collect, use, and protect
            your data.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Privacy Policy</h2>
          <p className="text-gray-600 mb-6">Last Updated: April 08, 2025</p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                1. Introduction
              </h3>
              <p className="text-gray-600">
                NileBit Labs ("we," "us," or "our") is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our
                services or visit our website.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                2. Information We Collect
              </h3>
              <div className="text-gray-600">
                <p>We may collect:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>
                    Personal Information: Name, email, phone number, company
                    details provided via forms or inquiries.
                  </li>
                  <li>
                    Usage Data: IP address, browser type, pages visited, and
                    time spent on our site.
                  </li>
                  <li>
                    Cookies: Data stored via cookies to enhance your browsing
                    experience (see our Cookies Policy).
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                3. How We Use Your Information
              </h3>
              <p className="text-gray-600">
                We use your data to:
                <ul className="list-disc pl-5 mt-2">
                  <li>Provide and improve our services.</li>
                  <li>Respond to inquiries and provide customer support.</li>
                  <li>Send marketing communications (with your consent).</li>
                  <li>Analyze website usage and performance.</li>
                </ul>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                4. Data Sharing
              </h3>
              <p className="text-gray-600">
                We do not sell your personal information. We may share it with:
                <ul className="list-disc pl-5 mt-2">
                  <li>
                    Service providers (e.g., hosting, email services) under
                    strict confidentiality agreements.
                  </li>
                  <li>Legal authorities if required by law.</li>
                </ul>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                5. Data Security
              </h3>
              <p className="text-gray-600">
                We implement reasonable security measures to protect your data,
                including encryption and access controls. However, no method of
                transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                6. Your Rights
              </h3>
              <p className="text-gray-600">
                You have the right to:
                <ul className="list-disc pl-5 mt-2">
                  <li>Access, correct, or delete your personal data.</li>
                  <li>Opt-out of marketing communications.</li>
                  <li>Request data portability where applicable.</li>
                </ul>
                Contact us at{" "}
                <Link
                  href="mailto:douglasbagambe4@gmail.com"
                  className="text-orange-500 hover:underline"
                >
                  info@nilebitlabs.com
                </Link>{" "}
                to exercise these rights.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                7. Third-Party Links
              </h3>
              <p className="text-gray-600">
                Our website may contain links to third-party sites. We are not
                responsible for their privacy practices.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                8. Changes to This Policy
              </h3>
              <p className="text-gray-600">
                We may update this Privacy Policy periodically. Changes will be
                posted here, and significant updates will be communicated via
                email if you’re subscribed.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                9. Contact Us
              </h3>
              <p className="text-gray-600">
                For privacy-related inquiries, reach us at{" "}
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
