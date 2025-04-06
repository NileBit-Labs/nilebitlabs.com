/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Facebook,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Code,
  BookOpen,
  HelpCircle,
  Download,
  FileText,
  Shield,
  Globe,
} from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div>
      {/* Newsletter Section */}
      {/* <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 mb-12">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-2">Stay Up To Date</h3>
          <p className="text-gray-400">
            Subscribe to our newsletter for the latest updates
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
            Subscribe
          </button>
        </div>
      </div> */}
      <footer className="relative bg-gray-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute opacity-5 top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute opacity-5 bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute opacity-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div> */}

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          {/* Top Section with Logo and Glow Effect */}
          <div className="flex flex-col items-center mb-12">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <img
                  src="/nilebit-logo-darkmode.svg" // Adjust path based on where you saved it
                  alt="NileBit Labs Logo"
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto italic">
              Shaping the Future of Decentralization & AI
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Contact Info */}
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20">
              <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 flex items-center">
                <span className="text-blue-400 mr-2">Connect</span>
                <div className="h-px flex-grow bg-gradient-to-r from-blue-500 to-transparent"></div>
              </h3>

              <div className="space-y-4">
                <p className="flex items-start">
                  <MapPin className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Makerere Kavule, Kampala, Uganda</span>
                </p>

                <p className="flex items-center">
                  <Phone className="h-5 w-5 text-orange-500 mr-2" />
                  <span>0000000000</span>
                </p>

                <p className="flex items-center">
                  <Mail className="h-5 w-5 text-orange-500 mr-2" />
                  <span>info@nilebitlabs.com</span>
                </p>
              </div>
            </div>

            {/* Social Media with Icons */}
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20">
              <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 flex items-center">
                <span className="text-purple-400 mr-2">Social</span>
                <div className="h-px flex-grow bg-gradient-to-r from-purple-500 to-transparent"></div>
              </h3>

              <div className="grid grid-cols-3 gap-4">
                <Link
                  href="#"
                  className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-700/30 hover:bg-gradient-to-br hover:from-blue-900/50 hover:to-blue-700/50 transition-all duration-300 group"
                >
                  <Github className="h-6 w-6 text-gray-300 group-hover:text-blue-400 transition-all duration-300" />
                  <span className="text-xs mt-1 opacity-70 group-hover:opacity-100">
                    GitHub
                  </span>
                </Link>

                <Link
                  href="#"
                  className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-700/30 hover:bg-gradient-to-br hover:from-blue-900/50 hover:to-blue-600/50 transition-all duration-300 group"
                >
                  <Linkedin className="h-6 w-6 text-gray-300 group-hover:text-blue-400 transition-all duration-300" />
                  <span className="text-xs mt-1 opacity-70 group-hover:opacity-100">
                    LinkedIn
                  </span>
                </Link>

                <Link
                  href="#"
                  className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-700/30 hover:bg-gradient-to-br hover:from-blue-800/50 hover:to-blue-500/50 transition-all duration-300 group"
                >
                  <Twitter className="h-6 w-6 text-gray-300  group-hover:text-blue-400 transition-all duration-300" />
                  <span className="text-xs mt-1 opacity-70 group-hover:opacity-100">
                    Twitter
                  </span>
                </Link>

                <Link
                  href="#"
                  className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-700/30 hover:bg-gradient-to-br hover:from-purple-900/50 hover:to-pink-700/50 transition-all duration-300 group"
                >
                  <Instagram className="h-6 w-6 text-gray-300 group-hover:text-pink-400 transition-all duration-300" />
                  <span className="text-xs mt-1 opacity-70 group-hover:opacity-100">
                    Instagram
                  </span>
                </Link>

                <Link
                  href="#"
                  className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-700/30 hover:bg-gradient-to-br hover:from-blue-900/50 hover:to-blue-600/50 transition-all duration-300 group"
                >
                  <Facebook className="h-6 w-6 text-gray-300 group-hover:text-blue-400 transition-all duration-300" />
                  <span className="text-xs mt-1 opacity-70 group-hover:opacity-100">
                    Facebook
                  </span>
                </Link>

                <Link
                  href="#"
                  className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-700/30 hover:bg-gradient-to-br hover:from-red-900/50 hover:to-red-700/50 transition-all duration-300 group"
                >
                  <Youtube className="h-6 w-6 text-gray-300 group-hover:text-red-400 transition-all duration-300" />
                  <span className="text-xs mt-1 opacity-70 group-hover:opacity-100">
                    YouTube
                  </span>
                </Link>
              </div>
            </div>

            {/* Support */}
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-900/20">
              <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 flex items-center">
                <span className="text-green-400 mr-2">Support</span>
                <div className="h-px flex-grow bg-gradient-to-r from-green-500 to-transparent"></div>
              </h3>

              <div className="space-y-3">
                <Link
                  href="#"
                  className="flex items-center py-1 px-3 rounded-md hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <Code className="h-4 w-4 text-green-500 mr-2 opacity-70 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Documentation
                  </span>
                </Link>

                <Link
                  href="/faq"
                  className="flex items-center py-1 px-3 rounded-md hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <HelpCircle className="h-4 w-4 text-green-500 mr-2 opacity-70 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    FAQs
                  </span>
                </Link>

                <Link
                  href="#"
                  className="flex items-center py-1 px-3 rounded-md hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <BookOpen className="h-4 w-4 text-green-500 mr-2 opacity-70 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Support
                  </span>
                </Link>

                <Link
                  href="#"
                  className="flex items-center py-1 px-3 rounded-md hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <Download className="h-4 w-4 text-green-500 mr-2 opacity-70 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Download
                  </span>
                </Link>
              </div>
            </div>

            {/* Links */}
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-900/20">
              <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 flex items-center">
                <span className="text-orange-400 mr-2">Links</span>
                <div className="h-px flex-grow bg-gradient-to-r from-orange-500 to-transparent"></div>
              </h3>

              <div className="space-y-3">
                <Link
                  href="/about"
                  className="flex items-center py-1 px-3 rounded-md hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <ExternalLink className="h-4 w-4 text-orange-500 mr-2 opacity-70 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    About Us
                  </span>
                </Link>

                <Link
                  href="/terms"
                  className="flex items-center py-1 px-3 rounded-md hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <FileText className="h-4 w-4 text-orange-500 mr-2 opacity-70 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Terms & Conditions
                  </span>
                </Link>

                <Link
                  href="/privacy"
                  className="flex items-center py-1 px-3 rounded-md hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <Shield className="h-4 w-4 text-orange-500 mr-2 opacity-70 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Privacy Policy
                  </span>
                </Link>

                <Link
                  href="#"
                  className="flex items-center py-1 px-3 rounded-md hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <Globe className="h-4 w-4 text-orange-500 mr-2 opacity-70 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Sitemap
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Tech Stack Showcase */}
          <div className="mb-12">
            <div className="overflow-hidden py-4">
              <div className="flex animate-marquee space-x-8">
                {[
                  { name: "Solana", color: "bg-purple-600" },
                  { name: "Ethereum", color: "bg-blue-600" },
                  { name: "React", color: "bg-cyan-600" },
                  { name: "Rust", color: "bg-orange-600" },
                  { name: "Node.js", color: "bg-green-600" },
                  { name: "Python", color: "bg-yellow-600" },
                  { name: "TensorFlow", color: "bg-red-600" },
                  { name: "Web3", color: "bg-indigo-600" },
                  { name: "AI/ML", color: "bg-pink-600" },
                  { name: "Base", color: "bg-blue-600" },
                  { name: "Celo", color: "bg-green-600" },
                  { name: "Polkadot", color: "bg-pink-600" },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className={`px-4 py-2 rounded-full ${tech.color} text-white text-sm font-medium whitespace-nowrap`}
                  >
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright & Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  © NileBit Labs {currentYear}. All Rights Reserved.
                </p>
              </div>

              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacy
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Terms
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Custom CSS for animated grid background */}
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .bg-grid-pattern {
            background-image: linear-gradient(
                to right,
                rgba(255, 255, 255, 0.05) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.05) 1px,
                transparent 1px
              );
            background-size: 20px 20px;
          }
        `}</style>
      </footer>
    </div>
  );
}
