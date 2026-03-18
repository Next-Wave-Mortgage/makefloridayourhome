import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import hubspotRedirects from "./src/lib/hubspot-redirects";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async redirects() {
    return hubspotRedirects;
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
