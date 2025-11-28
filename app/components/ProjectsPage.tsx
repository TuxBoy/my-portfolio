'use client'

import {useEffect, useState} from "react";
import ProjectCard from "@/app/components/ProjectCard";

interface Project {
    id: number;
    title: string;
    description: string;
    image?: string | null;
    tech: string[];
    tags: string[];
    github?: string;
    demo?: string;
}


export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        fetch("/api/projects")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    tech={project.tech}
                    github={project.github}
                    tags={project.tags}
                />
            ))}
        </div>
    )
}