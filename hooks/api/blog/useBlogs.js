import useSWR from "swr";
import { endpoints } from "@constants";
import { useState, useSWRImmutable } from "@hooks";

import { blogs } from "mock";

export function useBlogs() {
  const swr = useSWRImmutable(endpoints.blogs);

  const [state, setState] = useState(null);

  setTimeout(() => {
    setState(blogs);
  }, 3000);

  return {
    data: { blogs: state },
    isValidating: false,
  };
}
