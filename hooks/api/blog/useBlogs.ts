import { useDebugValue } from "react";
import endpoints from "@constants/endpoints";
import useSWRImmutable from "swr/immutable";
import Http from "@utils/Http";

const useBlogs = () => {
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
};

export default useBlogs;
