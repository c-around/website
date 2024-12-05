"use client";

import {Mail} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export function ContactSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-zinc-900 to-zinc-950">
            <div className="container mx-auto px-4 text-center">
                <div
                    className="max-w-2xl mx-auto bg-zinc-800/50 p-12 rounded-2xl shadow-2xl backdrop-blur-sm border border-zinc-700/50">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400 mb-8">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-zinc-300 mb-8">
                        Contact us today to discuss your project
                    </p>
                    <Link href={'mailto:info@c-around.ch'}>

                        <Button size="lg"
                                className="bg-gradient-to-r from-sky-400 to-sky-300 hover:from-sky-500 hover:to-sky-400 text-zinc-900 font-semibold shadow-lg hover:shadow-sky-300/25 transition-all duration-300">
                            <Mail className="mr-2"/> Contact Us
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}