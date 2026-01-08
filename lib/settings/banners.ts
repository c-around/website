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
    text: "🎉 Neujahr Rabatt: Jetzt 15% Rabatt auf alle Dienstleistungen! 🤑",
    color: "green" as const,
    link: {
      text: "🚀 Jetzt Anfrage stellen",
      url: "/pricing?code=NEUKUNDE",
    },
    until: "2026-03-31",
  },
  {
    text: "Hernstemessen 20% Rabatt auf 360° Rundgänge mit code 'HERBSRMESSE' 🍂",
    color: "orange" as const,
    link: {
      text: "🚀 Jetzt Anfrage stellen",
      url: "/pricing?code=HERBSRMESSE",
    },
    until: "2025-10-31",
    from: "2025-9-25",
  },
].filter(
  (banner) =>
    (!banner.until ? true : new Date(banner.until) > new Date()) &&
    (!banner.from ? true : new Date(banner.from) < new Date())
);
