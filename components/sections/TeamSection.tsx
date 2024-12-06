import {TeamCard} from "@/components/TeamCard";
import {IconBrandGithub, IconBrandLinkedin} from "@tabler/icons-react";
import {Globe} from "lucide-react";

export function TeamSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-zinc-900 to-zinc-950">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400 text-center mb-16">
                    Our Team
                </h2>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <TeamCard
                        name="Colin Heggli"
                        role="CEO & CTO"
                        image="/images/team/colin-heggli.jpg"
                        socials={[
                            {Icon: IconBrandLinkedin, url: 'https://www.linkedin.com/in/colin-heggli/'},
                            {Icon: IconBrandGithub, url: 'https://github.com/M4rshe1'},
                            {Icon: Globe, url: 'https://colin.heggli.dev'},
                        ]}
                    />
                    <TeamCard
                        name="Florian Raschle"
                        role="CAO & CEO stv."
                        image="/images/team/florian-raschle.webp"
                        socials={[
                            {Icon: IconBrandLinkedin, url: 'https://www.linkedin.com/in/florian-raschle-006495299/'},
                        ]}
                    />
                    <TeamCard
                        name="Laurenz Buel"
                        role="CFO"
                        image="/images/team/laurenz-buel.jpg"
                        socials={[]}
                    />
                    <TeamCard
                        name="Dilay Türkmen"
                        role="CMO"
                        image="/images/team/dilay-tuerkmen.jpg"
                        socials={[]}
                    />

                    <TeamCard
                        name="Natherat Kamluea"
                        role="CMO"
                        image="/images/team/natherat-kamluea.jpg"
                        socials={[]}
                    />
                </div>
            </div>
        </section>
    );
}