import './globals.css';
import type { Metadata } from 'next';
import {Open_Sans} from 'next/font/google';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import React from "react";

const inter = Open_Sans({ subsets: ['latin'] });

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
    <html lang="en" className={"dark"}>
      <body className={`${inter.className} bg-zinc-900`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}