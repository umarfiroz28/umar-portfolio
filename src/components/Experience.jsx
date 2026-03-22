import { motion } from "framer-motion";
import { Building2, MapPin, Calendar } from "lucide-react";
import { EXPERIENCE } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Where I've Built
          </h2>
        </motion.div>

        <div className="space-y-12">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative"
            >
              {/* Timeline connector */}
              {i < EXPERIENCE.length - 1 && (
                <div className="absolute left-[11px] top-[52px] bottom-[-48px] w-px bg-gradient-to-b from-cyan-500/20 to-transparent hidden sm:block" />
              )}

              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-shrink-0 mt-2">
                  <div className="w-[22px] h-[22px] rounded-full border-2 border-cyan-500/30 bg-black flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-cyan-500/15 transition-all duration-500">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-400">
                        <span className="flex items-center gap-1.5">
                          <Building2 size={13} className="text-cyan-400/60" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-cyan-400/60" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs px-3 py-1 rounded-full border border-white/[0.08] text-neutral-500">
                        {exp.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-neutral-500">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((h, hi) => (
                      <li
                        key={hi}
                        className="flex items-start gap-3 text-sm text-neutral-400 leading-relaxed"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-cyan-500/40 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] rounded-full border border-cyan-500/10 text-cyan-400/70 bg-cyan-500/[0.04]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
