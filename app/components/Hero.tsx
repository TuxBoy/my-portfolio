"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-[70vh] flex flex-col justify-center px-4 lg:px-20">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-5xl lg:text-7xl font-extrabold text-white"
            >
                Salut, je suis <span className="text-indigo-500">Benoît Mallo</span>.
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="text-xl mt-4 text-gray-400 max-w-xl"
            >
                Développeur Web Full-Stack spécialisé en <strong>React</strong>, <strong>Symfony</strong>,
                <strong> API Platform</strong> & <strong>TypeScript</strong>.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="mt-6"
            >
                <a
                    href="/cv.pdf"
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg transition"
                >
                    Télécharger mon CV
                </a>
            </motion.div>
        </section>
    );
}
