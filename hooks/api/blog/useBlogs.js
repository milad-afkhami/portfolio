import { endpoints } from "@constants";
import { useDebugValue, useSWRImmutable } from "@hooks";
import { Http } from "@utils";

export function useBlogs() {
  const swr = useSWRImmutable(endpoints.blogs, async (url) => {
    try {
      const response = await Http.get({ url });

      return response;
    } catch (err) {
      return err;
    }
  });

  useDebugValue(swr.data);

  return {
    ...swr,
  };
}
