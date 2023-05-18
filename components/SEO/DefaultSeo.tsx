// #region imports
import { DefaultSeo as NextDefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import useTranslation from "@hooks/useTranslation";
import { appBaseURL } from "@configs/urls";
// #endregion

export default function DefaultSeo() {
  const router = useRouter();
  const { t } = useTranslation("common");
  const appTitle = t("seo.title.default");
  const defaultTitle = t("seo.title.default");
  const defaultDescription = t("seo.description.default");
  const titleTemplate = t("seo.title.template");

  return (
    <NextDefaultSeo
      defaultTitle={defaultTitle}
      description={defaultDescription}
      titleTemplate={titleTemplate}
      openGraph={{
        title: defaultTitle,
        description: defaultDescription,
        type: "website",
        locale: router.locale,
        url: appBaseURL,
        site_name: t("app.name"),
        profile: {
          firstName: "Milad",
          lastName: "Afkhami",
          gender: "Male",
        },
        images: [
          {
            url: "/images/logo-lg.png",
            width: 400,
            height: 400,
            alt: appTitle,
            type: "image/png",
          },
        ],
      }}
      twitter={{ cardType: "summary_large_image" }}
      // additionalMetaTags={[
      //   {
      //     name: "viewport",
      //     content: "width=device-width, initial-scale=1.0", // , maximum-scale=1.0, user-scalable=no
      //   },
      // ]}
    />
  );
}
