"use client";

import {useState} from "react";

export default function Add() {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [image, setImage] = useState<string>("");
    const [tech, setTech] = useState<string>("");
    const [tags, setTags] = useState<string>("");
    const [demo, setDemo] = useState<string>("")
    const [github, setGithub] = useState<string>("")

    const handleAddProject = async () => {
        const newProjectPayload = {
            title,
            description,
            image: image || null,
            tech: tech ? tech.split(',').map(t => t.trim()): [],
            tags: tags ? tags.split(',').map(t => t.trim()): [],
            demo: demo || null,
            github: github || null,
        }

        fetch('/api/projects', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(newProjectPayload)
        })

        // Reset form
        setTitle('')
        setDescription('')
        setImage('')
        setTags('')
        setTech('')
        setGithub('')
        setDemo('')
    }

    return (
        <>
            <section className="px-4 lg:px-20 mt-20">
                <h1 className="text-2xl font-bold mb-6">Ajouter un project</h1>

                {/* FORMULAIRE */}
                <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Titre"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        placeholder="Image URL"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="p-2 border rounded"
                    />
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="p-2 border rounded col-span-2"
                    />
                    <input
                        type="text"
                        placeholder="Technologies (séparées par ,)"
                        value={tech}
                        onChange={(e) => setTech(e.target.value)}
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        placeholder="Tags (séparés par ,)"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        placeholder="Lien GitHub"
                        value={github}
                        onChange={(e) => setGithub(e.target.value)}
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        placeholder="Lien Démo"
                        value={demo}
                        onChange={(e) => setDemo(e.target.value)}
                        className="p-2 border rounded"
                    />
                    <button
                        onClick={handleAddProject}
                        className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 col-span-2"
                    >
                        Ajouter un projet
                    </button>
                </div>
            </section>
        </>
    )
}