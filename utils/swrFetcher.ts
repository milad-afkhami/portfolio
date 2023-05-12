import Http from "@utils/Http";

const swrFetcher = async (url, options) => {
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

export default swrFetcher;
