import Link from "next/link";
import Image from "next/image";
import { projects } from "../../data/projects";

export default function PortfolioSection() {
  // Use the featured projects from your data structure
  const featuredProjects = projects.featured;

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <p className="mt-4 text-xl text-gray-300">
            Explore our latest work and success stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-orange-500 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2">{project.title}</h3>
                <p className="text-gray-300 mt-2 text-sm">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
