import QuestionAndAnswers from "@/components/qna";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'C AROUND | Fragen und Antworten',
    description: 'Häufig gestellte Fragen zu C AROUND und unseren Services',
}

const Page = () => {
    return (
        <QuestionAndAnswers/>
    )
}

export default Page;