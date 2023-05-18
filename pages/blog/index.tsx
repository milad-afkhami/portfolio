import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import PageTitle from "@components/Layout/Title/Page";
import BlogCards from "@components/Cards/Blog";
import BlogServices from "@services/blog";
import type { FC } from "react";

interface BlogsPageProps {
  blogs: Array<IBlog>;
}

const BlogsPage: FC<BlogsPageProps> = (props) => {
  const { blogs } = props;

  return (
    <>
      <Head canonical="/blog" />
      <Div width="100%" py="3">
        <PageTitle title="blog.title" />
        <BlogCards items={blogs} />
      </Div>
    </>
  );
};

export async function getStaticProps() {
  const blogs = await BlogServices.getList();

  return { props: { blogs } };
}

export default BlogsPage;
