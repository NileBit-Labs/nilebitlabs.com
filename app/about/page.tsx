/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-24 flex items-center justify-start bg-dark bg-opacity-80 bg-[url('/img/hero/tech-bg.jpg')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-500 uppercase tracking-widest mb-4">
            About NileBit Labs
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Innovating the Future of Technology
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            At NileBit Labs, we are a dynamic team passionate about shaping the
            future through innovation. Specializing in blockchain development,
            artificial intelligence, machine learning, and full-stack web and
            mobile development, we create scalable, secure, and cutting-edge
            digital solutions that empower businesses across diverse industries.
          </p>
          <Link
            href="/contact"
            className="inline-block border-2 border-white text-white px-6 py-3 rounded-full hover:bg-orange-500 hover:border-orange-500 transition"
          >
            Let's Talk
          </Link>
        </div>
      </section>

      {/* Mandate, Vision, and Mission Section */}
      <section
        id="mandate-vision-mission"
        className="py-16 bg-white text-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our Mandate, Vision & Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-orange-500 mb-4">
                Our Mandate
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We are mandated to deliver innovative, secure, and scalable
                software solutions that empower businesses to thrive in an
                increasingly digital and decentralized world. Through leveraging
                emerging technologies, we ensure our clients achieve operational
                excellence and sustained growth.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-orange-500 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We envision NileBit Labs as a global leader in technology
                innovation—pioneering solutions that reshape industries, drive
                meaningful impact, and open new horizons for our clients and
                communities worldwide.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-orange-500 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To partner closely with clients, combining expertise and
                collaboration to build transformative digital solutions. We
                relentlessly pursue excellence, delivering technology that is
                forward-thinking, reliable, and tailored to real-world business
                challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="py-16 bg-dark text-white border-b-4 border-white shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Douglas Bagambe */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                <Image
                  src="/img/team/douglas.jpg"
                  alt="Douglas Bagambe"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-orange-500">
                Douglas Bagambe
              </h3>
              <p className="text-gray-400">CEO & Co-Founder</p>
              <p className="text-gray-300 mt-2 leading-relaxed">
                Douglas sets the strategic direction of NileBit Labs and leads
                our business development efforts. With deep expertise in
                blockchain and software engineering, he ensures our solutions
                are both innovative and aligned with client goals.
              </p>
            </div>
            {/* Elioda Muhangi */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                <Image
                  src="/img/team/elioda.jpg"
                  alt="Elioda Muhangi"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-orange-500">
                Elioda Muhangi
              </h3>
              <p className="text-gray-400">CTO & Co-Founder</p>
              <p className="text-gray-300 mt-2 leading-relaxed">
                Elioda drives our technology strategy and product innovation. He
                leads research and development in AI, machine learning, and
                full-stack development to create scalable, high-quality digital
                solutions.
              </p>
            </div>
            {/* Collins Shema */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                <Image
                  src="/img/team/shema.jpg"
                  alt="Collins Shema"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-orange-500">
                Collins Shema
              </h3>
              <p className="text-gray-400">COO & Co-Founder</p>
              <p className="text-gray-300 mt-2 leading-relaxed">
                Collins manages our operations and project delivery processes,
                ensuring seamless execution and exceptional client satisfaction
                through efficient workflows and quality assurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section id="video-introduction" className="py-16 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Discover NileBit Labs
          </h2>
          <div className="max-w-4xl mx-auto">
            <div
              className="relative transform transition-transform duration-500 hover:scale-[1.02] group"
              style={{ paddingBottom: "56.25%" /* 16:9 Aspect Ratio */ }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-lg z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <video
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/vid/intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="text-center mt-6">
              <p className="text-orange-500 font-medium text-lg tracking-wide">
                NileBit Labs Introduction Video
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
