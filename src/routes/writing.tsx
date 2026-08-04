import { createFileRoute } from "@tanstack/react-router";
import { writing, threads, publications } from "@/lib/portfolio-data";
import { LinkIndex } from "@/components/link-index";

const title = "Writing — Krupali Trivedi";
const description =
  "Blogs, documentation and threads on decentralized real-time communication, Web3, AI and APIs by Krupali Trivedi.";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Writing,
});

function Writing() {
  return (
    <div className="px-6 pb-24 pt-40 md:px-12 md:pt-48">
      <h1 className="font-display text-[13vw] font-semibold uppercase leading-[0.85] tracking-tighter md:text-[10vw]">
        The Archive
      </h1>
      <p className="mt-10 max-w-2xl text-xl font-light leading-tight md:text-2xl">
        Blogs, articles, how-tos and documentation. Some published on my own blog, some for
        Huddle01, some in places I was just curious about.
      </p>

      <section className="mt-24">
        <h2 className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-ink/40">
          Blogs &amp; Articles
        </h2>
        <LinkIndex items={writing} />
      </section>

      <section className="mt-24">
        <h2 className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-ink/40">Threads</h2>
        <LinkIndex items={threads.map((t) => ({ ...t, note: "Thread" }))} />
      </section>

      <section className="mt-24">
        <h2 className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-ink/40">
          Where I Publish
        </h2>
        <LinkIndex items={publications} />
      </section>
    </div>
  );
}
