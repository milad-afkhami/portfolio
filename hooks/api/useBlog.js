import useSWR from "swr";
import { endpoints } from "@constants";
import { __compact } from "@utils";

export function useBlog({ idc, fallbackData }: IApiHook) {
  const swr = useSWR(endpoints.blog + `?idc=${idc}`, {
    revalidateOnMount: true,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    fallbackData,
  });

  return swr;
}
