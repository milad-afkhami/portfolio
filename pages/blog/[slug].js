import React from "react";
import { Breadcrumb, Div, Text } from "@kits";
import { useRouter } from "@hooks";
import { Head } from "@components/SEO";
import { MDXRemote } from "next-mdx-remote";
import dynamic from "next/dynamic";
import { BlogMeta, BlogSummary, BlogTitle } from "@components/Blog";
import { BlogServices } from "@services";

const components = {
  Image: dynamic(() => import("@kits").then((module) => module.Image)),
  Div,
  Text,
};

export default function BlogPage(props) {
  const router = useRouter();
  const slug = router.query.slug;
  const { title, summary, publishedAt, readingTime, category } =
    props?.blog?.frontMatter || {};
  const source = props?.blog?.source || {};

  return (
    <>
      <Head title={title} description={summary} canonical={`/blog/${slug}`} />
      <Div width="100%" py="3">
        <Breadcrumb
          routes={[
            { title: "home", link: "/" },
            { title: "blog.title", link: "/blog" },
            { title, link: `/blog/${slug}` },
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
          <MDXRemote {...source} components={components} />
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
