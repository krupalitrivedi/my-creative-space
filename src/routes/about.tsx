import { createFileRoute } from "@tanstack/react-router";
import { experience, skills, profile } from "@/lib/portfolio-data";
import { Reveal } from "@/components/reveal";
import { seo } from "@/lib/seo";

const title = "About — Krupali Trivedi";
const description =
  "An engineer turned marketer. Nine roles across Huddle01, Tiiny Host, Layer-E and freelance technical writing, from 2020 to present.";

export const Route = createFileRoute("/about")({
  head: () => seo({ title, description, path: "/about", type: "profile" }),
  component: About,
});

function About() {
  return (
    <div className="pb-24 pt-40 md:pt-48">
      <div className="px-6 md:px-12">
        <h1 className="font-display text-[clamp(3rem,13vw,13rem)] font-semibold uppercase leading-[0.85] tracking-tighter md:text-[clamp(3rem,10vw,13rem)]">
          Hello, <br /> I&apos;m Krupali
        </h1>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12">
          <p className="text-xl font-light leading-tight md:col-span-6 md:text-2xl">
            {profile.intro}
          </p>
          <div className="md:col-span-4 md:col-start-8">
            <p className="leading-relaxed text-ink/70">{profile.introSecondary}</p>
            <p className="mt-6 leading-relaxed text-ink/70">
              The tech space keeps growing and there&apos;s always something new to learn, and I
              love diving into new rabbit holes and experimenting.
            </p>
            <p className="mt-6 text-sm">
              <span className="text-ink/40">{profile.currentlyLabel}: </span>
              <span className="font-medium">{profile.currently}</span>
            </p>
          </div>
        </div>
      </div>

      <section
        aria-labelledby="journey"
        className="mt-24 border-t border-ink/10 px-6 py-24 md:px-12"
      >
        <div className="mb-16 flex flex-wrap items-baseline justify-between gap-4">
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
                <p className="text-sm uppercase tracking-widest text-ink/40">{item.org}</p>
                {item.note ? (
                  <p className="mt-2 text-xs uppercase tracking-widest text-ink/40">
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

      <section aria-labelledby="toolkit" className="bg-ink px-6 py-24 text-paper md:px-12">
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
