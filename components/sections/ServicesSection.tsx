"use client";

import { Camera, PanelTop } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";
import {IconDrone} from "@tabler/icons-react";

export function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-zinc-800 to-zinc-900" id={'services'}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400 text-center mb-16">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<IconDrone className="w-12 h-12 text-sky-300" />}
            title="Drone Photography"
            description="Aerial perspectives that showcase your property's full potential and surrounding environment."
            link={'/services/drone'}
          />
          <ServiceCard
            icon={<Camera className="w-12 h-12 text-sky-300" />}
            title="Real Estate Photography"
            description="Professional interior and exterior photography that highlights your property's best features."
            link={'/services/real-estate'}
          />
          <ServiceCard
            icon={<PanelTop className="w-12 h-12 text-sky-300" />}
            title="360° Room Tours"
            description="Immersive virtual tours that give potential buyers a realistic feel of the space."
            link={'/services/360-tours'}
          />
        </div>
      </div>
    </section>
  );
}