import Div from "@kits/Div";
import { Head } from "@components/SEO";
import PageTitle from "@components/Layout/Title/PageTitle";
import { Blogs } from "@components/Blog";
import { BlogServices } from "@services";

const BlogPage = (props) => {
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
};

export async function getStaticProps() {
  const blogs = await BlogServices.getList();

  return { props: { blogs } };
}

export default BlogPage;
