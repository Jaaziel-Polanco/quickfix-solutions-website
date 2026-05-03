import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a self-contained server in `.next/standalone/` so the production
  // image only needs that folder + `.next/static` + `public` (copied by
  // scripts/copy-standalone-assets.mjs in postbuild). Drastically smaller
  // and faster cold starts than the default `next start` deploy.
  output: "standalone",
  reactCompiler: true,
  // Cuts an outbound ping to telemetry.nextjs.org during build/start.
  // Same effect as `NEXT_TELEMETRY_DISABLED=1`.
};

export default nextConfig;
