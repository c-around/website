"use client";

import Link from 'next/link';
import {Mail, MapPin} from 'lucide-react';
import {IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTiktok} from "@tabler/icons-react";

export function Footer() {
    return (
        <footer className="bg-zinc-950 text-zinc-400">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400 mb-4">
                            C AROUND
                        </h3>
                        <p className="mb-4">
                            Professional drone photography and real estate imagery services in Switzerland.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href="https://www.facebook.com/people/C-Around-AG/pfbid0noMRn2gCZL1Qz9aL9Bk8ngzRUCCfBNim7sC7Gv5yHs3EMV2g2D2zMtwx5HcUBDVFl/"
                                target={"_blank"}
                                className="hover:text-sky-300 transition-colors">
                                <IconBrandFacebook size={20}/>
                            </Link>
                            <Link href="https://www.instagram.com/c_around_sh/"
                                  className="hover:text-sky-300 transition-colors"
                                  target={"_blank"}
                            >
                                <IconBrandInstagram size={20}/>
                            </Link>
                            <Link href="https://www.linkedin.com/in/c-around-35a391340/"
                                  className="hover:text-sky-300 transition-colors"
                                  target={"_blank"}
                            >
                                <IconBrandLinkedin size={20}/>
                            </Link>
                            <Link href="https://www.tiktok.com/@c_around_sh?lang=de-DE"
                                  className="hover:text-sky-300 transition-colors"
                                  target={"_blank"}
                            >
                                <IconBrandTiktok size={20}/>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="hover:text-sky-300 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="hover:text-sky-300 transition-colors">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-sky-300 transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/portal" className="hover:text-sky-300 transition-colors">
                                    Client Portal
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/services/drone" className="hover:text-sky-300 transition-colors">
                                    Drone Photography
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/real-estate" className="hover:text-sky-300 transition-colors">
                                    Real Estate Photography
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/360-tours" className="hover:text-sky-300 transition-colors">
                                    360° Room Tours
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
                    <p>&copy; {new Date().getFullYear()} C Around. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}