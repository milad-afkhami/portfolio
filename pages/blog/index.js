import React from "react";
import { Div } from "@kits";
import { Head } from "@components/SEO";
import { PageTitle } from "@components/Layout";
import { Blogs } from "@components/Blog";
import { useBlogs } from "@hooks";

const BlogPage = (props) => {
  const { data, isValidating, mutate, error } = useBlogs();

  return (
    <>
      <Head canonical="/blog" />
      <Div width="100%" py="3">
        <PageTitle title="blog.title" />
        <Blogs items={data?.blogs} loading={!data?.blogs} />
      </Div>
    </>
  );
};

export default BlogPage;
