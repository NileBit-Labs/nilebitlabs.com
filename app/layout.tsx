import "./globals.css";
import MainLayout from "../components/layout/MainLayout"; // Remove curly braces

export const metadata = {
  title: "NileBit Labs",
  description: "Innovative Tech Solutions by NileBit Labs",
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
