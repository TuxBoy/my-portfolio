'use client'

import SectionContent from "@/app/components/SectionContent";
import React, {useState} from "react";

export default function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('')

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault()

        const res = await fetch('/api/login', {
            headers: { "Content-Type": "application/json"},
            method: 'POST',
            body: JSON.stringify({ email, password })
        })

        if (res.ok) {
            window.location.href = "/";
        } else {
            setError("Email ou mot de passe incorrect");
        }
    }

    return (
        <SectionContent title="Connexion">
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="px-3 py-2 rounded bg-gray-800"
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="px-3 py-2 rounded bg-gray-800"
                />

                {error && <p className="text-red-400 text-sm">{error}</p>}

                <button
                    type="submit"
                    className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-500"
                >
                    Se connecter
                </button>
            </form>
        </SectionContent>
    )
}