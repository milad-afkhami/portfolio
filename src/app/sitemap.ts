import type { MetadataRoute } from "next";
import { getAllBlogs } from "@/services/blog";
import { allowedBlogQualitiesForSeo, baseUrl } from "@/configs/general";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getAllBlogs();

  const blogRoutes = blogs
    .filter((blog) => allowedBlogQualitiesForSeo.includes(blog.quality))
    .map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: new Date(blog.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  const staticRoutes = [
    { url: baseUrl, changeFrequency: "monthly" as const, priority: 1.0 },
    { url: `${baseUrl}/blog`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/packages`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/projects`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/services`, changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  return [...staticRoutes, ...blogRoutes];
}
