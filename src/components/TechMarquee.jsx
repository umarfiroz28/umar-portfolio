import { useEffect, useRef, useState } from "react";
import { TECHS } from "../data/portfolio";

function SkillTile({ label, index }) {
  const featured = [
    "LeetCode Knight",
    "Java Backend",
    "Frontend Development",
    "Golang",
  ].includes(label);

  return (
    <div
      className={`marquee-tile grid h-[82px] w-[190px] shrink-0 place-items-center rounded-2xl border px-5 text-center shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:h-[96px] sm:w-[230px] ${
        featured
          ? "border-[#D7B56D]/38 bg-[#D7B56D]/10"
          : "border-[#263142] bg-[#10151F]/72"
      }`}
      style={{
        transform: `rotateY(${index % 2 === 0 ? -5 : 5}deg) rotateX(3deg)`,
      }}
    >
      <div>
        {featured && (
          <span className="mb-2 inline-block rounded-full border border-[#D7B56D]/35 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#D7B56D]">
            Highlight
          </span>
        )}
        <span className="block font-display text-base font-bold tracking-normal text-[#F4F7FB] sm:text-xl">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function TechMarquee() {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const rowOne = TECHS.slice(0, 9);
  const rowTwo = TECHS.slice(9);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const top = sectionRef.current.offsetTop;
      setOffset((window.scrollY - top + window.innerHeight) * 0.3);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#070A0F] py-10 sm:py-14"
      style={{ perspective: "1100px" }}
    >
      <div
        className="flex gap-3"
        style={{
          transform: `translateX(${offset - 180}px)`,
          willChange: "transform",
        }}
      >
        {[...rowOne, ...rowOne, ...rowOne].map((tech, i) => (
          <SkillTile key={`${tech}-one-${i}`} label={tech} index={i} />
        ))}
      </div>

      <div
        className="mt-3 flex gap-3"
        style={{
          transform: `translateX(${-offset + 180}px)`,
          willChange: "transform",
        }}
      >
        {[...rowTwo, ...rowTwo, ...rowTwo].map((tech, i) => (
          <SkillTile key={`${tech}-two-${i}`} label={tech} index={i + 1} />
        ))}
      </div>
    </section>
  );
}
