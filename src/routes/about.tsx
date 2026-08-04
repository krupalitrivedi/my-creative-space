import { createFileRoute } from "@tanstack/react-router";
import { experience, skills } from "@/lib/portfolio-data";
import { Reveal } from "@/components/reveal";
import { seo } from "@/lib/seo";

const title = "About — Krupali Trivedi";
const description =
  "The professional journey of Krupali Trivedi: growth lead, technical writer and content strategist across Huddle01, Layer-E and freelance work.";

export const Route = createFileRoute("/about")({
  head: () => seo({ title, description, path: "/about", type: "profile" }),
  component: About,
});

function About() {
  return (
    <div className="pb-24 pt-40 md:pt-48">
      <div className="px-6 md:px-12">
        <h1 className="font-display text-[clamp(3rem,13vw,13rem)] font-semibold uppercase leading-[0.85] tracking-tighter md:text-[clamp(3rem,10vw,13rem)]">
          Know me <br /> a little bit
        </h1>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12">
          <p className="text-xl font-light leading-tight md:col-span-6 md:text-2xl">
            I write about everything related to technology. I&apos;ve always enjoyed diving into
            projects, talking to the teams behind them, and then explaining what they built in a
            form everyone can follow.
          </p>
          <p className="leading-relaxed text-ink/70 md:col-span-4 md:col-start-8">
            Somewhere between writing, reading, recording voice-only podcasts and being
            philosophical at times, I became a marketer who likes to build — including internal AI
            tools that streamline how content gets made. B.Tech in Computer Science, Indus
            University.
          </p>
        </div>
      </div>

      <section
        aria-labelledby="journey"
        className="mt-24 border-t border-ink/10 px-6 py-24 md:px-12"
      >
        <h2
          id="journey"
          className="mb-16 font-display text-3xl font-semibold uppercase tracking-tighter md:text-4xl"
        >
          Professional Journey
        </h2>
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
              </div>
              <p className="leading-relaxed text-ink/70 md:col-span-5">{item.body}</p>
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
              <h3 className="mb-4 text-xs uppercase tracking-[0.2em] opacity-40">Craft</h3>
              <ul className="space-y-2 text-sm font-medium uppercase tracking-wider">
                {skills.craft.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xs uppercase tracking-[0.2em] opacity-40">Technology</h3>
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
