import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";
import { SERVICES } from "../data/portfolio";

export default function Skills() {
  return (
    <section
      id="services"
      className="relative bg-[#0B0F16] px-4 py-16 text-[#F4F7FB] sm:px-8 sm:py-24 md:px-10"
    >
      <FadeIn y={40}>
        <div className="mx-auto mb-10 max-w-5xl">
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#D7B56D]">
            Skills
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-normal text-[#F4F7FB] sm:text-5xl md:text-6xl">
            A focused stack for dependable products.
          </h2>
        </div>
      </FadeIn>

      <div className="mx-auto max-w-5xl border-t border-[#263142]">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.title} delay={i * 0.1} y={28}>
            <div className="service-row group grid gap-5 border-b border-[#263142] py-7 md:grid-cols-[72px_1fr_52px] md:items-center md:py-9">
              <span className="font-mono text-sm font-bold uppercase tracking-[0.14em] text-[#6F7A8C]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-normal md:text-4xl">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-[#A7B0C0] md:text-lg">
                  {service.description}
                </p>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-full border border-[#263142] bg-[#10151F] text-[#4DA3FF] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-[#4DA3FF] group-hover:bg-[#4DA3FF] group-hover:text-[#070A0F]">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
