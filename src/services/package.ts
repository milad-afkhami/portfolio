import fs from "fs";
import path from "path";
import type { Nullable } from "ts-wiz";
import type { IPackage } from "@/types/general";

const PACKAGES_PATH = path.join(process.cwd(), "src/data/packages.json");

export async function getAllPackages(): Promise<Array<IPackage>> {
  try {
    const source = await fs.promises.readFile(PACKAGES_PATH, "utf8");
    const packages = JSON.parse(source) as Array<IPackage>;
    return packages;
  } catch (error) {
    console.error("Error getting all packages:", error);
    return [];
  }
}

export async function getPackageById(id: string): Promise<Nullable<IPackage>> {
  try {
    const packages = await getAllPackages();
    return packages.find((pkg) => pkg.id === id) ?? null;
  } catch (error) {
    console.error("Error getting package by id:", error);
    return null;
  }
}
