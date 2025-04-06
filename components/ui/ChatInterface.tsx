"use client";

import { useState, useEffect, useRef } from "react";
import { X, Send } from "lucide-react";

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

export default ChatInterface;
