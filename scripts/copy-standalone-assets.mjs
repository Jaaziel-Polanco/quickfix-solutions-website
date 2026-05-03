// Next.js's standalone output (.next/standalone/) does NOT include public/
// or .next/static/. The standalone server.js expects them as siblings.
// This script runs after `next build` (via postbuild) so the standalone
// directory is self-sufficient and `node .next/standalone/server.js`
// works directly in production.
//
// Skip silently if standalone wasn't produced (e.g. running locally without
// the standalone output enabled).

import { cp, stat } from "node:fs/promises";
import { join, resolve } from "node:path";

const root = resolve(process.cwd());
const standaloneDir = join(root, ".next", "standalone");

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function copyIfMissing(src, dest, label) {
  if (!(await exists(src))) {
    console.log(`[standalone] skip ${label}: source missing (${src})`);
    return;
  }
  await cp(src, dest, { recursive: true, force: true });
  console.log(`[standalone] copied ${label} → ${dest}`);
}

if (!(await exists(standaloneDir))) {
  console.log(
    "[standalone] .next/standalone not found — skipping asset copy. " +
      'Set `output: "standalone"` in next.config.ts to enable.',
  );
  process.exit(0);
}

await copyIfMissing(
  join(root, "public"),
  join(standaloneDir, "public"),
  "public/",
);

await copyIfMissing(
  join(root, ".next", "static"),
  join(standaloneDir, ".next", "static"),
  ".next/static/",
);

console.log("[standalone] ready: node .next/standalone/server.js");
