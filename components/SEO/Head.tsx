import { NextSeo, type NextSeoProps } from "next-seo";
import { useTranslation } from "next-i18next";
import { appBaseURL } from "@configs/urls";

export interface HeadProps extends NextSeoProps {
  page?: string;
  keywords?: string;
}

const Head = ({
  canonical = "",
  keywords = "",
  additionalMetaTags = [],
  additionalLinkTags = [],
  page = "",
  title,
  description,
  openGraph = {},
  ...restProps
}: HeadProps) => {
  const [t] = useTranslation();
  const _title = title ?? t(`seo.title.${page}`, { defaultValue: "" });
  const _description =
    description ?? t(`seo.description.${page}`, { defaultValue: "" });
  const _canonical = canonical
    ? `${appBaseURL}${canonical === "/" ? "" : canonical}`
    : undefined;

  return (
    <NextSeo
      title={_title}
      description={_description}
      // default title and description are being set in DefaultSeo component
      openGraph={{
        title: _title,
        description: _description,
        url: _canonical,
        // other defaults are being set in DefaultSeo component
        ...openGraph,
      }}
      canonical={_canonical}
      additionalMetaTags={[
        ...(keywords.length ? [{ name: "keyword", content: keywords }] : []),
        ...additionalMetaTags,
      ]}
      additionalLinkTags={additionalLinkTags}
      // {...mobileAlternate}
      // {...languageAlternates}
      {...restProps}
    />
  );
};

export default Head;
