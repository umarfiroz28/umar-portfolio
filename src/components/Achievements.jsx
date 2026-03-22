import { motion } from "framer-motion";
import { Award, Trophy, ShieldCheck, Code2, Zap, ExternalLink } from "lucide-react";
import { ACHIEVEMENTS, CERTIFICATIONS } from "../data/portfolio";

const ICONS = [Trophy, Code2, ShieldCheck, Code2, Zap];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3">
            Achievements
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Proof of Craft
          </h2>
        </motion.div>

        {/* Achievement cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {ACHIEVEMENTS.map((a, i) => {
            const Icon = ICONS[i] || Award;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-cyan-500/15 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center group-hover:border-cyan-500/20 transition-colors duration-500">
                    <Icon size={16} className="text-cyan-400/60" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{a.title}</p>
                    <p className="text-xs text-cyan-400/70">{a.detail}</p>
                  </div>
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {a.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">
            Certifications
          </p>
          <div className="flex flex-wrap gap-3">
            {CERTIFICATIONS.map((cert) =>
              cert.url ? (
                <a
                  key={cert.name}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 text-sm rounded-full border border-white/[0.06] bg-white/[0.02] text-neutral-400 hover:border-cyan-500/20 hover:text-cyan-400 transition-all duration-300"
                >
                  {cert.name}
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ) : (
                <span
                  key={cert.name}
                  className="px-4 py-2 text-sm rounded-full border border-white/[0.06] bg-white/[0.02] text-neutral-400"
                >
                  {cert.name}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
