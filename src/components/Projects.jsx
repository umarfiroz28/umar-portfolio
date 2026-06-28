import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";
import { PROJECTS } from "../data/portfolio";

function ProjectVisual({ project, index }) {
  const [a, b, c] = project.colors;

  return (
    <div className="grid min-h-[260px] grid-cols-1 gap-3 md:min-h-[300px] md:grid-cols-[0.4fr_0.6fr]">
      <div className="grid gap-3">
        <div
          className="project-panel rounded-[24px] border border-sky-300/20 bg-[#08213A]/70 p-5 md:rounded-[28px]"
          style={{
            background: `linear-gradient(135deg, ${a}24, rgba(8,33,58,0.88))`,
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200/58 sm:tracking-[0.28em]">
            Stack
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-sky-300/18 bg-[#061729]/54 px-3 py-1 text-xs font-medium text-sky-100/76"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div
          className="project-panel rounded-[24px] border border-sky-300/20 bg-[#08213A]/70 p-5 md:rounded-[28px]"
          style={{
            background: `linear-gradient(135deg, ${b}24, rgba(8,33,58,0.88))`,
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200/58 sm:tracking-[0.28em]">
            Impact
          </p>
          <p className="mt-5 text-lg font-black uppercase leading-tight text-sky-50 sm:text-xl">
            {project.result}
          </p>
        </div>
      </div>

      <div
        className="project-panel relative overflow-hidden rounded-[26px] border border-sky-300/20 bg-[#08213A]/70 p-5 sm:p-6 md:rounded-[32px]"
        style={{
          background: `linear-gradient(135deg, ${c}24, rgba(8,33,58,0.9))`,
        }}
      >
        <div
          className="absolute inset-8 rounded-[32px] border border-sky-300/16 md:inset-10 md:rounded-[36px]"
          style={{ transform: "rotateX(58deg) rotateZ(-28deg)" }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/20 sm:h-36 sm:w-36"
          style={{
            transform: `translate(-50%, -50%) rotateX(55deg) rotateY(${
              index % 2 ? -28 : 28
            }deg) rotateZ(45deg)`,
            background: `linear-gradient(135deg, ${a}55, ${b}22)`,
            boxShadow: `0 30px 80px ${a}22`,
          }}
        />
        <div className="relative z-10 flex h-full flex-col justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200/58 sm:tracking-[0.32em]">
            {project.period}
          </p>
          <p className="mt-16 max-w-sm text-sm leading-relaxed text-sky-100/76 sm:mt-0">
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
    <div ref={ref} className="h-auto pb-8 md:h-[85vh] md:pb-0">
      <motion.article
        style={{ scale, rotateX, transformPerspective: 1400 }}
        className="flex min-h-0 flex-col justify-between rounded-[28px] border border-sky-300/20 bg-[#08213A]/86 p-4 shadow-[0_40px_120px_rgba(14,165,233,0.16)] backdrop-blur-md sm:rounded-[42px] sm:p-6 md:sticky md:top-20 md:min-h-[70vh] md:rounded-[60px] md:p-8"
      >
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div className="grid gap-1 md:grid-cols-[80px_180px_1fr] md:items-start md:gap-8">
            <span className="text-sm font-black uppercase tracking-[0.24em] text-sky-200/48 sm:tracking-[0.28em]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-200/58 sm:tracking-[0.28em]">
              {project.category}
            </span>
            <h3 className="max-w-2xl text-3xl font-black uppercase leading-none tracking-normal text-sky-50 sm:text-5xl md:text-6xl">
              {project.title}
            </h3>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-sky-300/24 bg-sky-400/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-sky-200 transition hover:-translate-y-1 hover:bg-sky-400 hover:text-[#061729] sm:tracking-widest"
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
      className="relative z-10 -mt-8 rounded-t-[32px] bg-[#061729] px-4 py-16 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn y={40}>
        <h2 className="mb-12 text-center font-black uppercase leading-none tracking-normal text-sky-50 [font-size:clamp(2.8rem,12vw,160px)] sm:mb-16">
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
