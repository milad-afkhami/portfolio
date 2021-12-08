import { Http } from "@utils";
import { blogs } from "mock";

export async function getPriorBlogs(count): Promise {
  try {
    // const response = await Http.get(`/product/getPriors?count=${count}`);
    // return response.result;
    return blogs.map((b) => b.slug);
  } catch (e) {
    throw error;
  }
}
