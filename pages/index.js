import React from "react";
import { useHome } from "@hooks";
import { Div } from "@kits";
import { Head } from "@components/SEO";
import { Profile, FeaturedPosts, Projects } from "@components/Home";
import { Contact } from "@components/Contact";
import { BlogServices } from "@services";

export default function Home(props) {
  const { data, isValidating, mutate, error } = useHome();

  return (
    <>
      <Head canonical="/" />
      <Div width="100%" py="3">
        <Profile />
        <FeaturedPosts posts={props.blogs} />
        <Projects />
        <Contact />
      </Div>
    </>
  );
}

export async function getStaticProps() {
  const blogs = await BlogServices.getList();

  return { props: { blogs } };
}
