import { motion } from "framer-motion";
import { ArrowDown, BriefcaseBusiness, Github, Linkedin, Mail } from "lucide-react";
import ContactButton from "./ContactButton";
import FadeIn from "./FadeIn";
import ThreeHeroScene from "./ThreeHeroScene";
import { HERO_BADGES, PERSONAL } from "../data/portfolio";

export default function Hero() {
  const ribbons = [
    "left-[-20%] top-[18%] w-[70%] rotate-[-18deg] from-sky-500 via-cyan-300 to-transparent sm:left-[-8%] sm:w-[42%]",
    "right-[-22%] top-[32%] w-[76%] rotate-[16deg] from-teal-300 via-blue-300 to-transparent sm:right-[-10%] sm:w-[46%]",
    "left-[8%] bottom-[10%] w-[62%] rotate-[8deg] from-sky-300 via-cyan-300 to-transparent sm:left-[20%] sm:w-[34%]",
  ];

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#061729]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(125,211,252,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,0.08) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 16%, black 84%, transparent 100%)",
        }}
      />

      <motion.div
        className="absolute inset-0 z-0 opacity-55 mix-blend-screen"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.35, duration: 1 }}
      >
        <ThreeHeroScene />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        {ribbons.map((classes, index) => (
          <motion.div
            key={classes}
            className={`hero-ribbon absolute h-24 rounded-full bg-gradient-to-r blur-xl ${classes}`}
            initial={{ opacity: 0, x: index % 2 ? 80 : -80 }}
            animate={{
              opacity: [0.16, 0.34, 0.16],
              x: index % 2 ? [40, -30, 40] : [-40, 30, -40],
              scaleX: [0.92, 1.12, 0.92],
            }}
            transition={{
              delay: index * 0.4,
              duration: 7 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-4 pb-8 pt-20 sm:px-6 md:px-10 md:pb-10 md:pt-24">
        <FadeIn delay={0.15} y={36} className="overflow-hidden">
          <motion.h1
            className="mx-auto max-w-[11ch] text-center font-black uppercase leading-[0.9] tracking-normal text-sky-50 [font-size:clamp(3rem,16vw,10.5rem)] sm:max-w-none"
            animate={{ letterSpacing: ["0em", "0.015em", "0em"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            Hi, i&apos;m Umar
          </motion.h1>
        </FadeIn>

        <div className="flex flex-1 items-center justify-center py-6 sm:py-8">
          <FadeIn delay={0.28} y={24}>
            <div className="mx-auto max-w-3xl text-center">
              <motion.div
                className="mb-6 inline-flex max-w-full items-center gap-3 rounded-full border border-sky-300/22 bg-[#08213A]/82 px-4 py-2 text-left text-sky-50 shadow-[0_16px_50px_rgba(14,165,233,0.18)] backdrop-blur-md"
                animate={{
                  y: [0, -6, 0],
                  boxShadow: [
                    "0 16px 50px rgba(37,99,235,0.10)",
                    "0 18px 70px rgba(20,184,166,0.18)",
                    "0 16px 50px rgba(37,99,235,0.10)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#DBEAFE] text-[#1D4ED8] shadow-[0_0_26px_rgba(37,99,235,0.18)]">
                  <BriefcaseBusiness size={16} />
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.16em] sm:text-sm sm:tracking-[0.24em]">
                  {PERSONAL.currentRole}
                </span>
              </motion.div>

              <p className="mx-auto max-w-[780px] text-lg font-medium leading-tight tracking-normal text-sky-100/82 sm:text-2xl md:text-3xl">
                Frontend-first software engineer building precise interfaces,
                dependable Java backends, and Golang microservices that feel
                fast, clear, and trustworthy.
              </p>

              <div className="mx-auto mt-7 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
                {HERO_BADGES.map((badge, index) => (
                  <motion.div
                    key={badge.label}
                    className="hero-orbit-badge relative rounded-2xl border border-sky-300/22 bg-[#08213A]/78 p-4 text-left shadow-[0_18px_44px_rgba(14,165,233,0.16)] backdrop-blur-md"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{
                      opacity: 1,
                      y: [0, index % 2 ? -7 : 7, 0],
                      borderColor: [
                        "rgba(125,211,252,0.24)",
                        `${badge.tone}88`,
                        "rgba(125,211,252,0.24)",
                      ],
                    }}
                    transition={{
                      opacity: { delay: 0.45 + index * 0.08, duration: 0.5 },
                      y: {
                        delay: index * 0.25,
                        duration: 5 + index * 0.35,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      borderColor: {
                        delay: index * 0.2,
                        duration: 3.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    whileHover={{ y: -8, rotateX: 5, rotateY: -5, scale: 1.03 }}
                    style={{ "--badge-tone": badge.tone }}
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span
                        className="h-2.5 w-2.5 rounded-full shadow-[0_0_22px_var(--badge-tone)]"
                        style={{ background: badge.tone }}
                      />
                      <span className="text-[9px] font-semibold uppercase tracking-[0.26em] text-sky-200/60">
                        Core
                      </span>
                    </div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-200/60">
                      {badge.label}
                    </p>
                    <p
                      className="mt-1 text-lg font-black uppercase leading-none sm:text-xl"
                      style={{ color: badge.tone }}
                    >
                      {badge.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <ContactButton />
                {[
                  { icon: Github, href: PERSONAL.social.github, label: "GitHub" },
                  {
                    icon: Linkedin,
                    href: PERSONAL.social.linkedin,
                    label: "LinkedIn",
                  },
                  { icon: Mail, href: `mailto:${PERSONAL.email}`, label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-sky-300/22 bg-[#08213A]/80 text-sky-100 shadow-[0_12px_30px_rgba(14,165,233,0.14)] transition hover:-translate-y-1 hover:border-sky-300 hover:text-sky-300"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.65} y={12} className="hidden justify-center sm:flex">
          <a
            href="#about"
            aria-label="Scroll to about"
            className="grid h-11 w-11 place-items-center rounded-full border border-sky-300/22 bg-[#08213A]/80 text-sky-100 shadow-[0_12px_30px_rgba(14,165,233,0.14)] transition hover:-translate-y-1 hover:border-sky-300 hover:text-sky-300"
          >
            <ArrowDown size={18} />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
