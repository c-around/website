import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'C-Around.ch | Professional Drone & Real Estate Photography',
  description: 'Professional drone photography, real estate imagery, and 360° virtual tours in Switzerland',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}