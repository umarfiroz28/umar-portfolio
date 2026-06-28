import { motion } from "framer-motion";
import { ArrowDown, BriefcaseBusiness, Github, Linkedin, Mail } from "lucide-react";
import ContactButton from "./ContactButton";
import FadeIn from "./FadeIn";
import ThreeHeroScene from "./ThreeHeroScene";
import { HERO_BADGES, PERSONAL } from "../data/portfolio";

export default function Hero() {
  const ribbons = [
    "left-[-8%] top-[20%] w-[42%] rotate-[-18deg] from-[#60A5FA] via-[#99F6E4] to-transparent",
    "right-[-10%] top-[28%] w-[46%] rotate-[16deg] from-[#A7F3D0] via-[#FDE68A] to-transparent",
    "left-[20%] bottom-[10%] w-[34%] rotate-[8deg] from-[#BFDBFE] via-[#5EEAD4] to-transparent",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F7FAFF]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.07) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 16%, black 84%, transparent 100%)",
        }}
      />

      <motion.div
        className="absolute inset-0 z-0 opacity-30 mix-blend-multiply"
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

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-8 pt-20 md:px-10 md:pb-10 md:pt-24">
        <FadeIn delay={0.15} y={36} className="overflow-hidden">
          <motion.h1
            className="whitespace-nowrap text-center font-black uppercase leading-none tracking-tight text-[#122033] [font-size:clamp(4.2rem,10vw,10.5rem)]"
            animate={{ letterSpacing: ["0em", "0.015em", "0em"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            Hi, i&apos;m Umar
          </motion.h1>
        </FadeIn>

        <div className="flex flex-1 items-center justify-center py-6">
          <FadeIn delay={0.28} y={24}>
            <div className="mx-auto max-w-3xl text-center">
              <motion.div
                className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#D8E2F0] bg-white/80 px-4 py-2 text-left text-[#1E293B] shadow-[0_16px_50px_rgba(37,99,235,0.1)] backdrop-blur-md"
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
                <span className="text-xs font-medium uppercase tracking-[0.24em] sm:text-sm">
                  {PERSONAL.currentRole}
                </span>
              </motion.div>

              <p className="mx-auto max-w-[780px] text-xl font-medium leading-tight tracking-normal text-[#334155] sm:text-2xl md:text-3xl">
                Frontend-first software engineer building precise interfaces,
                dependable Java backends, and Golang microservices that feel
                fast, clear, and trustworthy.
              </p>

              <div className="mx-auto mt-7 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
                {HERO_BADGES.map((badge, index) => (
                  <motion.div
                    key={badge.label}
                    className="hero-orbit-badge relative rounded-2xl border border-[#D8E2F0] bg-white/78 p-4 text-left shadow-[0_18px_44px_rgba(37,99,235,0.08)] backdrop-blur-md"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{
                      opacity: 1,
                      y: [0, index % 2 ? -7 : 7, 0],
                      borderColor: [
                        "rgba(216,226,240,1)",
                        `${badge.tone}88`,
                        "rgba(216,226,240,1)",
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
                      <span className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[#64748B]">
                        Core
                      </span>
                    </div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#64748B]">
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
                    className="grid h-11 w-11 place-items-center rounded-full border border-[#D8E2F0] bg-white/80 text-[#334155] shadow-[0_12px_30px_rgba(37,99,235,0.08)] transition hover:-translate-y-1 hover:border-[#2563EB] hover:text-[#2563EB]"
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
            className="grid h-11 w-11 place-items-center rounded-full border border-[#D8E2F0] bg-white/80 text-[#334155] shadow-[0_12px_30px_rgba(37,99,235,0.08)] transition hover:-translate-y-1 hover:border-[#2563EB] hover:text-[#2563EB]"
          >
            <ArrowDown size={18} />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
