import { motion } from "framer-motion";
import { NAV_LINKS } from "../data/portfolio";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-5 pt-4 md:px-8 md:pt-5"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border border-[#D8E2F0] bg-white/78 px-4 py-2 shadow-[0_14px_40px_rgba(30,64,175,0.08)] backdrop-blur-md md:px-6">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#334155] transition duration-200 hover:text-[#2563EB] md:text-xs lg:text-sm"
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
