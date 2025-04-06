"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">
                <span className="text-orange-500">⚡</span> NileBit Labs
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/services"
              className="text-gray-700 hover:text-orange-500"
            >
              Services
            </Link>
            <Link
              href="/solutions"
              className="text-gray-700 hover:text-orange-500"
            >
              Solutions
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-700 hover:text-orange-500"
            >
              Portfolio
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-orange-500">
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-orange-500"
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/services"
              className="block text-gray-700 hover:text-orange-500"
            >
              Services
            </Link>
            <Link
              href="/solutions"
              className="block text-gray-700 hover:text-orange-500"
            >
              Solutions
            </Link>
            <Link
              href="/portfolio"
              className="block text-gray-700 hover:text-orange-500"
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="block text-gray-700 hover:text-orange-500"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-orange-500"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
