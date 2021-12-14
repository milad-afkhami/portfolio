import React from "react";
import { Breadcrumb, Div, Text } from "@kits";
import { useRouter } from "@hooks";
import { Head } from "@components/SEO";
import components from "components/MDXComponents";
import { MDXRemote } from "next-mdx-remote";
import dynamic from "next/dynamic";
import { BlogMeta, BlogSummary, BlogTitle } from "@components/Blog";

import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogs } from ".contentlayer/data";

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

  const Component = useMDXComponent(blog.body.code);

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
  const blog = allBlogs.find((blog) => blog.slug === params.slug);

  return {
    props: {
      blog,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = allBlogs.map((p) => ({ params: { slug: p.slug } }));

  return {
    paths,
    fallback: false,
  };
};
