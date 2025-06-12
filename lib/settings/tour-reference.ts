export interface TourReference {
    title: string;
    description: string;
    image: string;
    location: string;
    tags?: string[];
    coordinates?: {
        latitude: number;
        longitude: number;
    };
    website?: string;
    tourLink: string;
}


export const TOUR_REFERENCE = [
    {
        title: "BBZ Aula",
        description: "Das BBZ ist ein Ort des Lernens und der Begegnung. Hier finden Sie eine Vielzahl von Bildungsangeboten und Veranstaltungen.",
        image: "/images/services/tour/bbz-aula.jpg",
        location: "BBZ Aula",
        tags: ["Bildung", "Veranstaltung", "Aula"],
        coordinates: {
            latitude: 47.69945456777009,
            longitude: 8.630549710280542,
        },
        website: "https://www.bbz-sh.ch",
        tourLink: "https://tour.panoee.net/67e53dd02878e02586ee7206"
    },
    {
        title: "Frühling Alterswohnheim",
        description: "Das Alterswohnheim Frühling bietet älteren Menschen ein Zuhause mit vielfältigen Freizeit- und Betreuungsangeboten.",
        image: "/images/services/tour/fruehling-alterswohnheim.jpg",
        location: "Frühling Alterswohnheim Beringen",
        tags: ["Altersheim", "Wohnen", "Betreuung"],
        coordinates: {
            latitude: 47.69571920962357,
            longitude:  8.572579863715404,
        },
        website: "https://www.frueling.ch/index.php",
        tourLink: "https://tour.panoee.net/684ada2bf2b32c5e880cd652"
    }
]