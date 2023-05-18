import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import Profile from "@components/Home/Profile";
import FeaturedPosts from "@components/Home/FeaturedPosts";
import Projects from "@components/Home/Projects";
import Gists from "@components/Home/Gists";
import BlogServices from "@services/blog";
import GistServices from "@services/gist";
import dynamic from "next/dynamic";
import type { FC } from "react";
import type { GetStaticProps } from "next";

const Contact = dynamic(() => import("@components/Contact"), { ssr: false });

interface HomePageProps {
  blogs: Array<IBlog>;
  gists: Array<IGist>;
}

const HomePage: FC<HomePageProps> = (props) => {
  const { blogs, gists } = props;

  return (
    <>
      <Head canonical="/" />
      <Div width="100%" py="3">
        <Profile />
        <FeaturedPosts posts={blogs} />
        <Projects />
        <Gists items={gists} />
        <Contact />
      </Div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await BlogServices.getList();
  const gists = await GistServices.getList();

  return { props: { blogs, gists } };
};

export default HomePage;
