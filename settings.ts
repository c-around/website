import {
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTiktok
} from "@tabler/icons-react";
import {Globe} from "lucide-react";

export const SOCIALS = [
    {
        name: "Facebook",
        url: "https://www.facebook.com/people/C-Around-AG/pfbid0noMRn2gCZL1Qz9aL9Bk8ngzRUCCfBNim7sC7Gv5yHs3EMV2g2D2zMtwx5HcUBDVFl/",
        Icon: IconBrandFacebook,
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/c_around_sh/",
        Icon: IconBrandInstagram,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/c-around",
        Icon: IconBrandLinkedin,
    },
    {
        name: "TikTok",
        url: "https://www.tiktok.com/@c_around_sh?lang=de-DE",
        Icon: IconBrandTiktok,
    },
    {
        name: "GitHub",
        url: "https://github.com/c-around",
        Icon: IconBrandGithub,
    },
];

export const TEAM = [
    {
        name: "Colin Heggli",
        role: "CEO",
        image: "/images/team/colin-heggli.jpg",
        socials: [
            {Icon: IconBrandLinkedin, url: 'https://www.linkedin.com/in/colin-heggli/'},
            {Icon: IconBrandGithub, url: 'https://github.com/M4rshe1'},
            {Icon: Globe, url: 'https://colin.heggli.dev'},
        ]
    },
    {
        name: "Florian Raschle",
        role: "CAO & CEO stv.",
        image: "/images/team/florian-raschle.webp",
        socials: [
            {Icon: IconBrandLinkedin, url: 'https://www.linkedin.com/in/florian-raschle-006495299/'},
        ]
    },
    {
        name: "Laurenz Büel",
        role: "CFO",
        image: "/images/team/laurenz-buel.jpg",
        socials: [
            {Icon: IconBrandLinkedin, url: 'https://www.linkedin.com/in/laurenz-b%C3%BCel-86797427a/'},
        ]
    },
    {
        name: "Dilay Türkmen",
        role: "CMO",
        image: "/images/team/dilay-tuerkmen.jpg",
        socials: [
            {Icon: IconBrandLinkedin, url: 'https://www.linkedin.com/in/dilay-türkmen-37bab5346/'},
        ]
    },
    {
        name: "Natherat Kamluea",
        role: "CTO",
        image: "/images/team/natherat-kamluea.jpg",
        socials: [
            {
                Icon: IconBrandLinkedin,
                url: 'https://www.linkedin.com/in/natarat-khamluea-991a63342/'
            }
        ]
    }
];

export const SERVICE_IMAGES = {
    'drone': [
        "/images/services/drone/0.webp",
        "/images/services/drone/1.webp",
        "/images/services/drone/2.webp",
        "/images/services/drone/3.webp",
        "/images/services/drone/4.webp",
        "/images/services/drone/5.webp",
    ],
    'realEstate': [
        "/images/services/real-estate/0.webp",
        "/images/services/real-estate/1.webp",
        "/images/services/real-estate/2.webp",
        "/images/services/real-estate/3.webp",
        "/images/services/real-estate/4.webp",
        "/images/services/real-estate/5.webp",
        "/images/services/real-estate/6.webp",
        "/images/services/real-estate/7.webp",
        "/images/services/real-estate/8.webp",
        "/images/services/real-estate/9.webp",
    ]
}