import type { Dictionary } from "ts-wiz";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

export type IProjectLite = {
  slug: string;
  title: string;
  shortDescription: string;
  logo?: string;
  technologies: Array<string>;
};

export type IProject = IProjectLite & {
  description?: string;
  date: string;
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
  image: string;
};

export type IBlogLite = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  coverImage: string;
  quality: "low" | "medium" | "high";
};

export type IBlog = IBlogLite & {
  summary: string;
  category: string;
  tags: Array<string>;
  content: MDXRemoteSerializeResult;
};

export type IPackage = {
  id: number;
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
  technologies?: Array<string>;
  prerequisites?: Array<string>;
  actions?: Array<{ label: string; url: string }>;
};

export type IPromptLite = {
  slug: string;
  name: string;
  description: string;
  coverImage: string;
};

export type IPrompt = IPromptLite & {
  content: string;
  hasVariable?: boolean;
};

export type IHome = {
  blogs: Array<IBlogLite>;
  projects: Array<IProjectLite>;
};

export type IAbout = {
  coverImage: string;
  text: MDXRemoteSerializeResult;
  virtues: Array<{ name: string; description: string }>;
  skills: Array<{ category: string; items: Array<string> }>;
};

export type HttpResponse<T> = {
  data: T;
  meta: Dictionary;
};
