import React from "react";
import "../index.css";
import { Layout } from "@components/Layout";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import { defaultTheme, GlobalStyles } from "@stylesheets";
import { THEMES } from "@constants";
import { swrFetcher, __pick, __values } from "@utils";
import { DefaultSeo } from "@components/SEO";
import { nProgress, enhanceStringPrototype, LanguageHelper } from "@helpers";
import { useEffect, useT } from "@hooks";
import { ToastContainer, Slide } from "react-toastify";
import "@material/react-text-field/dist/text-field.css";
import "react-toastify/dist/ReactToastify.min.css";
// import "swiper/swiper.min.css";
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps, ...rest }) {
  const router = useRouter();

  enhanceStringPrototype();

  useEffect(() => {
    // calling session start for the first and only time.
    // session.mutate();
    // .then(() => AnalyticsServices.viewPage(router.asPath));

    LanguageHelper.initialLanguageSetup();

    router.events.on("routeChangeStart", nProgress.start);
    router.events.on("routeChangeComplete", nProgress.done);
    router.events.on("routeChangeError", nProgress.done);
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
        themes={__values(THEMES)}
        defaultTheme={defaultTheme}
        enableSystem={false}
      >
        <DefaultSeo
          defaultTitle={useT("app.title")}
          description={useT("app.description")}
          openGraph={{
            type: "website",
            locale: router.locale,
            url: "https://www.url.ie/",
            site_name: useT("app.name"),
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

// https://nextjs.org/docs/advanced-features/custom-app
export default MyApp;
