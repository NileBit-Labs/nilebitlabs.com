import Link from "next/link";

export default function NotFound() {
  return (
    <section className="h-screen bg-dark text-white flex items-center justify-center text-center">
      <div>
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Page Not Found</p>
        <Link
          href="/"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
        >
          Back to Homepage
        </Link>
      </div>
    </section>
  );
}
