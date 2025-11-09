import {
  IconBrandGithub,
  IconBrandLinkedin,
  TablerIcon,
} from "@tabler/icons-react";
import { Mail, Globe, LucideIcon } from "lucide-react";

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: {
    Icon: LucideIcon | TablerIcon;
    url: string;
  }[];
}

export const TEAM = [
  {
    name: "Colin Heggli",
    role: "CEO",
    image: "/images/team/colin-heggli.png",
    socials: [
      {
        Icon: IconBrandLinkedin,
        url: "https://www.linkedin.com/in/colin-heggli/",
      },
      { Icon: IconBrandGithub, url: "https://github.com/M4rshe1" },
      { Icon: Globe, url: "https://colin.heggli.dev" },
      { Icon: Mail, url: "mailto:colin.heggli@c-around.ch" },
    ],
  },
  {
    name: "Florian Raschle",
    role: "CAO & CEO stv.",
    image: "/images/team/florian-raschle.png",
    socials: [
      {
        Icon: IconBrandLinkedin,
        url: "https://www.linkedin.com/in/florian-raschle-006495299/",
      },
      { Icon: Mail, url: "mailto:florian.raschle@c-around.ch" },
    ],
  },
  {
    name: "Laurenz Büel",
    role: "CFO",
    image: "/images/team/laurenz-bueel.png",
    socials: [
      {
        Icon: IconBrandLinkedin,
        url: "https://www.linkedin.com/in/laurenz-b%C3%BCel-86797427a/",
      },
      { Icon: Mail, url: "mailto:laurenz.bueel@c-around.ch" },
    ],
  },
  {
    name: "Dilay Türkmen",
    role: "CMO",
    image: "/images/team/dilay-tuerkmen.png",
    socials: [
      {
        Icon: IconBrandLinkedin,
        url: "https://www.linkedin.com/in/dilay-türkmen-37bab5346/",
      },
      { Icon: Mail, url: "mailto:dilay.tuerkmen@c-around.ch" },
    ],
  },
  {
    name: "Naterat Khamluea",
    role: "CTO",
    image: "/images/team/natherat-kamluea.png",
    socials: [
      {
        Icon: IconBrandLinkedin,
        url: "https://www.linkedin.com/in/natarat-khamluea-991a63342/",
      },
      {
        Icon: Mail,
        url: "mailto:naterat.khamluea@c-around.ch",
      },
    ],
  },
];
