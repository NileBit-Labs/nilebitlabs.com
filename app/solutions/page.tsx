export default function Solutions() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">
          Our Solutions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-orange-500 mb-4">
              01 Enterprise Software
            </h2>
            <p className="text-gray-600">
              Comprehensive software solutions for large-scale enterprises.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-orange-500 mb-4">
              02 Blockchain Integration
            </h2>
            <p className="text-gray-600">
              Secure and transparent blockchain solutions for your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
