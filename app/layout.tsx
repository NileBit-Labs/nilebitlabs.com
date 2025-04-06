import './globals.css';
import { MainLayout } from '../components/layout/MainLayout';

export const metadata = {
  title: 'NileBit Labs',
  description: 'Innovative Tech Solutions by NileBit Labs',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
