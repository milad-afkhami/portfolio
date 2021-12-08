import { Http } from "@utils";
import { serializeError } from "@helpers";
import { endpoints } from "@constants";
import { blogs } from "mock";

export async function getBlogDetail(slug): Promise {
  try {
    // const response = await Http.get({
    //   url: endpoints.blog,
    //   params: { id },
    // });
    // const result = response?.result?.blog;

    return { blog: blogs.find((b) => b.slug === slug) };
  } catch (e) {
    const error = options.serializableError ? serializeError(e) : e;
    if (options.resolveAnyway) return { error };
    throw error;
  }
}
