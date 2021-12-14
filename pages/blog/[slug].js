import React, { useEffect } from "react";
import { Breadcrumb, Div, Text } from "@kits";
import { useRouter } from "@hooks";
import { Head } from "@components/SEO";
import { MDXRemote } from "next-mdx-remote";
import dynamic from "next/dynamic";
import { BlogMeta, BlogSummary, BlogTitle } from "@components/Blog";
import { Http } from "@utils";

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

  useEffect(() => {
    Http.get({ url: "/api/blogget", proxyLayer: false });
    Http.get({ url: "/blogget", proxyLayer: false });
  }, []);

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
          {/* <MDXRemote {...source} components={components} /> */}
        </Div>
      </Div>
    </>
  );
}

// export const getStaticProps = async ({ params }) => {
//   const getBlogDetail = require("@api/blogget").default;

//   const result = await getBlogDetail(params);

//   return {
//     props: {
//       blog: result.blog,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   // const blogsList = require("@api/bloglist").default;

//   // #todo change data/blog directory folder structure to [blog-slug]/[locale].mdx in order to translate blogs.

//   // const result = await blogsList();

//   // const paths = result.blogs.map(({ slug }) => ({ params: { slug } }));

//   return {
//     paths: [{ params: { slug: "hello-world" } }],
//     fallback: false,
//   };
// };
