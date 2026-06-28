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
      className="relative bg-[#061729] px-4 py-16 sm:px-8 sm:py-28 md:px-10 md:py-32"
      style={{ perspective: "1200px" }}
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn y={35}>
          <div className="contact-stage relative overflow-hidden rounded-[28px] border border-sky-300/20 bg-[#08213A]/86 p-5 shadow-[0_40px_120px_rgba(14,165,233,0.16)] sm:rounded-[40px] sm:p-10 md:rounded-[56px] md:p-14">
            <div className="absolute right-8 top-8 hidden h-44 w-44 rotate-45 rounded-[34px] border border-sky-300/22 bg-sky-400/10 md:block" />
            <div className="absolute bottom-8 right-28 hidden h-28 w-28 rotate-12 rounded-[24px] border border-teal-300/22 bg-teal-300/10 md:block" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-start">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-sky-300 sm:tracking-[0.3em]">
                  Contact Form
                </p>
                <h2 className="max-w-4xl text-4xl font-black uppercase leading-none tracking-normal text-sky-50 sm:text-7xl md:text-8xl">
                  Send your query
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-sky-100/70 sm:text-lg">
                  Fill this out and the message will be sent to{" "}
                  <span className="font-semibold text-sky-300">
                    {PERSONAL.formEmail}
                  </span>
                  .
                </p>

                <div className="mt-8 flex flex-col gap-4">
                  <a
                    href={`tel:${PERSONAL.phone}`}
                    className="inline-flex min-w-0 items-center justify-between gap-4 rounded-2xl border border-sky-300/20 bg-[#061729]/54 px-4 py-4 text-sm font-semibold text-sky-100/82 transition hover:-translate-y-1 hover:border-sky-300/60 hover:text-sky-300 sm:rounded-full sm:px-6"
                  >
                    <span className="inline-flex min-w-0 items-center gap-3 break-all">
                      <Phone size={17} />
                      {PERSONAL.phone}
                    </span>
                    <ArrowUpRight size={16} />
                  </a>
                  <a
                    href={`mailto:${PERSONAL.email}`}
                    className="inline-flex min-w-0 items-center justify-between gap-4 rounded-2xl border border-sky-300/20 bg-[#061729]/54 px-4 py-4 text-sm font-semibold text-sky-100/82 transition hover:-translate-y-1 hover:border-sky-300/60 hover:text-sky-300 sm:rounded-full sm:px-6"
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
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-sky-300/20 bg-[#061729]/54 px-5 py-3 text-sm font-semibold text-sky-100/82 transition hover:-translate-y-1 hover:border-sky-300/60 hover:text-sky-300"
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
                className="relative rounded-[24px] border border-sky-300/20 bg-[#061729]/70 p-4 shadow-[0_28px_90px_rgba(14,165,233,0.14)] backdrop-blur-md sm:rounded-[32px] sm:p-7"
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
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200/58 sm:tracking-[0.24em]">
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
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200/58 sm:tracking-[0.24em]">
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
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200/58 sm:tracking-[0.24em]">
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
                    className="mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-400 px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white shadow-[0_18px_54px_rgba(14,165,233,0.24)] transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60 sm:px-7 sm:tracking-[0.22em]"
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

        <p className="mt-8 text-center text-xs uppercase tracking-[0.2em] text-sky-200/58 sm:tracking-[0.28em]">
          Umar Firoz - Frontend Developer
        </p>
      </div>
    </section>
  );
}
