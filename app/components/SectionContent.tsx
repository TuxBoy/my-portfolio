"use client";

import React from "react";

type SectionContentProps = {
    title: string;
    children: React.ReactNode;
}

export default function SectionContent({ children, title }: SectionContentProps) {
    return (
        <section className="px-4 lg:px-20 mt-20">
            <h1 className="text-2xl font-bold mb-6">{title}</h1>
            {children}
        </section>
    )
}