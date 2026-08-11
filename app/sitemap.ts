import type { MetadataRoute } from "next";
import { insights } from "@/data/insights";

const baseUrl = "https://nilebitlabs.com";
const routes = ["", "/services", "/work", "/about", "/insights", "/contact", "/faq", "/privacy", "/terms", "/cookies"];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : route === "/insights" ? "weekly" : "monthly",
    priority: route === "" ? 1 : ["/services", "/work", "/contact"].includes(route) ? 0.8 : 0.6,
  }));

  return [
    ...pages,
    ...insights.map((insight) => ({
      url: `${baseUrl}/insights/${insight.slug}`,
      lastModified: insight.publishedAt,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
