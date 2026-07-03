import type { ReactNode } from "react";

type DeviceMockupProps = {
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
};

export default function DeviceMockup({
  children,
  className = "",
  eyebrow = "Product preview",
  title = "Digital workspace",
}: DeviceMockupProps) {
  return (
    <div
      className={`device-perspective overflow-hidden rounded-[30px] border border-line/80 bg-white shadow-[0_28px_90px_rgba(29,29,31,0.13)] ${className}`}
    >
      <div className="flex h-12 items-center justify-between border-b border-divider bg-[#FBFBFD] px-5">
        <div className="flex gap-2" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="hidden min-w-0 items-center gap-2 rounded-full border border-divider bg-white px-4 py-1.5 text-xs font-medium text-secondary sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-blue" />
          {eyebrow}
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <p className="mb-4 text-sm font-semibold text-secondary">{title}</p>
        {children}
      </div>
    </div>
  );
}
