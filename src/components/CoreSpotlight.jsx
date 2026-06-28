import { Code2, Cpu, Gem, Server } from "lucide-react";
import FadeIn from "./FadeIn";
import { CORE_HIGHLIGHTS } from "../data/portfolio";

const ICONS = [Gem, Server, Code2, Cpu];

export default function CoreSpotlight() {
  return (
    <section
      className="relative overflow-hidden bg-[#061729] px-4 py-14 sm:px-8 sm:py-16 md:px-10"
      style={{ perspective: "1200px" }}
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn y={30}>
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-3xl text-4xl font-black uppercase leading-none tracking-normal text-sky-50 sm:text-5xl md:text-7xl">
              Core strengths
            </h2>
            <p className="max-w-sm text-sm font-medium leading-relaxed text-sky-100/68">
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
                <div className="spotlight-card group relative min-h-[260px] overflow-hidden rounded-[24px] border border-sky-300/20 bg-[#08213A]/82 p-5 shadow-[0_26px_70px_rgba(14,165,233,0.14)] transition duration-500 hover:-translate-y-3 hover:border-sky-300/34 sm:min-h-[300px] sm:rounded-[32px] sm:p-6">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-[36px] border border-sky-300/22 bg-sky-400/10 transition duration-500 group-hover:rotate-45" />
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div>
                      <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl border border-sky-300/24 bg-sky-400/10 text-sky-300 shadow-[0_18px_40px_rgba(14,165,233,0.18)]">
                        <Icon size={25} />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200/58 sm:tracking-[0.24em]">
                        {item.detail}
                      </p>
                      <h3 className="mt-3 text-2xl font-black uppercase leading-none tracking-normal text-sky-50 sm:text-3xl">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-8 text-sm leading-relaxed text-sky-100/68">
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
