// components/ui/ProjectCard.js
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  project,
  darkMode = false,
  withLink = false,
}) {
  const bgColor = darkMode ? "bg-gray-800" : "bg-white";
  const textColor = darkMode ? "text-white" : "text-gray-900";
  const descriptionColor = darkMode ? "text-gray-300" : "text-gray-600";
  const tagBgColor = darkMode ? "bg-gray-700" : "bg-gray-100";
  const tagTextColor = darkMode ? "text-gray-300" : "text-gray-600";

  return (
    <div
      className={`${bgColor} rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow`}
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
        {project.category && (
          <span className="text-xs text-orange-500 uppercase tracking-wider">
            {project.category}
          </span>
        )}
        <h4 className={`text-xl font-bold mt-2 ${textColor}`}>
          {project.title}
        </h4>
        <p className={`${descriptionColor} mt-2`}>{project.description}</p>

        {project.technologies && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 ${tagBgColor} ${tagTextColor} text-xs rounded-full`}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {withLink && project.link && (
          <Link
            href={project.link}
            className="mt-4 inline-block text-orange-500 hover:underline"
          >
            View Project →
          </Link>
        )}
      </div>
    </div>
  );
}
