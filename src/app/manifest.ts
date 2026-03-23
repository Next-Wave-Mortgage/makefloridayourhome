import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Make Florida Your Home",
    short_name: "MFYH",
    description:
      "Florida mortgage experts helping first-time homebuyers find the right loan and down payment assistance programs.",
    start_url: "/",
    display: "browser",
    background_color: "#f2faf6",
    theme_color: "#006948",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
