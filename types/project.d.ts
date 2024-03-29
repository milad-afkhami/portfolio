// import type TreeProps from "@kits/Tree/props";

interface IProject {
  id: number;
  name: string;
  link?: string | string[];
  logo?: string;
  medias?: { src: string; title?: string }[];
  date: string;
  slug: string;
  techs: string[];
  points?: TreeProps["branches"];
}
