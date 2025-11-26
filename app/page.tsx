import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import SectionTitle from "@/app/components/SectionTitle";
import ProjectCard from "@/app/components/ProjectCard";

export default function Home() {
  return (
      <main>
          <Navbar />
          <Hero />

          {/* Projects */}
          <section id="projects" className="px-4 lg:px-20 mt-20">
              <SectionTitle>Mes Projets</SectionTitle>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <ProjectCard
                      title="BookTech"
                      description="Application web permettant de gérer sa bibliothèque personnelle, basée sur React, Symfony & API Platform."
                      image="/projects/booktech.jpg"
                      tech={["React", "TypeScript", "API Platform", "Symfony", "JWT", "Tailwind"]}
                      github="https://github.com/ton-projet"
                      demo="#"
                  />

                  <ProjectCard
                      title="Dashboard Analytics"
                      description="Dashboard moderne avec graphiques interactifs, authentification JWT et layout responsive."
                      image="/projects/dashboard.jpg"
                      tech={["Next.js", "Recharts", "Tailwind", "API REST"]}
                  />

                  <ProjectCard
                      title="Movie Finder"
                      description="Moteur de recherche de films avec API externe, composants réutilisables et système de favoris."
                      image="/projects/movie.jpg"
                      tech={["React", "TMDB API", "Tailwind"]}
                  />

                  <ProjectCard
                      title="Chat Real-Time"
                      description="Application de messagerie temps réel avec WebSocket & notifications."
                      image="/projects/chat.jpg"
                      tech={["Node.js", "WebSocket", "React", "Redis"]}
                  />
              </div>
          </section>

          {/* About */}
          <section id="about" className="px-4 lg:px-20 mt-20">
              <SectionTitle>À propos de moi</SectionTitle>

              <p className="text-gray-400 max-w-2xl">
                  Développeur passionné, j'adore créer des applications modernes, performantes et propres.
                  Je travaille surtout avec React, TypeScript, Symfony, API Platform et Tailwind.
                  J'aime construire des interfaces élégantes, des API robustes et apprendre de nouvelles technos.
              </p>
          </section>

          {/* Contact */}
          <section id="contact" className="px-4 lg:px-20 mt-20 mb-20">
              <SectionTitle>Contact</SectionTitle>

              <p className="text-gray-400 mb-4">Envie de discuter ? Écrivez-moi :</p>

              <a
                  href="mailto:benoit.mallo@gmail.com"
                  className="text-indigo-400 hover:text-indigo-300"
              >
                  benoit.mallo@gmail.com
              </a>
          </section>
      </main>
  );
}
