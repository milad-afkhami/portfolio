import React from "react";
import { Breadcrumb, Div, Icon } from "@kits";
import { useEffect, useToggle, useRouter, useBlog } from "@hooks";
import { Head } from "@components/SEO";
import { __get, __omit, __pick } from "@utils";
import Error from "../_error";
import { BlogServices } from "@services";
import { INTERVALS } from "@constants";

export default function BlogPage(props) {
  const router = useRouter();

  const slug = router.query.slug;

  const {
    data: { blog },
    error,
  } = useBlog({
    slug,
    fallbackData: { blog: props.blog },
  });

  if (error || props.error) {
    const _error = error || props.error;
    return (
      <Error
        {..._error}
        statusCode={_error?.data?.code}
        title={_error?.data?.message}
      />
    );
  }

  return (
    <>
      <Head title={blog.title} description={""} canonical={`/blog/${slug}`} />
      <Div width="100%" py="3">
        <Breadcrumb
          routes={[
            { title: "home", link: "/" },
            { title: "blog.title", link: "/blog" },
            { title: blog.title, link: `/blog/${slug}` },
          ]}
        />
        <Div props></Div>
      </Div>
    </>
  );
}

export const getStaticProps = async ({ params, ...rest }) => {
  const response = await BlogServices.getDetail(params.slug, {
    resolveAnyway: true,
    serializableError: true,
  });
  console.log({ response });
  return { props: response, revalidate: INTERVALS.A_DAY };
};

export const getStaticPaths = async ({ defaultLocale, locales }) => {
  const blogs = await BlogServices.getPriors();
  return {
    paths: blogs.map((blog) => ({ params: { slug: blog } })),
    fallback: false,
  };
};
