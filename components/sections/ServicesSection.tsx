import Link from "next/link";
import { CodeBracketIcon, BeakerIcon } from '@heroicons/react/24/outline';

export default function ServicesSection() {
  const featuredServices = [
    {
      title: "Custom Software Development",
      description: "Tailored solutions to meet your business needs, built with the latest technologies.",
      icon: CodeBracketIcon,
      details: [
        "Full-stack web and mobile applications",
        "Legacy system modernization",
        "API development and integration"
      ]
    },
    {
      title: "AI & Machine Learning",
      description: "Leverage AI to automate processes and gain insights from your data.",
      icon: BeakerIcon,
      details: [
        "Predictive analytics models",
        "Natural language processing",
        "Computer vision solutions"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">Professional technology solutions for modern businesses</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredServices.map((service, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 p-3 bg-orange-100 rounded-lg mr-4">
                  <service.icon className="h-7 w-7 text-orange-500" />
                </div>
                <h3 className="text-2xl font-semibold text-orange-500">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2 mb-4">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="text-orange-500 mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
              
              
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}