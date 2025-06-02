import PricingPanel from "@/components/pricing-panel";
import {Suspense} from "react";

export default function Page() {
    return <section className="py-24 bg-gradient-to-b from-zinc-900 to-zinc-950 min-h-screen">
        <div className="container mx-auto px-4 ">
            <h2 className="text-4xl font-bold mt-8 text-center mb-4">
                Unsere <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400">Preise</span>
            </h2>
            <div
                className="max-w-2xl mx-auto text-center mb-12 text-lg text-muted-foreground">
                Unsere Preise sind individuell anpassbar und richten sich nach dem Aufwand und den
                spezifischen Anforderungen Ihres Projekts. Wen die untenstehenden Preise ihr Projekt nicht
                abdecken, kontaktieren Sie uns bitte für ein individuelles Angebot.
            </div>
        </div>
            <Suspense>
                <PricingPanel/>
            </Suspense>
        <div>
            <p className="text-center text-sm text-muted-foreground mt-8">
                Alle Preise verstehen sich zzgl. MwSt. und sind unverbindlich. Die tatsächlichen Kosten können je
                nach
                Objekt und Aufwand variieren.
            </p>
        </div>
    </section>
}