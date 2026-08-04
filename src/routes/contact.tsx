import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/lib/portfolio-data";

const title = "Contact — Krupali Trivedi";
const description =
  "Get in touch with Krupali Trivedi for technical writing, documentation, content strategy and growth marketing work.";

export const Route = createFileRoute("/contact")({
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
  component: Contact,
});

function Contact() {
  return (
    <div className="px-6 pb-24 pt-40 md:px-12 md:pt-48">
      <h1 className="font-display text-[13vw] font-semibold uppercase leading-[0.85] tracking-tighter md:text-[10vw]">
        You&apos;ve come <br /> far, thank you
      </h1>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12">
        <p className="text-xl font-light leading-tight md:col-span-6 md:text-2xl">
          Thank you for reading all of this and getting to know me a little better. It would be a
          pleasure to talk about your project and how I can help with it.
        </p>
        <p className="leading-relaxed text-ink/70 md:col-span-4 md:col-start-8">
          Open for technical writing, documentation, editorial strategy and growth marketing work.
          If you&apos;d like more resources or samples, just ask.
        </p>
      </div>
      <a
        href={`mailto:${profile.email}`}
        className="mt-20 block border-t border-ink/10 pt-10 font-display text-2xl font-semibold tracking-tighter transition-colors hover:text-accent sm:text-4xl md:text-6xl"
      >
        {profile.email}
      </a>
      <div className="mt-12 border-t border-ink/10 pt-8">
        <span className="mb-6 block text-xs font-medium uppercase tracking-[0.2em] text-ink/40">
          Connect
        </span>
        <div className="flex flex-wrap gap-6 text-sm font-medium uppercase tracking-widest md:gap-10">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="border-b border-ink pb-1 transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={profile.twitter}
            target="_blank"
            rel="noreferrer"
            className="border-b border-ink pb-1 transition-colors hover:border-accent hover:text-accent"
          >
            X (Twitter)
          </a>
        </div>
      </div>
    </div>
  );
}
