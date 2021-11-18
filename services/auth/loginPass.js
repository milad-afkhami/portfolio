import { endpoints } from "@constants";
import { AuthHelper } from "@helpers";
import { Http } from "@utils";

export async function loginPass({ emailOrMobile, password }): Promise {
  try {
    const isMobile = AuthHelper.isMobile(emailOrMobile);
    const _emailOrMobile = isMobile
      ? emailOrMobile.replace(0, "98")
      : emailOrMobile;

    const data = { [isMobile ? "mobile" : "email"]: _emailOrMobile, password };

    const response = await Http.post({ url: endpoints.loginPass, data });
    return response.result;
  } catch (error) {
    throw error;
  }
}
