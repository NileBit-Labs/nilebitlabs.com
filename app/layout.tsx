import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import MainLayout from "../components/layout/MainLayout";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--font-primary" });

export const metadata: Metadata = {
  metadataBase: new URL("https://nilebitlabs.com"),
  title: {
    default: "NileBit Labs",
    template: "%s | NileBit Labs",
  },
  description:
    "NileBit Labs is a product engineering and emerging technology company based in Kampala, Uganda.",
  applicationName: "NileBit Labs",
  authors: [{ name: "NileBit Labs" }],
  creator: "NileBit Labs",
  publisher: "NileBit Labs",
  robots: { index: true, follow: true },
  openGraph: {
    title: "NileBit Labs",
    description: "Product engineering and emerging technology from Kampala, Uganda.",
    url: "https://nilebitlabs.com",
    siteName: "NileBit Labs",
    locale: "en_UG",
    type: "website",
  },
  twitter: { card: "summary", title: "NileBit Labs", description: "Product engineering and emerging technology from Kampala, Uganda." },
  icons: {
    icon: "/nilebit-icon.svg",
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('nilebit-appearance');if(t!=='dark'&&t!=='light')t='system';document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t==='system'?'light dark':t}catch(e){document.documentElement.dataset.theme='system'}})()`;

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NileBit Labs",
  url: "https://nilebitlabs.com",
  email: "info@nilebitlabs.com",
  telephone: "+256770919975",
  address: { "@type": "PostalAddress", streetAddress: "Makerere Kavule", addressLocality: "Kampala", addressCountry: "UG" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className={manrope.variable}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData).replace(/</g, "\\u003c") }} />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
