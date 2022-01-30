import React from "react";
import { appBaseURL } from "@config";
import { NextSeo } from "@components/SEO";
import { useRouter, useTranslation } from "@hooks";

/**
 * @type {import("react").ComponentType<import("next-seo").NextSeoProps>}
 */
export const Head = ({
  canonical = "",
  keywords = "",
  additionalMetaTags = [],
  page,
  title,
  description,
  openGraph = {},
  twitter = {},
  ...restProps
}) => {
  const _canonical = appBaseURL + canonical;
  const router = useRouter();

  const t = useTranslation().t;

  // const mobileDomain = _canonical.replace("www.", "www.m.");
  // const mobileAlternate = { media: "only screen and (max-width: 720px)", href: mobileDomain };
  // const languageAlternates = [
  //   { hreflang: "x-default", href: _canonical },
  //   { hreflang: "fa", href: _canonical.replace("www.", "www.fa.") },
  // ];

  const _title = title || t(`seo.title.${page}`, { defaultValue: "" });
  const _description =
    description ||
    t(`seo.description.${page}`, {
      defaultValue: "",
    });

  return (
    <NextSeo
      title={_title}
      description={_description}
      titleTemplate={t("seo.title.template")}
      // defaultTitle="seo.title.default"
      openGraph={{
        title: _title,
        description: _description,
        images: [
          {
            url: "/images/logo-lg.png",
            width: 400,
            height: 400,
            alt: t("app.title"),
            type: "image/png",
          },
        ],
        url: _canonical,
        type: "website",
        locale: router.locale,
        site_name: t("app.title"),
        ...openGraph,
      }}
      twitter={{
        cardType: "summary",
        // summary, summary_large_image, app, or player
        handle: t("app.username"),
        // site: t("app.username"),
        url: _canonical,
        ...twitter,
      }}
      canonical={_canonical}
      additionalMetaTags={[
        ...(keywords?.length ? [{ name: "keyword", content: keywords }] : []),
        { property: "twitter:title", content: _title },
        { property: "twitter:description", content: _description },
        ...(openGraph?.images?.[0]?.url
          ? [
              {
                property: "twitter:image:src",
                content: openGraph.images[0].url,
              },
              {
                property: "twitter:image:width",
                content: openGraph.images[0].width || "400",
              },
              {
                property: "twitter:image:height",
                content: openGraph.images[0].height || "400",
              },
            ]
          : []),
        ...additionalMetaTags,
      ]}
      // {...mobileAlternate}
      // {...languageAlternates}
      {...restProps}
    />
  );
};
