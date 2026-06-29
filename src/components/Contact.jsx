import { useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import FadeIn from "./FadeIn";
import { PERSONAL } from "../data/portfolio";

const initialForm = {
  name: "",
  email: "",
  query: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    const payload = new FormData();
    payload.append("name", form.name);
    payload.append("email", form.email);
    payload.append("query", form.query);
    payload.append("_subject", "New portfolio query for Umar Firoz");
    payload.append("_template", "table");
    payload.append("_captcha", "false");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${PERSONAL.formEmail}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: payload,
        }
      );

      if (!response.ok) {
        throw new Error("Unable to send message");
      }

      setStatus("sent");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[#070A0F] px-4 py-16 sm:px-8 sm:py-24 md:px-10"
      style={{ perspective: "1200px" }}
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn y={35}>
          <div className="contact-stage trust-surface relative overflow-hidden rounded-[24px] p-5 sm:p-8 md:rounded-[32px] md:p-12">
            <div className="absolute right-8 top-8 hidden h-44 w-44 rotate-45 rounded-[34px] border border-[#4DA3FF]/18 bg-[#4DA3FF]/8 md:block" />
            <div className="absolute bottom-8 right-28 hidden h-28 w-28 rotate-12 rounded-[24px] border border-[#42E8B4]/18 bg-[#42E8B4]/8 md:block" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-start">
              <div>
                <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#D7B56D]">
                  Contact Form
                </p>
                <h2 className="max-w-4xl font-display text-4xl font-bold leading-tight tracking-normal text-[#F4F7FB] sm:text-5xl md:text-6xl">
                  Let&apos;s build something clear and dependable.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-[#A7B0C0] sm:text-lg">
                  Fill this out and the message will be sent to{" "}
                  <span className="font-semibold text-[#4DA3FF]">
                    {PERSONAL.formEmail}
                  </span>
                  .
                </p>

                <div className="mt-8 flex flex-col gap-4">
                  <a
                    href={`tel:${PERSONAL.phone}`}
                    className="inline-flex min-w-0 items-center justify-between gap-4 rounded-2xl border border-[#263142] bg-[#070A0F]/54 px-4 py-4 text-sm font-semibold text-[#A7B0C0] transition hover:-translate-y-1 hover:border-[#4DA3FF] hover:text-[#4DA3FF] sm:rounded-full sm:px-6"
                  >
                    <span className="inline-flex min-w-0 items-center gap-3 break-all">
                      <Phone size={17} />
                      {PERSONAL.phone}
                    </span>
                    <ArrowUpRight size={16} />
                  </a>
                  <a
                    href={`mailto:${PERSONAL.email}`}
                    className="inline-flex min-w-0 items-center justify-between gap-4 rounded-2xl border border-[#263142] bg-[#070A0F]/54 px-4 py-4 text-sm font-semibold text-[#A7B0C0] transition hover:-translate-y-1 hover:border-[#4DA3FF] hover:text-[#4DA3FF] sm:rounded-full sm:px-6"
                  >
                    <span className="inline-flex min-w-0 items-center gap-3 break-all">
                      <Mail size={17} />
                      {PERSONAL.email}
                    </span>
                    <ArrowUpRight size={16} />
                  </a>
                  <div className="flex gap-3">
                    {[
                      {
                        icon: Github,
                        href: PERSONAL.social.github,
                        label: "GitHub",
                      },
                      {
                        icon: Linkedin,
                        href: PERSONAL.social.linkedin,
                        label: "LinkedIn",
                      },
                    ].map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#263142] bg-[#070A0F]/54 px-5 py-3 text-sm font-semibold text-[#A7B0C0] transition hover:-translate-y-1 hover:border-[#4DA3FF] hover:text-[#4DA3FF]"
                      >
                        <Icon size={16} />
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="relative rounded-[22px] border border-[#263142] bg-[#070A0F]/64 p-4 shadow-[0_28px_90px_rgba(0,0,0,0.2)] backdrop-blur-md sm:p-7"
              >
                <input
                  type="text"
                  name="_honey"
                  className="hidden"
                  tabIndex="-1"
                  autoComplete="off"
                />

                <div className="grid gap-4">
                  <label className="grid gap-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#6F7A8C]">
                      Name
                    </span>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="contact-input"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#6F7A8C]">
                      Email
                    </span>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="contact-input"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#6F7A8C]">
                      Query
                    </span>
                    <textarea
                      required
                      name="query"
                      value={form.query}
                      onChange={handleChange}
                      placeholder="Tell me what you want to build..."
                      rows={6}
                      className="contact-input resize-none"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-2 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#4DA3FF] px-6 py-4 text-sm font-bold text-[#070A0F] shadow-[0_18px_54px_rgba(77,163,255,0.22)] transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60 sm:px-7"
                  >
                    <Send size={17} />
                    {status === "sending" ? "Sending..." : "Send Query"}
                  </button>

                  {status === "sent" && (
                    <p className="rounded-2xl border border-[#86EFAC] bg-[#ECFDF5] px-4 py-3 text-sm font-medium text-[#166534]">
                      Message sent. I will respond in 10 minutes.
                    </p>
                  )}

                  {status === "error" && (
                    <p className="rounded-2xl border border-[#FCA5A5] bg-[#FEF2F2] px-4 py-3 text-sm font-medium text-[#991B1B]">
                      Couldn&apos;t send right now. Please email{" "}
                      {PERSONAL.formEmail} directly.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </FadeIn>

        <p className="mt-8 text-center font-mono text-xs uppercase tracking-[0.16em] text-[#6F7A8C]">
          Umar Firoz - Software Engineer
        </p>
      </div>
    </section>
  );
}
