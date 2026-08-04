import { Link } from "@tanstack/react-router";
import { profile } from "@/lib/portfolio-data";

const items = [
  { to: "/writing", label: "Writing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-end justify-between px-6 py-8 mix-blend-difference md:px-12">
      <Link to="/" className="font-display text-xl font-semibold tracking-tighter text-paper">
        {profile.mark}
      </Link>
      <div className="flex gap-6 text-xs font-medium uppercase tracking-widest text-paper md:gap-8 md:text-sm">
        {items.map((item) => (
          <Link key={item.to} to={item.to} className="transition-opacity hover:opacity-60">
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
