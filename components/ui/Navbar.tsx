/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, MessageSquare, Send } from "lucide-react";

// Simple Chat Component
interface ChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatInterface = ({ isOpen, onClose }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm NileBot, how can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (input.trim() === "") return;

    // Add user message
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for your message! Our team is currently developing my AI capabilities. For now, I'm just a demo, but soon I'll be able to answer your blockchain and tech questions in real-time.",
          sender: "bot",
        },
      ]);
    }, 1000);
  };

  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle Enter key press
  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-4 md:right-8 w-80 md:w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50 flex flex-col">
      {/* Chat header */}
      <div className="bg-black text-white p-3 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center mr-2">
            <span className="text-white font-bold">NB</span>
          </div>
          <span className="font-medium">NileBot Assistant</span>
        </div>
        <button onClick={onClose} className="text-gray-300 hover:text-white">
          <X size={18} />
        </button>
      </div>

      {/* Chat messages */}
      <div className="flex-1 p-4 h-64 overflow-y-auto bg-gray-50">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-3 flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                msg.sender === "user"
                  ? "bg-orange-500 text-white rounded-br-none"
                  : "bg-gray-200 text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="border-t border-gray-200 p-3 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          onClick={handleSend}
          className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const navbarRef = useRef(null);
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

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
    <>
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

            {/* Mobile Chat Button */}
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className={`w-full mt-2 flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium bg-orange-500 text-white`}
            >
              <MessageSquare size={16} className="mr-1" />
              <span>NileBot</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Chat Interface */}
      <ChatInterface isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}
