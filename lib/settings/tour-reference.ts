export interface TourReference {
    title: string;
    description: string;
    image: string;
    tags?: string[];
    squareMeters: number;
    location: {
        name: string;
        latitude: number;
        longitude: number;
    };
    website?: string;
    tourLink: string;
}


export const TOUR_REFERENCE: TourReference[] = [
    {
        title: "BBZ Aula",
        description: "Das BBZ ist ein Ort des Lernens und der Begegnung. Hier finden Sie eine Vielzahl von Bildungsangeboten und Veranstaltungen.",
        image: "/images/services/tour/bbz-aula.jpg",
        tags: ["Bildung", "Veranstaltung", "Aula"],
        squareMeters: 130,
        location: {
            name: "Schaffhausen, Schweiz",
            latitude: 47.69945456777009,
            longitude: 8.630549710280542,
        },
        website: "https://www.bbz-sh.ch",
        tourLink: "https://tour.panoee.net/67e53dd02878e02586ee7206"
    },
    {
        title: "Frühling Alterswohnung",
        description: "Das Alterswohnheim Frühling bietet älteren Menschen ein Zuhause mit vielfältigen Freizeit- und Betreuungsangeboten.",
        image: "/images/services/tour/fruehling-alterswohnheim.jpg",
        tags: ["Altersheim", "Wohnen", "Betreuung"],
        squareMeters: 60,
        location: {
            name: "Beringen, Schweiz",
            latitude: 47.69571920962357,
            longitude: 8.572579863715404,
        },
        website: "https://www.frueling.ch/index.php",
        tourLink: "https://tour.panoee.net/684ada2bf2b32c5e880cd652"
    },
    {
        title: "Fronhofgass 3",
        description: "Eine schöne Altbauwohnung in Stein am Rhein in der Altstadt und in sichtreichweite des Rheins.",
        image: "/images/services/tour/fronhofgass-3.png",
        tags: ["Wohnen", "Altbau"],
        squareMeters: 130,
        location: {
            name: "Stein am Rhein, Schweiz",
            latitude: 47.66098808545682,
            longitude: 8.858079668984262,
        },
        tourLink: "https://fronhofgass-3.c-around.ch/"
    }
]