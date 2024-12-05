"use client";

import React from "react";

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export function ServiceCard({icon, title, description}: ServiceCardProps) {
    return (
        <div
            className="bg-zinc-900 p-8 rounded-lg hover:transform hover:-translate-y-1 transition-transform duration-300">
            <div className="mb-6">{icon}</div>
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <p className="text-zinc-300">{description}</p>
        </div>
    );
}