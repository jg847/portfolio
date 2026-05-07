import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!siteUrl) {
    return [];
  }

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    ...projects.map((project) => ({
      url: `${siteUrl}${project.route}`,
      lastModified: new Date(),
    })),
  ];
}