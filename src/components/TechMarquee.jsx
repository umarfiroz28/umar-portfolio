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
      className={`marquee-tile grid h-[150px] w-[260px] shrink-0 place-items-center rounded-2xl border px-8 text-center shadow-[0_22px_60px_rgba(37,99,235,0.08)] backdrop-blur-sm sm:h-[190px] sm:w-[330px] md:h-[220px] md:w-[380px] ${
        featured
          ? "border-amber-300/32 bg-amber-300/10"
          : "border-sky-300/20 bg-[#08213A]/72"
      }`}
      style={{
        transform: `rotateY(${index % 2 === 0 ? -10 : 10}deg) rotateX(6deg)`,
      }}
    >
      <div>
        {featured && (
          <span className="mb-4 inline-block rounded-full border border-amber-300/30 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.3em] text-amber-200">
            Highlight
          </span>
        )}
        <span className="block text-2xl font-black uppercase tracking-normal text-sky-50 sm:tracking-wider md:text-4xl">
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
      className="relative overflow-hidden bg-[#061729] pb-10 pt-14 sm:pt-24 md:pt-28"
      style={{ perspective: "1100px" }}
    >
      <div
        className="flex gap-3"
        style={{
          transform: `translateX(${offset - 220}px)`,
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
          transform: `translateX(${-offset + 220}px)`,
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
