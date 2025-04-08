"use client"

import Image from "next/image";
import Link from "next/link";
import {TOUR_REFERENCE, TourReference} from "@/lib/settings/tour-reference";

interface ReferenceCardProps {
    reference: TourReference
}

const TourReferenceSection = ({title, description}: { title: string, description: string }) => {
    return (
        <section className="py-24 bg-gradient-to-b from-zinc-900 to-zinc-950">
            <div className="container mx-auto px-4">
                <div className={"mb-16"}>
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400 text-center">
                        {title}
                    </h2>
                    <p className="text-sm text-gray-300 mt-2 font-semibold text-center">
                        {description}
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {TOUR_REFERENCE.map((reference) => (
                        <ReferenceCard key={reference.title} reference={reference}/>
                    ))}
                </div>
            </div>
        </section>
    );
}


const ReferenceCard = ({reference}: ReferenceCardProps) => {
    return (
        <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-2 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 border border-zinc-700/50 backdrop-blur-sm flex flex-col h-full">
            <Image
                src={reference.image}
                alt={reference.title}
                width={500}
                height={300}
                className="rounded-lg object-cover h-72 w-full"
            />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{reference.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{reference.description}</p>
                <div className="flex items-center space-x-2 mb-4">
                    {reference?.tags?.map((tag) => (
                        <span
                            key={tag}
                            className="bg-sky-600/20 text-aky-400 px-2 py-1 rounded-full text-sm"
                        >
              {tag}
            </span>
                    ))}
                </div>
                <div
                className={"flex gap-4 mt-auto"}
                >

                    {
                        reference?.website &&
                        <Link
                            target={"_blank"}
                            href={reference.website}

                            className="w-full grow flex items-center justify-center gap-2 transition-colors border border-sky-300 text-sky-300 hover:bg-sky-300 hover:text-zinc-900 bg-zinc-900 rounded-md font-semibold"
                        >
                            Seite Besuchen
                        </Link>
                    }
                    <Link
                        target={"_blank"}
                        href={reference.tourLink}
                        className="w-full py-3 grow bg-gradient-to-r from-sky-400 to-sky-300 hover:from-sky-500 hover:to-sky-400 rounded-lg  text-zinc-900 font-semibold shadow-lg hover:shadow-sky-300/25 transition-all duration-300 mt-auto text-center"
                    >
                        Tour anschauen
                    </Link>
                </div>

            </div>
        </div>
    );
};


export default TourReferenceSection;