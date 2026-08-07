import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { writing, threads, publications } from "@/lib/portfolio-data";
import { LinkIndex } from "@/components/link-index";
import { cn } from "@/lib/utils";
import { seo } from "@/lib/seo";

const title = "Writing — Krupali Trivedi";
const description =
  "Blogs, explainers, how-tos and threads on dRTC, DePIN, DeFi, APIs and cryptography.";

export const Route = createFileRoute("/writing")({
  head: () => seo({ title, description, path: "/writing" }),
  component: Writing,
});

const ALL = "All";

function Writing() {
  const [topic, setTopic] = useState(ALL);

  // Derived from the data so a new article's topic appears as a filter for free.
  const topics = useMemo(() => [ALL, ...new Set(writing.map((w) => w.topic))], []);

  const filtered = useMemo(
    () => (topic === ALL ? writing : writing.filter((w) => w.topic === topic)),
    [topic],
  );

  return (
    <div className="px-6 pb-24 pt-28 md:px-12 md:pt-32">
      <h1 className="font-display text-[clamp(3rem,13vw,13rem)] font-semibold uppercase leading-[0.85] tracking-tighter">
        The Archive
      </h1>
      <p className="mt-10 max-w-2xl text-xl font-light leading-tight md:text-2xl">
        Blogs, docs, threads and guides about SaaS, AI and blockchain.
      </p>

      <section aria-labelledby="articles" className="mt-16">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
          <h2 id="articles" className="text-xs font-medium uppercase tracking-[0.2em] text-ink/40">
            Selected articles
          </h2>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by topic">
            {topics.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTopic(t)}
                aria-pressed={topic === t}
                className={cn(
                  "border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] transition-colors",
                  topic === t
                    ? "border-ink bg-ink text-paper"
                    : "border-ink/15 text-ink/60 hover:border-ink hover:text-ink",
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-ink/10">
          {filtered.map((article) => (
            <a
              key={article.href}
              href={article.href}
              target="_blank"
              rel="noreferrer"
              className="group grid grid-cols-1 items-baseline gap-2 border-b border-ink/10 py-6 md:grid-cols-12 md:gap-8"
            >
              <span className="font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-brand md:col-span-6 md:text-2xl">
                {article.title}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-brand md:col-span-2">
                {article.type}
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-ink/40 md:col-span-2">
                {article.note}
              </span>
              <span className="whitespace-nowrap text-xs font-medium uppercase tracking-widest text-ink/40 md:col-span-2 md:text-right">
                {article.topic} ↗
              </span>
            </a>
          ))}
        </div>
        {/* Visually dropped, but kept for screen readers: without it, changing
            the filter gives no feedback that the list changed. */}
        <p aria-live="polite" className="sr-only">
          Showing {filtered.length} {filtered.length === 1 ? "article" : "articles"}
          {topic === ALL ? "" : ` on ${topic}`}
        </p>
      </section>

      <section aria-labelledby="threads" className="mt-16">
        <h2
          id="threads"
          className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-ink/40"
        >
          Threads
        </h2>
        <div className="border-t border-ink/10">
          {threads.map((thread) => (
            <a
              key={thread.href}
              href={thread.href}
              target="_blank"
              rel="noreferrer"
              className="group grid grid-cols-1 items-baseline gap-2 border-b border-ink/10 py-6 md:grid-cols-12 md:gap-8"
            >
              <span className="font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-brand md:col-span-8 md:text-2xl">
                {thread.title}
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-ink/40 md:col-span-2">
                {thread.account}
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-ink/40 md:col-span-2 md:text-right">
                {thread.topic} ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      <section aria-labelledby="publications" className="mt-16">
        <h2
          id="publications"
          className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-ink/40"
        >
          Where I publish
        </h2>
        <LinkIndex items={publications} />
      </section>
    </div>
  );
}
