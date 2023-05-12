import { useHome } from "@hooks";
import Div from "@kits/Div";
import { Head } from "@components/SEO";
import { Profile, FeaturedPosts, Projects, Gists } from "@components/Home";
import { BlogServices, GistServices } from "@services";
import dynamic from "next/dynamic";

const Contact = dynamic(
  () => import("@components/Contact").then((module) => module.Contact),
  { ssr: false }
);

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
