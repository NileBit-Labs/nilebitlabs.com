export default function Portfolio() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">
          Our Portfolio
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200" />{" "}
            {/* Placeholder for project image */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                E-Commerce Platform
              </h3>
              <p className="text-gray-600">
                A scalable e-commerce solution for a global retailer.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200" />{" "}
            {/* Placeholder for project image */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                AI-Powered Chatbot
              </h3>
              <p className="text-gray-600">
                An intelligent chatbot for customer support automation.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200" />{" "}
            {/* Placeholder for project image */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                Healthcare App
              </h3>
              <p className="text-gray-600">
                A mobile app for patient management and telemedicine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
