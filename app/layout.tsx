import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import MainLayout from "../components/layout/MainLayout";
import { defaultDescription, siteName, siteUrl } from "@/lib/metadata";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--font-primary" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NileBit Labs | Software Engineering, AI & Blockchain",
    template: "%s | NileBit Labs",
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "technology",
  robots: { index: true, follow: true },
  openGraph: {
    title: "NileBit Labs | Software Engineering, AI & Blockchain",
    description: defaultDescription,
    url: siteUrl,
    siteName,
    locale: "en_UG",
    type: "website",
    images: [{ url: "/images/og/nilebit-labs-og.png", width: 1200, height: 630, alt: "NileBit Labs — Product Engineering, AI and Blockchain" }],
  },
  twitter: { card: "summary_large_image", title: "NileBit Labs | Software Engineering, AI & Blockchain", description: defaultDescription, images: ["/images/og/nilebit-labs-og.png"] },
  icons: {
    icon: [{ url: "/nilebit-icon.svg", type: "image/svg+xml" }, { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('nilebit-appearance');if(t!=='dark'&&t!=='light')t='system';document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t==='system'?'light dark':t}catch(e){document.documentElement.dataset.theme='system'}})()`;

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: `${siteUrl}/`,
  logo: `${siteUrl}/nilebit-logo.svg`,
  email: "info@nilebitlabs.com",
  telephone: "+256 770 919 175",
  address: { "@type": "PostalAddress", streetAddress: "Makerere Kavule", addressLocality: "Kampala", addressCountry: "Uganda" },
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
