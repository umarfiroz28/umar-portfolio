import { Code2, Cpu, Gem, Server } from "lucide-react";
import FadeIn from "./FadeIn";
import { CORE_HIGHLIGHTS } from "../data/portfolio";

const ICONS = [Gem, Server, Code2, Cpu];

export default function CoreSpotlight() {
  return (
    <section
      className="relative overflow-hidden bg-[#F7FAFF] px-5 py-16 sm:px-8 md:px-10"
      style={{ perspective: "1200px" }}
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn y={30}>
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-3xl text-5xl font-black uppercase leading-none tracking-tight text-[#142033] md:text-7xl">
              Core strengths
            </h2>
            <p className="max-w-sm text-sm font-medium leading-relaxed text-[#475569]">
              Four proof points structured for fast scanning, high trust, and
              immediate technical recall.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-4">
          {CORE_HIGHLIGHTS.map((item, index) => {
            const Icon = ICONS[index];
            return (
              <FadeIn key={item.title} delay={index * 0.08} y={28}>
                <div className="spotlight-card group relative min-h-[300px] overflow-hidden rounded-[32px] border border-[#D8E2F0] bg-white/82 p-6 shadow-[0_26px_70px_rgba(37,99,235,0.08)] transition duration-500 hover:-translate-y-3 hover:border-[#2563EB]/30">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-[36px] border border-[#BFDBFE] bg-[#EFF6FF] transition duration-500 group-hover:rotate-45" />
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div>
                      <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl border border-[#BFDBFE] bg-[#EFF6FF] text-[#2563EB] shadow-[0_18px_40px_rgba(37,99,235,0.12)]">
                        <Icon size={25} />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#64748B]">
                        {item.detail}
                      </p>
                      <h3 className="mt-3 text-3xl font-black uppercase leading-none tracking-tight text-[#142033]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-8 text-sm leading-relaxed text-[#475569]">
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
