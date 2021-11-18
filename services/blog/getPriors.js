import { Http } from "@utils";

export async function getPriorProducts(count): Promise {
  try {
    // const response = await Http.get(`/product/getPriors?count=${count}`);
    // return response.result;
    return [];
  } catch (e) {
    throw error;
  }
}
