import { motion } from "framer-motion";
import { ABOUT, EDUCATION } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
            Engineer. Architect. Builder.
          </h2>
        </motion.div>

        <div className="space-y-6">
          {ABOUT.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-neutral-400 leading-relaxed text-base sm:text-lg"
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
            Education
          </p>
          <p className="text-white font-medium">{EDUCATION.degree}</p>
          <p className="text-neutral-400 text-sm mt-1">
            {EDUCATION.university} · {EDUCATION.cgpa} · {EDUCATION.period}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
