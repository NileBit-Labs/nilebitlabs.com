import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">
            <span className="text-orange-500">⚡</span> NileBit Labs
          </h3>
          <p>2307 Beverley Rd, Brooklyn, New York 11226, USA</p>
          <p className="mt-2">+07 000 200 05</p>
          <p>info@nilebitlabs.com</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Social</h3>
          <Link href="#" className="block hover:text-orange-500">
            Facebook
          </Link>
          <Link href="#" className="block hover:text-orange-500">
            Instagram
          </Link>
          <Link href="#" className="block hover:text-orange-500">
            LinkedIn
          </Link>
          <Link href="#" className="block hover:text-orange-500">
            Twitter
          </Link>
          <Link href="#" className="block hover:text-orange-500">
            YouTube
          </Link>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Support</h3>
          <Link href="#" className="block hover:text-orange-500">
            Documentation
          </Link>
          <Link href="/faq" className="block hover:text-orange-500">
            FAQs
          </Link>
          <Link href="#" className="block hover:text-orange-500">
            Support
          </Link>
          <Link href="#" className="block hover:text-orange-500">
            Download
          </Link>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Links</h3>
          <Link href="/about" className="block hover:text-orange-500">
            About Us
          </Link>
          <Link href="/terms" className="block hover:text-orange-500">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="block hover:text-orange-500">
            Privacy Policy
          </Link>
          <Link href="#" className="block hover:text-orange-500">
            Sitemap
          </Link>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        © NileBit Labs 2025. All Rights Reserved.
      </div>
    </footer>
  );
}
