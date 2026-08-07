import { createFileRoute, Link } from "@tanstack/react-router";
import { experience, skills, profile, projects } from "@/lib/portfolio-data";
import { Reveal } from "@/components/reveal";
import { StatsRow } from "@/components/stats-row";
import { seo } from "@/lib/seo";
import contentStudio from "@/assets/content-studio.jpg";
import peer2venue from "@/assets/peer2venue.jpg";

const title = "About — Krupali Trivedi";
const description =
  "An engineer turned marketer. Nine roles across Huddle01, Tiiny Host, Layer-E and freelance technical writing, from 2020 to present.";

export const Route = createFileRoute("/about")({
  head: () => seo({ title, description, path: "/about", type: "profile" }),
  component: About,
});

/** Only the first two projects have artwork; the third is writing, not a product. */
const projectImages = [contentStudio, peer2venue];

function About() {
  return (
    <div className="pb-8 pt-28 md:pb-10 md:pt-32">
      <div className="px-6 md:px-12">
        <h1 className="font-display text-[clamp(2.25rem,7vw,6rem)] font-semibold uppercase leading-[0.9] tracking-tighter">
          Krupali Trivedi
        </h1>
        <div className="mt-12 max-w-2xl space-y-6">
          <p className="leading-relaxed text-ink/70">{profile.introSecondary}</p>
          <p className="leading-relaxed text-ink/70">
            The tech space keeps growing and there&apos;s always something new to learn, and I love
            diving into new rabbit holes and experimenting.
          </p>
        </div>
      </div>

      <section aria-label="By the numbers" className="mt-12 px-6 md:px-12">
        <StatsRow />
      </section>

      <section
        aria-labelledby="journey"
        className="mt-16 border-t border-ink/10 px-6 py-16 md:px-12 md:py-20"
      >
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
          <h2
            id="journey"
            className="font-display text-3xl font-semibold uppercase tracking-tighter md:text-4xl"
          >
            Experience
          </h2>
          <span className="text-sm font-medium opacity-40">
            {experience.length} roles · {profile.period}
          </span>
        </div>

        <div className="border-t border-ink/10">
          {experience.map((item) => (
            <Reveal
              key={`${item.role}-${item.period}`}
              className="grid grid-cols-1 gap-4 border-b border-ink/10 py-10 md:grid-cols-12 md:gap-8"
            >
              <span className="text-xs font-medium uppercase tracking-widest text-brand md:col-span-3">
                {item.period}
              </span>
              <div className="md:col-span-4">
                <h3 className="font-display text-xl font-semibold tracking-tight">{item.role}</h3>
                <p className="text-sm uppercase tracking-widest text-ink/70">{item.org}</p>
                {item.note ? (
                  <p className="mt-2 text-xs uppercase tracking-widest text-ink/60">
                    ({item.note})
                  </p>
                ) : null}
              </div>
              <div className="md:col-span-5">
                <p className="leading-relaxed text-ink/70">{item.body}</p>
                {item.points ? (
                  <ul className="mt-4 space-y-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="relative pl-5 leading-relaxed text-ink/70 before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-brand"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {item.tags ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-ink/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-ink/60"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="selected-work"
        className="border-t border-ink/10 px-6 py-16 md:px-12 md:py-20"
      >
        <div className="mb-10 flex items-baseline justify-between">
          <h2
            id="selected-work"
            className="font-display text-3xl font-semibold uppercase tracking-tighter md:text-4xl"
          >
            Had fun building:
          </h2>
          <span className="text-sm font-medium opacity-40">{projects.length} shipped</span>
        </div>

        <div className="space-y-20 md:space-y-28">
          {projects.map((project, i) => {
            const image = projectImages[i];
            const flipped = i % 2 === 1;
            return (
              <Reveal
                key={project.title}
                className="grid grid-cols-1 items-start gap-8 md:grid-cols-12"
              >
                {image ? (
                  <div className={flipped ? "order-1 md:order-2 md:col-span-8" : "md:col-span-8"}>
                    <img
                      src={image}
                      alt={`${project.title} preview`}
                      loading="lazy"
                      decoding="async"
                      width={1200}
                      height={800}
                      className="w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
                    />
                  </div>
                ) : null}
                <div
                  className={
                    image
                      ? flipped
                        ? "order-2 pt-4 md:order-1 md:col-span-4"
                        : "pt-4 md:col-span-4"
                      : "md:col-span-8"
                  }
                >
                  <h3 className="mb-6 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mb-8 leading-relaxed text-ink/70">{project.body}</p>
                  <ul className="mb-8 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="border border-ink/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-ink/60"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  {project.href ? (
                    // A leading slash means an internal route, which has to go
                    // through the router rather than a full page load.
                    project.href.startsWith("/") ? (
                      <Link
                        to={project.href}
                        aria-label={`${project.linkLabel ?? "View work"}: ${project.title}`}
                        className="inline-block border-b border-ink pb-1 text-sm font-medium uppercase tracking-widest transition-colors hover:border-brand hover:text-brand"
                      >
                        {project.linkLabel ?? "View work"}
                      </Link>
                    ) : (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.linkLabel ?? "View work"}: ${project.title}`}
                        className="inline-block border-b border-ink pb-1 text-sm font-medium uppercase tracking-widest transition-colors hover:border-brand hover:text-brand"
                      >
                        {project.linkLabel ?? "View work"}
                      </a>
                    )
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="toolkit" className="bg-ink px-6 py-16 text-paper md:px-12 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <h2
            id="toolkit"
            className="font-display text-4xl font-semibold uppercase leading-[0.9] tracking-tighter md:col-span-5 md:text-6xl"
          >
            What I <br /> work with
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:col-span-6 md:col-start-7">
            <div>
              <h3 className="mb-4 text-xs uppercase tracking-[0.2em] opacity-40">Skills</h3>
              <ul className="space-y-2 text-sm font-medium uppercase tracking-wider">
                {skills.craft.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xs uppercase tracking-[0.2em] opacity-40">
                Technologies &amp; tools
              </h3>
              <ul className="space-y-2 text-sm font-medium uppercase tracking-wider">
                {skills.tech.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
