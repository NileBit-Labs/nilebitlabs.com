import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NileBit Labs",
    short_name: "NileBit Labs",
    description: "Product engineering, software, AI, and blockchain from Kampala, Uganda.",
    start_url: "/",
    display: "standalone",
    background_color: "#080808",
    theme_color: "#ff6200",
    icons: [
      { src: "/nilebit-icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
