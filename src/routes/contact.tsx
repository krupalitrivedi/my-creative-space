import { createFileRoute } from "@tanstack/react-router";
import { profile, services } from "@/lib/portfolio-data";
import { seo } from "@/lib/seo";

const title = "Contact — Krupali Trivedi";
const description =
  "Get in touch with Krupali Trivedi for technical writing, documentation, content strategy and growth marketing work.";

export const Route = createFileRoute("/contact")({
  head: () => seo({ title, description, path: "/contact" }),
  component: Contact,
});

function Contact() {
  return (
    <div className="px-6 pb-24 pt-40 md:px-12 md:pt-48">
      <h1 className="font-display text-[clamp(3rem,13vw,13rem)] font-semibold uppercase leading-[0.85] tracking-tighter md:text-[clamp(3rem,10vw,13rem)]">
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
      <section aria-labelledby="services" className="mt-24 border-t border-ink/10 pt-10">
        <h2
          id="services"
          className="mb-10 text-xs font-medium uppercase tracking-[0.2em] text-ink/40"
        >
          What I can help with
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {services.map((service, i) => (
            <div key={service.title}>
              <span className="mb-4 block text-[10px] font-medium uppercase tracking-[0.2em] text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 font-display text-xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="leading-relaxed text-ink/70">{service.body}</p>
            </div>
          ))}
        </div>
      </section>

      <a
        href={`mailto:${profile.email}`}
        className="mt-20 block border-t border-ink/10 pt-10 font-display text-2xl font-semibold tracking-tighter transition-colors hover:text-brand sm:text-4xl md:text-6xl"
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
            className="border-b border-ink pb-1 transition-colors hover:border-brand hover:text-brand"
          >
            LinkedIn
          </a>
          <a
            href={profile.twitter}
            target="_blank"
            rel="noreferrer"
            className="border-b border-ink pb-1 transition-colors hover:border-brand hover:text-brand"
          >
            X (Twitter)
          </a>
        </div>
      </div>
    </div>
  );
}
