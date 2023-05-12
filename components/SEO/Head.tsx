import { appBaseURL } from "@config";
import { NextSeo } from "@components/SEO";
import { useRouter, useTranslation } from "@hooks";

/** @type {import("react").ComponentType<import("next-seo").NextSeoProps>} */


const Head = ({
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
  const titleTemplate = t("seo.title.template", { defaultValue: "%s" });

  return (
    <NextSeo
      title={_title}
      description={_description}
      titleTemplate={t("seo.title.template")}
      // defaultTitle="seo.title.default"
      openGraph={{
        title: titleTemplate.replace("%s", _title),
        // description: _description,
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

        ...additionalMetaTags,
      ]}
      // {...mobileAlternate}
      // {...languageAlternates}
      {...restProps}
    />
  );
};

            
                
            
            
            
            export default Head;