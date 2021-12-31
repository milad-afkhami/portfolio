import React from "react";
import { Breadcrumb, Code, Div, Text } from "@kits";
import { useRouter, useTranslation } from "@hooks";
import { BlogJsonLd, Head } from "@components/SEO";
import { MDXRemote } from "next-mdx-remote";
import dynamic from "next/dynamic";
import { BlogMeta, BlogSummary, BlogTitle } from "@components/Blog";
import { BlogServices } from "@services";
import { MarkdownWrapper } from "@components/Markdown";

const components = {
  Image: dynamic(() => import("@kits").then((module) => module.Image)),
  Div,
  Text,
  Code,
};

export default function BlogPage(props) {
  const router = useRouter();
  const slug = router.query.slug;
  const { title, summary, image, publishedAt, readingTime, category } =
    props?.blog?.frontMatter || {};
  const source = props?.blog?.source || {};

  const t = useTranslation().t;

  const canonical = `/blog/${slug}`;
  return (
    <>
      <Head
        title={title}
        description={summary}
        openGraph={{ images: [image] }}
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
