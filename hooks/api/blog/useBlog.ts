import useSWR from "swr";
import { endpoints } from "@constants";

export function useBlog({ slug, fallbackData }) {
  const swr = useSWR(slug ? endpoints.blog + `?slug=${slug}` : null, {
    fallbackData,
  });

  return { data: fallbackData };
}
