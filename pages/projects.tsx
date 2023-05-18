import Div from "@kits/Div";
import Head from "@components/SEO/Head";
import Projects from "@components/Projects";
import PageTitle from "@components/Layout/Title/Page";
import type { FC } from "react";

const ProjectsPage: FC = () => (
  <>
    <Head canonical="/" page="projects" />
    <Div width="100%" py="3">
      <PageTitle title="projects.title" />
      <Projects />
    </Div>
  </>
);

export default ProjectsPage;
