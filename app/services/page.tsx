/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { technologies, services, process } from "../../data/services";
import Link from "next/link";

// Import the icons you'll need based on the process array
import {
  MagnifyingGlassIcon,
  ClipboardDocumentListIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  LifebuoyIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import React from "react";

// Icon mapping object
const iconMap = {
  MagnifyingGlassIcon,
  ClipboardDocumentListIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  LifebuoyIcon,
  ArrowPathIcon,
};

// Color mapping object
const colorMap = {
  blue: "bg-blue-500 text-blue-100",
  purple: "bg-purple-500 text-purple-100",
  orange: "bg-orange-500 text-orange-100",
  green: "bg-green-500 text-green-100",
  red: "bg-red-500 text-red-100",
  teal: "bg-teal-500 text-teal-100",
};

const colorBorderMap = {
  blue: "border-blue-500",
  purple: "border-purple-500",
  orange: "border-orange-500",
  green: "border-green-500",
  red: "border-red-500",
  teal: "border-teal-500",
};

const colorTextMap = {
  blue: "text-blue-600",
  purple: "text-purple-600",
  orange: "text-orange-600",
  green: "text-green-600",
  red: "text-red-600",
  teal: "text-teal-600",
};

export default function Services() {
  const [activeProcess, setActiveProcess] = useState(0);

  // Get appropriate icon component
  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName] || MagnifyingGlassIcon;
    return IconComponent;
  };

  // Navigation functions for process section
  const goToNextProcess = () => {
    setActiveProcess((prev) => (prev === process.length - 1 ? 0 : prev + 1));
  };

  const goToPrevProcess = () => {
    setActiveProcess((prev) => (prev === 0 ? process.length - 1 : prev - 1));
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-24 flex items-center justify-start bg-dark bg-opacity-80 bg-[url('/img/hero/services-bg.jpg')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-500 uppercase tracking-widest mb-4">
            Our Services
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transformative Technology Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            We deliver cutting-edge digital solutions tailored to your business
            needs, driving innovation and growth through strategic technology
            implementation.
          </p>
          <Link
            href="/contact"
            className="inline-block border-2 border-white text-white px-6 py-3 rounded-full hover:bg-orange-500 hover:border-orange-500 transition"
          >
            Request a Consultation
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-orange-500 hover:-translate-y-1"
              >
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 p-3 bg-orange-100 rounded-lg mr-4">
                    <service.icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <h2 className="text-2xl font-semibold text-orange-500">
                    {service.title}
                  </h2>
                </div>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    What we offer:
                  </h3>
                  <ul className="space-y-2">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section
        id="technologies"
        className="py-16 bg-dark text-white border-b-4 border-white shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech) => (
              <div key={tech.name} className="text-center p-2">
                <div className="w-12 h-12 mx-auto mb-2 bg-gray-800 rounded-lg flex items-center justify-center">
                  {tech.icon &&
                    React.createElement(tech.icon, {
                      className: "h-6 w-6 text-orange-500",
                    })}
                </div>
                <h3 className="text-base font-semibold text-orange-500 truncate">
                  {tech.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Redesigned with mobile support */}
      <section id="process" className="py-20 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Process</h2>

          {/* Mobile-friendly Process Navigation */}
          <div className="mb-12">
            {/* Process Navigation Controls */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={goToPrevProcess}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all"
                aria-label="Previous process step"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>

              <div className="text-center">
                <h3
                  className={`text-2xl font-bold mb-1 ${
                    colorTextMap[process[activeProcess].color]
                  }`}
                >
                  {process[activeProcess].title}
                </h3>
                <div className="flex justify-center space-x-2 mt-2">
                  {process.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveProcess(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === activeProcess
                          ? "bg-orange-500 scale-125"
                          : "bg-gray-300"
                      }`}
                      aria-label={`Go to process step ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={goToNextProcess}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all"
                aria-label="Next process step"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Process Steps - Horizontal Pills (Desktop Only) */}
            <div className="hidden md:block relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 transform -translate-y-1/2"></div>

              {/* Process Steps */}
              <div className="flex justify-between relative z-10">
                {process.map((step, index) => {
                  const IconComponent = getIcon(step.icon);
                  return (
                    <div
                      key={step.title}
                      className="flex flex-col items-center cursor-pointer transition-all"
                      onClick={() => setActiveProcess(index)}
                    >
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-all duration-300 ${
                          index === activeProcess
                            ? colorMap[step.color]
                            : "bg-white border-2 " + colorBorderMap[step.color]
                        }`}
                      >
                        <IconComponent
                          className={`h-8 w-8 ${
                            index === activeProcess
                              ? "text-white"
                              : colorTextMap[step.color]
                          }`}
                        />
                      </div>
                      <h3
                        className={`text-sm font-bold ${
                          index === activeProcess
                            ? colorTextMap[step.color]
                            : "text-gray-500"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active Process Description */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-10">
            <p className="text-lg text-gray-600">
              {process[activeProcess].description}
            </p>
          </div>

          {/* Subprocess Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {process[activeProcess].subprocesses.map((subprocess, index) => {
              const IconComponent = getIcon(process[activeProcess].icon);
              return (
                <div
                  key={subprocess.title}
                  className={`p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white border-l-4 ${
                    colorBorderMap[process[activeProcess].color]
                  } hover:-translate-y-1`}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                        colorMap[process[activeProcess].color]
                      }`}
                    >
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      {subprocess.title}
                    </h4>
                  </div>
                  <p className="text-gray-600">{subprocess.description}</p>
                </div>
              );
            })}
          </div>

          {/* Bottom Navigation Controls */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button
              onClick={goToPrevProcess}
              className={`flex items-center px-4 py-2 rounded-full border ${
                colorBorderMap[process[activeProcess].color]
              } ${
                colorTextMap[process[activeProcess].color]
              } hover:bg-gray-50 transition-all`}
            >
              <ChevronLeftIcon className="h-5 w-5 mr-1" />
              <span>Previous</span>
            </button>

            <span className="text-gray-400">
              {activeProcess + 1} of {process.length}
            </span>

            <button
              onClick={goToNextProcess}
              className={`flex items-center px-4 py-2 rounded-full border ${
                colorBorderMap[process[activeProcess].color]
              } ${
                colorTextMap[process[activeProcess].color]
              } hover:bg-gray-50 transition-all`}
            >
              <span>Next</span>
              <ChevronRightIcon className="h-5 w-5 ml-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
