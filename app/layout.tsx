import "./globals.css";
import MainLayout from "../components/layout/MainLayout";

export const metadata = {
  title: {
    default: "NileBit Labs",
    template: "%s | NileBit Labs",
  },
  description:
    "NileBit Labs is a product engineering and emerging technology company based in Kampala, Uganda.",
  icons: {
    icon: "/nilebit-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
