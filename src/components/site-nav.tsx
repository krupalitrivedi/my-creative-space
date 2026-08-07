import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { profile } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const items = [
  { to: "/", label: "Home" },
  { to: "/writing", label: "Writing Portfolio" },
  { to: "/about", label: "Experience" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Past the first scroll the bar needs its own background: it is fixed over
  // the page, and mix-blend-difference alone leaves the wordmark colliding
  // with whatever text scrolls beneath it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          "fixed top-0 z-50 flex w-full items-center justify-between px-6 transition-[background-color,padding] duration-300 md:px-12",
          // At the top of the page the bar is transparent and
          // mix-blend-difference keeps it legible over both the paper and ink
          // sections. Once scrolled it gets a solid background instead, which
          // is what stops content colliding with the wordmark. The blend mode
          // is also dropped while the mobile panel is open, or the panel
          // inverts the nav on top of itself.
          open && "py-8 text-paper",
          !open && scrolled && "border-b border-ink/10 bg-paper py-5 text-ink",
          !open && !scrolled && "py-8 mix-blend-difference",
        )}
      >
        <Link
          to="/"
          className={cn(
            "font-display text-xl font-semibold tracking-tighter",
            !open && scrolled ? "text-ink" : "text-paper",
          )}
          aria-label={`${profile.name} — home`}
        >
          {profile.mark}
        </Link>

        <div
          className={cn(
            "hidden gap-6 text-xs font-medium uppercase tracking-widest md:flex md:gap-8 md:text-sm",
            !open && scrolled ? "text-ink" : "text-paper",
          )}
        >
          {items.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "border-b pb-1 transition-opacity hover:opacity-60",
                  active
                    ? !open && scrolled
                      ? "border-ink"
                      : "border-paper"
                    : "border-transparent",
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
          className={cn(
            "text-xs font-medium uppercase tracking-widest md:hidden",
            !open && scrolled ? "text-ink" : "text-paper",
          )}
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
                    active
                      ? !open && scrolled
                        ? "border-ink"
                        : "border-paper"
                      : "border-transparent",
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
