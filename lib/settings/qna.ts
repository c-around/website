export interface QNA {
    question: string;
    answer: string;
}

export const QUESTIONS_AND_ANSWERS: QNA[] = [
    {
        question: "Ist es möglich, später einzelne Bilder auszutauschen?",
        answer: `Ja, Einzelbilder können jederzeit ausgetauscht werden.`,
    },
    {
        question: "Muss ich den Hostinganbieter wechseln?",
        answer: "Nein, Sie können es aber auch über uns hosten lassen.",
    },
    {
        question: "Gibt es Reduktionen bei der Buchung von mehr als einer virtuellen Tour?",
        answer: "Das ist möglich, je nach aufwand und distanz zwischen den Aufnahmeorten"
    },
    {
        question: "Wie lange dauert es, bis die Touren online ist?",
        answer: "Das kann je nach Projekt variieren, genauere Informationen und unsgefähre Zeitangaben finden Sie in unseren [Zeitplänen](/timelines). In der Regel dauert es aber zwischen 1-2 Wochen, bis die Touren online sind.",
    },
]