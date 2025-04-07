import {
    Banknote,
    CircleHelp,
    GalleryVerticalEnd,
    ImageIcon,
    Info,
    LucideIcon,
    Mail,
    Scale,
    Shield,
    SquareStack,
    Users,
} from "lucide-react";
import {IconDrone, IconView360Number, TablerIcon} from "@tabler/icons-react";

export interface HeaderLink {
    title: string;
    description?: string;
    href: string;
    icon?: LucideIcon | TablerIcon;
    banner?: boolean;
    whiteButton?: boolean;
    submenu?: HeaderLink[];
}

export const HEADER_LINKS: HeaderLink[] = [
    {
        title: "Kontakt",
        href: "/contact",
        icon: Mail
    },
    {
        title: "Info",
        href: "/pricing",
        icon: Info,
        submenu: [
            {
                title: "Preise",
                description: "Erhalten Sie einen Überblick über unsere Preise",
                icon: Banknote,
                href: "/pricing",
            },
            {
                title: "FAQ",
                description: "Häufig gestellte Fragen zu C AROUND, unseren Services und Preisen",
                icon: CircleHelp,
                href: "/qna",
            },
            ]
    },
    {
        title: "Über uns",
        href: "/about",
        icon: Info,
        submenu: [
            {
                title: "Über uns",
                description: "Erfahren Sie mehr über C AROUND",
                icon: Info,
                href: "/about",
                banner: true
            },
            {
                title: "Team",
                description: "Lernen Sie unser Team von Experten kennen",
                icon: Users,
                href: "/team"
            },
            {
                title: "Datenschutz",
                description: "Erfahren Sie mehr über unsere Datenschutzrichtlinien",
                icon: Shield,
                href: "/about/privacy"
            },
            {
                title: "Impressum",
                description: "Rechtliche Informationen über AlpenCloud",
                icon: Scale,
                href: "/about/imprint"
            },
        ]
    },
    {
        title: "Services",
        href: "/services",
        icon: GalleryVerticalEnd,
        submenu: [
            {
                title: "Alle anzeigen",
                description: "Entdecken Sie alle unsere Dienstleistungen",
                icon: SquareStack,
                href: "/services"
            },
            {
                title: "360°-Rundgänge",
                banner: true,
                description: "Virtuelle 360°-Rundgänge für Immobilien und Unternehmen",
                icon: IconView360Number,
                href: "/services/360-tours"
            },
            {
                title: "Dronen Fotografie",
                description: "Luftaufnahmen und Drohnenfotografie für Immobilien und Unternehmen",
                icon: IconDrone,
                href: "/services/drone"
            },
            {
                title: "Immobilien Fotografie",
                description: "Professionelle Immobilienfotografie für Ihr Grundstück, Wohnung oder Haus",
                icon: ImageIcon,
                href: "/services/real-estate"
            },
        ]
    },
    {
        title: "Kundenportal",
        href: "/client-portal",
        // href: "https://portal.c-around.ch",
        whiteButton: true
    }
];