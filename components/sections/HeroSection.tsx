"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <div
            className="absolute inset-0 bg-[url('/images/drone.webp')] bg-cover bg-center mt-16"
            // style={{
            //     maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
            //     WebkitMaskImage:
            //         "linear-gradient(to bottom, black 80%, transparent 100%)",
            // }}
            aria-hidden="true"
        />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/70 via-zinc-900/50 to-zinc-800" />
      </div>
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="mb-8">
            <span className="inline-block text-5xl md:text-7xl lg:text-9xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-400 to-sky-200">
              C AROUND
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Perspektiven, die überzeugen
          </h1>
          <p className="text-xl text-zinc-200 mb-8 drop-shadow-lg">
            Professionelle Drohnenfotografie, Immobilienbilder und immersive
            360°-Touren für Ihr Objekt
          </p>
          <Link href={"#services"}>

          <Button size="lg" className="bg-gradient-to-r from-sky-400 to-sky-300 hover:from-sky-500 hover:to-sky-400 text-zinc-900 font-semibold shadow-lg hover:shadow-sky-300/25 transition-all duration-300">
            los legen <ArrowRight className="ml-2" />
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}