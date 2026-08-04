import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { profile } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const items = [
  { to: "/writing", label: "Writing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Close the menu on navigation, and never leave the page scroll-locked.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <nav
        aria-label="Primary"
        className={cn(
          "fixed top-0 z-50 flex w-full items-end justify-between px-6 py-8 md:px-12",
          // mix-blend-difference keeps the nav legible over both the paper and
          // ink sections, but it has to be dropped while the mobile panel is
          // open or the panel inverts the nav on top of itself.
          open ? "text-paper" : "mix-blend-difference",
        )}
      >
        <Link
          to="/"
          className="font-display text-xl font-semibold tracking-tighter text-paper"
          aria-label={`${profile.name} — home`}
        >
          {profile.mark}
        </Link>

        <div className="hidden gap-6 text-xs font-medium uppercase tracking-widest text-paper md:flex md:gap-8 md:text-sm">
          {items.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "border-b pb-1 transition-opacity hover:opacity-60",
                  active ? "border-paper" : "border-transparent",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="text-xs font-medium uppercase tracking-widest text-paper md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile panel. `hidden` keeps it out of the tab order when closed. */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 z-40 flex flex-col justify-center bg-ink px-6 text-paper md:hidden"
      >
        <ul className="space-y-6">
          {items.map((item) => {
            const active = pathname === item.to;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "inline-block border-b-2 pb-1 font-display text-5xl font-semibold uppercase tracking-tighter",
                    active ? "border-paper" : "border-transparent",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <a
          href={`mailto:${profile.email}`}
          className="mt-16 text-sm font-medium uppercase tracking-widest opacity-60"
        >
          {profile.email}
        </a>
      </div>
    </>
  );
}
