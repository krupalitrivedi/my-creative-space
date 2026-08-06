/**
 * Serves the separately deployed Ahrefs portfolio under /ahrefs.
 *
 * A `vercel.json` rewrite cannot do this: Nitro's Vercel preset emits its own
 * `.vercel/output/config.json` via the Build Output API, whose catch-all route
 * (`/(.*) -> /__server`) takes precedence, so `vercel.json` rewrites never
 * apply and /ahrefs falls through to this app's 404. Proxying from the server
 * entry runs after that catch-all, so it works regardless of Vercel routing.
 */

const UPSTREAM = "https://ahrefs-portfolio-website.vercel.app";
const PREFIX = "/ahrefs";

/** Headers that describe the *hop*, not the payload; forwarding them corrupts it. */
const STRIPPED_RESPONSE_HEADERS = ["content-encoding", "content-length", "transfer-encoding"];

export function isAhrefsRequest(pathname: string): boolean {
  return pathname === PREFIX || pathname.startsWith(`${PREFIX}/`);
}

export async function handleAhrefsRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);

  // Redirect the bare /ahrefs to /ahrefs/ so the page's relative asset links
  // ("styles.css") resolve to /ahrefs/styles.css instead of /styles.css, which
  // would miss the proxy and hit this app's 404 instead.
  if (url.pathname === PREFIX) {
    return Response.redirect(`${url.origin}${PREFIX}/${url.search}`, 308);
  }

  const upstreamPath = url.pathname.slice(PREFIX.length) || "/";
  const upstreamUrl = `${UPSTREAM}${upstreamPath}${url.search}`;

  // Host must not be forwarded — the upstream would route on our hostname.
  const headers = new Headers(request.headers);
  headers.delete("host");
  headers.set("x-forwarded-host", url.host);

  let upstream: Response;
  try {
    upstream = await fetch(upstreamUrl, {
      method: request.method,
      headers,
      body: request.method === "GET" || request.method === "HEAD" ? undefined : request.body,
      redirect: "manual",
    });
  } catch (error) {
    console.error(`ahrefs proxy: upstream request failed for ${upstreamUrl}`, error);
    return new Response("The Ahrefs portfolio is temporarily unavailable.", {
      status: 502,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  const responseHeaders = new Headers(upstream.headers);
  for (const header of STRIPPED_RESPONSE_HEADERS) responseHeaders.delete(header);

  // Keep an upstream redirect on our own domain rather than bouncing the
  // visitor off to *.vercel.app.
  const location = responseHeaders.get("location");
  if (location?.startsWith(UPSTREAM)) {
    responseHeaders.set("location", `${PREFIX}${location.slice(UPSTREAM.length)}`);
  }

  return new Response(upstream.body, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers: responseHeaders,
  });
}
