"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { QUESTIONS_AND_ANSWERS } from "@/lib/settings/qna";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const QuestionAndAnswers = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-zinc-800 to-zinc-900">
            <div className="container mx-auto px-4 min-h-screen">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400 text-center mb-6">
                        Fragen und Antworten
                    </h1>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        Hier finden Sie Antworten auf häufig gestellte Fragen zu unseren
                        Dienstleistungen, Preisen und mehr. Wenn Sie weitere Fragen haben,
                        zögern Sie nicht, uns zu kontaktieren.
                    </p>
                </div>

                <Accordion
                    type="single"
                    collapsible
                    className="w-full space-y-4 max-w-7xl mx-auto"
                >
                    {QUESTIONS_AND_ANSWERS.map((qa, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="rounded-2xl bg-zinc-800/50 backdrop-blur-lg border border-zinc-700 shadow-md"
                        >
                            <AccordionTrigger className="text-left px-6 font-semibold text-sky-300 hover:text-sky-200 transition-colors data-[state=open]:text-sky-200">
                                {qa.question}
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4 text-gray-400">
                                <div className="markdown prose prose-invert max-w-none prose-a:text-sky-300 prose-a:hover:text-sky-200 prose-strong:text-sky-200">
                                    <Markdown
                                        remarkPlugins={[remarkGfm]}
                                        rehypePlugins={[rehypeRaw]}
                                        components={{
                                            code({ node, className, children, ...props }) {
                                                const match = /language-(\w+)/.exec(className || "");
                                                return match ? (
                                                    <div className="relative">
                                                        <div className="absolute right-2 top-2 flex items-center">
                              <span className="text-xs text-gray-400 mr-2">
                                {match[1]}
                              </span>
                                                            <button
                                                                onClick={(e) => {
                                                                    navigator.clipboard.writeText(
                                                                        String(children).replace(/\n$/, "")
                                                                    );
                                                                    // @ts-ignore
                                                                    e.target.innerText = "Copied!";
                                                                    setTimeout(() => {
                                                                        // @ts-ignore
                                                                        e.target.innerText = "Copy";
                                                                    }, 2000);
                                                                }}
                                                                className="text-xs bg-sky-500/30 hover:bg-sky-500/50 text-white rounded px-2 py-1 transition-colors"
                                                                aria-label="Copy code"
                                                            >
                                                                Copy
                                                            </button>
                                                        </div>
                                                        {/* @ts-ignore */}
                                                        <SyntaxHighlighter
                                                            style={atomDark as any}
                                                            language={match[1]}
                                                            PreTag="div"
                                                            className="rounded-md border border-zinc-700 pt-10"
                                                            {...props}
                                                        >
                                                            {String(children).replace(/\n$/, "")}
                                                        </SyntaxHighlighter>
                                                    </div>
                                                ) : (
                                                    <code
                                                        className={`${className} bg-zinc-900/20 text-sky-200`}
                                                        {...props}
                                                    >
                                                        {children}
                                                    </code>
                                                );
                                            },
                                        }}
                                    >
                                        {qa.answer}
                                    </Markdown>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default QuestionAndAnswers;
