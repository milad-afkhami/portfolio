import useSWR from "swr";
import { endpoints } from "@constants";

export function useBlog({ slug, fallbackData }: IApiHook) {
  const swr = useSWR(slug ? endpoints.blog + `?slug=${slug}` : null, {
    fallbackData,
  });

  console.log(swr);
  return { data: fallbackData };
}
