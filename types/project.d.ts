// import { TreeProps } from "@kits/Tree";

interface IProject {
  id: number;
  name: string;
  link: string | Array<string>;
  logo: string;
  medias: Array<{ src: string; title?: string }>;
  date: string;
  slug: string;
  techs: Array<{ name: string; link: string }>;
  points: Array<unknown>;
}
