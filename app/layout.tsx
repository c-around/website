import './globals.css';
import type {Metadata} from 'next';
import {Open_Sans} from 'next/font/google';
import {Footer} from '@/components/navigation/Footer';
import React from "react";
import Header from "@/components/header";
import PlausibleProvider from 'next-plausible';

const inter = Open_Sans({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'C AROUND | Professional Drone & Real Estate Photography',
    description: 'Professional drone photography, real estate imagery, and 360° virtual tours in Switzerland',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="de" className={"dark"}>
        <body className={`${inter.className} bg-zinc-900`}>
        <PlausibleProvider
            domain='c-around.ch'
            selfHosted={true}
            trackLocalhost
            customDomain="https://plausible.alpencloud.ch"
            enabled
        >
            <Header/>
            {children}
            <Footer/>
        </PlausibleProvider>
        </body>
        </html>
    );
}