import { profile } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

/** The one contact row, shared by the footer and the contact page. */
export function ContactLinks({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-wrap gap-6 text-sm font-medium uppercase tracking-widest md:gap-10",
        className,
      )}
    >
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
  );
}
