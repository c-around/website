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
    }
]