import xss from "xss";

type CreateMarkup = (
  data: string,
  options?: { whiteList: NonNullable<Parameters<typeof xss>[1]>["whiteList"] }
) => { __html: ReturnType<typeof xss> };

/** Sanitizes the markup passed to it, by using a third party library and also prepares the markup for passing it to `dangerouslySetInnerHTML` attribute from `react` */
const createMarkup: CreateMarkup = (data, options) => ({
  __html: xss(data, { ...options }),
});

export default createMarkup;
