"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  category: string;
  colors: string[];
  description: string;
  index: number;
  period: string;
  result: string;
  stack: string[];
  title: string;
  url: string;
};

export default function ProjectCard({
  category,
  colors,
  description,
  index,
  period,
  result,
  stack,
  title,
  url,
}: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const [accent, secondary] = colors;

  return (
    <motion.article
      className="tilt-card group overflow-hidden rounded-[32px] border border-line/80 bg-white shadow-premium transition-shadow duration-300 hover:shadow-lift"
      initial={reduceMotion ? false : { opacity: 0, y: 34 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.62, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        reduceMotion ? undefined : { y: -10, rotateX: 2, rotateY: index % 2 ? 2 : -2 }
      }
    >
      <div className="relative h-72 overflow-hidden border-b border-divider bg-[linear-gradient(135deg,#F7F7F8,#EAF3FF,#FFFFFF)] p-5">
        <motion.div
          className="absolute left-8 top-10 h-56 w-[78%] rounded-[28px] border border-white/90 bg-white p-4 shadow-[0_26px_70px_rgba(29,29,31,0.14)]"
          animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="grid grid-cols-[0.8fr_1.2fr] gap-4">
            <div className="space-y-3">
              <div className="h-4 w-20 rounded-full bg-ink/18" />
                  <div
                    className="h-20 rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${accent}, ${secondary})`,
                    }}
                  />
              <div className="h-3 w-24 rounded-full bg-divider" />
              <div className="h-3 w-16 rounded-full bg-divider" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="rounded-2xl border border-divider bg-canvas p-3">
                  <div className="h-12 rounded-xl bg-white" />
                  <div className="mt-3 h-2 rounded-full bg-line" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-7 right-7 rounded-[22px] border border-white/90 bg-white/92 px-4 py-3 shadow-[0_20px_44px_rgba(29,29,31,0.13)] backdrop-blur"
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-xs font-semibold text-secondary">Impact</p>
          <p className="text-sm font-semibold text-ink">{result}</p>
        </motion.div>
      </div>

      <div className="p-6 sm:p-7">
        <div className="mb-5 flex flex-wrap gap-2">
          {[category, period, ...stack.slice(0, 4)].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line bg-canvas px-3 py-1 text-xs font-semibold text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-semibold leading-tight text-ink">{title}</h3>
        <p className="mt-4 text-base leading-7 text-secondary">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue transition group-hover:gap-3"
          aria-label={`View work for ${title}`}
        >
          View work
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}
