import fs from "fs";
import path from "path";
import type { Nullable } from "ts-wiz";
import type { IProject } from "@/types/general";

const PROJECTS_PATH = path.join(process.cwd(), "src/data/projects.json");

export async function getAllProjects(): Promise<Array<IProject>> {
  try {
    const source = await fs.promises.readFile(PROJECTS_PATH, "utf8");
    const projects = JSON.parse(source) as Array<IProject>;
    return projects;
  } catch (error) {
    console.error("Error getting all projects:", error);
    return [];
  }
}

export async function getProjectBySlug(slug: string): Promise<Nullable<IProject>> {
  try {
    const projects = await getAllProjects();

    return projects.find((project) => project.slug === slug) ?? null;
  } catch (error) {
    console.error("Error getting project by slug:", error);
    return null;
  }
}
