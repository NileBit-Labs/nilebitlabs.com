import Link from "next/link";
import Image from "next/image";
import { projects, projectCategories } from "../../data/projects";

export default function Portfolio() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-24 flex items-center justify-start bg-dark bg-opacity-80 bg-[url('/img/hero/portfolio-bg.jpg')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-500 uppercase tracking-widest mb-4">
            Portfolio
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Digital Footprint
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Explore our diverse range of projects showcasing innovation,
            technical excellence, and transformative solutions across various
            industries and technologies.
          </p>
          <Link
            href="/contact"
            className="inline-block border-2 border-white text-white px-6 py-3 rounded-full hover:bg-orange-500 hover:border-orange-500 transition"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Featured Projects Carousel */}
      <section id="featured-projects" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.featured.map((project) => (
              <div
                key={project.id}
                className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
              >
                <div className="h-48 bg-gray-600 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-orange-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2">{project.title}</h3>
                  <p className="text-gray-300 mt-2">{project.description}</p>
                  <Link
                    href={project.link}
                    className="mt-4 inline-block text-orange-500 hover:underline"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories Navigation */}
      <section
        id="project-categories-nav"
        className="py-12 bg-gray-300 text-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Explore Our Work By Category
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {projectCategories.map((category) => (
              <a
                key={category.id}
                href={category.href}
                className="px-6 py-3 bg-gray-100 hover:bg-orange-500 hover:text-white rounded-full transition"
              >
                {category.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Blockchain Category */}
      <section id="blockchain" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Blockchain & Web3
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.blockchain.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-200 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI & ML Category */}
      <section id="ai-ml" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-bold">AI & Machine Learning</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.aiMl.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-700 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold">{project.title}</h4>
                  <p className="text-gray-300 mt-2">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Websites Category */}
      <section id="websites" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Websites</h2>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Corporate & E-Commerce
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.websites.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 bg-gray-200 relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 mt-2">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Web Applications Category */}
      <section id="web-apps" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-bold">Web Applications</h2>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-orange-500 mb-4">
              Enterprise Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.webApps.enterprise.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 bg-gray-700 relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold">{project.title}</h4>
                    <p className="text-gray-300 mt-2">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-orange-500 mb-4">
              SaaS Applications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.webApps.saas.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 bg-gray-700 relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold">{project.title}</h4>
                    <p className="text-gray-300 mt-2">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Apps Category */}
      <section id="mobile-apps" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Mobile Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.mobileApps.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-200 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with NileBit Labs to transform your ideas into
            groundbreaking digital solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Start a Project
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
