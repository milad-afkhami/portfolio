import useSWR from "swr";
import { endpoints } from "@constants";
import { useSWRImmutable } from "@hooks";

export function useHome() {
  const swr = useSWRImmutable(endpoints.home);

  return swr;
}

// https://swr.vercel.app/docs/options#options
