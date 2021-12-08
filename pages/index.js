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
import { posts } from "mock";
import dynamic from "next/dynamic";

const Home = (props) => {
  const { data, isValidating, mutate, error } = useHome();

  return (
    <>
      <Head canonical="/" />
      <Div width="100%" py="3">
        <ResumeProfile />
        <FeaturedPosts />
        <ResumeProjects />
        <ResumeContact />
      </Div>
    </>
  );
};

export default Home;
