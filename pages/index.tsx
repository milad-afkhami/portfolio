import Div from "@kits/Div";
import { Head } from "@components/SEO";
import useHome from "@hooks/api/useHome";
import Profile from "@components/Home/Profile";
import FeaturedPosts from "@components/Home/FeaturedPosts";
import Projects from "@components/Home/Projects";
import Gists from "@components/Home/Gists";
import BlogServices from "@services/blog";
import GistServices from "@services/gist";
import dynamic from "next/dynamic";

const Contact = dynamic(() => import("@components/Contact"), { ssr: false });

const Home = (props) => {
  const { data, isValidating, mutate, error } = useHome();

  return (
    <>
      <Head canonical="/" />
      <Div width="100%" py="3">
        <Profile />
        <FeaturedPosts posts={props.blogs} />
        <Projects />
        <Gists items={props.gists} />
        <Contact />
      </Div>
    </>
  );
};

export async function getStaticProps() {
  const blogs = await BlogServices.getList();
  const gists = await GistServices.getList();

  return { props: { blogs, gists } };
}

export default Home;
