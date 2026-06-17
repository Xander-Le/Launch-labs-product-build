import type { MetadataRoute } from "next";
import { seoConfig } from "@/src/data/seo";
import { absoluteUrl } from "@/src/lib/seo";

const coreRoutes = [
  "",
  "/pricing",
  "/how-it-works",
  "/technology",
  "/golf-league-garland-tx",
  "/faq",
  "/rowlett",
  "/mesquite",
  "/terms-of-service",
  "/privacy-policy",
  "/liability-waiver",
] as const;

const serviceAreaRoutes = [
  "/golf-simulator-garland-tx",
  "/indoor-golf-garland-tx",
  "/trackman-golf-simulator-garland-tx",
] as const;

const highPriorityRoutes = new Set(["/how-it-works", "/technology"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const allRoutes = [...coreRoutes, ...serviceAreaRoutes];

  return allRoutes.map((route) => ({
    url: route === "" ? `${seoConfig.siteUrl}/` : absoluteUrl(route),
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/pricing"
          ? 0.95
          : highPriorityRoutes.has(route)
            ? 0.9
            : 0.7,
  }));
}
