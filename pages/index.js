import React from "react";
import { useHome } from "@hooks";
import { Div } from "@kits";
// import { ExploreView } from "@components/Explore";
import { Head } from "@components/SEO";
import { FeaturedPosts, ResumeProfile } from "@components/Resume";
import { posts } from "mock";

const Home = (props) => {
  const { data, isValidating, mutate, error } = useHome();

  return (
    <>
      <Head canonical="/" />
      <Div width="100%" mx="0" py="4" px="3" responsive={{ md: { px: 4 } }}>
        <ResumeProfile />
        <FeaturedPosts posts={posts} />
      </Div>
    </>
  );
};

export default Home;
