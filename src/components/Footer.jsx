import { PERSONAL } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-neutral-600">
          &copy; {new Date().getFullYear()} {PERSONAL.name}. Crafted with
          precision.
        </p>
        <div className="flex items-center gap-6">
          {[
            { label: "LinkedIn", href: PERSONAL.social.linkedin },
            { label: "GitHub", href: PERSONAL.social.github },
            { label: "LeetCode", href: PERSONAL.social.leetcode },
            { label: "Codeforces", href: PERSONAL.social.codeforces },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
