import React from "react";
import { useBlogs } from "@hooks";
import { Div } from "@kits";
import { Head } from "@components/SEO";
import dynamic from "next/dynamic";
import { PageTitle } from "@components/Layout";
import { Blogs } from "@components/Blog";

const BlogPage = (props) => {
  const { data, isValidating, mutate, error } = useBlogs();

  return (
    <>
      <Head canonical="/blog" />
      <Div width="100%" py="3">
        <PageTitle title="blog.title" />
        <Blogs items={data.blogs} loading={!data.blogs} />
      </Div>
    </>
  );
};

export default BlogPage;
