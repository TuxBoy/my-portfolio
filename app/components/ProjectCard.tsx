"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tech: string[];
    github?: string;
    demo?: string;
}

export default function ProjectCard({ title, description, image, tech, github, demo }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-lg"
        >
            <img src={image} alt={title} className="rounded-lg mb-4" />

            <h3 className="text-xl text-white font-semibold">{title}</h3>
            <p className="text-gray-400 mt-2">{description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
                {tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs bg-gray-800 rounded-lg text-indigo-400">
            {t}
          </span>
                ))}
            </div>

            <div className="flex gap-4 mt-4">
                {github && (
                    <a href={github} target="_blank" className="text-gray-300 hover:text-white">
                        Code →
                    </a>
                )}
                {demo && (
                    <a href={demo} target="_blank" className="text-indigo-400 hover:text-indigo-300">
                        Démo →
                    </a>
                )}
            </div>
        </motion.div>
    )
}