import React from "react";
import { Div } from "@kits";
import { Head } from "@components/SEO";
import { Projects } from "@components/Projects";
import { PageTitle } from "@components/Layout";

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
