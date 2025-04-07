import ContactForm from "@/components/contactForm";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "C AROUND | Kontakt",
    description: "Kontaktieren Sie uns für Anfragen, Beratungen oder Buchungen",
}

export default async function Services(
    props: {
        searchParams: Promise<{ [key: string]: string | string[] | undefined }>
    }
) {
    const searchParams = (await props.searchParams)

    return (
        <main className="min-h-screen bg-zinc-900">
            <ContactForm success={searchParams?.success as string}/>
        </main>
    );
}