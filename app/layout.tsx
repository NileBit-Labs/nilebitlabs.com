import "./globals.css";
import MainLayout from "../components/layout/MainLayout";

export const metadata = {
  title: "NileBit Labs",
  description: "Innovative Tech Solutions by NileBit Labs",
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
