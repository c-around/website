export interface QuestionAndAnswer {
    question: string;
    answer: string;
}

export const QUESTIONS_AND_ANSWERS: QuestionAndAnswer[] = [
    {
        question: "Ist es möglich, später einzelne Bilder auszutauschen?",
        answer: `Ja, Einzelbilder sowieso, aber auch in den Touren lassen sich einzelne Bilder durch uns austauschen.`,
    },
    // {
    //     question: "Kann ich meine Touren auch selber erstellen?",
    //     answer: `Ja, das ist möglich. Wir stellen Ihnen eine Anleitung zur Verfügung, wie Sie Ihre Touren selber erstellen können.`,
    // },
    {
        question: "Muss ich den Hostinganbieter wechseln?",
        answer: "Nein, Sie können aber auch gerne über uns lauen lassen",
    },
    {
        question: "Gibt es Reduktionen bei der Buchung von mehr als einer virtuellen Tour?",
        answer: "Das ist möglich, je nach aufwand und distanz zwischen diesen beiden Orten"
    }
]