"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bot, Braces, ChartNoAxesCombined, DatabaseZap, Store, WandSparkles } from "lucide-react";
import { useState } from "react";
import DeviceMockup from "./DeviceMockup";
import FloatingCard from "./FloatingCard";
import { CORE_HIGHLIGHTS, HERO_BADGES } from "@/data/site";

const icons = [Bot, Store, ChartNoAxesCombined, Braces];

export default function Hero3DVisual() {
  const reduceMotion = useReducedMotion();
  const [rotation, setRotation] = useState({ x: -4, y: -8 });

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setRotation({ x: y * -9, y: x * 12 });
  }

  function handlePointerLeave() {
    setRotation({ x: -4, y: -8 });
  }

  return (
    <div
      className="hero-scene relative mx-auto h-[540px] w-full max-w-[620px] md:h-[650px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      aria-hidden="true"
      style={{ perspective: "1300px" }}
    >
      <motion.div
        className="absolute left-[7%] top-[13%] z-20 w-[86%]"
        style={{ rotateX: rotation.x, rotateY: rotation.y }}
        animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <DeviceMockup
          className="bg-white/95"
          eyebrow="Portfolio system"
          title="React UI + Java APIs + AWS systems"
        >
          <div className="grid gap-4">
            <div className="rounded-[24px] border border-divider ai-gradient p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-secondary">Project pipeline</p>
                  <h3 className="mt-2 text-3xl font-semibold leading-tight text-ink">
                    Interfaces people can trust, backed by scalable systems.
                  </h3>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-blue shadow-[0_12px_24px_rgba(0,113,227,0.16)]">
                  <WandSparkles size={22} />
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {["React", "Java", "AWS"].map((item, index) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/80 bg-white/76 p-3 shadow-[0_10px_24px_rgba(29,29,31,0.08)]"
                  >
                    <span className="text-xs font-semibold text-muted">0{index + 1}</span>
                    <p className="mt-1 text-sm font-semibold text-ink">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-[1fr_0.8fr] gap-4">
              <div className="rounded-[22px] border border-divider bg-[#FBFBFD] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-secondary">System impact</span>
                  <span className="rounded-full bg-blueSoft px-3 py-1 text-xs font-semibold text-blue">
                    Live
                  </span>
                </div>
                <div className="flex h-24 items-end gap-2">
                  {[34, 52, 44, 72, 62, 84, 76].map((height, index) => (
                    <motion.span
                      key={height + index}
                      className="flex-1 rounded-t-xl bg-blue"
                      style={{ height }}
                      animate={reduceMotion ? undefined : { height: [height, height + 14, height] }}
                      transition={{
                        delay: index * 0.12,
                        duration: 3.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-[22px] border border-divider bg-ink p-4 text-white">
                <p className="text-xs font-semibold text-white/62">Backend node</p>
                <div className="mt-4 space-y-2">
                  {["auth", "latency", "scale"].map((item) => (
                    <div key={item} className="rounded-full bg-white/10 px-3 py-2 text-xs font-medium">
                      {item}.ready()
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DeviceMockup>
      </motion.div>

      {HERO_BADGES.map((card, index) => {
        const Icon = icons[index];
        const positions = [
          "left-0 top-[6%] w-44",
          "right-0 top-[4%] w-44",
          "left-[2%] bottom-[20%] w-48",
          "right-[1%] bottom-[16%] w-44",
        ];

        return (
          <FloatingCard
            key={card.label}
            title={card.label}
            detail={card.value}
            tone="from-[#EAF3FF] to-white"
            delay={0.3 + index * 0.14}
            className={`absolute z-30 hidden ${positions[index]} md:block`}
          >
            <div className="mt-3 grid h-10 w-10 place-items-center rounded-2xl bg-white text-blue shadow-[0_12px_22px_rgba(29,29,31,0.10)]">
              <Icon size={18} />
            </div>
          </FloatingCard>
        );
      })}

      <div className="absolute bottom-[7%] left-[18%] z-30 hidden w-64 rounded-[24px] border border-white/80 bg-white/90 p-4 shadow-[0_18px_48px_rgba(29,29,31,0.13)] backdrop-blur md:block">
        <p className="text-xs font-semibold uppercase tracking-normal text-secondary">
          {CORE_HIGHLIGHTS[0].detail}
        </p>
        <p className="mt-2 text-sm font-semibold leading-6 text-ink">
          {CORE_HIGHLIGHTS[0].copy}
        </p>
      </div>

      <div className="absolute inset-x-8 bottom-8 z-10 h-24 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(29,29,31,0.18),transparent_64%)] blur-xl" />
    </div>
  );
}
