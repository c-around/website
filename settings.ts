
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
        role: "CEO & CTO",
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
        role: "CMO",
        image: "/images/team/natherat-kamluea.jpg",
        socials: [
            {
                Icon: IconBrandLinkedin,
                url: 'https://www.linkedin.com/in/natarat-khamluea-991a63342/'
            }
        ]
    }
];