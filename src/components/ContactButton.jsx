export default function ContactButton({
  href = "#contact",
  label = "Contact Me",
  className = "",
}) {
  return (
    <a
      href={href}
      className={`inline-block rounded-full text-white font-semibold uppercase tracking-widest transition-transform duration-200 hover:scale-[1.03] px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base ${className}`}
      style={{
        background:
          "linear-gradient(123deg, #1D4ED8 0%, #2563EB 38%, #14B8A6 72%, #F59E0B 100%)",
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
