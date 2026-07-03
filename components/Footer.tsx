import { PERSONAL, SERVICES, TECHS } from "@/data/site";

export default function Footer() {
  const footerServices = SERVICES.slice(0, 4);
  const footerTech = TECHS.slice(0, 8);

  return (
    <footer className="border-t border-divider bg-canvas py-12">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
          <div>
            <a href="#top" className="text-xl font-semibold text-ink">
              {PERSONAL.name}
            </a>
            <p className="mt-4 max-w-md text-sm leading-7 text-secondary">
              {PERSONAL.heroTagline}
            </p>
            <p className="mt-4 text-sm font-medium text-muted">{PERSONAL.location}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Services</h3>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {footerServices.map((service) => (
                <a
                  key={service.title}
                  href="#services"
                  className="text-sm text-secondary transition hover:text-blue"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Contact</h3>
            <div className="mt-4 grid gap-2 text-sm text-secondary">
              <a href={`mailto:${PERSONAL.email}`} className="transition hover:text-blue">
                {PERSONAL.email}
              </a>
              <a
                href={`tel:${PERSONAL.phone}`}
                className="transition hover:text-blue"
              >
                {PERSONAL.phone}
              </a>
              <div className="mt-2 flex flex-wrap gap-3">
                <a href={PERSONAL.social.linkedin} className="transition hover:text-blue">
                  LinkedIn
                </a>
                <a href={PERSONAL.social.github} className="transition hover:text-blue">
                  GitHub
                </a>
                <a href={PERSONAL.social.leetcode} className="transition hover:text-blue">
                  LeetCode
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2 border-t border-divider pt-6">
          {footerTech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-divider pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.</p>
          <p>Software Engineer</p>
        </div>
      </div>
    </footer>
  );
}
