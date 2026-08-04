import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { writing, threads, publications } from "@/lib/portfolio-data";
import { LinkIndex } from "@/components/link-index";
import { cn } from "@/lib/utils";
import { seo } from "@/lib/seo";

const title = "Writing — Krupali Trivedi";
const description =
  "Blogs, documentation and threads on decentralized real-time communication, Web3, AI and APIs by Krupali Trivedi.";

export const Route = createFileRoute("/writing")({
  head: () => seo({ title, description, path: "/writing" }),
  component: Writing,
});

const ALL = "All";

function Writing() {
  const [source, setSource] = useState(ALL);

  // Each piece already carries the publication it ran in as `note`, so the
  // filter list is derived rather than maintained by hand.
  const sources = useMemo(
    () => [ALL, ...Array.from(new Set(writing.map((w) => w.note).filter(Boolean) as string[]))],
    [],
  );

  const filtered = useMemo(
    () => (source === ALL ? writing : writing.filter((w) => w.note === source)),
    [source],
  );

  return (
    <div className="px-6 pb-24 pt-40 md:px-12 md:pt-48">
      <h1 className="font-display text-[clamp(3rem,13vw,13rem)] font-semibold uppercase leading-[0.85] tracking-tighter">
        The Archive
      </h1>
      <p className="mt-10 max-w-2xl text-xl font-light leading-tight md:text-2xl">
        Blogs, articles, how-tos and documentation. Some published on my own blog, some for
        Huddle01, some in places I was just curious about.
      </p>

      <section aria-labelledby="blogs" className="mt-24">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
          <h2 id="blogs" className="text-xs font-medium uppercase tracking-[0.2em] text-ink/40">
            Blogs &amp; Articles
          </h2>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter writing by source">
            {sources.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSource(s)}
                aria-pressed={source === s}
                className={cn(
                  "border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] transition-colors",
                  source === s
                    ? "border-ink bg-ink text-paper"
                    : "border-ink/15 text-ink/60 hover:border-ink hover:text-ink",
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <LinkIndex items={filtered} />
        <p aria-live="polite" className="mt-4 text-xs uppercase tracking-widest text-ink/40">
          {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          {source === ALL ? "" : ` from ${source}`}
        </p>
      </section>

      <section aria-labelledby="threads" className="mt-24">
        <h2
          id="threads"
          className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-ink/40"
        >
          Threads
        </h2>
        <LinkIndex items={threads.map((t) => ({ ...t, note: "Thread" }))} />
      </section>

      <section aria-labelledby="publications" className="mt-24">
        <h2
          id="publications"
          className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-ink/40"
        >
          Where I Publish
        </h2>
        <LinkIndex items={publications} />
      </section>
    </div>
  );
}
