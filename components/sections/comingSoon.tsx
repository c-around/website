"use client";

import {ArrowRight, Mail} from "lucide-react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import Link from "next/link";

const ComingSoon = ({
                        title,
                        description,
                        subDescription,
                        className,
                    }: {
    title: string;
    description: string;
    subDescription: string;
    className?: string;
}) => {
    return (
        <section
            className={cn(
                "py-24 bg-gradient-to-b from-zinc-900 to-zinc-950 min-h-screen flex items-center justify-center",
                className,
            )}
            id={"services"}
        >
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400 text-center mb-8">
                    {title}
                </h1>
                <p className="mt-4 text-xl text-zinc-200 text-center drop-shadow-lg">
                    {description}
                </p>
                <p className="mt-2 text-lg text-zinc-400 text-center drop-shadow-md">
                    {subDescription}
                </p>
                <div className="mt-12 flex justify-center gap-4">
                    <Link href={"/services"}>
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-sky-400 to-sky-300 hover:from-sky-500 hover:to-sky-400 text-zinc-900 font-semibold shadow-lg hover:shadow-sky-300/25 transition-all duration-300"
                        >
                            Kontaktieren <Mail className="ml-2"/>
                        </Button>
                    </Link>
                    <Link href={"/"}>
                        <Button
                            size="lg"
                            className="w-full text-left px-3 py-2 rounded-md text-base font-medium border border-sky-300 text-sky-300 hover:bg-sky-300 hover:text-zinc-900 bg-zinc-900 transition duration-200 ease-in-out flex items-center"
                        >
                            Startseite <ArrowRight className="ml-2"/>
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ComingSoon;
