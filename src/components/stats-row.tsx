import { stats } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

/** The headline numbers, shared by the home and experience pages. */
export function StatsRow({ className }: { className?: string }) {
  return (
    <dl className={cn("grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-8", className)}>
      {stats.map((stat) => (
        <div key={stat.label}>
          <dt className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-ink/60">
            {stat.label}
          </dt>
          <dd>
            <span className="font-display text-4xl font-semibold tracking-tighter md:text-5xl">
              {stat.value}
            </span>
            <span className="ml-1 font-display text-xl font-semibold text-brand">{stat.unit}</span>
            <span className="mt-2 block text-sm text-ink/60">{stat.note}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
