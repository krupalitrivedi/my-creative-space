import { useRouterState } from "@tanstack/react-router";

import { profile } from "@/lib/portfolio-data";

export function SiteFooter() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  // The contact page already leads with the email address at display size;
  // repeating it in the footer directly below reads as a mistake.
  const showEmail = pathname !== "/contact";

  return (
    <footer id="contact" className="px-6 py-24 md:px-12">
      <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
        <div hidden={!showEmail}>
          <span className="mb-6 block text-xs font-medium uppercase tracking-[0.2em] text-ink/40">
            Get in touch
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="font-display text-2xl font-semibold tracking-tighter transition-colors hover:text-brand sm:text-4xl md:text-5xl"
          >
            {profile.email}
          </a>
        </div>
        <div className="flex flex-wrap gap-6 text-sm font-medium uppercase tracking-widest md:gap-10">
          {profile.socials.map((s) => (
            <a
              key={s.title}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-60"
            >
              {s.title}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-24 flex flex-col justify-between gap-2 border-t border-ink/5 pt-8 sm:flex-row sm:items-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-ink/40">
          © {new Date().getFullYear()} Krupali Trivedi
        </p>
        <p className="text-[10px] uppercase tracking-[0.3em] text-ink/40">Written with intent.</p>
      </div>
    </footer>
  );
}
