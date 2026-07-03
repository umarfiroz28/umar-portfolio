"use client";

import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import Reveal from "./Reveal";
import { PERSONAL } from "@/data/site";

const initialForm = {
  name: "",
  email: "",
  query: "",
};

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
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
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL.formEmail}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });

      if (!response.ok) {
        throw new Error("Unable to send message");
      }

      setStatus("sent");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F5F5F7_100%)] py-20 sm:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">Contact</p>
            <h2 className="mt-4 text-[34px] font-semibold leading-[1.08] tracking-normal text-ink sm:text-[46px] lg:text-[58px]">
              Let's build something clear and dependable.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-secondary">
              Fill this out and the message will be sent to{" "}
              <span className="font-semibold text-blue">{PERSONAL.formEmail}</span>.
            </p>
            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${PERSONAL.email}`}
                className="flex items-center justify-between gap-4 rounded-[24px] border border-line bg-white px-5 py-4 text-sm font-semibold text-ink shadow-[0_12px_30px_rgba(29,29,31,0.06)] transition hover:-translate-y-1"
              >
                <span className="flex min-w-0 items-center gap-3 break-all">
                  <Mail size={18} className="shrink-0 text-blue" aria-hidden="true" />
                  {PERSONAL.email}
                </span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                href={`tel:${PERSONAL.phone}`}
                className="flex items-center justify-between gap-4 rounded-[24px] border border-line bg-white px-5 py-4 text-sm font-semibold text-ink shadow-[0_12px_30px_rgba(29,29,31,0.06)] transition hover:-translate-y-1"
              >
                <span className="flex min-w-0 items-center gap-3 break-all">
                  <Phone size={18} className="shrink-0 text-blue" aria-hidden="true" />
                  {PERSONAL.phone}
                </span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Github, href: PERSONAL.social.github, label: "GitHub" },
                  { icon: Linkedin, href: PERSONAL.social.linkedin, label: "LinkedIn" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold text-secondary shadow-[0_10px_26px_rgba(29,29,31,0.05)] transition hover:-translate-y-1 hover:text-blue"
                  >
                    <Icon size={16} aria-hidden="true" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={handleSubmit}
            className="rounded-[34px] border border-line/80 bg-white p-5 shadow-premium sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-secondary">Name</span>
                <input
                  className="form-field"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-secondary">Email</span>
                <input
                  className="form-field"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </label>
              <label className="grid gap-2 sm:col-span-2">
                <span className="text-sm font-semibold text-secondary">Query</span>
                <textarea
                  className="form-field min-h-40 resize-none"
                  name="query"
                  value={form.query}
                  onChange={handleChange}
                  placeholder="Tell me what you want to build..."
                  required
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="primary-button mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              aria-label="Send query to Umar Firoz"
            >
              {status === "sending" ? "Sending..." : "Send Query"}
              <Send size={16} aria-hidden="true" />
            </button>
            {status === "sent" && (
              <p className="mt-4 rounded-2xl border border-blue/20 bg-blueSoft px-4 py-3 text-sm font-semibold text-blue">
                Message sent. I will respond in 10 minutes.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                Couldn't send right now. Please email {PERSONAL.formEmail} directly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
