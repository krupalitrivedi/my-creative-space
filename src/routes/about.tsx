import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * The page moved to /experience. This keeps links that were already shared
 * pointing at /about working, rather than dropping them on the 404 page.
 */
export const Route = createFileRoute("/about")({
  beforeLoad: () => {
    throw redirect({ to: "/experience", replace: true });
  },
});
