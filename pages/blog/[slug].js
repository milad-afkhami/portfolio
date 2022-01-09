import React, { ComponentType } from "react";
import { Div, Image, Text, Breadcrumb } from "@kits";
import { useRouter, useTranslation } from "@hooks";
import { Head, BlogJsonLd } from "@components/SEO";
import { MDXRemote } from "next-mdx-remote";
import dynamic from "next/dynamic";
import { BlogTitle, BlogSummary, BlogMeta, BlogBanner } from "@components/Blog";
import { BlogServices } from "@services";
import { MarkdownWrapper } from "@components/Markdown";
import { appBaseURL } from "@config";

const Code: ComponentType = dynamic(
  () => import("@kits").then((module) => module.Code),
  { ssr: false }
);

const components = { Image, Div, Text, Code };

export default function BlogPage(props) {
  const router = useRouter();
  const slug = router.query.slug;
  const { title, summary, image, banner, publishedAt, readingTime, category } =
    props?.blog?.frontMatter || {};
  const source = props?.blog?.source || {};

  const t = useTranslation().t;

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
        twitter={{
          cardType: "summary_large_image",
        }}
        canonical={canonical}
      />
      <BlogJsonLd
        url={canonical}
        title={title}
        description={summary}
        images={[image]}
        datePublished={publishedAt}
        // dateModified={publishedAt}
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
          <BlogBanner banner={banner || image} alt={title} />
          <MarkdownWrapper>
            <MDXRemote {...source} components={components} />
          </MarkdownWrapper>
        </Div>
      </Div>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const result = await BlogServices.getDetail(params.slug);

  return {
    props: { blog: result.blog },
  };
};

export const getStaticPaths = async ({ locales }) => {
  const blogs = await BlogServices.getList();

  const paths = blogs.reduce((acc, { slug }) => {
    locales.forEach((locale) => {
      acc.push({ params: { slug }, locale });
    });

    return acc;
  }, []);

  return {
    paths,
    fallback: false,
  };
};
