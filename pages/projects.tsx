import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import { Projects } from "@components/Projects";
import PageTitle from "@components/Layout/Title/PageTitle";

const ProjectsPage = (props) => {
  return (
    <>
      <Head canonical="/" page="projects" />
      <Div width="100%" py="3">
        <PageTitle title="projects.title" />
        <Projects />
      </Div>
    </>
  );
};

export default ProjectsPage;
