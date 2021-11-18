import { Http } from "@utils";
import { endpoints } from "@constants";

export async function login(code): Promise {
  try {
    const response = await Http.post({ url: endpoints.login, data: { code } });
    return response.result;
  } catch (error) {
    throw error;
  }
}
