import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import { PageShell } from "../ui/design-system";
import NileBot from "../nilebot/NileBot";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageShell className="flex flex-col">
      <a
        href="#main-content"
        className="sr-only z-[60] rounded-button bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <NileBot />
    </PageShell>
  );
}
