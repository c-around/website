"use client";

import {Camera, Globe, Home, Info} from "lucide-react";
import {AboutCard} from "@/components/AboutCard";

export function AboutSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-zinc-800 to-zinc-900" id="about">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400 text-center mb-16">
                    Über CAround
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Company Overview Card */}
                    <AboutCard
                        icon={<Home className="w-10 h-10 text-sky-300"/>}
                        title="Unternehmensprofil"
                        description="CAround ist ein modernes Unternehmen, das sich auf hochwertige visuelle Lösungen für die Immobilienbranche spezialisiert hat. Mit innovativer Technologie und kreativen Ansätzen bieten wir eine breite Palette an Dienstleistungen."
                    />

                    {/* Services Card */}
                    <AboutCard
                        icon={<Camera className="w-10 h-10 text-sky-300"/>}
                        title="Dienstleistungen"
                        description="Wir bieten professionelle Immobilienfotografie, Drohnenaufnahmen und interaktive 360°-Roomtouren an, die dazu beitragen, Immobilien bestmöglich zu präsentieren."
                    />

                    {/* Vision and Mission Card */}
                    <AboutCard
                        icon={<Globe className="w-10 h-10 text-sky-300"/>}
                        title="Vision und Mission"
                        description="Unsere Vision ist es, die Immobilienpräsentation zu revolutionieren und digitale Lösungen zu schaffen, die Effizienz und Attraktivität vereinen."
                    />

                    {/* Target Audience Card */}
                    <AboutCard
                        icon={<Info className="w-10 h-10 text-sky-300"/>}
                        title="Zielgruppe"
                        description="Unsere Kunden sind Immobilienmakler, Bauträger und private Verkäufer, die eine ansprechende Präsentation ihrer Objekte suchen."
                    />
                </div>
            </div>
        </section>
    );
}
