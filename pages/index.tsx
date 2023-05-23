import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import Profile from "@components/Home/Profile";
import FeaturedPosts from "@components/Home/FeaturedPosts";
import HomeProjects from "@components/Home/Projects";
import HomeGists from "@components/Home/Gists";
import BlogServices from "@services/blog";
import GistServices from "@services/gist";
import dynamic from "next/dynamic";
import I18nHelper from "@helpers/i18n";
import type { GetStaticProps } from "next";
import type { PageComponent } from "@_types/components";

const Contact = dynamic(() => import("@components/Contact"), { ssr: false });

interface HomePageProps {
  blogs: Array<IBlog>;
  gists: Array<IGist>;
}

const HomePage: PageComponent<HomePageProps> = (props) => {
  const { blogs, gists } = props;

  return (
    <>
      <Head canonical="/" />
      <Div width="100%" py="3">
        <Profile />
        <FeaturedPosts posts={blogs} />
        <HomeProjects />
        <HomeGists items={gists} />
        <Contact />
      </Div>
    </>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async ({
  locale,
}) => {
  const [t9n, blogs, gists] = await Promise.all([
    I18nHelper.ssrT9n(locale, "layout", "home", "projects"),
    BlogServices.getList(),
    GistServices.getList(),
  ]);

  return { props: { blogs, gists, ...t9n } };
};

export default HomePage;
