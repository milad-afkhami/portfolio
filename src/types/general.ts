import type { IconType } from "react-icons";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

export type IProject = {
  slug: string;
  title: string;
  description?: string;
  shortDescription: string;
  logo?: string;
  date: string;
  technologies: Array<string>;
  features?: Array<string>;
  link?: string;
  images?: Array<string>;
};

export type IFavourite = {
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  cover: string;
  link?: string;
  meta?: Array<{ key: string; value: string }>;
};

type FavouriteCategory = "books" | "playlists" | "animations" | "series" | "anime";

export type IFavouriteCategory = {
  slug: FavouriteCategory;
  title: string;
  description: string;
  icon: IconType;
  image: string;
};

export type IBlogMetadata = {
  title: string;
  description: string;
  summary: string;
  date: string;
  readingTime: string;
  category: string;
  coverImage: string;
  tags: Array<string>;
  quality: "low" | "medium" | "high";
};

export type IBlog = IBlogMetadata & {
  slug: string;
  content: MDXRemoteSerializeResult;
};

export type IPackage = {
  id: string;
  name: string;
  description: string;
  version: string;
  repository: string;
  npm: string;
  documentation: string;
  features: Array<string>;
  technologies: Array<string>;
};

export type IService = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: Array<string>;
  technologies: Array<string>;
  actions?: Array<{ label: string; url: string }>;
};
