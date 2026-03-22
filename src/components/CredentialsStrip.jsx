import { motion } from "framer-motion";
import { CREDENTIALS } from "../data/portfolio";

export default function CredentialsStrip() {
  return (
    <section className="relative py-8 border-y border-white/[0.04] bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-4">
          {CREDENTIALS.map((cred, i) => (
            <motion.div
              key={cred.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">
                {cred.label}
              </p>
              <p className="text-sm font-medium text-white">{cred.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
