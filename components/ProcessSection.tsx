"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code2, Cpu, Gem, Server } from "lucide-react";
import Reveal from "./Reveal";
import { CORE_HIGHLIGHTS } from "@/data/site";

const icons = [Gem, Server, Code2, Cpu];

export default function ProcessSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <div className="max-w-4xl">
            <p className="eyebrow">Core Strengths</p>
            <h2 className="mt-4 text-[34px] font-semibold leading-[1.08] tracking-normal text-ink sm:text-[46px] lg:text-[58px]">
              Four proof points, structured for fast recruiter scanning.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {CORE_HIGHLIGHTS.map((item, index) => {
            const Icon = icons[index];
            return (
            <motion.div
              key={item.title}
              className="tilt-card min-h-[280px] rounded-[30px] border border-line/80 bg-white p-6 shadow-premium"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.055, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduceMotion ? undefined : { y: -8, rotateX: 2, rotateY: index % 2 ? 2 : -2 }}
            >
              <div className="mb-7 grid h-14 w-14 place-items-center rounded-[20px] border border-line bg-blueSoft text-blue">
                <Icon size={24} aria-hidden="true" />
              </div>
              <p className="text-sm font-semibold text-muted">{item.detail}</p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight text-ink">{item.title}</h3>
              <p className="mt-5 text-base leading-7 text-secondary">
                {item.copy}
              </p>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
