"use client";

import Link from "next/link";
import React, {useState} from "react";
import {Menu, X} from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {HEADER_LINKS, HeaderLink} from "@/lib/settings/header-links";
import {cn} from "@/lib/utils";
import Image from "next/image"; // Assuming you might want the logo image like the example

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        // Applied background, backdrop blur, and border from the example
        <nav className="fixed w-full z-50 bg-zinc-900/80 backdrop-blur-lg border-b border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        {/* Applied gradient text and added Image component like the example */}
                        <Link
                            href="/"
                            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400 flex items-center gap-2 whitespace-nowrap"
                        >
                            <Image
                                src={'/images/logo.png'}
                                alt={"logo"}
                                width={50}
                                height={50}
                            />
                            C AROUND
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <NavigationMenu>
                            <NavigationMenuList className="flex items-center space-x-4">
                                {HEADER_LINKS.map((link) => {
                                    const Icon = link.icon;
                                    return link.submenu ? (
                                        <NavigationMenuItem key={link.title}>
                                            <NavigationMenuTrigger
                                                className={cn(
                                                    // Base styles for trigger
                                                    "bg-transparent text-zinc-200 hover:bg-transparent hover:text-sky-300 data-[state=open]:bg-transparent data-[state=open]:text-sky-300",
                                                    // Specific styles if it's meant to look like the 'Kundenportal' button
                                                    link.whiteButton && // Assuming 'whiteButton' now means 'outline button style'
                                                    "border border-sky-300 text-sky-300 hover:bg-sky-300 hover:text-zinc-900 bg-zinc-900 data-[state=open]:bg-sky-300 data-[state=open]:text-zinc-900 px-4 py-2 rounded-md", // Added padding/rounding for button look
                                                )}
                                            >
                                                {
                                                    Icon && <Icon className="w-4 h-4 mr-2"/>
                                                }
                                                {link.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent
                                                // Applied background, backdrop blur, and border from the example
                                                className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 rounded-lg shadow-lg"
                                            >
                                                <div className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                                                    {link.submenu.map((item, index) => {
                                                        return item.banner ? (
                                                            <BannerLink
                                                                key={index}
                                                                item={item}
                                                                span={
                                                                    Math.ceil((link.submenu?.length ?? 1) / 2) + 1
                                                                }
                                                            />
                                                        ) : (
                                                            <NormalLink key={index} item={item}/>
                                                        );
                                                    })}
                                                </div>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    ) : (
                                        // Applied text and hover text colors for simple links
                                        <NavigationMenuLink
                                            key={link.title}
                                            href={link.href}
                                            className={cn(
                                                "text-zinc-200 hover:text-sky-300 flex items-center gap-2 transition-colors",
                                                // Specific styles if it's meant to look like the 'Kundenportal' button
                                                link.whiteButton && // Assuming 'whiteButton' now means 'outline button style'
                                                "border border-sky-300 text-sky-300 hover:bg-sky-300 hover:text-zinc-900 bg-zinc-900 px-4 py-2 rounded-md", // Added padding/rounding for button look
                                            )}
                                        >
                                            {
                                                Icon &&
                                                <Icon className="w-4 h-4"/>
                                            }
                                            {link.title}
                                        </NavigationMenuLink>
                                    );
                                })}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className="md:hidden">
                        <button
                            type="button"
                            // Applied text, hover text, hover background, and focus ring colors
                            className="inline-flex items-center justify-center p-2 rounded-md text-zinc-200 hover:text-sky-300 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-400"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true"/>
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true"/>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            {mobileMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    {/* Applied background color */}
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-zinc-900 shadow-lg">
                        {HEADER_LINKS.map((link) => {
                            const Icon = link.icon;

                            if (link.submenu) {
                                return (
                                    <div key={link.title} className="py-2">
                                        {/* Applied text color for submenu header */}
                                        <div className="px-3 py-2 font-medium text-zinc-200 flex items-center">
                                            {
                                                Icon &&
                                                <Icon className="w-4 h-4 mr-2"/>
                                            }
                                            <span>{link.title}</span>
                                        </div>
                                        <div className="pl-6 mt-1 space-y-1">
                                            {link.submenu.map((subItem) => (
                                                <Link
                                                    key={subItem.title}
                                                    href={subItem.href}
                                                    // Applied text, hover background, hover text, and icon colors
                                                    className="px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-sky-300 rounded-md flex items-center"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {
                                                        subItem.icon &&
                                                        <subItem.icon className="w-4 h-4 mr-2 text-sky-400"/>
                                                    }
                                                    {subItem.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                );
                            }

                            // Handle button style for mobile links if needed
                            if (link.whiteButton) {
                                return (
                                    <Link
                                        key={link.title}
                                        href={link.href}
                                        className="block w-full mt-2" // Make link take full width
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <button
                                            // Applied button styles similar to desktop 'Kundenportal'
                                            className="w-full text-left px-3 py-2 rounded-md text-base font-medium border border-sky-300 text-sky-300 hover:bg-sky-300 hover:text-zinc-900 bg-zinc-900 transition duration-200 ease-in-out flex items-center"
                                        >
                                            {
                                                Icon &&
                                                <Icon className="w-4 h-4 mr-2"/>
                                            }
                                            {link.title}
                                        </button>
                                    </Link>
                                );
                            }

                            // Normal mobile link
                            return (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    // Applied text, hover background, and hover text colors
                                    className="px-3 py-2 rounded-md text-base font-medium text-zinc-200 hover:bg-zinc-800 hover:text-sky-300 flex items-center"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {
                                        Icon &&
                                        <Icon className="w-4 h-4 mr-2"/>
                                    }
                                    {link.title}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
};

const NormalLink = ({item}: { item: HeaderLink }) => {
    const Icon = item.icon;
    return (
        <NavigationMenuLink
            key={item.title}
            href={item.href}
            // Applied hover background color
            className="flex items-start space-x-4 p-3 rounded-lg hover:bg-sky-500/10 transition-colors group"
        >
            <div
                // Applied icon container background and hover background colors
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-600/10 group-hover:bg-sky-600/20 transition-colors"
            >
                {/* Applied icon color */}
                {
                    Icon &&
                    <Icon className="h-6 w-6 text-sky-400"/>
                }
            </div>
            <div className="space-y-1">
                <h4
                    // Applied title text and hover text colors
                    className="text-sm font-medium leading-none text-zinc-200 group-hover:text-sky-300 transition-colors"
                >
                    {item.title}
                </h4>
                <p
                    // Applied description text and hover text colors
                    className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors line-clamp-2"
                >
                    {item.description}
                </p>
            </div>
        </NavigationMenuLink>
    );
};

const BannerLink = ({item, span}: { item: HeaderLink; span: number }) => {
    const Icon = item.icon;
    return (
        <NavigationMenuLink
            href={item.href}
            // Applied background gradient colors
            className={cn(
                "flex items-start space-x-4 p-10 rounded-lg bg-gradient-to-b from-sky-900/50 to-zinc-900/50 backdrop-blur-lg shadow-lg group col-start-1 row-start-1",
                {
                    "row-span-2": span === 2,
                    "row-span-3": span === 3,
                    "row-span-4": span === 4,
                },
            )}
        >
            <div className="flex flex-col items-start gap-1 h-full justify-center">
                <div
                    // Applied icon container background color
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-sky-600/10"
                >
                    {/* Applied icon color */}
                    {
                        Icon &&
                        <Icon className="h-8 w-8 text-sky-400"/>
                    }
                </div>
                <h4
                    // Applied title text color
                    className="text-lg font-medium mb-2 mt-4 leading-none text-zinc-200"
                >
                    {item.title}
                </h4>
                <p
                    // Applied description text color
                    className="text-sm text-zinc-400 "
                >
                    {item.description}
                </p>
            </div>
        </NavigationMenuLink>
    );
};

export default Header;
