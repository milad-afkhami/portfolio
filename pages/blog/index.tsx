import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import PageTitle from "@components/Layout/Title/Page";
import BlogCards from "@components/Cards/Blogs";
import BlogServices from "@services/blog";

const BlogPage = (props) => {
  // const { data, isValidating, mutate, error } = useBlogs();

  return (
    <>
      <Head canonical="/blog" />
      <Div width="100%" py="3">
        <PageTitle title="blog.title" />
        <BlogCards items={props?.blogs} loading={!props?.blogs} />
      </Div>
    </>
  );
};

export async function getStaticProps() {
  const blogs = await BlogServices.getList();

  return { props: { blogs } };
}

export default BlogPage;
