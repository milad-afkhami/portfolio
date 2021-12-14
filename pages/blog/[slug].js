import React from "react";
import { Breadcrumb, Div, Text } from "@kits";
import { useRouter } from "@hooks";
import { Head } from "@components/SEO";
import { MDXRemote } from "next-mdx-remote";
import dynamic from "next/dynamic";
import { BlogMeta, BlogSummary, BlogTitle } from "@components/Blog";
import matter from "gray-matter";
import * as fs from "fs";
import * as path from "path";
import { serialize } from "next-mdx-remote/serialize";

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
  const BLOGS_PATH = path.join(process.cwd(), "data", "blog");

  const blogFilePath = path.join(BLOGS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(blogFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      blog: {
        source: mdxSource,
        frontMatter: data,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const BLOGS_PATH = path.join(process.cwd(), "data", "blog");

  const blogFilePaths = fs
    .readdirSync(BLOGS_PATH)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path));

  const paths = blogFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
