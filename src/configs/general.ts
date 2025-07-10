import type { IBlog } from "@/types/general";

export const resumeLink = "https://drive.google.com/file/d/12S3vZyDeN_ORcT1c6WWvAnhvbUXGxqfW/view";

export const baseUrl = "https://milad-afkhami.com";

export const backendBaseUrl =
  process.env.NODE_ENV === "development" ? "http://localhost:1337/api" : "https://api.milad-afkhami.com/api";

export const cdnBaseUrl =
  process.env.NODE_ENV === "development" ? "http://localhost:1337" : "https://api.milad-afkhami.com";

export const allowedBlogQualitiesForSeo: Array<IBlog["quality"]> = ["high", "medium"];
