"use client";

import {useState} from 'react';
import Link from 'next/link';
import {Menu, X} from 'lucide-react';
import {Button} from '@/components/ui/button';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-zinc-900/80 backdrop-blur-lg border-b border-zinc-800">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/"
                          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400">
                        C AROUND
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/about" className="text-zinc-200 hover:text-sky-300 transition-colors"
                        >
                            About
                        </Link>
                        <Link href="/pricing" className="text-zinc-200 hover:text-sky-300 transition-colors"
                        >
                            Pricing
                        </Link>
                        <Link href="/contact" className="text-zinc-200 hover:text-sky-300 transition-colors"
                        >
                            Contact
                        </Link>
                        <Link href={'https://portal.c-around.ch'}>

                            <Button variant="outline"
                                    className="border-sky-300 text-sky-300 hover:bg-sky-300 hover:text-zinc-900">
                                Client Portal
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-zinc-200"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X/> : <Menu/>}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4">
                        <div className="flex flex-col space-y-4">
                            <Link
                                href="/about"
                                className="text-zinc-200 hover:text-sky-300 transition-colors"
                                onClick={() => setIsMenuOpen(false)}

                            >
                                About
                            </Link>
                            <Link
                                href="/pricing"
                                className="text-zinc-200 hover:text-sky-300 transition-colors"
                                onClick={() => setIsMenuOpen(false)}

                            >
                                Pricing
                            </Link>
                            <Link
                                href="/contact"
                                className="text-zinc-200 hover:text-sky-300 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <Link href={'https://portal.c-around.ch'}>

                                <Button variant="outline"
                                        className="border-sky-300 text-sky-300 hover:bg-sky-300 hover:text-zinc-900">
                                    Client Portal
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}