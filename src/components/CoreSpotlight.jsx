import { Code2, Cpu, Gem, Server } from "lucide-react";
import FadeIn from "./FadeIn";
import { CORE_HIGHLIGHTS } from "../data/portfolio";

const ICONS = [Gem, Server, Code2, Cpu];

export default function CoreSpotlight() {
  return (
    <section
      className="relative overflow-hidden bg-[#070A0F] px-4 py-16 sm:px-8 sm:py-20 md:px-10"
      style={{ perspective: "1200px" }}
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn y={30}>
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight tracking-normal text-[#F4F7FB] sm:text-5xl">
              Core strengths
            </h2>
            <p className="max-w-sm text-sm leading-6 text-[#A7B0C0]">
              Four proof points, structured for fast recruiter scanning.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_HIGHLIGHTS.map((item, index) => {
            const Icon = ICONS[index];
            return (
              <FadeIn key={item.title} delay={index * 0.08} y={28}>
                <div className="spotlight-card trust-surface group relative min-h-[230px] overflow-hidden rounded-2xl p-5 transition duration-500 sm:p-6">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-[28px] border border-[#4DA3FF]/18 bg-[#4DA3FF]/8 transition duration-500 group-hover:rotate-45" />
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div>
                      <div className="mb-7 grid h-12 w-12 place-items-center rounded-2xl border border-[#263142] bg-[#171E2B] text-[#4DA3FF] shadow-[0_18px_40px_rgba(0,0,0,0.2)]">
                        <Icon size={25} />
                      </div>
                      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#6F7A8C]">
                        {item.detail}
                      </p>
                      <h3 className="mt-3 font-display text-2xl font-bold leading-tight tracking-normal text-[#F4F7FB]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-7 text-sm leading-6 text-[#A7B0C0]">
                      {item.copy}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
