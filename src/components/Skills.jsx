import { motion } from "framer-motion";
import { SKILLS } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-[0.03]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(6,182,212,0.4) 0%, transparent 60%)",
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
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Core Technology Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1, duration: 0.5 }}
              className="group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-cyan-500/20 hover:bg-cyan-500/[0.02] transition-all duration-500"
            >
              <h3 className="text-sm font-medium text-neutral-300 mb-4 tracking-wide">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs rounded-full border border-white/[0.06] bg-white/[0.03] text-neutral-400 group-hover:border-cyan-500/10 group-hover:text-neutral-300 transition-all duration-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
