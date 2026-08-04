import { createFileRoute, Link } from "@tanstack/react-router";
import { profile, projects, writing, publications } from "@/lib/portfolio-data";
import { LinkIndex } from "@/components/link-index";
import contentStudio from "@/assets/content-studio.jpg";
import peer2venue from "@/assets/peer2venue.jpg";

const title = "Krupali Trivedi — Technical Writer & Growth Marketer";
const description =
  "Portfolio of Krupali Trivedi: technical writing, content strategy and growth marketing across Web3, AI and SaaS.";

export const Route = createFileRoute("/")({
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
  component: Home,
});

const projectImages = [contentStudio, peer2venue];

function Home() {
  return (
    <div>
      <header className="flex min-h-screen flex-col justify-end px-6 pb-24 pt-32 md:px-12">
        <h1 className="font-display text-[15vw] font-semibold uppercase leading-[0.85] tracking-tighter">
          A Code <br /> &amp; A Word
        </h1>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12">
          <p className="text-xl font-light leading-tight md:col-span-5 md:text-2xl">
            {profile.intro}
          </p>
          <div className="flex flex-col justify-end md:col-span-4 md:col-start-9">
            <span className="mb-2 text-xs uppercase tracking-[0.2em] text-ink/40">Currently</span>
            <p className="text-sm font-medium">{profile.currently}</p>
          </div>
        </div>
      </header>

      <section className="border-t border-ink/10 px-6 py-24 md:px-12 md:py-32">
        <div className="mb-16 flex items-baseline justify-between">
          <h2 className="font-display text-3xl font-semibold uppercase tracking-tighter md:text-4xl">
            Selected Projects
          </h2>
          <span className="text-sm font-medium opacity-40">01 — 02</span>
        </div>

        <div className="space-y-32 md:space-y-48">
          {projects.map((project, i) => {
            const flipped = i % 2 === 1;
            return (
              <div key={project.title} className="grid grid-cols-1 items-start gap-8 md:grid-cols-12">
                <div className={flipped ? "order-1 md:order-2 md:col-span-8" : "md:col-span-8"}>
                  <img
                    src={projectImages[i]}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
                  />
                </div>
                <div
                  className={
                    flipped ? "order-2 pt-4 md:order-1 md:col-span-4" : "pt-4 md:col-span-4"
                  }
                >
                  <span className="mb-4 block text-xs font-medium uppercase tracking-widest text-accent">
                    {project.kind}
                  </span>
                  <h3 className="mb-6 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-ink/70">{project.body}</p>
                  <p className="mb-8 text-xs uppercase tracking-widest text-ink/40">
                    {project.stack}
                  </p>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block border-b border-ink pb-1 text-sm font-medium uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
                    >
                      View work
                    </a>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-ink/10 px-6 py-24 md:px-12 md:py-32">
        <div className="mb-16 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-display text-3xl font-semibold uppercase tracking-tighter md:text-4xl">
            Recent Writing
          </h2>
          <Link
            to="/writing"
            className="border-b border-ink pb-1 text-sm font-medium uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
          >
            The full archive
          </Link>
        </div>
        <LinkIndex items={writing.slice(0, 4)} />
      </section>

      <section className="bg-ink px-6 py-24 text-paper md:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="font-display text-4xl font-semibold uppercase leading-[0.9] tracking-tighter md:text-6xl">
              Words are <br /> the whole <br /> product.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="mb-12 text-xl font-light leading-relaxed opacity-80 md:text-2xl">
              I write about technology for people who don&apos;t live inside it — blogs, docs,
              threads, emails and the occasional podcast episode.
            </p>
            <ul className="divide-y divide-paper/10 border-y border-paper/10">
              {publications.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-baseline justify-between gap-4 py-4 text-sm font-medium uppercase tracking-widest transition-opacity hover:opacity-60"
                  >
                    <span>{p.title}</span>
                    <span className="text-[10px] tracking-[0.2em] opacity-50">{p.note}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
