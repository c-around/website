export interface TimelineStep {
    title: string;
    description: string;
    duration: number;
    offset?: number;
    customerActionRequired: boolean;
}

export interface Timeline {
    name: string;
    description: string;
    steps: TimelineStep[];
}


export const TIMELINES: Timeline[] = [
    {
        name: "360° Rundgang",
        description: "Zeitplan für die Erstellung eines 360° Rundgangs.",
        steps: [
            {
                title: "Kickoff Meeting",
                description: "Ein erstes Treffen oder Online-Meeting, um die Ziele und Anforderungen des 360° Rundgangs zu besprechen.",
                duration: 1,
                customerActionRequired: true,
            },
            {
                title: "Aufnahme Termin",
                description: "Termin für die Aufnahme der 360° Bilder vor Ort.",
                duration: 1,
                customerActionRequired: true,
            },
            {
                title: "Bildbearbeitung",
                description: "Bearbeitung der aufgenommenen Bilder für den 360° Rundgang.",
                duration: 3,
                customerActionRequired: false,
            },
            {
                title: "Erstellung des 360° Rundgangs",
                description: "Integration der bearbeiteten Bilder in den 360° Rundgang.",
                duration: 3,
                customerActionRequired: false,
            },
            {
                title: "Feedback",
                description: "Kundenfeedback zum 360° Rundgang.",
                duration: 2,
                offset: -1,
                customerActionRequired: true,
            },
            {
                title: "Anpassungen",
                description: "Anpassungen basierend auf dem Kundenfeedback zum 360° Rundgang.",
                duration: 2,
                customerActionRequired: false,
            },
            {
                title: "Finalisierung",
                description: "Abschluss und Übergabe des finalen 360° Rundgangs.",
                duration: 1,
                customerActionRequired: false,
            },
            {
                title: "Integration",
                description: "Optionale Integration des 360° Rundgangs in die bestehende Website des Kunden.",
                duration: 1,
                customerActionRequired: true,
            },
            {
                title: "Übergabe",
                description: "Übergabe des 360° Rundgangs an den Kunden.",
                duration: 1,
                customerActionRequired: true,
            },
            {
                title: "Rechnung",
                description: "Rechnung für die Erstellung des 360° Rundgangs.",
                duration: 1,
                offset: -1,
                customerActionRequired: true,
            }
        ]
    },
    {
        name: "Imobilien und Drohnenfotografie",
        description: "Zeitplan für die Erstellung von Immobilien- und Drohnenfotografie.",
        steps: [
            {
                title: "Kickoff Meeting",
                description: "Ein erstes Treffen oder Online-Meeting, um die Ziele und Anforderungen der Fotografie zu besprechen.",
                duration: 1,
                customerActionRequired: true,
            },
            {
                title: "Aufnahme Termin",
                description: "Termin für die Aufnahme der Bilder vor Ort.",
                duration: 1,
                customerActionRequired: true,
            },
            {
                title: "Bildbearbeitung",
                description: "Bearbeitung der aufgenommenen Bilder.",
                duration: 3,
                customerActionRequired: false,
            },
            {
                title: "Feedback",
                description: "Kundenfeedback zu den bearbeiteten Bildern.",
                duration: 2,
                offset: -1,
                customerActionRequired: true,
            },
            {
                title: "Anpassungen",
                description: "Anpassungen basierend auf dem Kundenfeedback zu den Bildern.",
                duration: 3,
                customerActionRequired: false,
            },
            {
                title: "übergabe",
                description: "Abschluss und Übergabe der finalen Bilder.",
                duration: 1,
                customerActionRequired: true,
            },
            {
                title: "Rechnung",
                description: "Rechnung für die Erstellung der Immobilien- und Drohnenfotografie.",
                duration: 1,
                offset: -1,
                customerActionRequired: true,
            }
        ]
    }
]