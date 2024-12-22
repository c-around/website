import {TeamCard} from "@/components/TeamCard";
import {TEAM} from "@/settings";

export function TeamSection() {
    
    return (
        <section className="py-24 bg-gradient-to-b from-zinc-900 to-zinc-950">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400 text-center mb-16">
                    Unser Team
                </h2>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {TEAM.map((member, index) => (
                        <TeamCard
                            key={index}
                            name={member.name}
                            role={member.role}
                            image={member.image}
                            socials={member.socials}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}