import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'C AROUND | Datenschutzerklärung',
    description: 'Datenschutzerklärung von C AROUND',
};

export default function Page() {
    return (
        <section className="py-24 bg-gradient-to-b from-zinc-800 to-zinc-900">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400 text-center mb-16">
                    Datenschutzerklärung
                </h1>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto text-center mb-8">
                    Datenschutz ist uns wichtig – daher speichern wir nur IP-Adressen
                    und keine personenspezifischen Daten.
                </p>
                <div className="grid md:grid-cols-1 gap-8">
                    <DataProtectionSection title="1. Allgemeine Hinweise">
                        Diese Website kann genutzt werden, ohne dass personenbezogene Daten
                        angegeben oder gespeichert werden müssen. Wir respektieren Ihre
                        Privatsphäre und halten uns an die Vorgaben des schweizerischen
                        Datenschutzgesetzes (DSG).
                    </DataProtectionSection>

                    <DataProtectionSection title="2. Speicherung von IP-Adressen">
                        Beim Besuch unserer Website speichern wir Ihre IP-Adresse. Weitere
                        personenbezogene Daten wie Name, Adresse oder Telefonnummer werden
                        nicht gespeichert. Auch Formulare werden nicht serverseitig
                        gespeichert – stattdessen öffnen sie lediglich Ihr
                        E-Mail-Programm.
                    </DataProtectionSection>

                    <DataProtectionSection title="3. Tracking- und Analysetools">
                        Unsere Website verwendet Tracking- und Analysetools, um die Nutzung
                        unserer Website zu analysieren und zu verbessern. Diese Tools können
                        Informationen wie Ihre IP-Adresse, den verwendeten Browser, die
                        Verweildauer auf der Website und die besuchten Seiten erfassen.
                    </DataProtectionSection>

                    <DataProtectionSection title="4. Kontaktaufnahme per E-Mail">
                        Wenn Sie uns über das Kontaktformular kontaktieren, wird Ihre
                        Nachricht direkt über Ihr E-Mail-Programm gesendet. Diese E-Mails
                        werden ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet und
                        nicht an Dritte weitergegeben.
                    </DataProtectionSection>

                    <DataProtectionSection title="5. Ihre Rechte">
                        Da wir keine weiteren personenbezogenen Daten speichern, entfällt die
                        Notwendigkeit eines Auskunfts- oder Löschungsantrags. Sollten Sie
                        dennoch Fragen zum Datenschutz haben, kontaktieren Sie uns gerne:
                        <br />
                        <br />
                        <a
                            href="mailto:info@c-around.ch"
                            className="text-sky-300 hover:underline"
                        >
                            info@c-around.ch
                        </a>
                    </DataProtectionSection>

                    <DataProtectionSection title="6. Änderungen">
                        Wir behalten uns das Recht vor, diese Datenschutzerklärung bei Bedarf
                        anzupassen, insbesondere bei gesetzlichen Änderungen. Die jeweils
                        aktuelle Version finden Sie immer auf dieser Seite.
                    </DataProtectionSection>
                </div>
            </div>
        </section>
    );
}

function DataProtectionSection({
                                   title,
                                   children,
                               }: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="bg-zinc-800/50 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-zinc-700">
            <h2 className="text-xl font-semibold text-sky-300 mb-4">{title}</h2>
            <p className="text-gray-400">{children}</p>
        </div>
    );
}
