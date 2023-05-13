import Div from "@kits/Div";
import Breadcrumb from "@kits/Breadcrumb";
import { useRouter } from "next/router";
import useTranslation from "@hooks/useTranslation";
import Head from "@components/SEO/Head";
import { ArticleJsonLd } from "next-seo";
import MDXRemote from "@components/Markdown/MDXRemote";
import BlogTitle from "@components/Blog/Title";
import BlogSummary from "@components/Blog/Summary";
import BlogMeta from "@components/Blog/Meta";
import BlogBanner from "@components/Blog/Banner";
import BlogServices from "@services/blog";
import MarkdownWrapper from "@components/Markdown/Wrapper";
import { appBaseURL } from "@config";

const BlogPage = (props) => {
  const router = useRouter();
  const { slug } = router.query;
  const { title, summary, image, banner, publishedAt, readingTime, category } =
    props?.blog?.frontMatter || {};
  const source = props?.blog?.source || {};

  const { t } = useTranslation();

  const canonical = `/blog/${slug}`;
  return (
    <>
      <Head
        title={title}
        description={summary}
        openGraph={{
          images: [
            {
              url: appBaseURL + image,
              alt: title,
              type: "image/jpeg",
            },
          ],
        }}
        twitter={{ cardType: "summary_large_image" }}
        canonical={canonical}
      />
      <ArticleJsonLd
        type="Blog"
        url={canonical}
        title={title}
        description={summary}
        images={[appBaseURL + image]}
        datePublished={publishedAt}
        authorName={t("home.profile.name")}
      />
      <Div width="100%" py="3">
        <Breadcrumb
          routes={[
            { title: "home.title", link: "/" },
            { title: "blog.title", link: "/blog" },
            { title, link: canonical },
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
          <BlogBanner banner={banner || image} alt={title} />
          {/* className=" line-numbers" */}
          <MarkdownWrapper>
            <MDXRemote {...source} />
          </MarkdownWrapper>
        </Div>
      </Div>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const result = await BlogServices.getDetail(params.slug);

  return {
    props: { blog: result.blog },
  };
};

export const getStaticPaths = async ({ locales }) => {
  const blogs = await BlogServices.getList();

  const paths = blogs.reduce((acc, { slug }) => {
    // locales.forEach((locale) => {
    //   acc.push({ params: { slug }, locale });
    // });
    acc.push({ params: { slug } });

    return acc;
  }, []);

  return {
    paths,
    fallback: false,
  };
};

export default BlogPage;
