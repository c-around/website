import {TeamSection} from "@/components/sections/TeamSection";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "C AROUND | Team",
    description: "Lernen Sie unser Team kennen"
}

export default function Team() {
    return (
        <main className="min-h-screen bg-zinc-900">
            <TeamSection />
        </main>
    );
}