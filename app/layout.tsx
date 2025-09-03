import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Footer } from "@/components/navigation/Footer";
import React from "react";
import Header from "@/components/header";
import { BANNERS } from "@/lib/settings/banners";
import { OpenPanelComponent } from "@openpanel/nextjs";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "C AROUND | Professional Drone & Real Estate Photography",
  description:
    "Professional drone photography, real estate imagery, and 360° virtual tours in Switzerland",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={"dark"}>
      <body className={`${inter.className} min-h-screen`}>
        <OpenPanelComponent
          clientId={"9066e930-bbd7-4ba6-8d15-15d9880bd567"}
          trackScreenViews={true}
          trackOutgoingLinks={true}
          trackAttributes={true}
          apiUrl={"https://atrack.heggli.dev"}
        />
        <Header />
        <div style={{ height: `${BANNERS.length * 36}px` }} />
        <div className="w-full h-full bg-gradient-to-b from-zinc-900 to-zinc-950">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
