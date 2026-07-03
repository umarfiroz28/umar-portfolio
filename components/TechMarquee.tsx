"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TECHS } from "@/data/site";

export default function TechMarquee() {
  const reduceMotion = useReducedMotion();
  const items = [...TECHS, ...TECHS];

  return (
    <section className="border-y border-divider bg-white py-5">
      <div className="overflow-hidden">
        <motion.div
          className="flex w-max gap-3 px-3"
          animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        >
          {items.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="rounded-full border border-line bg-canvas px-4 py-2 text-sm font-semibold text-secondary"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
