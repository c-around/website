"use client";

import {TimelineTable} from "@/components/timelineTable";
import {TIMELINES} from "@/lib/settings/timelines";
import React, {useState} from "react";

const Page = () => {
    const [weekDays, setWeekDays] = useState(5);

    return (
        <div className="container mx-auto py-24">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Unsere <span
                    className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-sky-400">Zeitpläne</span>
                </h1>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                    Erfahre mehr über unsere Entwicklung und Meilensteine bei der Erstellung eines Personalisierten
                    360° Rundgang und unseren anderen Dienstleistungen.
                </p>
            </div>
            {
                TIMELINES.map((timeline, index) => (
                    <div key={index} className="mb-12">
                        <TimelineTable timeline={timeline} weekDays={weekDays}/>
                    </div>
                ))
            }
        </div>
    );
}

export default Page;