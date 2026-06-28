export default function ContactButton({
  href = "#contact",
  label = "Contact Me",
  className = "",
}) {
  return (
    <a
      href={href}
      className={`inline-block rounded-full text-white font-semibold uppercase tracking-[0.16em] transition-transform duration-200 hover:scale-[1.03] px-7 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base sm:tracking-widest ${className}`}
      style={{
        background:
          "linear-gradient(123deg, #0284C7 0%, #0EA5E9 38%, #06B6D4 72%, #38BDF8 100%)",
        boxShadow:
          "0 18px 44px rgba(37, 99, 235, 0.22), 4px 4px 14px rgba(255,255,255,0.25) inset",
        outline: "1px solid rgba(255,255,255,0.8)",
        outlineOffset: "-4px",
      }}
    >
      {label}
    </a>
  );
}
