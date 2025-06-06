export interface Banner {
    text: string;
    color: "red" | "green" | "blue" | "yellow" | "purple" | "pink" | "gray";
    link?: {
        text: string;
        url: string;
    };
}

export const BANNERS: Banner[] = [
    {
        text: "🎉 Jetzt 30% Rabatt auf alle Dienstleistungen für Neukunden! 🤑",
        color: "green",
        link: {
            text: "🚀 Jetzt Anfrage stellen",
            url: "/pricing"
        }
    }
]