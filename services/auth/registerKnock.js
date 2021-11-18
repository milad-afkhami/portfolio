import { endpoints } from "@constants";
import { AuthHelper } from "@helpers";
import { Http } from "@utils";

export async function registerKnock(emailOrMobile): Promise {
  try {
    const isMobile = AuthHelper.isMobile(emailOrMobile);
    const value = isMobile ? emailOrMobile.replace(0, "98") : emailOrMobile;
    const data = { [isMobile ? "mobile" : "email"]: value };

    const response = await Http.post({ url: endpoints.registerKnock, data });
    return response.result;
  } catch (error) {
    throw error;
  }
}
