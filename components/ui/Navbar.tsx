/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, MessageSquare, ArrowRight } from "lucide-react";
import ChatInterface from "./ChatInterface";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const navbarRef = useRef(null);
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<number | null>(
    null
  );
  const [isChatOpen, setIsChatOpen] = useState(false);

  const checkScrollPosition = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    setIsAtTop(position < 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    checkScrollPosition();

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle mobile link click - close menu after navigation
  const handleMobileNavClick = () => {
    setIsOpen(false);
    setExpandedMobileMenu(null);
  };

  const menuItems = [
    {
      title: "Home",
      href: "/",
      hasSubmenu: false,
    },
    {
      title: "Services",
      href: "/services",
      hasSubmenu: true,
      submenu: [
        { title: "Blockchain Development", href: "/services/blockchain" },
        { title: "Smart Contract Audits", href: "/services/smart-contracts" },
        { title: "AI/ML Solutions", href: "/services/ai-ml" },
        { title: "Web3 Development", href: "/services/web3" },
      ],
    },
    {
      title: "Solutions",
      href: "/solutions",
      hasSubmenu: true,
      submenu: [
        { title: "DeFi Platforms", href: "/solutions/defi" },
        { title: "NFT Marketplaces", href: "/solutions/nft" },
        { title: "Enterprise Blockchain", href: "/solutions/enterprise" },
        { title: "AI Integration", href: "/solutions/ai" },
      ],
    },
    {
      title: "About Us",
      href: "/about",
      hasSubmenu: true,
      submenu: [
        {
          title: "Our Mandate, Vision & Mission",
          href: "/about#mandate-vision-mission",
        },
        { title: "Our Team", href: "/about#team" },
        { title: "Video Introduction", href: "/about#video-introduction" },
        { title: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Blog",
      href: "/blog",
      hasSubmenu: false,
    },
  ];

  return (
    <>
      <nav
        ref={navbarRef}
        className={`w-full z-50 fixed transition-all duration-300 ${
          isAtTop
            ? "bg-gray-900 text-white backdrop-blur-sm"
            : "bg-white text-gray-900 shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <img
                  src={
                    isAtTop ? "/nilebit-logo-darkmode.svg" : "/nilebit-logo.svg"
                  }
                  alt="NileBit Labs Logo"
                  className="h-20 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => item.hasSubmenu && setHoveredMenu(index)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium flex items-center relative ${
                      isAtTop
                        ? "text-white hover:text-orange-400"
                        : "text-gray-800 hover:text-orange-500"
                    }`}
                  >
                    {item.title}
                    {item.hasSubmenu && (
                      <span className="ml-1">
                        <ChevronDown
                          size={16}
                          className={
                            hoveredMenu === index
                              ? "transform rotate-180 transition-transform duration-300"
                              : "transition-transform duration-300"
                          }
                        />
                      </span>
                    )}
                    {item.hasSubmenu && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
                    )}
                  </Link>

                  {/* Dropdown for submenu */}
                  {item.hasSubmenu && (
                    <div
                      className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ${
                        hoveredMenu === index
                          ? "opacity-100 translate-y-0 visible"
                          : "opacity-0 translate-y-2 invisible"
                      }`}
                    >
                      <div className="py-1">
                        {item.submenu &&
                          item.submenu.map((subItem, idx) => (
                            <Link
                              key={idx}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-500"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Chat Bot Button */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => setIsChatOpen(!isChatOpen)}
                className={`flex items-center px-3 py-1.5 rounded-full transition-colors duration-300 ${
                  isAtTop
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                } ${isChatOpen ? "ring-2 ring-orange-300" : ""}`}
              >
                <MessageSquare size={16} className="mr-1" />
                <span className="text-sm font-medium">NileBot</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-md focus:outline-none transition-colors duration-300 ${
                  isAtTop
                    ? "text-white hover:bg-gray-700"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu - Reimagined */}
        <div
          className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Menu Panel */}
          <div
            className={`absolute right-0 top-0 h-full w-4/5 max-w-sm bg-gray-900 transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Panel header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <img
                src="/nilebit-logo-darkmode.svg"
                alt="NileBit Labs Logo"
                className="h-12 w-auto"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full bg-gray-800 text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Menu items */}
            <div className="overflow-y-auto max-h-screen pb-20">
              {menuItems.map((item, index) => (
                <div key={index} className="border-b border-gray-800">
                  {item.hasSubmenu ? (
                    <>
                      <button
                        onClick={() =>
                          setExpandedMobileMenu(
                            expandedMobileMenu === index ? null : index
                          )
                        }
                        className="w-full px-4 py-4 flex items-center justify-between text-white hover:bg-gray-800"
                      >
                        <span className="font-medium">{item.title}</span>
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                          <ChevronDown
                            size={16}
                            className={`transform transition-transform duration-300 ${
                              expandedMobileMenu === index ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                      </button>

                      {/* Submenu with smooth transition */}
                      <div
                        className={`bg-gray-800 overflow-hidden transition-all duration-300 ${
                          expandedMobileMenu === index
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.submenu &&
                          item.submenu.map((subItem, subIdx) => (
                            <Link
                              key={subIdx}
                              href={subItem.href}
                              onClick={handleMobileNavClick}
                              className="block px-8 py-3 text-gray-300 hover:text-orange-400 hover:bg-gray-700 flex items-center"
                            >
                              <ArrowRight
                                size={12}
                                className="mr-2 text-orange-500"
                              />
                              {subItem.title}
                            </Link>
                          ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={handleMobileNavClick}
                      className="block px-4 py-4 text-white hover:bg-gray-800 font-medium"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Chat Button */}
              <div className="p-4">
                <button
                  onClick={() => {
                    setIsChatOpen(!isChatOpen);
                    setIsOpen(false);
                  }}
                  className="w-full py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium flex items-center justify-center"
                >
                  <MessageSquare size={18} className="mr-2" />
                  <span>NileBot</span>
                </button>
              </div>
            </div>
            {/* Contact info */}
            <div className="p-4 mt-4 bg-gray-800 text-gray-300 text-sm fixed bottom-0 w-full">
              <h3 className="font-medium text-white mb-2">Contact Us</h3>
              <a
                href="mailto:info@nilebitlabs.com"
                className="block text-orange-400 hover:underline"
              >
                info@nilebitlabs.com
              </a>
              <a
                href="tel:+256770919175"
                className="mt-1 block text-orange-400 hover:underline"
              >
                (256)770-919175
              </a>
              <div className="mt-4 flex space-x-3">
                {/* Social icons would go here */}
                <a
                  href="https://twitter.com/nilebits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 hover:bg-orange-500 text-orange-500 hover:text-white p-3 rounded-full transition"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href="https://facebook.com/nilebits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 hover:bg-orange-500 text-orange-500 hover:text-white p-3 rounded-full transition"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href="https://linkedin.com/company/nilebits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 hover:bg-orange-500 text-orange-500 hover:text-white p-3 rounded-full transition"
                >
                  <FaLinkedinIn size={18} />
                </a>
                <a
                  href="https://github.com/nilebits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 hover:bg-orange-500 text-orange-500 hover:text-white p-3 rounded-full transition"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://instagram.com/nilebits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 hover:bg-orange-500 text-orange-500 hover:text-white p-3 rounded-full transition"
                >
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Chat Interface */}
      <ChatInterface isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}
