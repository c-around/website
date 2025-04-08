export interface QuestionAndAnswer {
    question: string;
    answer: string;
}

export const QUESTIONS_AND_ANSWERS: QuestionAndAnswer[] = [
    {
        question: "Ist es möglich, später einzelne Bilder auszutauschen?",
        answer: `Ja, Einzelbilder können jederzeit ausgetauscht werden.`,
    },
    // {
    //     question: "Kann ich meine Touren auch selber erstellen?",
    //     answer: `Ja, das ist möglich. Wir stellen Ihnen eine Anleitung zur Verfügung, wie Sie Ihre Touren selber erstellen können.`,
    // },
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
        answer: "Nach der Aufnahme dauert es in der Regel 1-2 Tage, bis die Touren online sind.",
    },

]