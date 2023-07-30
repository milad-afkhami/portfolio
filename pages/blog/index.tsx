import { Div } from "style-wiz";
import Head from "@components/SEO/Head";
import PageTitle from "@components/Layout/Title/Page";
import BlogCards from "@components/Cards/Blog";
import BlogServices from "@services/blog";
import I18nHelper from "@helpers/i18n";
import type { GetStaticProps } from "next";
import type { PageComponent } from "@_types/components";

interface BlogsPageProps {
  blogs: IBlog[];
}

const BlogsPage: PageComponent<BlogsPageProps> = (props) => {
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

export const getStaticProps: GetStaticProps<BlogsPageProps> = async ({
  locale,
}) => {
  const [t9n, blogs] = await Promise.all([
    I18nHelper.ssrT9n(locale, "layout"),
    BlogServices.getList(),
  ]);

  return { props: { ...t9n, blogs } };
};

export default BlogsPage;
