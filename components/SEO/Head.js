import React from "react";
import { appBaseURL } from "@config";
import { NextSeo, NextSeoProps } from "@components/SEO";
import { useRouter, useT, useTranslation } from "@hooks";

interface Props extends NextSeoProps {
  keywords: String;
}

export const Head = ({
  canonical = "",
  keywords = "",
  additionalMetaTags = [],
  title,
  description,
  openGraph = {},
  twitter = {},
  ...restProps
}: NextSeoProps) => {
  const _canonical = "www." + appBaseURL + canonical;
  const router = useRouter();

  const t = useTranslation().t;

  const mobileDomain = _canonical.replace("www.", "www.m.");

  // const mobileAlternate = { media: "only screen and (max-width: 720px)", href: mobileDomain };

  const languageAlternates = [
    { hreflang: "x-default", href: _canonical },
    { hreflang: "fa", href: _canonical.replace("www.", "www.fa.") },
  ];

  return (
    <NextSeo
      title={t(title)}
      description={t(description)}
      // titleTemplate="Lapert | %s"
      // defaultTitle="Lapert"
      openGraph={{
        title,
        description,
        url: _canonical,
        type: "website",
        locale: router.locale,
        site_name: t("app.title"),
        ...openGraph,
      }}
      twitter={{
        cardType: "summary_large_image",
        // summary, summary_large_image, app, or player
        // handle: t("app.username"),
        site: t("app.username"),
        ...twitter,
      }}
      canonical={_canonical}
      additionalMetaTags={[
        ...additionalMetaTags,
        ...(keywords?.length ? [{ name: "keyword", content: keywords }] : []),
      ]}
      // {...mobileAlternate}
      {...languageAlternates}
      {...restProps}
    />
  );
};
