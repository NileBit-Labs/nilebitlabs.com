import Link from "next/link";
import { technologies, services, process } from "../../data/services";

export default function Services() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech) => (
              <div key={tech.name} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-800 rounded-lg flex items-center justify-center">
                  <tech.icon className="h-12 w-12 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-orange-500">
                  {tech.name}
                </h3>
                <p className="text-gray-400 mt-2">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row">
              {process.map((step, index) => (
                <div key={step.title} className="flex-1 text-center p-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-orange-500 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
