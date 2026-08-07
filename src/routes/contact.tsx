import { createFileRoute } from "@tanstack/react-router";
import { contact } from "@/lib/portfolio-data";
import { ContactLinks } from "@/components/contact-links";
import { seo } from "@/lib/seo";

const title = "Contact — Krupali Trivedi";
const description =
  "Get in touch with Krupali Trivedi about growth marketing, technical writing, documentation and content strategy work.";

export const Route = createFileRoute("/contact")({
  head: () => seo({ title, description, path: "/contact" }),
  component: Contact,
});

function Contact() {
  return (
    <div className="px-6 pb-8 pt-28 md:px-12 md:pb-10 md:pt-32">
      <h1 className="font-display text-[clamp(2.25rem,7vw,6rem)] font-semibold uppercase leading-[0.9] tracking-tighter">
        You&apos;ve come <br /> far, thank you!
      </h1>
      <p className="mt-10 max-w-xl text-xl font-light leading-tight md:text-2xl">{contact.body}</p>
      <ContactLinks className="mt-10" />
    </div>
  );
}
