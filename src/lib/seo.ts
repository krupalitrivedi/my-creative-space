/**
 * Single source of truth for the site's public URL and social metadata.
 *
 * `siteUrl` is used to build absolute canonical and og:image URLs, which
 * crawlers and social scrapers require. Set VITE_SITE_URL at build time if the
 * site is deployed anywhere other than the domain below.
 */
export const siteUrl = (import.meta.env.VITE_SITE_URL ?? "https://acodeandaword.com").replace(
  /\/$/,
  "",
);

export const ogImage = `${siteUrl}/og.png`;

export function seo({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  /** Route path, e.g. "/writing". Used for the canonical and og:url. */
  path: string;
  type?: "website" | "profile" | "article";
}) {
  const url = `${siteUrl}${path === "/" ? "" : path}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:image", content: ogImage },
      { property: "og:site_name", content: "Krupali Trivedi" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:creator", content: "@chai_really" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
