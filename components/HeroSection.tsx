"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import Hero3DVisual from "./Hero3DVisual";
import Reveal from "./Reveal";
import { CREDENTIALS, PERSONAL } from "@/data/site";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F5F7_86%)] pb-12 pt-28 sm:pt-32 lg:min-h-screen lg:pb-16"
    >
      <div className="absolute inset-x-0 top-0 h-80 bg-[linear-gradient(135deg,rgba(234,243,255,0.86),rgba(244,236,255,0.58),rgba(236,254,255,0.72))]" />
      <div className="section-shell relative z-10 grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="max-w-3xl">
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white/78 px-4 py-2 text-sm font-semibold text-secondary shadow-[0_12px_32px_rgba(29,29,31,0.08)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-blue" />
              {PERSONAL.currentRole}
            </div>
          </Reveal>

          <motion.h1
            className="relative max-w-4xl font-display text-[42px] font-semibold leading-[1.02] tracking-normal text-ink sm:text-[52px] md:text-[68px] lg:text-[80px]"
            initial={reduceMotion ? false : { opacity: 0, y: 28, filter: "blur(12px)" }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="mb-4 grid h-14 w-14 place-items-center rounded-[22px] border border-line bg-white text-blue shadow-[0_18px_44px_rgba(0,113,227,0.14)] sm:absolute sm:-left-4 sm:top-0 sm:-translate-x-full"
              aria-hidden="true"
            >
              <Sparkles size={25} />
            </span>
            Umar Firoz builds calm, fast product systems.
          </motion.h1>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-secondary sm:text-xl">
              {PERSONAL.intro}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="primary-button" aria-label="Contact Umar Firoz">
                Contact Me
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a
                href={PERSONAL.resumeUrl}
                className="secondary-button"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Umar Firoz resume"
              >
                View Resume
                <ArrowDown size={17} aria-hidden="true" />
              </a>
              <div className="flex gap-2">
                {[
                  { icon: Github, href: PERSONAL.social.github, label: "GitHub" },
                  { icon: Linkedin, href: PERSONAL.social.linkedin, label: "LinkedIn" },
                  { icon: Mail, href: `mailto:${PERSONAL.email}`, label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-12 w-12 place-items-center rounded-full border border-line bg-white text-secondary shadow-[0_10px_28px_rgba(29,29,31,0.06)] transition hover:-translate-y-0.5 hover:border-blue hover:text-blue"
                  >
                    <Icon size={17} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {CREDENTIALS.slice(0, 3).map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-[22px] border border-line/80 bg-white/76 p-4 shadow-[0_12px_30px_rgba(29,29,31,0.06)] backdrop-blur"
                >
                  <p className="text-sm font-semibold text-ink">{value}</p>
                  <p className="mt-1 text-sm text-muted">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16} className="relative">
          <Hero3DVisual />
        </Reveal>
      </div>
    </section>
  );
}
