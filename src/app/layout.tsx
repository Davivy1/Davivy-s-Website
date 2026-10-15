import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

export const metadata: Metadata = {
  title: "Davivy | Official Website",
  description: "Empowering the next generation through technology, creativity, and education.",
  verification: {
    google: 'sQL5OsyJbWBhazn493iqP3JlgP1V2t2Gg1eD8fSCdxs',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-zinc-100 antialiased selection:bg-zinc-800 selection:text-white">
        <Suspense fallback={<div className="h-20 bg-zinc-950" />}>
          <Navbar />
        </Suspense>
        <div className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}