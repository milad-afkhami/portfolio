import React from "react";
import { useHome } from "@hooks";
import { Div } from "@kits";
// import { ExploreView } from "@components/Explore";
import { Head } from "@components/SEO";
import {
  ResumeContact,
  ResumeProfile,
  ResumeProjects,
} from "@components/Resume";
import { posts } from "mock";
import dynamic from "next/dynamic";

const FeaturedPosts = dynamic(() =>
  import("@components/Resume").then((mod) => mod.FeaturedPosts)
);

const Home = (props) => {
  const { data, isValidating, mutate, error } = useHome();

  return (
    <>
      <Head canonical="/" />
      <Div width="100%" py="3">
        <ResumeProfile />
        <FeaturedPosts posts={posts} />
        <ResumeProjects />
        <ResumeContact />
      </Div>
    </>
  );
};

export default Home;
