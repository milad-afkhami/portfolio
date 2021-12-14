import React from "react";
import { useHome } from "@hooks";
import { Div } from "@kits";
import { Head } from "@components/SEO";
import {
  ResumeProfile,
  FeaturedPosts,
  ResumeProjects,
  ResumeContact,
} from "@components/Resume";
import { posts } from "mock";
import dynamic from "next/dynamic";
import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";

export default function Home(props) {
  const { data, isValidating, mutate, error } = useHome();

  return (
    <>
      <Head canonical="/" />
      <Div width="100%" py="3">
        <ResumeProfile />
        <FeaturedPosts posts={props.blogs} />
        <ResumeProjects />
        <ResumeContact />
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
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { blogs } };
}
