export interface Banner {
  text: string;
  color:
    | "red"
    | "green"
    | "blue"
    | "yellow"
    | "purple"
    | "pink"
    | "gray"
    | "orange";
  link?: {
    text: string;
    url: string;
  };
  until?: string;
  from?: string;
}

export const BANNERS: Banner[] = [
  {
    text: "🎉 Jetzt 15% Rabatt auf alle Dienstleistungen für Neukunden! 🤑",
    color: "green",
    link: {
      text: "🚀 Jetzt Anfrage stellen",
      url: "/pricing?code=NEUKUNDE",
    },
    until: "2025-12-31",
  },
  {
    text: "Hernstemessen 20% Rabatt auf 360° Rundgänge mit code 'HERBSRMESSE' 🍂",
    color: "orange",
    link: {
      text: "🚀 Jetzt Anfrage stellen",
      url: "/pricing?code=HERBSRMESSE",
    },
    until: "2025-10-31",
    from: "2025-9-25",
  },
];
