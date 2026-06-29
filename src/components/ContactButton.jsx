export default function ContactButton({
  href = "#contact",
  label = "Contact me",
  className = "",
}) {
  return (
    <a
      href={href}
      className={`hero-cta-shine relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-bold text-[#070A0F] transition duration-200 hover:-translate-y-1 sm:px-7 ${className}`}
      style={{
        background:
          "linear-gradient(135deg, #F4F7FB 0%, #8DC8FF 52%, #4DA3FF 100%)",
        boxShadow:
          "0 18px 44px rgba(77, 163, 255, 0.22), inset 0 1px 0 rgba(255,255,255,0.62)",
      }}
    >
      <span className="relative z-10">{label}</span>
    </a>
  );
}
