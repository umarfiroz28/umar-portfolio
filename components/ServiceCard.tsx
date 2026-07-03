"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  description: string;
  icon: LucideIcon;
  index: number;
  title: string;
};

export default function ServiceCard({
  description,
  icon: Icon,
  index,
  title,
}: ServiceCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="tilt-card group flex min-h-[320px] flex-col justify-between rounded-[30px] border border-line/80 bg-white p-6 shadow-premium transition-shadow duration-300 hover:shadow-lift sm:p-7"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.58, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -10,
              rotateX: index % 2 === 0 ? 2 : -2,
              rotateY: index % 2 === 0 ? -2 : 2,
            }
      }
    >
      <div>
        <div className="mb-7 grid h-14 w-14 place-items-center rounded-[20px] border border-line/80 bg-blueSoft text-blue shadow-[0_14px_28px_rgba(0,113,227,0.10)]">
          <Icon size={24} aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-semibold leading-tight text-ink">{title}</h3>
        <p className="mt-4 text-base leading-7 text-secondary">{description}</p>
      </div>
      <div className="mt-8 h-1.5 w-16 rounded-full bg-blue/70" />
    </motion.article>
  );
}
