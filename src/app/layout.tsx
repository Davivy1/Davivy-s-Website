import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

export const metadata: Metadata = {
  title: 'Davivy | Official Website',
  description: 'Official platform for Davivy — Music, Content, and Professional Portfolio.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-zinc-100 antialiased selection:bg-zinc-800 selection:text-white">
        <Navbar />
        <div className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}