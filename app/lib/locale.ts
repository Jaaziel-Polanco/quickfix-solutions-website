// Pure URL helpers shared by server and client. Kept in a non-"use client"
// module so server components (sitemap, page metadata, JSON-LD) can import them.

export type Lang = "en" | "es";

/** Prefix a canonical EN path (e.g. "/services") with /es when lang === "es". */
export function localePath(path: string, lang: Lang): string {
  if (lang === "en") return path;
  if (path === "/" || path === "") return "/es";
  // Anchor on the home page: "/#services" → "/es#services" (no extra slash).
  if (path.startsWith("/#")) return `/es${path.slice(1)}`;
  return `/es${path}`;
}

/** Strip the /es prefix to recover the canonical EN path. */
export function stripLocale(path: string): string {
  if (path === "/es") return "/";
  if (path.startsWith("/es/")) return path.slice(3);
  return path;
}

/** Compute the equivalent URL in the OTHER language. */
export function altUrl(currentPath: string, currentLang: Lang): string {
  const canonical = stripLocale(currentPath);
  const target: Lang = currentLang === "en" ? "es" : "en";
  return localePath(canonical, target);
}
