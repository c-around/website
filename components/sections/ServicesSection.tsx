"use client";

import { Camera, PanelTop } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import {IconDrone} from "@tabler/icons-react";

export function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-zinc-800 to-zinc-900" id={'services'}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400 text-center mb-16">
          Unsere Angebote
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<IconDrone className="w-12 h-12 text-sky-300" />}
            title="Dronen Fotografie"
            description="Luftaufnahmen, die das volle Potenzial Ihrer Immobilie und Umgebung zeigen."
            link={'/services/drone'}
          />
          <ServiceCard
            icon={<Camera className="w-12 h-12 text-sky-300" />}
            title="Grundstücksfotografie"
            description="Professionelle Innen- und Außenaufnahmen, die die besten Eigenschaften Ihres Objekts hervorheben."
            link={'/services/real-estate'}
          />
          <ServiceCard
            icon={<PanelTop className="w-12 h-12 text-sky-300" />}
            title="360° Room Tours"
            description="Eintauchen in virtuelle Räume und Immobilien, um ein realistisches Gefühl für den Raum zu bekommen."
            link={'/services/360-tours'}
          />
        </div>
      </div>
    </section>
  );
}