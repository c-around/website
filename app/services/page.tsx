import {ServicesSection} from "@/components/sections/ServicesSection";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "C AROUND | Unsere Service",
    description: "Erhalten Sie einen Überblick über unsere Service",
}

export default function Services() {
    return (
        <main className="min-h-screen bg-zinc-900">
            <ServicesSection />
        </main>
    );
}