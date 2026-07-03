"use client";

import {
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  Code2,
  Database,
  FileCode2,
  Layers3,
  MonitorSmartphone,
  ServerCog,
  ShoppingBag,
} from "lucide-react";
import Reveal from "./Reveal";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "@/data/site";

const serviceIcons = [
  Bot,
  ShoppingBag,
  Layers3,
  FileCode2,
  MonitorSmartphone,
  Code2,
  ServerCog,
  Database,
  ChartNoAxesCombined,
  BrainCircuit,
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-canvas py-20 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Services</p>
            <h2 className="mt-4 text-[34px] font-semibold leading-[1.08] tracking-normal text-ink sm:text-[46px] lg:text-[58px]">
              A focused stack for dependable products.
            </h2>
            <p className="mt-5 text-lg leading-8 text-secondary">
              The same portfolio skills, reshaped into cleaner cards with
              premium spacing, motion, and recruiter-friendly scanning.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
              icon={serviceIcons[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
