import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kamalindustries.in";
  const now = new Date();

  const routes = [
    { url: "/",                      priority: 1.0, changeFrequency: "weekly"  as const },
    { url: "/about",                 priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/products",              priority: 0.9, changeFrequency: "weekly"  as const },
    { url: "/products/kota-blue-flooring",  priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/products/kota-blue-slabs",     priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/products/kota-brown-flooring", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/products/mandana-stone",       priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/products/wall-cladding",       priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/products/stone-steps",         priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/products/custom-cut",          priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/gallery",               priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services",              priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/downloads",             priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/contact",               priority: 0.9, changeFrequency: "monthly" as const },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${baseUrl}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
