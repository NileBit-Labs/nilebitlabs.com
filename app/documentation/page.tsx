"use client";

import Link from "next/link";

export default function Documentation() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-24 bg-dark bg-opacity-80 bg-[url('/img/hero/tech-bg.jpg')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-500 uppercase tracking-widest mb-4">
            Resources & Guides
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Documentation</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Access technical guides, API references, and tutorials for NileBit
            Labs’ solutions.
          </p>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="py-16 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Explore Our Documentation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* General Guides */}
            <div id="general" className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-orange-500 mb-4">
                Getting Started
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <Link href="#general" className="hover:text-orange-500">
                    Project Setup Guide
                  </Link>
                  <p>
                    Learn how to set up your environment for NileBit solutions.
                  </p>
                </li>
                <li>
                  <Link href="#general" className="hover:text-orange-500">
                    Introduction to Our Services
                  </Link>
                  <p>
                    Understand the basics of our offerings and how to use them.
                  </p>
                </li>
              </ul>
            </div>

            {/* API Documentation */}
            <div id="api" className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-orange-500 mb-4">
                API References
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <Link href="#api" className="hover:text-orange-500">
                    Blockchain API
                  </Link>
                  <p>Integrate with our blockchain services using our APIs.</p>
                </li>
                <li>
                  <Link href="#api" className="hover:text-orange-500">
                    AI Agent API
                  </Link>
                  <p>Access our AI tools programmatically.</p>
                </li>
              </ul>
            </div>

            {/* Tutorials */}
            <div id="tutorials" className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-orange-500 mb-4">
                Tutorials
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <Link href="#tutorials" className="hover:text-orange-500">
                    Building an NFT Marketplace
                  </Link>
                  <p>
                    Step-by-step guide to creating a decentralized marketplace.
                  </p>
                </li>
                <li>
                  <Link href="#tutorials" className="hover:text-orange-500">
                    Deploying an AI Model
                  </Link>
                  <p>Learn how to deploy AI solutions with NileBit Labs.</p>
                </li>
              </ul>
            </div>

            {/* Troubleshooting */}
            <div
              id="troubleshooting"
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-orange-500 mb-4">
                Troubleshooting
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li>
                  <Link
                    href="#troubleshooting"
                    className="hover:text-orange-500"
                  >
                    Common Issues & Fixes
                  </Link>
                  <p>Solutions to frequent technical problems.</p>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-orange-500">
                    Contact Support
                  </Link>
                  <p>Get help directly from our team.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need more help? Reach out to our support team.
            </p>
            <Link
              href="/support"
              className="inline-block border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition"
            >
              Get Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
