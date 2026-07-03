import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { PROJECTS } from "@/data/site";

export default function ProjectsSection() {
  return (
    <section id="work" className="bg-canvas py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Selected Work</p>
            <h2 className="mt-4 text-[34px] font-semibold leading-[1.08] tracking-normal text-ink sm:text-[46px] lg:text-[58px]">
              Projects with clear outcomes.
            </h2>
            <p className="mt-5 text-lg leading-8 text-secondary">
              AutoStack, Knyo Cloud, and GenAI Developer Assistant, presented
              with cleaner product-style cards while keeping the original
              descriptions and impact lines.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
