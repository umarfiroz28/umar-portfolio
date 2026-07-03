"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FloatingCardProps = {
  children?: ReactNode;
  className?: string;
  delay?: number;
  detail: string;
  title: string;
  tone?: string;
};

export default function FloatingCard({
  children,
  className = "",
  delay = 0,
  detail,
  title,
  tone = "from-[#EAF3FF] to-white",
}: FloatingCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`tilt-card rounded-[22px] border border-white/80 bg-gradient-to-br ${tone} p-4 shadow-[0_18px_48px_rgba(29,29,31,0.13)] backdrop-blur ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 26, scale: 0.96 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: [0, -10, 0], scale: 1 }}
      transition={{
        delay,
        duration: reduceMotion ? 0.01 : 5.6,
        repeat: reduceMotion ? 0 : Infinity,
        ease: "easeInOut",
      }}
    >
      <p className="text-xs font-semibold uppercase tracking-normal text-secondary">
        {title}
      </p>
      <p className="mt-1 text-base font-semibold leading-snug text-ink">
        {detail}
      </p>
      {children}
    </motion.div>
  );
}
