import React from "react";
import { useHome } from "@hooks";
import { Div } from "@kits";
// import { ExploreView } from "@components/Explore";
import { Head } from "@components/SEO";
import { ResumeProfile } from "@components/Resume";

const Home = (props) => {
  const { data, isValidating, mutate, error } = useHome();

  return (
    <>
      <Head canonical="/" />
      <Div width="100%" mx="0" py="4" px="3" responsive={{ md: { px: 4 } }}>
        <ResumeProfile />
        <FeaturedPosts />
        {/* <CheckBox
          label="i am ok"
          checked={state}
          onChange={setState}
          disabled={false}
          error="form.message.checkYourInput"
        /> */}
        {/* <Breadcrumb
          routes={[
            { title: "home.home", link: "/", href: "/" },
            {
              title: "",
              link: `/product/${""}`,
              href: `/product/[slug]`,
            },
          ]}
        /> */}
      </Div>
    </>
  );
};

export default Home;
