/* eslint-disable @typescript-eslint/no-unused-vars */
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
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2025);
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Toggle mobile accordion sections
  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <div className="bg-gray-900">
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top Section with Logo and Glow Effect */}
        <div className="flex flex-col items-center mb-12">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src="/nilebit-logo-darkmode.svg"
                alt="NileBit Labs Logo"
                className="h-16 sm:h-20 w-auto"
              />
            </Link>
          </div>
          <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto italic">
            Shaping the Future of Decentralization & AI
          </p>
        </div>

        {/* Mobile-optimized Grid */}
        <div className="md:hidden space-y-4 mb-8">
          {/* Contact Info - Mobile */}
          <div className="bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50">
            <div
              className="p-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("contact")}
            >
              <h3 className="text-lg font-bold flex items-center">
                <span className="text-blue-400 mr-2">Connect</span>
              </h3>
              {openSection === "contact" ? (
                <ChevronUp className="h-5 w-5 text-blue-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-blue-400" />
              )}
            </div>

            {openSection === "contact" && (
              <div className="p-4 pt-0 space-y-4 border-t border-gray-700/50">
                <p className="flex items-start">
                  <MapPin className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Makerere Kavule, Kampala, Uganda</span>
                </p>

                <p className="flex items-start">
                  <Phone className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-1" />
                  <span>
                    <a
                      href="tel:+256770919175"
                      className="hover:text-orange-500 transition"
                    >
                      +256 770 919 975
                    </a>
                    <br />
                    <a
                      href="tel:+256780487574"
                      className="hover:text-orange-500 transition"
                    >
                      +256 780 487 574
                    </a>
                    <br />
                    <a
                      href="tel:+256776159775"
                      className="hover:text-orange-500 transition"
                    >
                      +256 776 159 775
                    </a>
                  </span>
                </p>

                <p className="flex items-center">
                  <Mail className="h-5 w-5 text-orange-500 mr-2" />
                  <a
                    href="mailto:info@nilebitlabs.com"
                    className="hover:text-orange-500 transition"
                  >
                    info@nilebitlabs.com
                  </a>
                </p>
              </div>
            )}
          </div>

          {/* Social Media - Mobile */}
          <div className="bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50">
            <div
              className="p-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("social")}
            >
              <h3 className="text-lg font-bold flex items-center">
                <span className="text-purple-400 mr-2">Social</span>
              </h3>
              {openSection === "social" ? (
                <ChevronUp className="h-5 w-5 text-purple-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-purple-400" />
              )}
            </div>

            {openSection === "social" && (
              <div className="p-4 pt-0 border-t border-gray-700/50">
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <Link
                    href="https://github.com/NileBit-Labs"
                    className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-700/30 hover:bg-gradient-to-br hover:from-blue-900/50 hover:to-blue-700/50 transition-all duration-300 group"
                  >
                    <Github className="h-6 w-6 text-gray-300 group-hover:text-blue-400 transition-all duration-300" />
                    <span className="text-xs mt-1 opacity-70 group-hover:opacity-100">
                      GitHub
                    </span>
                  </Link>

                  <Link
                    href="https://linkedin.com/company/nilebitlabs"
                    className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-700/30 hover:bg-gradient-to-br hover:from-blue-900/50 hover:to-blue-600/50 transition-all duration-300 group"
                  >
                    <Linkedin className="h-6 w-6 text-gray-300 group-hover:text-blue-400 transition-all duration-300" />
                    <span className="text-xs mt-1 opacity-70 group-hover:opacity-100">
                      LinkedIn
                    </span>
                  </Link>

                  <Link
                    href="https://twitter.com/nilebitlabs"
                    className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-700/30 hover:bg-gradient-to-br hover:from-blue-800/50 hover:to-blue-500/50 transition-all duration-300 group"
                  >
                    <Twitter className="h-6 w-6 text-gray-300 group-hover:text-blue-400 transition-all duration-300" />
                    <span className="text-xs mt-1 opacity-70 group-hover:opacity-100">
                      Twitter
                    </span>
                  </Link>

                  <Link
                    href="https://instagram.com/nilebitlabs"
                    className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-700/30 hover:bg-gradient-to-br hover:from-purple-900/50 hover:to-pink-700/50 transition-all duration-300 group"
                  >
                    <Instagram className="h-6 w-6 text-gray-300 group-hover:text-pink-400 transition-all duration-300" />
                    <span className="text-xs mt-1 opacity-70 group-hover:opacity-100">
                      Instagram
                    </span>
                  </Link>

                  <Link
                    href="https://facebook.com/nilebitlabs"
                    className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-700/30 hover:bg-gradient-to-br hover:from-blue-900/50 hover:to-blue-600/50 transition-all duration-300 group"
                  >
                    <Facebook className="h-6 w-6 text-gray-300 group-hover:text-blue-400 transition-all duration-300" />
                    <span className="text-xs mt-1 opacity-70 group-hover:opacity-100">
                      Facebook
                    </span>
                  </Link>

                  <Link
                    href="https://youtube.com/@nilebitlabs"
                    className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-700/30 hover:bg-gradient-to-br hover:from-red-900/50 hover:to-red-700/50 transition-all duration-300 group"
                  >
                    <Youtube className="h-6 w-6 text-gray-300 group-hover:text-red-400 transition-all duration-300" />
                    <span className="text-xs mt-1 opacity-70 group-hover:opacity-100">
                      YouTube
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Support - Mobile */}
          <div className="bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50">
            <div
              className="p-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("support")}
            >
              <h3 className="text-lg font-bold flex items-center">
                <span className="text-green-400 mr-2">Support</span>
              </h3>
              {openSection === "support" ? (
                <ChevronUp className="h-5 w-5 text-green-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-green-400" />
              )}
            </div>

            {openSection === "support" && (
              <div className="p-4 pt-0 border-t border-gray-700/50 space-y-3">
                <Link
                  href="/documentation"
                  className="flex items-center py-2 px-3 rounded-md hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <Code className="h-5 w-5 text-green-500 mr-3 opacity-70 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Documentation
                  </span>
                </Link>

                <Link
                  href="/faq"
                  className="flex items-center py-2 px-3 rounded-md hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <HelpCircle className="h-5 w-5 text-green-500 mr-3 opacity-70 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    FAQs
                  </span>
                </Link>

                <Link
                  href="/support"
                  className="flex items-center py-2 px-3 rounded-md hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <BookOpen className="h-5 w-5 text-green-500 mr-3 opacity-70 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Support
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* Links - Mobile */}
          <div className="bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50">
            <div
              className="p-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("links")}
            >
              <h3 className="text-lg font-bold flex items-center">
                <span className="text-orange-400 mr-2">Links</span>
              </h3>
              {openSection === "links" ? (
                <ChevronUp className="h-5 w-5 text-orange-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-orange-400" />
              )}
            </div>

            {openSection === "links" && (
              <div className="p-4 pt-0 border-t border-gray-700/50 space-y-3">
                <Link
                  href="/about"
                  className="flex items-center py-2 px-3 rounded-md hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <ExternalLink className="h-5 w-5 text-orange-500 mr-3 opacity-70 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    About Us
                  </span>
                </Link>

                <Link
                  href="/terms"
                  className="flex items-center py-2 px-3 rounded-md hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <FileText className="h-5 w-5 text-orange-500 mr-3 opacity-70 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Terms & Conditions
                  </span>
                </Link>

                <Link
                  href="/privacy"
                  className="flex items-center py-2 px-3 rounded-md hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <Shield className="h-5 w-5 text-orange-500 mr-3 opacity-70 group-hover:opacity-100" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Privacy Policy
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Grid - Hidden on Mobile */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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

              <p className="flex items-start">
                <Phone className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-1" />
                <span>
                  <a
                    href="tel:+256770919175"
                    className="hover:text-orange-500 transition"
                  >
                    +256 770 919 975
                  </a>
                  <br />
                  <a
                    href="tel:+256780487574"
                    className="hover:text-orange-500 transition"
                  >
                    +256 780 487 574
                  </a>
                  <br />
                  <a
                    href="tel:+256776159775"
                    className="hover:text-orange-500 transition"
                  >
                    +256 776 159 775
                  </a>
                </span>
              </p>

              <p className="flex items-center">
                <Mail className="h-5 w-5 text-orange-500 mr-2" />
                <a
                  href="mailto:info@nilebitlabs.com"
                  className="hover:text-orange-500 transition"
                >
                  info@nilebitlabs.com
                </a>
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
                href="https://github.com/NileBit-Labs"
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-700/30 hover:bg-gradient-to-br hover:from-blue-900/50 hover:to-blue-700/50 transition-all duration-300 group"
              >
                <Github className="h-6 w-6 text-gray-300 group-hover:text-blue-400 transition-all duration-300" />
                <span className="text-xs mt-1 opacity-70 group-hover:opacity-100">
                  GitHub
                </span>
              </Link>

              <Link
                href="https://linkedin.com/company/nilebitlabs"
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-700/30 hover:bg-gradient-to-br hover:from-blue-900/50 hover:to-blue-600/50 transition-all duration-300 group"
              >
                <Linkedin className="h-6 w-6 text-gray-300 group-hover:text-blue-400 transition-all duration-300" />
                <span className="text-xs mt-1 opacity-70 group-hover:opacity-100">
                  LinkedIn
                </span>
              </Link>

              <Link
                href="https://twitter.com/nilebitlabs"
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-700/30 hover:bg-gradient-to-br hover:from-blue-800/50 hover:to-blue-500/50 transition-all duration-300 group"
              >
                <Twitter className="h-6 w-6 text-gray-300  group-hover:text-blue-400 transition-all duration-300" />
                <span className="text-xs mt-1 opacity-70 group-hover:opacity-100">
                  Twitter
                </span>
              </Link>

              <Link
                href="https://instagram.com/nilebitlabs"
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-700/30 hover:bg-gradient-to-br hover:from-purple-900/50 hover:to-pink-700/50 transition-all duration-300 group"
              >
                <Instagram className="h-6 w-6 text-gray-300 group-hover:text-pink-400 transition-all duration-300" />
                <span className="text-xs mt-1 opacity-70 group-hover:opacity-100">
                  Instagram
                </span>
              </Link>

              <Link
                href="https://facebook.com/nilebitlabs"
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-700/30 hover:bg-gradient-to-br hover:from-blue-900/50 hover:to-blue-600/50 transition-all duration-300 group"
              >
                <Facebook className="h-6 w-6 text-gray-300 group-hover:text-blue-400 transition-all duration-300" />
                <span className="text-xs mt-1 opacity-70 group-hover:opacity-100">
                  Facebook
                </span>
              </Link>

              <Link
                href="https://youtube.com/@nilebitlabs"
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
                href="/documentation"
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
                href="/support"
                className="flex items-center py-1 px-3 rounded-md hover:bg-gray-700/50 transition-all duration-300 group"
              >
                <BookOpen className="h-4 w-4 text-green-500 mr-2 opacity-70 group-hover:opacity-100" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  Support
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
            </div>
          </div>
        </div>

        {/* Tech Stack Showcase - Mobile Optimized */}
        <div className="mb-8 sm:mb-12">
          <div className="overflow-hidden py-4">
            <div className="flex animate-marquee space-x-4 sm:space-x-8">
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
                { name: "Kubernetes", color: "bg-blue-500" },
                { name: "Docker", color: "bg-cyan-500" },
                { name: "GraphQL", color: "bg-purple-500" },
                { name: "TypeScript", color: "bg-blue-700" },
                { name: "JavaScript", color: "bg-yellow-500" },
                { name: "Go", color: "bg-teal-500" },
                { name: "Java", color: "bg-red-500" },
                { name: "Scala", color: "bg-orange-500" },
                { name: "Swift", color: "bg-red-400" },
                { name: "Kotlin", color: "bg-purple-400" },
                { name: "PHP", color: "bg-indigo-500" },
                { name: "Laravel", color: "bg-red-600" },
                { name: "Django", color: "bg-green-700" },
                { name: "Flask", color: "bg-gray-600" },
                { name: "Ruby on Rails", color: "bg-red-700" },
                { name: "PostgreSQL", color: "bg-blue-800" },
                { name: "MySQL", color: "bg-blue-500" },
                { name: "MongoDB", color: "bg-green-500" },
                { name: "Redis", color: "bg-red-500" },
                { name: "Firebase", color: "bg-orange-500" },
                { name: "Supabase", color: "bg-green-400" },
                { name: "Next.js", color: "bg-black" },
                { name: "Nuxt.js", color: "bg-green-600" },
                { name: "Svelte", color: "bg-orange-500" },
                { name: "Vue.js", color: "bg-green-500" },
                { name: "Tailwind CSS", color: "bg-blue-400" },
                { name: "Bootstrap", color: "bg-purple-600" },
                { name: "Material UI", color: "bg-blue-700" },
                { name: "Chakra UI", color: "bg-teal-500" },
                { name: "Three.js", color: "bg-black" },
                { name: "WebGL", color: "bg-gray-700" },
                { name: "Unity", color: "bg-gray-800" },
                { name: "Unreal Engine", color: "bg-blue-800" },
                { name: "Blockchain", color: "bg-indigo-700" },
                { name: "Smart Contracts", color: "bg-purple-700" },
                { name: "IPFS", color: "bg-blue-600" },
                { name: "Hardhat", color: "bg-yellow-600" },
                { name: "Truffle", color: "bg-yellow-700" },
                { name: "Metamask", color: "bg-orange-600" },
                { name: "OpenAI", color: "bg-gray-500" },
                { name: "Hugging Face", color: "bg-yellow-400" },
                { name: "PyTorch", color: "bg-red-700" },
                { name: "FastAPI", color: "bg-green-600" },
                { name: "Spring Boot", color: "bg-green-700" },
                { name: "Express.js", color: "bg-gray-800" },
                { name: "NestJS", color: "bg-red-600" },
                { name: "RxJS", color: "bg-purple-500" },
                { name: "Jest", color: "bg-pink-500" },
                { name: "Cypress", color: "bg-green-500" },
                { name: "Mocha", color: "bg-brown-500" },
                { name: "Chai", color: "bg-red-500" },
                { name: "Jenkins", color: "bg-blue-600" },
                { name: "GitHub Actions", color: "bg-gray-900" },
                { name: "CircleCI", color: "bg-blue-500" },
                { name: "Travis CI", color: "bg-green-500" },
                { name: "Terraform", color: "bg-purple-600" },
                { name: "Ansible", color: "bg-red-600" },
                { name: "Puppet", color: "bg-orange-600" },
                { name: "Chef", color: "bg-green-600" },
                { name: "Elixir", color: "bg-purple-500" },
                { name: "Phoenix", color: "bg-orange-500" },
                { name: "Haskell", color: "bg-blue-500" },
                { name: "C++", color: "bg-blue-700" },
                { name: "C#", color: "bg-green-700" },
                { name: "F#", color: "bg-purple-700" },
                { name: "Perl", color: "bg-pink-500" },
                { name: "Lua", color: "bg-blue-400" },
                { name: "R", color: "bg-gray-500" },
                { name: "MATLAB", color: "bg-yellow-600" },
                { name: "Octave", color: "bg-blue-600" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full ${tech.color} text-white text-xs sm:text-sm font-medium whitespace-nowrap`}
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright & Bottom Section - Mobile Optimized */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © NileBit Labs {currentYear}. All Rights Reserved.
              </p>
            </div>

            <div className="flex space-x-4 flex-wrap justify-center">
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animated grid background and marquee */}
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
    </div>
  );
}
