import {IconDrone, IconPhoto, IconView360Number, TablerIcon} from "@tabler/icons-react";
import {LucideIcon} from "lucide-react";

export const GLOBAL_DISCOUNT = {
    percentage: 0.3,
    description: "Neu-Kunden Rabatt",
}


interface Price {
    name: string;
    description: string;
    reference: string;
    type: "range" | "bool" | "number";
    step: number;
    key: string;
    max: number;
    min: number;
    icon: TablerIcon | LucideIcon;
    unit: string;
    unit_price: number;
    price: (amount: number, unit_price: number) => number;
    includes: string[];
    extra?: {
        name: string;
        unit_price: number;
        description: string;
        time_range: string;
        type: "bool" | "number";
    }[];
}


export const PRICES: Price[] = [
    {
        name: "360° Rundgang",
        key: "360_tour",
        description: "Professionelle 360° Touren für Ihr Grundstück, Wohnung oder Haus",
        reference: "/services/360-tours",
        type: "range",
        step: 10,
        max: 1000,
        min: 100,
        icon: IconView360Number,
        unit: "m2",
        unit_price: 5,
        price: (amount: number, unit_price: number) => {
            if (amount < 200) {
                return amount * unit_price;
            }
            const effectiveAmount = amount - Math.floor(amount / 15);
            return effectiveAmount * unit_price;
        },
        includes: [
            "Professionelle Aufnahme",
            "HDR Bildaufbereitung",
            "Integration in Ihre Webseite",
        ],
        extra: [
            {
                name: "3D Modell",
                unit_price: 100,
                description: "Erstellen Sie ein 3D Modell aus den 360° Bildern",
                time_range: "Einmalig",
                type: "bool",
            },
            {
                name: "Punktwolken Export",
                unit_price: 200,
                description: "Exportieren Sie die 360° Bilder als Punktwolke für weitere Bearbeitung",
                time_range: "Einmalig",
                type: "bool",
            },
            {
                name: "Google Street View Integration",
                unit_price: 15,
                description: "Integrieren Sie Ihre 360° Tour in Google Street View für mehr Sichtbarkeit",
                time_range: "Monatlich",
                type: "bool",
            },
            {
                name: "Fahrkosten",
                unit_price: 1,
                description: "Fahrkosten pro Kilometer ab Bahnhof Schaffhausen",
                time_range: "Pro KM",
                type: "number",
            },
            {
                name: "Rohdaten",
                unit_price: 150,
                description: "Erhalten Sie die Rohdaten der 360° Bilder für Ihre eigene Bearbeitung",
                time_range: "Einmalig",
                type: "bool",
            },
            {
                name: "Branding",
                unit_price: 75,
                description: "Fügen Sie Ihr Logo und Branding in die 360° Tour ein",
                time_range: "Einmalig",
                type: "bool",
            }
        ]
    },
    {
        name: "360° Einzelbilder",
        description: "Professionelle 360° Einzelbilder für Ihr Grundstück, Wohnung oder Haus",
        reference: "/services/360-images",
        type: "range",
        key: "360_images",
        max: 100,
        step: 1,
        min: 1,
        icon: IconView360Number,
        unit: "Stück",
        unit_price: 100,
        price: (amount: number, unit_price: number) => {
            const discount = Math.floor(amount / 10) * 0.05;
            const effectiveUnitPrice = unit_price * (1 - discount);
            return amount * effectiveUnitPrice;
        },
        includes: [
            "Professionelle Aufnahme",
            "HDR Bildaufbereitung",
        ],
        extra: [
            {
                name: "Fahrkosten",
                unit_price: 1,
                description: "Fahrkosten pro Kilometer ab Bahnhof Schaffhausen",
                time_range: "Pro KM",
                type: "number",
            }
        ]
    },
    {
        name: "Immobilien Fotografie",
        description: "Professionelle Immobilienfotografie für Ihr Grundstück, Wohnung oder Haus",
        reference: "/services/real-estate",
        type: "range",
        key: "real_estate_photography",
        max: 100,
        min: 7,
        step: 1,
        icon: IconPhoto,
        unit: "Stück",
        unit_price: 49,
        price: (amount: number, unit_price: number) => {
            const effectiveAmount = amount - Math.floor(amount / 20);
            return effectiveAmount * unit_price;
        },
        includes: [
            "Professionelle Aufnahme",
            "HDR Bildaufbereitung",
            "Integration in Ihre Webseite",
        ],
        extra: [
            {
                name: "Fahrkosten",
                unit_price: 1,
                description: "Fahrkosten pro Kilometer ab Bahnhof Schaffhausen",
                time_range: "Pro KM",
                type: "number",
            }
        ]
    },
    {
        name: "Drohnen Fotografie",
        description: "Professionelle Drohnenfotografie für Ihr Grundstück, Wohnung oder Haus",
        reference: "/services/drone",
        type: "range",
        key: "drone_photography",
        max: 100,
        step: 1,
        min: 3,
        icon: IconDrone,
        unit: "Stück",
        unit_price: 89,
        price: (amount: number, unit_price: number) => {
            const effectiveAmount = amount - Math.floor(amount / 20);
            return effectiveAmount * unit_price;
        },
        includes: [
            "Professionelle Aufnahme",
            "HDR Bildaufbereitung",
        ],
        extra: [
            {
                name: "Fahrkosten",
                unit_price: 1,
                description: "Fahrkosten pro Kilometer ab Bahnhof Schaffhausen",
                time_range: "Pro KM",
                type: "number",
            }
        ]
    },
]