/* eslint-disable react/no-unescaped-entities */

"use client";
import { useState } from "react";
import Link from "next/link";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // This would typically connect to your newsletter service
    console.log("Newsletter subscription for:", email);
    setSubmitted(true);
    setEmail("");
    // Reset form after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Stay Updated</h2>
          <p className="mt-4 text-lg text-gray-600">
            Subscribe to our newsletter for the latest tech trends, industry
            insights, and company updates.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6 text-center">
              <p className="font-medium">Thank you for subscribing!</p>
              <p>You'll be the first to know about our latest updates.</p>
            </div>
          ) : null}

          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow p-3 border border-gray-300 rounded-lg md:rounded-r-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              placeholder="Your email address"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg md:rounded-l-none hover:bg-orange-600 transition font-medium"
            >
              Subscribe
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-4 text-center">
            By subscribing, you agree to our{" "}
            <Link
              href="/privacy-policy"
              className="text-orange-500 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
