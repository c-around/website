import ComingSoon from "@/components/sections/comingSoon";

const Page = () => {
    return (
        <main className="min-h-screen bg-zinc-900">
            <ComingSoon
                title="Kundenportal"
                description="Das Kundenportal ist in Arbeit und wird bald verfügbar sein."
                subDescription="Wir arbeiten hart daran, Ihnen das bestmögliche Erlebnis zu bieten. In der Zwischenzeit können Sie uns jederzeit kontaktieren."
                // image="/images/coming-soon.png"
                // buttonText="Zurück zur Startseite"
                // buttonLink="/"
            />
        </main>
    );
}

export default Page;