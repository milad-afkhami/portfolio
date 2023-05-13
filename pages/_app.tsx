import "../index.css";
import Layout from "@components/Layout/Layout";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import { defaultTheme } from "@stylesheets/themes";
import GlobalStyles from "@stylesheets/global";
import THEMES from "@constants/themes";
import swrFetcher from "@utils/swrFetcher";
import __pick from "lodash-es/pick";
import { DefaultSeo } from "@components/SEO";
import enhanceStringPrototype from "@helpers/enhanceStringPrototype";
import useTranslation from "@hooks/useTranslation";
import { useEffect } from "react";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps, ...rest }) {
  const router = useRouter();
  const t = useTranslation().t;

  enhanceStringPrototype();

  useEffect(() => {
    // LanguageHelper.initialLanguageSetup();
    // router.events.on("routeChangeStart", nProgress.start);
    // router.events.on("routeChangeComplete", nProgress.done);
    // router.events.on("routeChangeError", nProgress.done);
  }, []);

  return (
    <SWRConfig value={{ fetcher: swrFetcher }}>
      <GlobalStyles />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        theme="colored"
        transition={Slide}
      />
      <ThemeProvider
        themes={Object.values(THEMES)}
        defaultTheme={defaultTheme}
        enableSystem={false}
      >
        <DefaultSeo
          defaultTitle={t("seo.title.default")}
          description={t("seo.description.default")}
          openGraph={{
            type: "website",
            locale: router.locale,
            url: "https://www.url.ie/",
            site_name: t("app.name"),
            profile: {
              firstName: "Milad",
              lastName: "Afkhami",
              gender: "Male",
            },
          }}
          twitter={{
            // handle: "@handle",
            // site: "@site",
            cardType: "summary_large_image",
            // cardType: "player",
          }}
        />
        <Layout
          {...__pick(Component, [
            "hideHeader",
            "hideFooter",
            "transparentHeader",
          ])}
        >
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SWRConfig>
  );
}

export default MyApp;
