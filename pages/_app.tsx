/* eslint-disable react/jsx-props-no-spreading */
import { createElement, useEffect } from "react";
import "../index.css";
import Layout from "@components/Layout";
import DefaultSeo from "@components/SEO/DefaultSeo";
import ContextProviders from "@contexts/Providers";
import { appWithTranslation } from "next-i18next";
import { setup } from "goober";
import { prefix } from "goober/prefixer";
import shouldForwardProp from "@helpers/shouldForwardProp";
import type { AppProps } from "@_types/components";

// setting up goober
setup(createElement, prefix, undefined, shouldForwardProp);

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
