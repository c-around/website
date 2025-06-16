export interface Review {
    name: string;
    reference: string;
    avatar: string;
    content: string;
    rating: number;
}

export const REVIEWS: Review[] = [
    {
        name: "Frühling Altersheim",
        reference: "Frühling Alterswohnung",
        avatar: "/images/customers/fruehling.png",
        content: "Sehr schnelle und professionelle Umsetzung. Die 360° Tour ist beeindruckend und eine ganz neue Perspektive für unsere Bewohner.",
        rating: 5
    },
    {
        name: "BBZ Schaffhausen",
        reference: "BBZ Aula",
        avatar: "/images/customers/bbz.jpg",
        content: "Die Zusammenarbeit war sehr angenehm. Die Tour ist von hoher Qualität und die Integration in unsere Webseite war problemlos.",
        rating: 4,
    },
]