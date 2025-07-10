import HttpClient from "@/utils/http";
import type { HttpResponse, IPackage } from "@/types/general";

type Response = Array<{
  id: number;
  documentId: string;
  name: string;
  description: string;
  version: string;
  repository: string;
  npm: string;
  documentation: string;
  features: Array<string>;
  technologies: Array<string>;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}>;

export async function getAllPackages(): Promise<Array<IPackage>> {
  try {
    const response = await HttpClient.get<HttpResponse<Response>>({ url: "/packages" });

    const result = response.data.map(
      (pkg) =>
        ({
          id: pkg.id,
          name: pkg.name,
          description: pkg.description,
          version: pkg.version,
          repository: pkg.repository,
          npm: pkg.npm,
          documentation: pkg.documentation,
          features: pkg.features,
          technologies: pkg.technologies,
        }) satisfies IPackage,
    );

    return result;
  } catch (error) {
    console.error("Error getting all packages:", error);
    return [];
  }
}
