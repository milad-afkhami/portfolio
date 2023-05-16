import Http from "@utils/Http";

type GetInfiniteKey = (
  url: string,
  pageKey: string
) => (pageIndex: number, previousPageData: []) => null | string;

export default class SWRUtil {
  static async fetcher(url: string, options: string) {
    const response = await Http.request({
      // baseURL: "/api/proxy",
      url,
      ...(options ? JSON.parse(options) : {}),
    });
    return response.data;
  }

  static getInfiniteKey: GetInfiniteKey = function (url, pageKey) {
    return (pageIndex, previousPageData) => {
      if (!url || (previousPageData && !previousPageData.length)) return null;
      if (pageIndex === 0) return url;
      const urlHasQueries = url.includes("?");
      const pageQuery = `${pageKey || "page"}=${pageIndex + 1}`;
      return url + (urlHasQueries ? "&" : "?") + pageQuery;
    };
  };

  // static serialize(useSWRNext) {
  //   return (key, fetcher, config) => {
  //     const serializedKey = Array.isArray(key) ? JSON.stringify(key) : key;

  //     return useSWRNext(
  //       serializedKey,
  //       (k:string) => fetcher(...JSON.parse(k)),
  //       config
  //     );
  //   };
  // }
}
