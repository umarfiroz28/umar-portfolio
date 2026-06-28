import { motion } from "framer-motion";
import { NAV_LINKS } from "../data/portfolio";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5 md:px-8 md:pt-5"
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-1 rounded-full border border-sky-300/20 bg-[#071D33]/82 px-3 py-2 shadow-[0_14px_40px_rgba(2,132,199,0.18)] backdrop-blur-md sm:gap-3 sm:px-4 md:px-6">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="min-w-0 px-1 text-center text-[10px] font-semibold uppercase tracking-[0.1em] text-sky-100/82 transition duration-200 hover:text-sky-300 sm:text-[11px] sm:tracking-[0.18em] md:text-xs lg:text-sm"
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
