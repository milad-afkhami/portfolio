import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  type DocumentContext,
  type DocumentInitialProps as NextDocumentInitialProps,
} from "next/document";
import FavIcons from "@components/SEO/FavIcons";
import { extractCss } from "goober";
import { extractCss as styleWizExtractCss } from "style-wiz";
import { brandColor } from "@configs/themes";

type Props = { css: string };
interface DocumentInitialProps extends NextDocumentInitialProps, Props {}

export default class Document extends NextDocument<Props> {
  static async getInitialProps({
    renderPage,
  }: DocumentContext): Promise<DocumentInitialProps> {
    const page = await renderPage();
    const css = `${extractCss()} ${styleWizExtractCss()}`;

    return { ...page, css };
  }

  render() {
    return (
      <Html
      // lang="en" dir="ltr"
      >
        <Head>
          <style
            id="_goober"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: ` ${this.props.css}` }}
          />
          <FavIcons />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content={brandColor} />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content={brandColor} />

          {/* fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <noscript>You need to enable JavaScript to run this app.</noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
