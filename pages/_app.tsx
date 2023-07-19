import { useEffect } from "react";
import "../index.css";
import Layout from "@components/Layout";
import DefaultSeo from "@components/SEO/DefaultSeo";
import ContextProviders from "@contexts/Providers";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "@_types/components";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // LanguageHelper.initialLanguageSetup();
  }, []);

  return (
    <>
      <DefaultSeo />
      <ContextProviders>
        <Layout {...Component.layoutConfig}>
          <Component {...pageProps} />
        </Layout>
      </ContextProviders>
    </>
  );
}

export default appWithTranslation(App);
