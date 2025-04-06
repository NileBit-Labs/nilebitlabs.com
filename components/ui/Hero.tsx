/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
// components/ui/Hero.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
}: {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovering, setIsHovering] = useState<number | null>(null);

  const images = [
    "/img/photo/anh1.webp",
    "/img/photo/anh2.webp",
    "/img/photo/anh3.webp",
  ];

  const teamFeatures = [
    {
      title: "Software Engineers",
      description:
        "Our expert engineers build robust, scalable solutions with cutting-edge technologies.",
    },
    {
      title: "Solution Architects",
      description:
        "Designing comprehensive architectures that align with your business objectives.",
    },
    {
      title: "UX Specialists",
      description:
        "Creating intuitive, engaging, and accessible user experiences for all your digital products.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Image Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              className="w-full h-full object-cover"
              alt={`NileBit Labs - Slide ${index + 1}`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-full">
        <div className="flex flex-col lg:flex-row items-center h-full">
          <div className="lg:w-2/3 text-white pt-20 lg:pt-0">
            <div className="mb-8">
              <span className="text-xl md:text-2xl font-light">
                <span className="text-white">The Future of</span>{" "}
                <span className="text-orange-500">Technology</span>
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              <span className="uppercase text-white">We Build Innovative</span>
              <br />
              <span className="text-orange-500 italic">Software Solutions</span>
            </h1>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Link
                href={ctaLink}
                className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                {ctaText}
              </Link>
              <p className="text-gray-300 max-w-md">
                {subtitle ||
                  "Transforming ideas into powerful digital experiences through innovative software development and strategic technology consulting."}
              </p>
            </div>
          </div>

          {/* Interactive Team Features */}
          <div className="hidden lg:block lg:w-1/3 h-full relative">
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
              {teamFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="relative my-6 cursor-pointer"
                  onMouseEnter={() => setIsHovering(index)}
                  onMouseLeave={() => setIsHovering(null)}
                >
                  {/* Hover Card */}
                  <div
                    className={`absolute right-full mr-4 bg-white text-black p-4 w-64 shadow-lg transition-opacity duration-300 ${
                      isHovering === index
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <h5 className="text-lg font-bold mb-2">{feature.title}</h5>
                    <div className="w-12 h-1 bg-orange-500 mb-2"></div>
                    <p className="text-sm">{feature.description}</p>
                  </div>

                  {/* Plus Button */}
                  <div className="flex items-center justify-end bg-black/40 backdrop-blur-sm p-3 hover:bg-orange-500/80 transition-colors duration-300">
                    <span className="text-2xl font-bold mr-2">+</span>
                    <h6 className="text-white">{feature.title}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-2 h-2 rounded-full ${
              index === activeSlide ? "bg-orange-500 w-6" : "bg-white"
            } transition-all duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
