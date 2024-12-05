"use client";

import {Home, Info, Phone} from "lucide-react";

export function ImprintSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-zinc-800 to-zinc-900" id="impressum">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400 text-center mb-16">
                    Impressum
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Address Section */}
                    <div className="bg-zinc-700 rounded-lg p-6 text-white shadow-md">
                        <div className="flex items-center mb-4">
                            <Home className="w-10 h-10 text-sky-300"/>
                            <h3 className="ml-4 text-xl font-bold">Angaben gemäß § 5 TMG</h3>
                        </div>
                        <p>C Around</p>
                        <p>Hintersteig 12</p>
                        <p> 8200 Schaffhausen</p>
                    </div>

                    {/* Contact Section */}
                    <div className="bg-zinc-700 rounded-lg p-6 text-white shadow-md">
                        <div className="flex items-center mb-4">
                            <Phone className="w-10 h-10 text-sky-300"/>
                            <h3 className="ml-4 text-xl font-bold">Kontakt</h3>
                        </div>
                        <p>
                            E-Mail:{" "}
                            <a href="mailto:info@c-around.ch" className="text-sky-400 hover:underline">
                                info@c-around.ch
                            </a>
                        </p>
                        <p>
                            Website:{" "}
                            <a href="https://c-around.ch" className="text-sky-400 hover:underline">
                                c-around.ch
                            </a>
                        </p>
                    </div>

                    {/*/!* Tax ID Section *!/*/}
                    {/*<div className="bg-zinc-700 rounded-lg p-6 text-white shadow-md">*/}
                    {/*    <div className="flex items-center mb-4">*/}
                    {/*        <ShieldAlert className="w-10 h-10 text-sky-300"/>*/}
                    {/*        <h3 className="ml-4 text-xl font-bold">Umsatzsteuer-ID</h3>*/}
                    {/*    </div>*/}
                    {/*    <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE123456789</p>*/}
                    {/*</div>*/}

                    {/* Disclaimer Section */}
                    <div className="bg-zinc-700 rounded-lg p-6 text-white shadow-md">
                        <div className="flex items-center mb-4">
                            <Info className="w-10 h-10 text-sky-300"/>
                            <h3 className="ml-4 text-xl font-bold">Haftungsausschluss</h3>
                        </div>
                        <p>
                            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
                            Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
                            Gewähr übernehmen.
                        </p>
                    </div>

                    {/* Dispute Resolution Section */}
                    <div className="bg-zinc-700 rounded-lg p-6 text-white shadow-md">
                        <div className="flex items-center mb-4">
                            <Info className="w-10 h-10 text-sky-300"/>
                            <h3 className="ml-4 text-xl font-bold">
                                Verbraucherstreitbeilegung
                            </h3>
                        </div>
                        <p>
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                            Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
