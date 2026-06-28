import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";
import { SERVICES } from "../data/portfolio";

export default function Skills() {
  return (
    <section
      id="services"
      className="relative rounded-t-[40px] bg-white px-5 py-20 text-[#142033] shadow-[0_-30px_80px_rgba(37,99,235,0.06)] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn y={40}>
        <h2 className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#142033] [font-size:clamp(3rem,12vw,160px)] sm:mb-20 md:mb-28">
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl border-t border-[#D8E2F0]">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.title} delay={i * 0.1} y={28}>
            <div className="service-row group grid gap-5 border-b border-[#D8E2F0] py-8 md:grid-cols-[96px_1fr_52px] md:items-center md:py-10">
              <span className="text-sm font-black uppercase tracking-[0.28em] text-[#94A3B8]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tight md:text-4xl">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base font-normal leading-relaxed text-[#475569] md:text-lg">
                  {service.description}
                </p>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-full border border-[#D8E2F0] bg-[#F8FAFC] text-[#2563EB] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[#2563EB] group-hover:text-white">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
