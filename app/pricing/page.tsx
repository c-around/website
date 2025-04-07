import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Mail} from "lucide-react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "C AROUND | Preise",
    description: "Erhalten Sie einen Überblick über unsere Preise",
}

const Page = async () => {
    return (
        <section
            className={"py-24 bg-gradient-to-b from-zinc-900 to-zinc-950 min-h-screen flex items-center justify-center"}>
            <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400 text-center mb-8">
                        Preise
                    </h2>
                    <div className="text-center">
                        <p className="text-zinc-300 text-lg mb-6">
                            Unsere Preise sind individuell auf Ihre Bedürfnisse abgestimmt.<br/>
                            Kontaktieren Sie uns für ein persönliches Angebot.
                        </p>
                        <Link
                            href={'/contact'}
                        >
                            <Button size="lg"
                                    className="bg-gradient-to-r from-sky-400 to-sky-300 hover:from-sky-500 hover:to-sky-400 text-zinc-900 font-semibold shadow-lg hover:shadow-sky-300/25 transition-all duration-300">
                                Kontaktieren Sie uns <Mail className="ml-2"/>
                            </Button>
                        </Link>
                    </div>
                </div>
        </section>
);
}

export default Page;