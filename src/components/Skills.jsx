import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";
import { SERVICES } from "../data/portfolio";

export default function Skills() {
  return (
    <section
      id="services"
      className="relative rounded-t-[32px] bg-[#081B30] px-4 py-16 text-sky-50 shadow-[0_-30px_80px_rgba(14,165,233,0.12)] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn y={40}>
        <h2 className="mb-12 text-center font-black uppercase leading-none tracking-normal text-sky-50 [font-size:clamp(2.8rem,12vw,160px)] sm:mb-20 md:mb-28">
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl border-t border-sky-300/18">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.title} delay={i * 0.1} y={28}>
            <div className="service-row group grid gap-5 border-b border-sky-300/18 py-8 md:grid-cols-[96px_1fr_52px] md:items-center md:py-10">
              <span className="text-sm font-black uppercase tracking-[0.24em] text-sky-200/48 sm:tracking-[0.28em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tight md:text-4xl">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base font-normal leading-relaxed text-sky-100/68 md:text-lg">
                  {service.description}
                </p>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-full border border-sky-300/22 bg-sky-400/10 text-sky-300 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-sky-400 group-hover:text-[#061729]">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
