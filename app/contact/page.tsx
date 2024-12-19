import ContactForm from "@/components/contactForm";

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