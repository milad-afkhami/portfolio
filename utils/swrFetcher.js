import { Http } from "@utils";

export const swrFetcher = async (url, options) => {
  try {
    const response = await Http.request({
      url,
      ...(options ? JSON.parse(options) : {}),
    });
    return response.result;
  } catch (err) {
    return err;
  }
};
