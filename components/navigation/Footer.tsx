"use client";

import Link from 'next/link';
import {Mail, MapPin} from 'lucide-react';
import {SOCIALS} from "@/settings";


export function Footer() {
    return (
        <footer className="bg-zinc-950 text-zinc-400">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400 mb-4">
                            C AROUND
                        </h3>
                        <p className="mb-4">
                            Professionelle Drohnenfotografie und Immobilienbilder in der Schweiz.
                        </p>
                        <div className="flex space-x-4">
                            {
                                SOCIALS.map(({name, url, Icon}, index) => (
                                    <Link key={index} href={url} className="hover:text-sky-300 transition-colors">
                                        <Icon/>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="hover:text-sky-300 transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/team" className="hover:text-sky-300 transition-colors">
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="hover:text-sky-300 transition-colors">
                                    Preise
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-sky-300 transition-colors">
                                    Kontakt
                                </Link>
                            </li>
                            <li>
                                <Link href="https://portal.c-around.ch"
                                      className="hover:text-sky-300 transition-colors">
                                    Kundenportal
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Angebote</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/services/drone" className="hover:text-sky-300 transition-colors">
                                    Drohnenfotografie
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/real-estate" className="hover:text-sky-300 transition-colors">
                                    Immobilienfotografie
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/360-tours" className="hover:text-sky-300 transition-colors">
                                    360° Room Tours
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">About</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about/imprint" className="hover:text-sky-300 transition-colors">
                                    Impressum
                                </Link>
                            </li>
                            <li>
                                <Link href="/about/privacy" className="hover:text-sky-300 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/about/terms" className="hover:text-sky-300 transition-colors">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <ul className="space-y-4">
                            {/*<li className="flex items-center">*/}
                            {/*  <Phone size={16} className="mr-2" />*/}
                            {/*  <span>+41 123 456 789</span>*/}
                            {/*</li>*/}
                            <li className="flex items-center">
                                <Mail size={16} className="mr-2"/>
                                <span>info@c-around.ch</span>
                            </li>
                            <li className="flex items-center">
                                <MapPin size={16} className="mr-2"/>
                                <span>Schaffhausen, Switzerland</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-zinc-800 mt-12 pt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} C AROUND. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}