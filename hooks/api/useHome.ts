import useSWR from "swr";
import endpoints from "@constants/endpoints";
import useSWRImmutable from "swr/immutable";

const useHome = () => {
  const swr = useSWRImmutable(endpoints.home);

  return swr;
};

export default useHome;
