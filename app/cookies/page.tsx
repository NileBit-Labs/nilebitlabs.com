"use client";

import Link from "next/link";

export default function Cookies() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-24 bg-dark bg-opacity-80 bg-[url('/img/hero/tech-bg.jpg')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-500 uppercase tracking-widest mb-4">
            Website Usage
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Cookies Policy
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Learn how we use cookies to enhance your experience on our website.
          </p>
        </div>
      </section>

      {/* Cookies Content */}
      <section className="py-16 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Cookies Policy</h2>
          <p className="text-gray-600 mb-6">Last Updated: April 08, 2025</p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                1. What Are Cookies?
              </h3>
              <p className="text-gray-600">
                Cookies are small text files stored on your device when you
                visit our website. They help us improve functionality and
                analyze usage.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                2. Types of Cookies We Use
              </h3>
              <p className="text-gray-600">
                <ul className="list-disc pl-5 mt-2">
                  <li>
                    <strong>Essential Cookies:</strong> Necessary for the
                    website to function (e.g., navigation, form submissions).
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Track usage patterns to
                    improve our site (e.g., Google Analytics).
                  </li>
                  <li>
                    <strong>Marketing Cookies:</strong> Used to deliver
                    personalized ads (optional, with consent).
                  </li>
                </ul>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                3. How We Use Cookies
              </h3>
              <p className="text-gray-600">
                Cookies enable us to:
                <ul className="list-disc pl-5 mt-2">
                  <li>Remember your preferences.</li>
                  <li>Analyze site performance.</li>
                  <li>Enhance user experience.</li>
                </ul>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                4. Managing Cookies
              </h3>
              <p className="text-gray-600">
                You can control cookies via your browser settings. Disabling
                cookies may limit some website functionality. For more, see{" "}
                <a
                  href="https://www.allaboutcookies.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  allaboutcookies.org
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                5. Third-Party Cookies
              </h3>
              <p className="text-gray-600">
                We use third-party services (e.g., Google Analytics) that may
                set their own cookies. These are governed by their respective
                privacy policies.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                6. Contact Us
              </h3>
              <p className="text-gray-600">
                For questions about our cookie usage, email us at{" "}
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
