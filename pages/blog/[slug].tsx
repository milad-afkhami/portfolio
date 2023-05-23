import Div from "@kits/Div";
import Breadcrumb from "@kits/Breadcrumb";
import { useRouter } from "next/router";
import Head from "@components/SEO/Head";
import { ArticleJsonLd } from "next-seo";
import Markdown from "@components/Markdown";
import BlogSummary from "@components/Blog/Summary";
import BlogMeta from "@components/Blog/Meta";
import BlogBanner from "@components/Blog/Banner";
import useTranslation from "@hooks/useTranslation";
import I18nHelper from "@helpers/i18n";
import BlogServices from "@services/blog";
import { appBaseURL } from "@configs/urls";
import type {
  GetStaticProps,
  GetStaticPaths,
  GetStaticPathsResult,
} from "next";
import type { MDXResult, PageComponent } from "@_types/components";

interface BlogPageProps {
  blog: MDXResult<IBlog>;
}

const BlogPage: PageComponent<BlogPageProps> = (props) => {
  const router = useRouter();
  const { slug } = router.query;
  const { title, summary, image, banner, publishedAt, readingTime, category } =
    props?.blog?.frontMatter || {};
  const source = props?.blog?.source || {};

  const { t } = useTranslation();
  const { t: layoutT } = useTranslation("layout");

  const canonical = `/blog/${slug}`;
  return (
    <>
      <Head
        title={title}
        description={summary}
        openGraph={{
          images: [
            {
              url: appBaseURL + image,
              alt: title,
              type: "image/jpeg",
            },
          ],
        }}
        twitter={{ cardType: "summary_large_image" }}
        canonical={canonical}
      />
      <ArticleJsonLd
        type="Blog"
        url={canonical}
        title={title}
        description={summary}
        images={[appBaseURL + image]}
        datePublished={publishedAt}
        authorName={t("profile.name")}
      />
      <Div width="100%" py="3">
        <Breadcrumb
          routes={[
            { title: layoutT("header.menu.home"), link: "/" },
            { title: layoutT("header.menu.blog"), link: "/blog" },
            { title, link: canonical },
          ]}
        />
        <Div>
          {/* <PageTitle title={title} /> */}
          <BlogSummary summary={summary} />
          <BlogMeta
            category={category}
            readingTime={readingTime}
            publishedAt={publishedAt}
          />
          <BlogBanner banner={banner || image} title={title} />
          {/* className=" line-numbers" */}
          <Markdown source={source} />
        </Div>
      </Div>
    </>
  );
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async ({
  params,
  locale,
}) => {
  const [t9n, blog] = await Promise.all([
    I18nHelper.ssrT9n(locale, "layout"),
    BlogServices.getDetail(params?.slug as string),
  ]);

  return { props: { ...t9n, blog } };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const blogs = await BlogServices.getList();

  const paths = (locales || []).reduce(
    (acc, locale) => [
      ...acc,
      ...(blogs?.map(({ slug }) => ({ params: { slug }, locale })) || []),
    ],
    [] as GetStaticPathsResult["paths"]
  );

  return {
    paths,
    fallback: false,
  };
};

export default BlogPage;
