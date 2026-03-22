import { motion } from "framer-motion";
import { ArrowUpRight, Layers } from "lucide-react";
import { PROJECTS } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            What I've Built
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className={`group relative p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-cyan-500/20 transition-all duration-500 ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(6,182,212,0.04), transparent 40%)",
                }}
              />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center">
                      <Layers size={18} className="text-cyan-400/70" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="text-xs text-neutral-500">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-neutral-600">
                    {project.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h, hi) => (
                    <li
                      key={hi}
                      className="flex items-start gap-2.5 text-sm text-neutral-500"
                    >
                      <ArrowUpRight
                        size={14}
                        className="mt-0.5 text-cyan-500/50 flex-shrink-0"
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] rounded-full border border-white/[0.06] text-neutral-500 bg-white/[0.02]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
