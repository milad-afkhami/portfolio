import HttpClient from "@/utils/http";
import type { Nullable } from "ts-wiz";
import type { HttpResponse, IService } from "@/types/general";

type Response = Array<{
  id: number;
  documentId: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: Array<string>;
  technologies: Array<string> | undefined;
  prerequisites: Array<string> | undefined;
  actions: Array<{ label: string; url: string }>;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}>;

export async function getAllServices(): Promise<Array<IService>> {
  try {
    const response = await HttpClient.get<HttpResponse<Response>>({ url: "/services?populate=*" });

    const result = response.data.map(
      (service) =>
        ({
          slug: service.slug,
          title: service.title,
          description: service.description,
          icon: service.icon,
          features: service.features,
          technologies: service.technologies,
          prerequisites: service.prerequisites,
          actions: service.actions,
        }) satisfies IService,
    );

    return result;
  } catch (error) {
    console.error("Error getting all services:", error);
    return [];
  }
}

export async function getServiceBySlug(slug: string): Promise<Nullable<IService>> {
  try {
    const response = await HttpClient.get<HttpResponse<Response>>({
      url: `/services?populate=*&filters[slug]=${slug}`,
    });

    const result = response.data[0];

    return {
      slug: result.slug,
      icon: result.icon,
      title: result.title,
      actions: result.actions,
      features: result.features,
      description: result.description,
      technologies: result.technologies,
      prerequisites: result.prerequisites,
    } satisfies IService;
  } catch (error) {
    console.error("Error getting service by slug:", error);
    return null;
  }
}
