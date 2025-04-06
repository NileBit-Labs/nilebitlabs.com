"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    service: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted!"); // Replace with actual form submission logic
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Contact Us</h1>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Company</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              placeholder="Your company name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Role</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg"
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              placeholder="Your role"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">
              What Can We Help You With?
            </label>
            <select
              className="w-full p-3 border rounded-lg"
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
            >
              <option value="">Select a service</option>
              <option value="custom-software">
                Custom Software Development
              </option>
              <option value="ai">AI & Machine Learning</option>
              <option value="cloud">Cloud Solutions</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">
              Tell Us About Your Project
            </label>
            <textarea
              className="w-full p-3 border rounded-lg"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Project description"
              rows={5}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
          >
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
}
