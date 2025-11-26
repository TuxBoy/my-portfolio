import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import SectionTitle from "@/app/components/SectionTitle";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectsPage from "@/app/components/ProjectsPage";

export default function Home() {
  return (
      <main>
          <Navbar />
          <Hero />

          {/* Projects */}
          <section id="projects" className="px-4 lg:px-20 mt-20">
              <SectionTitle>Mes Projets</SectionTitle>

              <ProjectsPage />
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
