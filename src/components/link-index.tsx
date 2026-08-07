import type { LinkItem } from "@/lib/portfolio-data";

export function LinkIndex({ items }: { items: LinkItem[] }) {
  return (
    <div className="border-t border-ink/10">
      {items.map((item, i) => (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="group grid grid-cols-1 items-baseline gap-2 border-b border-ink/10 py-6 md:grid-cols-12 md:gap-8"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink/60 md:col-span-1">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-brand md:col-span-8 md:text-2xl">
            {item.title}
          </span>
          <span className="text-xs font-medium uppercase tracking-widest text-ink/60 md:col-span-3 md:text-right">
            {item.note ?? "Read"} ↗
          </span>
        </a>
      ))}
    </div>
  );
}
