import { createFileRoute, Link } from "@tanstack/react-router";
import { profile, publications, stats, whatIDo } from "@/lib/portfolio-data";
import { Reveal } from "@/components/reveal";
import { seo, siteUrl } from "@/lib/seo";

const title = "Krupali Trivedi — Growth Marketer & Technical Content Strategist";
const description =
  "A little bit of content, a little bit of tech, and a lot of marketing. Growth and technical content for SaaS, Cloud and Blockchain companies.";

/** Person schema so search engines can attribute the work to a real profile. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  jobTitle: "Growth Marketer & Technical Content Strategist",
  description: profile.intro,
  sameAs: profile.socials.map((s) => s.href),
};

export const Route = createFileRoute("/")({
  head: () => {
    const { meta, links } = seo({ title, description, path: "/" });
    return {
      meta,
      links,
      scripts: [{ type: "application/ld+json", children: JSON.stringify(personSchema) }],
    };
  },
  component: Home,
});

function Home() {
  return (
    <div>
      <header className="flex flex-col justify-end px-6 pb-16 pt-28 md:px-12 md:pb-20 md:pt-32">
        <span className="mb-6 block text-xs font-medium uppercase tracking-[0.25em] text-ink/40">
          {profile.name} — {profile.tagline} — {profile.period}
        </span>
        {/* clamp() stops the display type from running past ~11rem on ultrawide
            screens while keeping the fluid scale on phones. */}
        <h1 className="font-display text-[clamp(3rem,11vw,11rem)] font-semibold uppercase leading-[0.85] tracking-tighter">
          A Code <br /> &amp; A Word
        </h1>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12">
          <p className="text-xl font-light leading-tight md:col-span-6 md:text-2xl">
            {profile.intro}
          </p>
          <div className="flex flex-col justify-end md:col-span-4 md:col-start-9">
            <span className="mb-2 text-xs uppercase tracking-[0.2em] text-ink/40">
              {profile.currentlyLabel}
            </span>
            <p className="text-sm font-medium">{profile.currently}</p>
          </div>
        </div>
      </header>

      <section aria-label="By the numbers" className="px-6 py-10 md:px-12 md:py-12">
        <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-ink/40">
                {stat.label}
              </dt>
              <dd>
                <span className="font-display text-4xl font-semibold tracking-tighter md:text-5xl">
                  {stat.value}
                </span>
                <span className="ml-1 font-display text-xl font-semibold text-brand">
                  {stat.unit}
                </span>
                <span className="mt-2 block text-sm text-ink/60">{stat.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="what-i-do" className="px-6 py-10 md:px-12 md:py-12">
        <div className="mb-10 flex items-baseline justify-between">
          <h2
            id="what-i-do"
            className="font-display text-3xl font-semibold uppercase tracking-tighter md:text-4xl"
          >
            What I do
          </h2>
          <span className="text-sm font-medium opacity-40">{whatIDo.length} areas</span>
        </div>
        <ul className="border-t border-ink/10">
          {whatIDo.map((area, i) => (
            <Reveal
              as="li"
              key={area}
              delay={i * 60}
              className="flex items-baseline gap-6 border-b border-ink/10 py-6 md:gap-10"
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                {area}
              </h3>
            </Reveal>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="where-i-publish"
        className="bg-ink px-6 py-16 text-paper md:px-12 md:py-20"
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2
              id="where-i-publish"
              className="font-display text-4xl font-semibold uppercase leading-[0.9] tracking-tighter md:text-6xl"
            >
              Places you <br /> will find <br /> my writing.
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
            {/* With "Recent writing" gone, this is the home page's only route
                into the archive. */}
            <Link
              to="/writing"
              className="mt-10 inline-block border-b border-paper pb-1 text-sm font-medium uppercase tracking-widest transition-opacity hover:opacity-60"
            >
              The full archive
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
