import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { PERSONAL } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.04]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(6,182,212,0.5) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let's Build Something
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mb-10 max-w-lg mx-auto">
            Open to opportunities in backend engineering, distributed systems,
            and full-stack roles. Let's connect.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href={`mailto:${PERSONAL.email}`}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 text-black font-medium text-sm hover:bg-cyan-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
          >
            <Mail size={16} />
            {PERSONAL.email}
            <ArrowUpRight
              size={14}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </a>
          <a
            href={`tel:${PERSONAL.phone}`}
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.08] text-neutral-300 text-sm hover:border-cyan-500/25 hover:text-white transition-all duration-300"
          >
            <Phone size={16} />
            {PERSONAL.phone}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Github, href: PERSONAL.social.github, label: "GitHub" },
            {
              icon: Linkedin,
              href: PERSONAL.social.linkedin,
              label: "LinkedIn",
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.08] text-neutral-400 text-sm hover:border-cyan-500/25 hover:text-white transition-all duration-300"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
