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
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#061729] px-4 py-16 sm:px-8 sm:py-20 md:px-10"
      style={{ perspective: "1200px" }}
    >
      {FLOATERS.map(({ icon: Icon, label, className }, i) => (
        <motion.div
          key={label}
          className={`absolute hidden rounded-2xl border border-sky-300/20 bg-[#08213A]/80 px-5 py-4 text-sky-300 shadow-[0_22px_50px_rgba(14,165,233,0.16)] backdrop-blur-sm sm:flex ${className}`}
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
          <span className="ml-3 text-sm font-medium uppercase tracking-widest">
            {label}
          </span>
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <FadeIn delay={0} y={40}>
          <h2 className="text-center font-black uppercase leading-none tracking-normal text-sky-50 [font-size:clamp(2.8rem,12vw,160px)]">
            {ABOUT.title}
          </h2>
        </FadeIn>

        <div
          className="mt-8 max-w-[760px] font-medium leading-relaxed text-sky-100/78 sm:mt-10"
          style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
        >
          <AnimatedText text={ABOUT.paragraph} className="text-center" />
        </div>

        <FadeIn delay={0.2} y={20} className="mt-10">
          <ContactButton />
        </FadeIn>

        <div className="mt-14 grid w-full grid-cols-2 gap-3 md:grid-cols-5">
          {CREDENTIALS.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.06} y={20}>
              <div className="about-stat rounded-2xl border border-sky-300/20 bg-[#08213A]/82 p-4 text-left shadow-[0_18px_44px_rgba(14,165,233,0.14)]">
                <p className="text-[11px] uppercase tracking-[0.2em] text-sky-200/58 sm:tracking-[0.24em]">
                  {item.label}
                </p>
                <p className="mt-2 text-lg font-black text-sky-50">
                  {item.value}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {ACHIEVEMENTS.map((item, i) => (
            <FadeIn key={item} delay={0.2 + i * 0.04} y={12}>
              <span className="rounded-full border border-sky-300/18 bg-[#08213A]/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-sky-100/68 shadow-[0_10px_24px_rgba(14,165,233,0.12)]">
                {item}
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
