import {Timeline} from "@/lib/settings/timelines";
import {cn} from "@/lib/utils";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip";
import React from "react";

export const TimelineTable = ({timeline, weekDays = 7}: { timeline: Timeline, weekDays: number }) => {
    const totalDays = Math.ceil((
        timeline.steps.reduce((acc, step) => acc + (step.duration || 0), 0) +
        timeline.steps.reduce((acc, step) => acc + (step.offset || 0), 0)) / weekDays) * weekDays;

    const totalWeeks = Math.ceil(totalDays / weekDays);

    const weekLabels = Array.from({length: totalWeeks}, (_, i) => `W${i + 1}`);

    let currentOffset = 0;

    return (
        <div
            className="p-6 bg-zinc-800/50 rounded-md shadow-2xl backdrop-blur-sm border border-zinc-700/50 relative flex flex-col h-full">
            <div
                className={"flex items-center justify-between mb-4"}
            >
                <h3 className="text-2xl font-bold text-white">
                    {timeline.name}
                </h3>
                <div>
                    <div className={"flex items-center gap-2"}>
                        <div className={"w-3 h-3 rounded-full bg-sky-300"}></div>
                        <span className={"text-gray-300 text-sm"}>Beteiligung nötig</span>
                    </div>
                    <div className={"flex items-center gap-2"}>
                        <div className={"w-3 h-3 rounded-full border border-sky-500 text-sky-500"}></div>
                        <span className={"text-gray-300 text-sm"}>Keine Beteiligung nötig</span>
                    </div>
                </div>
            </div>
            <p className="text-gray-300 mb-8">{timeline.description}</p>
            <div className="overflow-x-auto">
                <div className="relative">
                    <div
                        className="grid text-white font-semibold sticky top-0 z-10 py-2 border-b border-gray-700/50"
                        style={{
                            gridTemplateColumns: `minmax(200px, 0.25fr) repeat(${totalWeeks}, 1fr)`,
                        }}
                    >
                        <div></div>
                        {weekLabels.map(label => (
                            <div
                                key={label}
                                className={cn(
                                    "text-center relative border-l border-dashed border-gray-600"
                                )}
                            >
                                {label}
                            </div>
                        ))}
                    </div>

                    <div
                        className="grid text-gray-300 text-sm gap-0 relative"
                        style={{
                            gridTemplateColumns: `minmax(200px, 0.25fr) repeat(${totalWeeks}, 1fr)`,
                        }}
                    >
                        {timeline.steps.map((step, index) => {

                            currentOffset += step.offset || 0;

                            const content = (
                                <React.Fragment key={index}>
                                    <div
                                        title={step.title}
                                        className={cn(
                                            "p-2 truncate group-hover:bg-gray-700/50 transition-colors duration-300 ease-in-out",
                                            {
                                                "text-sky-300 font-medium":
                                                step.customerActionRequired,
                                            },
                                            index > 0 && "border-t border-gray-700/50"
                                        )}
                                    >
                                        {step.title}
                                    </div>

                                    <div
                                        className={cn(
                                            "relative h-full flex items-center group-hover:bg-gray-700/50 transition-colors duration-300 ease-in-out py-2",
                                            index > 0 && "border-t border-gray-700/50"
                                        )}
                                        style={{
                                            gridColumnStart: 2,
                                            gridColumnEnd: `span ${totalWeeks}`,
                                        }}
                                    >
                                        {Array.from({length: totalWeeks}, (_, i) => (
                                            <div
                                                key={`step-vertical-line-${index}-${i}`}
                                                className="absolute top-0 h-full w-px border-l border-dashed border-gray-600 z-0"
                                                style={{
                                                    left: `${((i) / totalWeeks) * 100}%`,
                                                }}
                                            />
                                        ))}

                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <div
                                                        className={cn(
                                                            "absolute h-8 flex items-center justify-center rounded-md transition-all duration-300 ease-in-out cursor-pointer",
                                                            {
                                                                "bg-sky-500 text-white":
                                                                step.customerActionRequired,
                                                                "border border-sky-500 text-sky-500":
                                                                    !step.customerActionRequired,
                                                            },
                                                        )}
                                                        style={{
                                                            left: `${
                                                                (currentOffset /
                                                                    (totalDays || 1)) *
                                                                100
                                                            }%`,
                                                            width: `${
                                                                (step.duration /
                                                                    (totalDays || 1)) *
                                                                100
                                                            }%`,
                                                        }}
                                                    >
                                                        {step.duration > 0 && (
                                                            <span>{step.duration}</span>
                                                        )}
                                                    </div>
                                                </TooltipTrigger>
                                                <TooltipContent className={"pointer-events-none"}>
                                                    <p className="max-w-xs">
                                                        {step.description}
                                                    </p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                </React.Fragment>
                            )
                            currentOffset += (step.duration || 0);
                            return content;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};