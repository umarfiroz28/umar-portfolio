import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import ContactButton from "./ContactButton";
import FadeIn from "./FadeIn";
import ThreeHeroScene from "./ThreeHeroScene";
import { HERO_BADGES, PERSONAL } from "../data/portfolio";

const HERO_TITLE_WORDS = [
  "Umar",
  "Firoz",
  "builds",
  "calm,",
  "fast",
  "product",
  "systems.",
];

const ACCENT_WORDS = new Set(["calm,", "fast"]);

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const wordVariants = {
    hidden: { opacity: 0, y: 34, rotateX: -26, filter: "blur(10px)" },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        delay: prefersReducedMotion ? 0 : 0.16 + index * 0.075,
        duration: prefersReducedMotion ? 0.01 : 0.72,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section id="top" className="relative overflow-hidden bg-[#070A0F]">
      <div
        className="hero-grid-motion absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(77,163,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(77,163,255,0.06) 1px, transparent 1px)",
          backgroundSize: "68px 68px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 76%, transparent 100%)",
        }}
      />
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#4DA3FF]/12 blur-3xl" />
      <div className="absolute right-[-180px] top-[18%] h-[360px] w-[360px] rounded-full bg-[#D7B56D]/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-4 pb-12 pt-24 sm:px-6 md:grid-cols-[1.02fr_0.98fr] md:px-10 md:pb-16 md:pt-28">
        <div className="max-w-3xl">
          <FadeIn delay={0.1} y={24}>
            <motion.div
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#263142] bg-[#10151F]/82 px-3 py-2 text-xs font-semibold text-[#A7B0C0] shadow-[0_16px_46px_rgba(0,0,0,0.2)] backdrop-blur"
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      borderColor: [
                        "rgba(38,49,66,0.92)",
                        "rgba(77,163,255,0.58)",
                        "rgba(38,49,66,0.92)",
                      ],
                      boxShadow: [
                        "0 16px 46px rgba(0,0,0,0.2)",
                        "0 16px 52px rgba(77,163,255,0.16)",
                        "0 16px 46px rgba(0,0,0,0.2)",
                      ],
                    }
              }
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.span
                className="grid h-5 w-5 place-items-center rounded-full bg-[#D7B56D]/10 text-[#D7B56D]"
                animate={prefersReducedMotion ? undefined : { rotate: [0, 12, -8, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles size={14} />
              </motion.span>
              {PERSONAL.currentRole}
              <motion.span
                className="ml-1 h-1.5 w-1.5 rounded-full bg-[#42E8B4]"
                animate={prefersReducedMotion ? undefined : { scale: [1, 1.8, 1], opacity: [0.65, 1, 0.65] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </FadeIn>

          <motion.h1
            className="hero-title-animated font-display text-[clamp(3.15rem,14vw,6.9rem)] font-bold leading-[0.92] tracking-normal text-[#F4F7FB]"
            initial="hidden"
            animate="visible"
            aria-label="Umar Firoz builds calm, fast product systems."
          >
            {HERO_TITLE_WORDS.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                custom={index}
                variants={wordVariants}
                className={`mr-[0.18em] inline-block max-w-full origin-bottom align-baseline ${
                  ACCENT_WORDS.has(word) ? "hero-word-accent" : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <FadeIn delay={0.24} y={22}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#A7B0C0] sm:text-lg">
              Frontend-first software engineer with 3.5 years across React,
              Java Spring Boot, Golang microservices, AWS, and GenAI workflows.
              I turn complex systems into interfaces people can trust.
            </p>
          </FadeIn>

          <FadeIn delay={0.32} y={20}>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ContactButton className="w-full sm:w-auto" />
              <a
                href={PERSONAL.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-resume-link relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full border border-[#263142] bg-[#10151F]/82 px-6 py-3 text-sm font-bold text-[#F4F7FB] transition hover:-translate-y-1 hover:border-[#4DA3FF]"
              >
                <span className="relative z-10">View resume</span>
              </a>
              <div className="flex justify-center gap-2 sm:justify-start">
                {[
                  { icon: Github, href: PERSONAL.social.github, label: "GitHub" },
                  { icon: Linkedin, href: PERSONAL.social.linkedin, label: "LinkedIn" },
                  { icon: Mail, href: `mailto:${PERSONAL.email}`, label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-12 w-12 place-items-center rounded-full border border-[#263142] bg-[#10151F]/82 text-[#A7B0C0] transition hover:-translate-y-1 hover:border-[#4DA3FF] hover:text-[#4DA3FF]"
                    animate={prefersReducedMotion ? undefined : { y: [0, -4, 0] }}
                    transition={{
                      delay: 0.6 + label.length * 0.04,
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon size={17} />
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.42} y={18}>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {HERO_BADGES.map((badge) => (
                <div
                  key={badge.label}
                  className="hero-orbit-badge trust-surface relative rounded-2xl p-4"
                >
                  <span
                    className="mb-4 block h-1.5 w-8 rounded-full"
                    style={{ background: badge.tone }}
                  />
                  <p className="text-xs font-semibold text-[#6F7A8C]">
                    {badge.label}
                  </p>
                  <p className="mt-1 font-display text-lg font-bold leading-tight text-[#F4F7FB]">
                    {badge.value}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} y={24}>
          <motion.div
            className="relative mx-auto h-[360px] w-full max-w-[520px] overflow-hidden rounded-[32px] border border-[#263142] bg-[#10151F]/46 shadow-[0_42px_120px_rgba(0,0,0,0.42)] backdrop-blur md:h-[560px] md:rounded-[44px]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ThreeHeroScene />
            <div className="pointer-events-none absolute inset-x-5 bottom-5 rounded-2xl border border-[#263142]/90 bg-[#070A0F]/78 p-4 backdrop-blur">
              <p className="font-mono text-xs font-bold text-[#42E8B4]">
                deploy_status: trusted
              </p>
              <p className="mt-1 text-sm text-[#A7B0C0]">
                React UI + Java APIs + AWS systems
              </p>
            </div>
          </motion.div>
        </FadeIn>
      </div>

      <FadeIn delay={0.65} y={12} className="relative z-10 hidden justify-center pb-10 sm:flex">
          <a
            href="#about"
            aria-label="Scroll to about"
            className="grid h-11 w-11 place-items-center rounded-full border border-[#263142] bg-[#10151F]/82 text-[#A7B0C0] transition hover:-translate-y-1 hover:border-[#4DA3FF] hover:text-[#4DA3FF]"
          >
            <ArrowDown size={18} />
          </a>
      </FadeIn>
    </section>
  );
}
