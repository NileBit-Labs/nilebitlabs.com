/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Link from "next/link";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaQuestionCircle,
} from "react-icons/fa";

export default function Support() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-24 bg-dark bg-opacity-80 bg-[url('/img/hero/tech-bg.jpg')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-500 uppercase tracking-widest mb-4">
            We’re Here to Help
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Support Center
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Get assistance with your projects, services, or technical queries
            from our dedicated support team.
          </p>
        </div>
      </section>

      {/* Support Content */}
      <section className="py-16 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="雕text-3xl font-bold mb-6">Contact Support</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaEnvelope className="text-orange-500 mr-4 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Email Support</h3>
                    <Link
                      href="mailto:support@nilebitlabs.com"
                      className="text-gray-600 hover:text-orange-500"
                    >
                      support@nilebitlabs.com
                    </Link>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhoneAlt className="text-orange-500 mr-4 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Phone Support</h3>
                    <Link
                      href="tel:+256770919175"
                      className="text-gray-600 hover:text-orange-500"
                    >
                      +256 770 919 175
                    </Link>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaClock className="text-orange-500 mr-4 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Support Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9 AM - 5 PM (EAT)
                      <br />
                      Saturday: 10 AM - 2 PM (EAT)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Options */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6">Support Options</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-semibold text-orange-500">
                    Documentation
                  </h3>
                  <p className="text-gray-600">
                    Access detailed guides and resources in our{" "}
                    <Link
                      href="/documentation"
                      className="text-orange-500 hover:underline"
                    >
                      Documentation
                    </Link>
                    .
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold text-orange-500">FAQs</h3>
                  <p className="text-gray-600">
                    Find answers to common questions in our{" "}
                    <Link
                      href="/faq"
                      className="text-orange-500 hover:underline"
                    >
                      FAQ section
                    </Link>
                    .
                  </p>
                </li>
                <li>
                  <h3 className="font-semibold text-orange-500">
                    Project Support
                  </h3>
                  <p className="text-gray-600">
                    For specific project inquiries, email us with your project
                    ID or reference number.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition"
            >
              Contact Us for Immediate Assistance
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
