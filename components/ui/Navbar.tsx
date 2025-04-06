/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Search, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const navbarRef = useRef(null);
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);

  const checkScrollPosition = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    // Check if user is at the top or has scrolled past a certain point
    setIsAtTop(position < 100); // Change to white after scrolling 100px
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    checkScrollPosition(); // Initial check

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

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
      title: "Other",
      href: "/other",
      hasSubmenu: true,
      submenu: [
        { title: "About Us", href: "/about" },
        { title: "Careers", href: "/careers" },
        { title: "Research", href: "/research" },
        { title: "Blog", href: "/blog" },
        { title: "Contact Us", href: "/contact" },
      ],
    },
  ];

  return (
    <nav
      ref={navbarRef}
      className={`w-full z-50 fixed transition-all duration-300 ${
        isAtTop ? "bg-black text-white" : "bg-white text-gray-900 shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <div
                className={`relative transition-all duration-300 ${
                  isAtTop ? "text-white" : "text-gray-900"
                }`}
              >
                <div className="flex items-center">
                  {/* Logo Circle */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 border ${
                      isAtTop ? "border-orange-500" : "border-orange-500"
                    }`}
                  >
                    <span className="text-orange-500 text-lg">⚡</span>
                  </div>

                  {/* Text Logo */}
                  <div className="font-semibold tracking-wide text-lg uppercase">
                    NILEBIT LABS
                  </div>
                </div>
              </div>
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

          {/* Search button */}
          <div className="hidden md:flex items-center">
            <button
              className={`p-2 rounded-full flex items-center justify-center transition-colors duration-300 ${
                isAtTop
                  ? "text-white hover:text-orange-400"
                  : "text-gray-800 hover:text-orange-500"
              }`}
            >
              <Search size={20} />
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

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div
          className={`px-2 pt-2 pb-3 space-y-1 ${
            isAtTop ? "bg-black" : "bg-white"
          }`}
        >
          {menuItems.map((item, index) => (
            <div key={index}>
              <Link
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isAtTop
                    ? "text-white hover:bg-gray-800 hover:text-orange-400"
                    : "text-gray-800 hover:bg-gray-100 hover:text-orange-500"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>{item.title}</span>
                  {item.hasSubmenu && (
                    <>
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      <ChevronDown size={16} />
                    </>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
