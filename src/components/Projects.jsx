import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";
import { PROJECTS } from "../data/portfolio";

function ProjectVisual({ project, index }) {
  const [a, b, c] = project.colors;

  return (
    <div className="grid min-h-[300px] grid-cols-1 gap-3 md:grid-cols-[0.4fr_0.6fr]">
      <div className="grid gap-3">
        <div
          className="project-panel rounded-[28px] border border-[#D8E2F0] bg-white/70 p-5"
          style={{
            background: `linear-gradient(135deg, ${a}20, rgba(255,255,255,0.86))`,
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#64748B]">
            Stack
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#D8E2F0] bg-white/70 px-3 py-1 text-xs font-medium text-[#334155]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div
          className="project-panel rounded-[28px] border border-[#D8E2F0] bg-white/70 p-5"
          style={{
            background: `linear-gradient(135deg, ${b}20, rgba(255,255,255,0.86))`,
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#64748B]">
            Impact
          </p>
          <p className="mt-5 text-xl font-black uppercase leading-tight text-[#142033]">
            {project.result}
          </p>
        </div>
      </div>

      <div
        className="project-panel relative overflow-hidden rounded-[32px] border border-[#D8E2F0] bg-white/70 p-6"
        style={{
          background: `linear-gradient(135deg, ${c}20, rgba(255,255,255,0.88))`,
        }}
      >
        <div
          className="absolute inset-10 rounded-[36px] border border-[#D8E2F0]"
          style={{ transform: "rotateX(58deg) rotateZ(-28deg)" }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/70"
          style={{
            transform: `translate(-50%, -50%) rotateX(55deg) rotateY(${
              index % 2 ? -28 : 28
            }deg) rotateZ(45deg)`,
            background: `linear-gradient(135deg, ${a}55, ${b}22)`,
            boxShadow: `0 30px 80px ${a}22`,
          }}
        />
        <div className="relative z-10 flex h-full flex-col justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#64748B]">
            {project.period}
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-[#334155]">
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
    <div ref={ref} className="h-[85vh]">
      <motion.article
        style={{ scale, rotateX, transformPerspective: 1400 }}
        className="sticky top-20 flex min-h-[70vh] flex-col justify-between rounded-[40px] border border-[#D8E2F0] bg-white/86 p-4 shadow-[0_40px_120px_rgba(37,99,235,0.12)] backdrop-blur-md sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div className="grid gap-1 md:grid-cols-[80px_180px_1fr] md:items-start md:gap-8">
            <span className="text-sm font-black uppercase tracking-[0.28em] text-[#94A3B8]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[#64748B]">
              {project.category}
            </span>
            <h3 className="max-w-2xl text-3xl font-black uppercase leading-none tracking-tight text-[#142033] sm:text-5xl md:text-6xl">
              {project.title}
            </h3>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-[#2563EB] transition hover:-translate-y-1 hover:bg-[#2563EB] hover:text-white"
          >
            Live Project
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
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#F7FAFF] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn y={40}>
        <h2 className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#142033] [font-size:clamp(3rem,12vw,160px)]">
          Project
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-7xl">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
