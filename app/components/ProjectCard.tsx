"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    image?: string | null;
    tech: string[];
    tags: string[];
    github?: string;
    demo?: string;
}

export default function ProjectCard({ title, description, image, tech, github, demo, tags = [] }: ProjectCardProps) {
    const fallbackImage = "/default-project.png";
    const projectImage = image && image.trim() !== "" ? image : fallbackImage;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-lg"
        >

            <figure className="h-48 w-full overflow-hidden">
                <Image
                    src={projectImage}
                    alt={title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                />
            </figure>

            <h3 className="text-xl text-white font-semibold">{title}</h3>
            <p className="text-gray-400 mt-2">{description}</p>
            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                        whileHover={{ scale: 1.1, backgroundColor: "#6366F1", color: "#fff" }}
                        className="px-3 py-1 text-xs rounded-full border border-indigo-400 text-indigo-400 cursor-pointer"
                    >
                        {tag.toUpperCase()}
                    </motion.div>
                ))}
            </div>

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