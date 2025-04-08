/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Link from "next/link";
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

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    service: "",
    description: "",
    newsletter: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with actual form submission logic
    console.log("Form data submitted:", formData);
    setFormSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        role: "",
        service: "",
        description: "",
        newsletter: false,
      });
    }, 3000);
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-24 bg-dark bg-opacity-80 bg-[url('/img/hero/contact-bg.jpg')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-500 uppercase tracking-widest mb-4">
            Get in Touch
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact NileBit Labs
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Our team of experts is
            here to help you navigate the digital landscape.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information Column */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Connect With Us
                </h2>

                {/* Contact Details */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="text-orange-500 mr-4 mt-1">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">
                        Makerere Kavule
                        <br />
                        Kampala, Uganda
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-orange-500 mr-4 mt-1">
                      <FaEnvelope size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email Us</h3>
                      <a
                        href="mailto:douglasbagambe4@gmail.com"
                        className="text-gray-600 hover:text-orange-500 transition"
                      >
                        info@nilebitlabs.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-orange-500 mr-4 mt-1">
                      <FaPhoneAlt size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Call Us</h3>
                      <Link
                        href="tel:+256770919175"
                        className="text-gray-600 hover:text-orange-500 transition"
                      >
                        +256 770 919 975
                      </Link>
                      <br />
                      <Link
                        href="tel:+256780487574"
                        className="text-gray-600 hover:text-orange-500 transition"
                      >
                        +256 780 487 574
                      </Link>
                      <br />
                      <Link
                        href="tel:+256776159775"
                        className="text-gray-600 hover:text-orange-500 transition"
                      >
                        +256 776 159 775
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-orange-500 mr-4 mt-1">
                      <FaClock size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Working Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9AM - 5PM
                        <br />
                        Saturday: 10AM - 2PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://twitter.com/nilebitlabs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 hover:bg-orange-500 text-gray-700 hover:text-white p-3 rounded-full transition"
                    >
                      <FaTwitter size={18} />
                    </a>
                    <a
                      href="https://facebook.com/nilebitlabs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 hover:bg-orange-500 text-gray-700 hover:text-white p-3 rounded-full transition"
                    >
                      <FaFacebookF size={18} />
                    </a>
                    <a
                      href="https://linkedin.com/company/nilebitlabs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 hover:bg-orange-500 text-gray-700 hover:text-white p-3 rounded-full transition"
                    >
                      <FaLinkedinIn size={18} />
                    </a>
                    <a
                      href="https://github.com/nilebitlabs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 hover:bg-orange-500 text-gray-700 hover:text-white p-3 rounded-full transition"
                    >
                      <FaGithub size={18} />
                    </a>
                    <a
                      href="https://instagram.com/nilebitlabs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 hover:bg-orange-500 text-gray-700 hover:text-white p-3 rounded-full transition"
                    >
                      <FaInstagram size={18} />
                    </a>
                    <a
                      href="https://youtube.com/@nilebitlabs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 hover:bg-orange-500 text-gray-700 hover:text-white p-3 rounded-full transition"
                    >
                      <FaYoutube size={18} />{" "}
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 bg-gray-50 p-2 rounded-lg shadow-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.75772082334!2d32.5472752!3d0.3475964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f9b338969%3A0x8af89cfafc0b345d!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            {/* Contact Form Column */}
            <div id="form" className="lg:col-span-2">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>

                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
                    <p className="font-medium">Thank you for your message!</p>
                    <p>We'll get back to you as soon as possible.</p>
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields - Two columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  {/* Contact Details - Two columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  {/* Company Details - Two columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Company
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Your Role
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                        value={formData.role}
                        onChange={(e) =>
                          setFormData({ ...formData, role: e.target.value })
                        }
                        placeholder="Your role"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      What Can We Help You With?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="custom-software">
                        Custom Software Development
                      </option>
                      <option value="ai">AI & Machine Learning</option>
                      <option value="blockchain">Blockchain Development</option>
                      <option value="cloud">Cloud Solutions</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="ux">UX/UI Design</option>
                      <option value="consulting">Technology Consulting</option>
                      <option value="other">Other Services</option>
                    </select>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Tell Us About Your Project{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      placeholder="Please describe your project or inquiry"
                      rows={5}
                      required
                    />
                  </div>

                  {/* Newsletter Subscription */}
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="mt-1 h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                      checked={formData.newsletter}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          newsletter: e.target.checked,
                        })
                      }
                    />
                    <label
                      htmlFor="newsletter"
                      className="ml-2 block text-gray-700"
                    >
                      Subscribe to our newsletter for updates on tech trends,
                      company news, and industry insights.
                    </label>
                  </div>

                  {/* Privacy Policy */}
                  <div className="text-sm text-gray-600">
                    <p>
                      By submitting this form, you agree to our{" "}
                      <Link
                        href="/privacy-policy"
                        className="text-orange-500 hover:underline"
                      >
                        Privacy Policy
                      </Link>{" "}
                      and consent to NileBit Labs contacting you regarding your
                      inquiry.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition font-medium"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Get the latest tech trends, industry insights, and company updates
              delivered straight to your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-6 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-orange-500 flex-grow max-w-md"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How soon can you start on my project?
              </h3>
              <p className="text-gray-600">
                We typically begin new projects within 1-2 weeks of finalizing
                project scope and agreements. For urgent needs, we may be able
                to accommodate faster timelines.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What is your pricing structure?
              </h3>
              <p className="text-gray-600">
                We offer flexible pricing models including fixed price, time and
                materials, and retainer options. After understanding your
                project needs, we'll recommend the most appropriate model.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Do you provide ongoing support after project completion?
              </h3>
              <p className="text-gray-600">
                Yes, we offer various maintenance and support packages to ensure
                your solution continues to perform optimally after launch.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Can you work with our in-house team?
              </h3>
              <p className="text-gray-600">
                Absolutely! We frequently collaborate with in-house development
                teams, providing specialized expertise where needed while
                integrating seamlessly with your existing workflows.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">
              Don't see your question answered?
            </p>
            <Link
              href="/faq"
              className="inline-block border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition"
            >
              More FAQs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
