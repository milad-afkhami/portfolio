import React from "react";
import { useHome } from "@hooks";
import { Div } from "@kits";
import { Head } from "@components/SEO";
import {
  ResumeProfile,
  FeaturedPosts,
  ResumeProjects,
  ResumeContact,
} from "@components/Resume";
import dynamic from "next/dynamic";
import { BlogServices } from "@services";

export default function Home(props) {
  const { data, isValidating, mutate, error } = useHome();

  return (
    <>
      <Head canonical="/" />
      <Div width="100%" py="3">
        <ResumeProfile />
        <FeaturedPosts posts={props.blogs} />
        <ResumeProjects />
        <ResumeContact />
      </Div>
    </>
  );
}

export async function getStaticProps() {
  const blogs = await BlogServices.getList();

  return { props: { blogs } };
}
