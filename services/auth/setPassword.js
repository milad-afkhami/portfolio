import { endpoints } from "@constants";
import { Http } from "@utils";

export async function setPassword({
  password,
  isForgottenPass,
  current,
}): Promise {
  try {
    const data = {
      password,
      ...(isForgottenPass ? { isForgottenPass } : {}),
      ...(current ? { current } : {}),
    };

    const response = await Http.patch({ url: endpoints.setPassword, data });
    return response.result;
  } catch (error) {
    throw error;
  }
}
