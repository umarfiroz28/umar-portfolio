import { motion } from "framer-motion";
import { Code2, Cpu, Database, Server } from "lucide-react";
import AnimatedText from "./AnimatedText";
import ContactButton from "./ContactButton";
import FadeIn from "./FadeIn";
import { ABOUT, ACHIEVEMENTS, CREDENTIALS } from "../data/portfolio";

const FLOATERS = [
  { icon: Code2, label: "React", className: "left-4 top-20 md:left-16" },
  { icon: Server, label: "Spring", className: "right-5 top-24 md:right-20" },
  { icon: Cpu, label: "AWS", className: "bottom-32 left-6 md:left-24" },
  { icon: Database, label: "Kafka", className: "bottom-28 right-6 md:right-28" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#070A0F] px-4 py-16 sm:px-8 sm:py-20 md:px-10"
      style={{ perspective: "1200px" }}
    >
      {FLOATERS.map(({ icon: Icon, label, className }, i) => (
        <motion.div
          key={label}
          className={`absolute hidden rounded-2xl border border-[#263142] bg-[#10151F]/80 px-5 py-4 text-[#4DA3FF] shadow-[0_22px_50px_rgba(0,0,0,0.2)] backdrop-blur-sm lg:flex ${className}`}
          initial={{ opacity: 0, y: 30, rotateY: i % 2 ? -25 : 25 }}
          whileInView={{ opacity: 1, y: 0, rotateY: i % 2 ? -12 : 12 }}
          animate={{ y: [0, -14, 0] }}
          viewport={{ once: true }}
          transition={{
            opacity: { delay: i * 0.12, duration: 0.6 },
            y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Icon size={22} />
          <span className="ml-3 text-sm font-semibold">
            {label}
          </span>
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto grid w-full max-w-6xl min-w-0 gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <FadeIn delay={0} y={40} className="min-w-0">
          <div className="min-w-0">
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#D7B56D]">
              About
            </p>
            <h2 className="max-w-full break-words font-display text-[clamp(2.15rem,9.5vw,3.75rem)] font-bold leading-tight tracking-normal text-[#F4F7FB]">
              Product-minded engineering, from UI to infrastructure.
            </h2>
          </div>
        </FadeIn>

        <div className="min-w-0">
          <div className="max-w-full text-base leading-8 text-[#A7B0C0] sm:text-lg">
            <AnimatedText text={ABOUT.paragraph} />
          </div>

          <FadeIn delay={0.2} y={20} className="mt-8">
            <ContactButton />
          </FadeIn>

          <div className="mt-10 grid min-w-0 grid-cols-1 gap-3 min-[430px]:grid-cols-2 sm:grid-cols-3">
            {CREDENTIALS.map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.06} y={20}>
                <div className="about-stat trust-surface rounded-2xl p-4 text-left">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#6F7A8C]">
                    {item.label}
                  </p>
                  <p className="mt-2 font-display text-lg font-bold text-[#F4F7FB]">
                    {item.value}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {ACHIEVEMENTS.map((item, i) => (
              <FadeIn key={item} delay={0.2 + i * 0.04} y={12}>
                <span className="rounded-full border border-[#263142] bg-[#10151F]/70 px-4 py-2 text-xs font-semibold text-[#A7B0C0] shadow-[0_10px_24px_rgba(0,0,0,0.14)]">
                  {item}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
