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
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-1 rounded-full border border-[#263142]/90 bg-[#10151F]/82 px-2 py-2 shadow-[0_18px_48px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:px-3 md:px-4">
        <a
          href="#top"
          className="hidden rounded-full bg-[#171E2B] px-4 py-2 font-display text-sm font-bold text-[#F4F7FB] sm:inline-flex"
        >
          Umar
        </a>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="min-h-9 min-w-0 flex-1 rounded-full px-2 py-2 text-center text-[11px] font-semibold text-[#A7B0C0] transition duration-200 hover:bg-[#171E2B] hover:text-[#4DA3FF] sm:flex-none sm:px-4 sm:text-sm"
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
