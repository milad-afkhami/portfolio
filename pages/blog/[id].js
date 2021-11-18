import React from "react";
import { Breadcrumb, Div, Icon } from "@kits";
import { useEffect, useToggle, useRouter, useBlog } from "@hooks";
import { Head } from "@components/SEO";
import { __get, __omit, __pick } from "@utils";
import {} from "@components/Product";
import Error from "../_error";
import { BlogServices } from "@services";

export default function ProductPage(props) {
  const router = useRouter();

  const id = router.query.id;

  const {
    data: { blog },
    error,
  } = useBlog({
    id,
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
      <Head title={blog.name} description={""} canonical={`/blog/${idc}`} />
      <Div width="100%" px="3">
        <Breadcrumb
          routes={[
            { title: "home.home", link: "/", href: "/" },
            {
              title: blog.name,
              link: `/blog/${id}`,
              href: `/blog/[slug]`,
            },
          ]}
        />
      </Div>
    </>
  );
}

export const getStaticProps = async ({ params, ...rest }) => {
  const response = await BlogServices.getDetail(params.idc, {
    resolveAnyway: true,
    serializableError: true,
  });
  return { props: response, revalidate: 10 };
};

export const getStaticPaths = async ({ defaultLocale, locales }) => {
  const blogs = await BlogServices.getPriors(100);
  return {
    paths: blogs.map((blog) => ({ params: { idc: blog } })),
    fallback: "blocking",
  };
};
