import type { MetadataRoute } from "next";
import { RENTALS, TOURS, BLOG_POSTS_META, BUSINESS } from "@/lib/site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/rentals",
    "/tours",
    "/how-it-works",
    "/about",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${BUSINESS.url}${path}`,
    lastModified: new Date("2026-08-21"),
  }));

  const rentalPages = RENTALS.map((r) => ({
    url: `${BUSINESS.url}/rentals/${r.slug}`,
    lastModified: new Date("2026-08-21"),
  }));

  const tourPages = TOURS.map((t) => ({
    url: `${BUSINESS.url}/tours/${t.slug}`,
    lastModified: new Date("2026-08-21"),
  }));

  const blogPages = BLOG_POSTS_META.map((p) => ({
    url: `${BUSINESS.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticPages, ...rentalPages, ...tourPages, ...blogPages];
}
