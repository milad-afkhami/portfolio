import fs from "fs";
import path from "path";
import type { Nullable } from "ts-wiz";
import type { IService } from "@/types/general";

const SERVICES_PATH = path.join(process.cwd(), "src/data/services.json");

export async function getAllServices(): Promise<Array<IService>> {
  try {
    const source = await fs.promises.readFile(SERVICES_PATH, "utf8");
    const services = JSON.parse(source) as Array<IService>;
    return services;
  } catch (error) {
    console.error("Error getting all services:", error);
    return [];
  }
}

export async function getServiceBySlug(slug: string): Promise<Nullable<IService>> {
  try {
    const services = await getAllServices();
    return services.find((service) => service.slug === slug) ?? null;
  } catch (error) {
    console.error("Error getting service by slug:", error);
    return null;
  }
}
