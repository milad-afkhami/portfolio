import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import ProjectsList from "@components/Projects";
import PageTitle from "@components/Layout/Title/Page";
import type { GetStaticProps } from "next";
import type { PageComponent } from "@_types/components";

const ProjectsPage: PageComponent = () => (
  <>
    <Head canonical="/" page="projects" />
    <Div width="100%" py="3">
      <PageTitle title="title" ns="projects" />
      <ProjectsList />
    </Div>
  </>
);

export default ProjectsPage;
