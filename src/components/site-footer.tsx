import { profile } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer id="contact" className="px-6 py-12 md:px-12 md:py-16">
      <div className="flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-8 md:flex-row md:items-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink">
          Get in touch
        </span>
        <div className="flex flex-wrap gap-6 text-sm font-medium uppercase tracking-widest md:gap-10">
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-brand">
            Email
          </a>
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
      <div className="mt-10 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-ink/40">
          © {new Date().getFullYear()} Krupali Trivedi
        </p>
        <p className="text-[10px] uppercase tracking-[0.3em] text-ink/40">Written with intent.</p>
      </div>
    </footer>
  );
}
