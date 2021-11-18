import { Http } from "@utils";
import { serializeError } from "@helpers";
import { ServiceOptions } from "../servicesTypes";
import { endpoints } from "@constants";

export async function getBlogDetail(id, options: ServiceOptions): Promise {
  try {
    const response = await Http.get({
      url: endpoints.blog,
      params: { id },
    });
    const result = response?.result?.blog;

    return { blog: result };
  } catch (e) {
    const error = options.serializableError ? serializeError(e) : e;
    if (options.resolveAnyway) return { error };
    throw error;
  }
}
