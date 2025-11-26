"use client";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center py-6 px-4 lg:px-20 text-gray-300"
        >
            <h1 className="text-xl font-bold text-white">Benoît Mallo</h1>

            <div className="flex gap-6">
                <a href="#projects" className="hover:text-white transition">Projets</a>
                <a href="#about" className="hover:text-white transition">À propos</a>
                <a href="#contact" className="hover:text-white transition">Contact</a>
            </div>
        </motion.nav>
    );
}