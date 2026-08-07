import { useRouterState } from "@tanstack/react-router";

import { ContactLinks } from "@/components/contact-links";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  // The contact page carries this row itself, directly under its intro.
  const showContactRow = pathname !== "/contact";

  return (
    <footer id="contact" className="px-6 py-8 md:px-12 md:py-10">
      {showContactRow ? (
        <div className="flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-8 md:flex-row md:items-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink">
            Get in touch
          </span>
          <ContactLinks />
        </div>
      ) : null}
      <div
        className={cn(
          "flex flex-col justify-between gap-2 sm:flex-row sm:items-center",
          showContactRow ? "mt-8" : "border-t border-ink/10 pt-8",
        )}
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-ink/60">
          © {new Date().getFullYear()} Krupali Trivedi
        </p>
        <p className="text-[10px] uppercase tracking-[0.3em] text-ink/60">Written with intent.</p>
      </div>
    </footer>
  );
}
