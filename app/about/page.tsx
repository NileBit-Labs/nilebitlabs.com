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
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            At NileBit Labs, we are committed to transforming ideas into
            powerful digital experiences through innovative software development
            and strategic technology solutions.
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
                Mandate
              </h3>
              <p className="text-gray-600">
                To deliver cutting-edge software solutions that empower
                businesses to thrive in a digital-first world, ensuring
                scalability, security, and innovation at every step.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-orange-500 mb-4">
                Vision
              </h3>
              <p className="text-gray-600">
                To be a global leader in technology innovation, creating
                software that shapes the future and drives meaningful impact
                across industries.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-orange-500 mb-4">
                Mission
              </h3>
              <p className="text-gray-600">
                To partner with our clients in building transformative digital
                solutions through collaboration, expertise, and a relentless
                pursuit of excellence.
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
                {/* Placeholder for team member image */}
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
              <p className="text-gray-400">Co-Founder</p>
              <p className="text-gray-300 mt-2">
                Douglas drives the technical vision at NileBit Labs, with a
                great experience in Blockchain development and overall software
                engineering.
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
              <p className="text-gray-400">Co-Founder</p>
              <p className="text-gray-300 mt-2">
                Elioda leads our AI and machine learning initiatives, bringing
                innovative solutions to complex challenges.
              </p>
            </div>
            {/* Shema Collins */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                <Image
                  src="/img/team/shema.jpg"
                  alt="Shema Collins"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-orange-500">
                Collins Shema
              </h3>
              <p className="text-gray-400">Co-Founder</p>
              <p className="text-gray-300 mt-2">
                Shema ensures our solutions are user-centric, crafting seamless
                and intuitive experiences for our clients.
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
