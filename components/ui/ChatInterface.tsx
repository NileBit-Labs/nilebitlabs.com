"use client";

import { useState, useEffect, useRef } from "react";
import {
  X,
  Send,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  User,
  HelpCircle,
  Phone,
} from "lucide-react";
import Link from "next/link";

// FAQ data structure
interface FAQ {
  question: string;
  answer: string;
}

// Message types
interface Message {
  text: string;
  sender: "bot" | "user";
  type?: "suggestion" | "regular";
}

interface ChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatInterface = ({ isOpen, onClose }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi there! I'm NileBot, how can I help you today?",
      sender: "bot",
      type: "regular",
    },
  ]);
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Company info and FAQs from your pages
  const companyInfo = {
    founders: [
      {
        name: "Douglas Bagambe",
        role: "CEO & Co-Founder",
        expertise:
          "Technical vision and leadership with deep expertise in blockchain development and overall software engineering.",
      },
      {
        name: "Elioda Muhangi",
        role: "CTO & Co-Founder",
        expertise:
          "Leads AI and machine learning initiatives, driving innovation and technology strategy across projects.",
      },
      {
        name: "Collins Shema",
        role: "COO & Co-Founder",
        expertise:
          "Oversees operations and client engagement, ensuring seamless project delivery and user-centric design.",
      },
    ],
    contacts: {
      location: "Makerere Kavule, Kampala, Uganda",
      email: "info@nilebitlabs.com",
      phones: ["+256 770 919 975", "+256 780 487 574", "+256 776 159 775"],
      hours: "Monday - Friday: 9AM - 5PM, Saturday: 10AM - 2PM",
    },
    services: [
      "Full-stack software development (web and mobile)",
      "AI and machine learning solutions",
      "Blockchain development",
      "Cloud infrastructure and services",
      "Web application development",
      "Mobile app development (iOS & Android)",
      "UX/UI design and user experience optimization",
      "Technology consulting and strategic advisory",
    ],
  };

  const faqs: FAQ[] = [
    {
      question: "What services does NileBit Labs offer?",
      answer:
        "We specialize in full-stack web and mobile development, AI and machine learning solutions, blockchain development, cloud services, UX/UI design, and technology consulting tailored to your business needs.",
    },
    {
      question: "How can I get a quote for my project?",
      answer:
        "Simply submit your project details via our Contact form or email us directly. We’ll review your requirements and provide a tailored proposal and quote within 48 hours.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project durations depend on complexity and scope. Small to medium projects typically take 4-8 weeks, while large-scale or enterprise solutions can take 3-6 months or longer. A detailed timeline will be provided during project planning.",
    },
    {
      question: "Can you work with existing codebases?",
      answer:
        "Yes. We can integrate with or enhance your existing applications, provided we have access to the source code and necessary documentation to ensure smooth collaboration and development.",
    },
    {
      question: "What kind of post-launch support do you offer?",
      answer:
        "We offer flexible maintenance packages, including bug fixes, feature updates, performance optimizations, and ongoing technical support to keep your applications running smoothly.",
    },
    {
      question: "How do I report a technical issue or request support?",
      answer:
        "Contact our support team at support@nilebitlabs.com with a detailed description of the issue, relevant screenshots or error messages, and your contact information for prompt assistance.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept bank transfers, credit and debit cards, and mobile money payments (such as MTN Mobile Money and Airtel Money). Detailed payment instructions will be included with your invoice.",
    },
    {
      question: "Can I cancel a project after it starts?",
      answer:
        "Cancellation terms are outlined in the contract. Typically, cancellations require a 30-day notice period and payment for work completed up to the cancellation date. Please contact us directly to discuss your situation.",
    },
    {
      question: "Who are the founders of NileBit Labs?",
      answer:
        "NileBit Labs was founded by three individuals, Douglas Bagambe (CEO, blockchain development and technical strategy), Elioda Muhangi (CTO, AI and machine learning), and Collins Shema (COO, operations and UX design). Together, they drive the company’s vision and growth.",
    },
    {
      question: "How can I contact NileBit Labs?",
      answer:
        "You can reach us via email at info@nilebitlabs.com, call any of our phone numbers (+256 770 919 975, +256 780 487 574, +256 776 159 775), or visit us at our office in Makerere Kavule, Kampala, Uganda during business hours.",
    },
    {
      question: "Which industries do you serve?",
      answer:
        "We serve clients across finance, healthcare, retail, logistics, and emerging sectors, providing tailored technology solutions to drive digital transformation and growth.",
    },
    {
      question: "Do you provide custom software development?",
      answer:
        "Absolutely. We specialize in custom full-stack software solutions tailored to your unique business needs, leveraging the latest technologies in blockchain, AI, and mobile/web development.",
    },
  ];

  // Common question suggestions
  const suggestions = [
    "What services do you offer?",
    "Tell me about your founders",
    "How can I contact you?",
    "How long does a project take?",
  ];

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setMessages([...messages, { text: suggestion, sender: "user" }]);
    processUserMessage(suggestion);
    setShowSuggestions(false);
  };

  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleSend = () => {
    if (input.trim() === "") return;

    // Add user message
    setMessages([...messages, { text: input, sender: "user" }]);
    processUserMessage(input);
    setInput("");
    setShowSuggestions(false);
  };

  const processUserMessage = (message: string) => {
    // Set typing indicator
    setIsTyping(true);

    // Process the message and generate response
    setTimeout(() => {
      setIsTyping(false);

      const lowerMsg = message.toLowerCase();

      // Check for founder information
      if (
        lowerMsg.includes("founder") ||
        lowerMsg.includes("team") ||
        lowerMsg.includes("who started")
      ) {
        const founderInfo = companyInfo.founders
          .map((f) => `${f.name} (${f.role}): ${f.expertise}`)
          .join("\n");
        setMessages((prev) => [
          ...prev,
          {
            text: `Our founding team consists of:\n\n${founderInfo}`,
            sender: "bot",
          },
        ]);
        return;
      }

      // Check for contact information
      if (
        lowerMsg.includes("contact") ||
        lowerMsg.includes("email") ||
        lowerMsg.includes("phone") ||
        lowerMsg.includes("reach")
      ) {
        setMessages((prev) => [
          ...prev,
          {
            text: `You can contact us at:\n\nEmail: ${companyInfo.contacts.email}\nPhone: ${companyInfo.contacts.phones[0]}\nLocation: ${companyInfo.contacts.location}\n\nOur working hours are ${companyInfo.contacts.hours}`,
            sender: "bot",
          },
        ]);
        return;
      }

      // Check for services
      if (
        lowerMsg.includes("service") ||
        lowerMsg.includes("offer") ||
        lowerMsg.includes("provide") ||
        lowerMsg.includes("do you do")
      ) {
        setMessages((prev) => [
          ...prev,
          {
            text: `At NileBit Labs, we offer the following services:\n\n${companyInfo.services.join(
              "\n"
            )}`,
            sender: "bot",
          },
        ]);
        return;
      }

      // Check for working hours
      if (
        lowerMsg.includes("hour") ||
        lowerMsg.includes("open") ||
        lowerMsg.includes("available") ||
        lowerMsg.includes("when")
      ) {
        setMessages((prev) => [
          ...prev,
          {
            text: `Our working hours are:\n\n${companyInfo.contacts.hours}`,
            sender: "bot",
          },
        ]);
        return;
      }

      // Check for project timeline
      if (
        lowerMsg.includes("long") ||
        lowerMsg.includes("time") ||
        lowerMsg.includes("duration") ||
        lowerMsg.includes("finish")
      ) {
        setMessages((prev) => [
          ...prev,
          {
            text: "Project timelines vary based on scope. Small projects may take 4-8 weeks, while complex solutions can take 3-6 months or more. We'll provide a detailed timeline during planning.",
            sender: "bot",
          },
        ]);
        return;
      }

      // Check FAQ responses
      for (const faq of faqs) {
        // Simple keyword matching
        const questionWords = faq.question.toLowerCase().split(" ");
        const messageWords = lowerMsg.split(" ");

        // Count matching keywords
        const matches = questionWords.filter(
          (word) => word.length > 3 && messageWords.includes(word)
        ).length;

        if (matches >= 2 || lowerMsg.includes(faq.question.toLowerCase())) {
          setMessages((prev) => [...prev, { text: faq.answer, sender: "bot" }]);
          return;
        }
      }

      // Default response for unrecognized queries
      setMessages((prev) => [
        ...prev,
        {
          text: "I don't have all the answers yet as I'm still learning. Would you like to speak with our team directly?",
          sender: "bot",
        },
      ]);

      // Add contact form suggestion after a short delay
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "Contact our team",
            sender: "bot",
            type: "suggestion",
          },
        ]);
      }, 1000);
    }, 1500);
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-4 md:right-8 w-[350px] md:w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden max-h-[calc(100vh-120px)]">
      {/* Chat header */}
      <div className="bg-gray-900 text-white px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center mr-3 shadow-lg">
            <span className="text-white font-bold text-lg">NB</span>
          </div>
          <div>
            <span className="font-semibold text-lg">NileBot Assistant</span>
            <div className="flex items-center text-xs text-gray-300">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
              <span>Online</span>
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-gray-300 hover:text-white transition-colors p-1 rounded-full hover:bg-gray-700"
        >
          <X size={20} />
        </button>
      </div>

      {/* Chat messages */}
      <div
        className="flex-1 p-4 overflow-y-auto bg-gray-50 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
        style={{ minHeight: "200px", maxHeight: "calc(100vh - 250px)" }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-3 flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "bot" && msg.type !== "suggestion" && (
              <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                <span className="text-white font-bold text-xs">NB</span>
              </div>
            )}

            {msg.type === "suggestion" ? (
              <Link
                href="/contact#form"
                className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition-colors shadow-md flex items-center justify-center text-sm font-medium"
              >
                <MessageSquare size={16} className="mr-1" />
                {msg.text}
              </Link>
            ) : (
              <div
                className={`max-w-[80%] p-3 rounded-2xl shadow-sm ${
                  msg.sender === "user"
                    ? "bg-orange-100 text-gray-800 rounded-tr-none border border-orange-200"
                    : "bg-white text-gray-800 rounded-tl-none border border-gray-200"
                }`}
              >
                <div className="whitespace-pre-line text-sm">{msg.text}</div>
              </div>
            )}

            {msg.sender === "user" && (
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center ml-2 mt-1 flex-shrink-0">
                <User size={16} className="text-gray-500" />
              </div>
            )}
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex mb-3">
            <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center mr-2 flex-shrink-0">
              <span className="text-white font-bold text-xs">NB</span>
            </div>
            <div className="bg-white p-3 rounded-2xl shadow-sm rounded-tl-none border border-gray-200 flex items-center">
              <div className="flex space-x-1">
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggestion chips */}
      {showSuggestions && (
        <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-2">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="bg-white border border-gray-300 text-sm text-gray-700 py-1 px-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quick access buttons */}
      <div className="px-4 py-2 bg-gray-100 border-t border-gray-200 flex justify-between text-xs">
        <button
          onClick={() => setShowSuggestions(!showSuggestions)}
          className="flex items-center text-gray-600 hover:text-orange-500"
        >
          {showSuggestions ? (
            <>
              <ChevronDown size={14} className="mr-1" /> Hide suggestions
            </>
          ) : (
            <>
              <ChevronUp size={14} className="mr-1" /> Show suggestions
            </>
          )}
        </button>

        <div className="flex space-x-4">
          <Link
            href="/faq"
            className="flex items-center text-gray-600 hover:text-orange-500"
          >
            <HelpCircle size={14} className="mr-1" /> FAQs
          </Link>
          <Link
            href="/contact"
            className="flex items-center text-gray-600 hover:text-orange-500"
          >
            <Phone size={14} className="mr-1" /> Contact
          </Link>
        </div>
      </div>

      {/* Input area */}
      <div className="border-t border-gray-200 p-3 bg-white flex items-center">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="flex-1 bg-gray-100 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 placeholder-gray-500"
        />
        <button
          onClick={handleSend}
          disabled={input.trim() === ""}
          className={`ml-2 p-2 rounded-full ${
            input.trim() === ""
              ? "bg-gray-200 text-gray-400"
              : "bg-orange-500 text-white hover:bg-orange-600"
          } transition-colors flex items-center justify-center`}
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
