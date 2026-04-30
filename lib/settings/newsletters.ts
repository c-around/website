export interface Newsletter {
  name: string;
  date: Date;
  pdfFile: string;
}

export const NEWSLETTERS: Newsletter[] = [
  {
    name: "Herbstmesse 2025",
    date: new Date(2025, 9, 15),
    pdfFile: "/newsletters/herbstmesse-2025.pdf",
  },
  {
    name: "Geschäftsbericht",
    date: new Date(2026, 3, 30),
    pdfFile: "/newsletters/geschaeftsbericht.pd f",
  },
];
