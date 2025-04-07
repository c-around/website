"use client";

import {Home, Info, Phone} from "lucide-react";
import {useState} from "react";

export function ImprintSection() {
    const [showDisclaimer, setShowDisclaimer] = useState(false);
    return (
        <section className="py-24 bg-gradient-to-b from-zinc-800 to-zinc-900 text-zinc-300 group-hover:text-zinc-200" id="impressum">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400 text-center mb-16">
                    Impressum
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Address Section */}
                    <div
                        className="group bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-300 border border-zinc-700/50 backdrop-blur-sm">
                        <div className="flex items-center mb-4">
                            <Home className="w-10 h-10 text-sky-300"/>
                            <h3 className="ml-4 text-xl font-bold">Anschrift</h3>
                        </div>
                        <p>C AROUND</p>
                        <p>Hintersteig 12</p>
                        <p>8200 Schaffhausen</p>
                        <p>Schweiz</p>
                    </div>

                    {/* Contact Section */}
                    <div
                        className="group bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-300 border border-zinc-700/50 backdrop-blur-sm">
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

                    {/* Dispute Resolution Section */}
                    <div
                        className="group bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-300 border border-zinc-700/50 backdrop-blur-sm">
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
                    <div
                        className="group bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-300 border border-zinc-700/50 backdrop-blur-sm">
                        <div className="flex items-center mb-4 cursor-pointer"
                        >
                            <Info className="w-10 h-10 text-sky-300"/>
                            <h3 className="ml-4 text-xl font-bold">Haftungsausschluss</h3>
                        </div>
                        {showDisclaimer ? (
                                <p>
                                    Alle Texte und Links wurden sorgfältig geprüft und werden laufend aktualisiert.
                                    Wir sind bemüht, richtige und vollständige Informationen auf dieser Website
                                    bereitzustellen,
                                    übernehmen aber keinerlei Verantwortung, Garantien oder Haftung dafür,
                                    dass die durch diese Website bereitgestellten Informationen, richtig, vollständig oder
                                    aktuell sind.
                                    Wir behalten uns das Recht vor, jederzeit und ohne Vorankündigung die Informationen auf
                                    dieser Website zu ändern und verpflichten uns auch nicht,
                                    die enthaltenen Informationen zu aktualisieren.
                                    Alle Links zu externen Anbietern wurden zum Zeitpunkt ihrer Aufnahme auf ihre
                                    Richtigkeit überprüft,
                                    dennoch haften wir nicht für Inhalte und Verfügbarkeit von Websites, die mittels
                                    Hyperlinks zu erreichen sind.
                                    Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden,
                                    die durch Inhalte verknüpfter Seiten entstehen, haftet allein der Anbieter der Seite,
                                    auf welche verwiesen wurde. Dabei ist es gleichgültig, ob der Schaden direkter,
                                    indirekter oder finanzieller Natur ist oder ein sonstiger Schaden vorliegt,
                                    der sich aus Datenverlust, Nutzungsausfall oder anderen Gründen aller Art ergeben
                                    könnte. <br/><span className={'text-sky-300 cursor-pointer hover:underline'}
                                                       onClick={() => setShowDisclaimer(!showDisclaimer)}>weniger anzeigen</span>
                                </p>
                            ) :
                            <p>
                                Alle Texte und Links wurden sorgfältig geprüft und werden laufend aktualisiert.
                                Wir sind bemüht, richtige und vollständige Informationen auf dieser Website
                                bereitzustellen,
                                übernehmen aber keinerlei...<br/> <span
                                className={'text-sky-300 cursor-pointer hover:underline'}
                                onClick={() => setShowDisclaimer(!showDisclaimer)}>mehr anzeigen</span>
                            </p>
                        }
                    </div>

                </div>
            </div>
        </section>
    );
}
