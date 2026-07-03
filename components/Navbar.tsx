"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { NAV_LINKS, PERSONAL } from "@/data/site";

export default function Navbar() {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-2 rounded-full border border-line/80 bg-white/82 px-3 py-2 shadow-[0_12px_38px_rgba(29,29,31,0.08)] backdrop-blur-xl">
        <a
          href="#top"
          className="shrink-0 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white"
          aria-label={`${PERSONAL.name} home`}
        >
          Umar
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-secondary transition hover:bg-canvas hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-blue px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,113,227,0.22)] transition hover:bg-blueHover"
          aria-label="Contact Umar"
        >
          <span className="hidden sm:inline">Contact</span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </nav>
    </motion.header>
  );
}
