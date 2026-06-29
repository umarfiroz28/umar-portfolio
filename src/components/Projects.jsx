import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";
import { PROJECTS } from "../data/portfolio";

function ProjectVisual({ project, index }) {
  const [a, b, c] = project.colors;

  return (
    <div className="grid min-h-[230px] grid-cols-1 gap-3 md:grid-cols-[0.38fr_0.62fr]">
      <div className="grid gap-3">
        <div
          className="project-panel relative overflow-hidden rounded-2xl border border-[#263142] bg-[#10151F]/80 p-5"
          style={{
            background: `linear-gradient(135deg, ${a}18, rgba(16,21,31,0.88))`,
          }}
        >
          <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#6F7A8C]">
            Stack
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#263142] bg-[#070A0F]/54 px-3 py-1 text-xs font-semibold text-[#A7B0C0]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div
          className="project-panel relative overflow-hidden rounded-2xl border border-[#263142] bg-[#10151F]/80 p-5"
          style={{
            background: `linear-gradient(135deg, ${b}18, rgba(16,21,31,0.88))`,
          }}
        >
          <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#6F7A8C]">
            Impact
          </p>
          <p className="mt-4 font-display text-lg font-bold leading-tight text-[#F4F7FB] sm:text-xl">
            {project.result}
          </p>
        </div>
      </div>

      <div
        className="project-panel relative overflow-hidden rounded-2xl border border-[#263142] bg-[#10151F]/80 p-5 sm:p-6"
        style={{
          background: `linear-gradient(135deg, ${c}18, rgba(16,21,31,0.9))`,
        }}
      >
        <div
          className="absolute inset-8 rounded-[28px] border border-[#4DA3FF]/14 md:inset-10"
          style={{ transform: "rotateX(58deg) rotateZ(-28deg)" }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/12 sm:h-36 sm:w-36"
          style={{
            transform: `translate(-50%, -50%) rotateX(55deg) rotateY(${
              index % 2 ? -28 : 28
            }deg) rotateZ(45deg)`,
            background: `linear-gradient(135deg, ${a}55, ${b}22)`,
            boxShadow: `0 30px 80px ${a}22`,
          }}
        />
        <div className="relative z-10 flex h-full flex-col justify-between">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#6F7A8C]">
            {project.period}
          </p>
          <p className="mt-16 max-w-sm text-sm leading-6 text-[#A7B0C0] sm:mt-0">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <div ref={ref} className="h-auto pb-6 md:h-[76vh] md:pb-0">
      <motion.article
        style={{ scale, rotateX, transformPerspective: 1400 }}
        className="trust-surface flex min-h-0 flex-col justify-between rounded-[24px] p-4 backdrop-blur-md sm:p-6 md:sticky md:top-24 md:min-h-[62vh] md:rounded-[30px] md:p-8"
      >
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div className="grid gap-2 md:grid-cols-[64px_150px_1fr] md:items-start md:gap-7">
            <span className="font-mono text-sm font-bold uppercase tracking-[0.14em] text-[#6F7A8C]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#D7B56D]">
              {project.category}
            </span>
            <h3 className="max-w-2xl font-display text-3xl font-bold leading-tight tracking-normal text-[#F4F7FB] sm:text-5xl">
              {project.title}
            </h3>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#263142] bg-[#171E2B] px-5 py-3 text-sm font-bold text-[#F4F7FB] transition hover:-translate-y-1 hover:border-[#4DA3FF] hover:text-[#4DA3FF]"
          >
            View work
            <ArrowUpRight size={15} />
          </a>
        </div>

        <ProjectVisual project={project} index={index} />
      </motion.article>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 bg-[#070A0F] px-4 py-16 sm:px-8 sm:py-24 md:px-10"
    >
      <FadeIn y={40}>
        <div className="mx-auto mb-10 max-w-7xl">
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#D7B56D]">
            Selected work
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-normal text-[#F4F7FB] sm:text-5xl md:text-6xl">
            Projects with clear outcomes.
          </h2>
        </div>
      </FadeIn>

      <div className="mx-auto max-w-7xl">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
