import Div from "@kits/Div";
import Breadcrumb from "@kits/Breadcrumb";
import { useRouter } from "next/router";
import useTranslation from "@hooks/useTranslation";
import Head from "@components/SEO/Head";
import { ArticleJsonLd } from "next-seo";
import MDXRemote from "@components/Markdown/MDXRemote";
import BlogTitle from "@components/Blog/Title";
import BlogSummary from "@components/Blog/Summary";
import BlogMeta from "@components/Blog/Meta";
import BlogBanner from "@components/Blog/Banner";
import BlogServices from "@services/blog";
import MarkdownWrapper from "@components/Markdown/Wrapper";
import { appBaseURL } from "@configs/urls";
import type { FC } from "react";
import type {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
} from "next";
import type { MDXResult } from "@_types/components";

interface BlogPageProps {
  blog: MDXResult<IBlog>;
}

const BlogPage: FC<BlogPageProps> = (props) => {
  const router = useRouter();
  const { slug } = router.query;
  const { title, summary, image, banner, publishedAt, readingTime, category } =
    props?.blog?.frontMatter || {};
  const source = props?.blog?.source || {};

  const { t } = useTranslation();

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
        authorName={t("home.profile.name")}
      />
      <Div width="100%" py="3">
        <Breadcrumb
          routes={[
            { title: "home.title", link: "/" },
            { title: "blog.title", link: "/blog" },
            { title, link: canonical },
          ]}
        />
        <Div>
          <BlogTitle title={title} />
          <BlogSummary summary={summary} />
          <BlogMeta
            category={category}
            readingTime={readingTime}
            publishedAt={publishedAt}
          />
          <BlogBanner banner={banner || image} title={title} />
          {/* className=" line-numbers" */}
          <MarkdownWrapper>
            <MDXRemote {...source} />
          </MarkdownWrapper>
        </Div>
      </Div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blog = await BlogServices.getDetail(params?.slug as string);

  return { props: { blog } };
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
