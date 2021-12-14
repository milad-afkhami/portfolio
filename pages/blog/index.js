import React from "react";
import { Div } from "@kits";
import { Head } from "@components/SEO";
import { PageTitle } from "@components/Layout";
import { Blogs } from "@components/Blog";
// server imports
import { BlogServices } from "@services";

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

export async function getStaticProps() {
  const blogs = await BlogServices.getList();

  return { props: { blogs } };
}
