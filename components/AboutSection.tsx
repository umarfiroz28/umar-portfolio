"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { ABOUT, ACHIEVEMENTS, CREDENTIALS, PERSONAL } from "@/data/site";

export default function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-canvas py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">About</p>
            <h2 className="mt-4 text-[34px] font-semibold leading-[1.08] tracking-normal text-ink sm:text-[46px] lg:text-[58px]">
              {ABOUT.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-secondary">
              {ABOUT.paragraph}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-[34px] border border-line/80 bg-white p-6 shadow-premium sm:p-8">
              <p className="text-sm font-semibold text-secondary">{PERSONAL.headline}</p>
              <h3 className="mt-4 text-3xl font-semibold leading-tight text-ink">
                {PERSONAL.aboutPitch}
              </h3>
              <div className="mt-8 flex items-center gap-3 rounded-[24px] border border-divider bg-canvas p-4 text-sm font-semibold text-secondary">
                <MapPin size={18} className="text-blue" aria-hidden="true" />
                {PERSONAL.location}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {CREDENTIALS.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="rounded-[26px] border border-line/80 bg-white p-5 shadow-[0_14px_38px_rgba(29,29,31,0.06)]"
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                >
                  <p className="text-2xl font-semibold text-ink">{item.value}</p>
                  <p className="mt-2 text-sm font-medium text-muted">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="rounded-[30px] border border-line/80 bg-white p-5 shadow-premium sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blueSoft text-blue">
                  <Award size={21} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-ink">Achievements</h3>
              </div>
              <div className="grid gap-3">
                {ACHIEVEMENTS.map((achievement) => (
                  <p
                    key={achievement}
                    className="rounded-2xl border border-divider bg-canvas px-4 py-3 text-sm font-semibold text-secondary"
                  >
                    {achievement}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
