import {TeamCard} from "@/components/TeamCard";
import {TEAM} from "@/lib/settings/team";
export function TeamSection() {
    
    return (
        <section className="py-24 bg-gradient-to-b from-zinc-900 to-zinc-950">
            <div className="container mx-auto px-4 min-h-screen">
                <h2 className="text-4xl font-bold mt-8 text-center mb-16">
                    Unser
                    {" "}
                    <span className={"text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400"}>
                    Team
                    </span>
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
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