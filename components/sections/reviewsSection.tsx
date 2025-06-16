"use client";

import {useEffect, useState} from "react";
import {ArrowRight, ChevronLeft, ChevronRight, Star} from "lucide-react";
import {cn} from "@/lib/utils";
import {REVIEWS} from "@/lib/settings/reviews";
import Image from "next/image";
import Link from "next/link";

export default function ReviewsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextTestimonial = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        setActiveIndex((prev) => (prev + 1) % REVIEWS.length);

        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    };

    const prevTestimonial = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    };

    useEffect(() => {
        const interval = setInterval(nextTestimonial, 8000);
        return () => clearInterval(interval);
    }, [nextTestimonial]);

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-400 mb-4">
                        Glückliche Kundenstimmen
                    </h2>
                    <p className="text-sm text-gray-300 mt-2 font-semibold">
                        Unsere Kunden sind begeistert von unseren 360° Touren. Lesen Sie, was sie über ihre Erfahrungen
                        sagen!
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="relative h-[400px] md:h-[300px] overflow-hidden">
                        {REVIEWS.map((review, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 md:p-10 transition-all duration-500 rounded-xl shadow-xl border border-zinc-700/50 backdrop-blur-sm",
                                    activeIndex === index
                                        ? "opacity-100 translate-x-0 z-10"
                                        : "opacity-0 pointer-events-none",
                                    index < activeIndex && activeIndex !== index
                                        ? "-translate-x-full"
                                        : index > activeIndex && activeIndex !== index
                                            ? "translate-x-full"
                                            : ""
                                )}
                                aria-hidden={activeIndex !== index}
                            >
                                <div className="flex flex-col md:flex-row gap-6 h-full">
                                    <div className="flex flex-col items-center md:items-start">
                                        <div
                                            className="rounded-full overflow-hidden w-20 h-20 mb-4 border-2 border-sky-400 shadow-lg shadow-sky-500/20 bg-white">
                                            <Image
                                                src={review.avatar}
                                                alt={review.name}
                                                width={80}
                                                height={80}
                                                className="w-full h-full object-fit"
                                            />
                                        </div>
                                        <div className="flex mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`h-4 w-4 ${i < review.rating ? "fill-sky-400 text-sky-400" : "text-zinc-600"}`}
                                                />
                                            ))}
                                        </div>
                                        <h4 className="text-lg font-semibold text-white text-center md:text-left">{review.name}</h4>
                                        <Link
                                            href={`/services/360-tours/?s=${encodeURIComponent(review.reference)}`}
                                            className="text-sm text-sky-400 hover:text-sky-300  transition-colors text-center md:text-left flex items-center gap-1"
                                        >
                                            <span className={"underline underline-offset-2"}>{review.reference}</span>
                                            <span className="inline-block transform -rotate-45"><ArrowRight
                                                className={"scale-75"}/></span>
                                        </Link>
                                    </div>
                                    <div className="flex-1 flex items-center">
                                        <blockquote className="italic text-gray-300">
                                            &#34;{review.content}&#34;
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between mt-8">
                        <button
                            onClick={prevTestimonial}
                            className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-colors text-white"
                            disabled={isAnimating}
                        >
                            <ChevronLeft className="h-5 w-5"/>
                            <span className="sr-only">Previous testimonial</span>
                        </button>

                        <div className="flex space-x-2">
                            {REVIEWS.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        if (isAnimating) return;
                                        setIsAnimating(true);
                                        setActiveIndex(index);
                                        setTimeout(() => setIsAnimating(false), 500);
                                    }}
                                    className={`h-3 rounded-full transition-all ${
                                        activeIndex === index
                                            ? "bg-sky-400 w-6"
                                            : "bg-zinc-700 hover:bg-zinc-600 w-3"
                                    }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextTestimonial}
                            className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-colors text-white"
                            disabled={isAnimating}
                        >
                            <ChevronRight className="h-5 w-5"/>
                            <span className="sr-only">Next testimonial</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}