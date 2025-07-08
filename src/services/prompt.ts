import fs from "fs";
import path from "path";
import type { Nullable } from "ts-wiz";
import type { IPrompt } from "@/types/general";

const PROMPTS_PATH = path.join(process.cwd(), "src/data/prompts.json");

export async function getAllPrompts(): Promise<Array<IPrompt>> {
  try {
    const source = await fs.promises.readFile(PROMPTS_PATH, "utf8");
    const prompts = JSON.parse(source) as Array<IPrompt>;
    return prompts;
  } catch (error) {
    console.error("Error getting all prompts:", error);
    return [];
  }
}

export async function getPromptBySlug(slug: string): Promise<Nullable<IPrompt>> {
  try {
    const prompts = await getAllPrompts();
    return prompts.find((prompt) => prompt.slug === slug) ?? null;
  } catch (error) {
    console.error("Error getting prompt by slug:", error);
    return null;
  }
}
