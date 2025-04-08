export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 mb-12">Comprehensive technology solutions to power your business growth</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-orange-500 mb-4">
              01 Custom Software Development
            </h2>
            <p className="text-gray-600">
              We build bespoke software solutions tailored to your unique
              business requirements.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-orange-500 mb-4">
              02 AI & Machine Learning
            </h2>
            <p className="text-gray-600">
              Harness the power of AI to drive innovation and efficiency in your
              operations.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-orange-500 mb-4">
              03 Cloud Solutions
            </h2>
            <p className="text-gray-600">
              Seamless cloud integration and management for scalability and
              performance.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-orange-500 mb-4">
              04 Cybersecurity
            </h2>
            <p className="text-gray-600">
              Protect your business with our advanced cybersecurity services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}