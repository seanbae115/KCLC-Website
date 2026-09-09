import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No `output: "export"` — the consultation form needs a real server route
  // (server-side validation, case numbers, submission records, delivery checks).
  // Pages without dynamic data are still prerendered as static HTML by Next.js.
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: { globalNotFound: true },
};

export default nextConfig;
