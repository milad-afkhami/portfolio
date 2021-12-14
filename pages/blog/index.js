import React from "react";
import { Div } from "@kits";
import { Head } from "@components/SEO";
import { PageTitle } from "@components/Layout";
import { Blogs } from "@components/Blog";
// import { useBlogs } from "@hooks";
import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";

export default function BlogPage(props) {
  // const { data, isValidating, mutate, error } = useBlogs();

  return (
    <>
      <Head canonical="/blog" />
      <Div width="100%" py="3">
        <PageTitle title="blog.title" />
        <Blogs items={props?.blogs} loading={!props?.blogs} />
      </Div>
    </>
  );
}

export function getStaticProps() {
  const BLOGS_PATH = path.join(process.cwd(), "data", "blog");

  const blogFilePaths = fs
    .readdirSync(BLOGS_PATH)
    .filter((path) => /\.mdx?$/.test(path));

  const blogs = blogFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(BLOGS_PATH, filePath));
    const {
      // content,
      data,
    } = matter(source);

    return {
      // content,
      ...data,
      slug: filePath.replace(/\.mdx?$/, ""),
    };
  });

  return { props: { blogs } };
}
