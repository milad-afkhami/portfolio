import { Div } from "style-wiz";
import Head from "@components/SEO/Head";
import PageTitle from "@components/Layout/Title/Page";
import ProjectDetail from "@components/Project/Detail";
import I18nHelper from "@helpers/i18n";
import projectsData from "@data/projects";
import type { GetStaticProps } from "next";
import type { PageComponent } from "@_types/components";

const ProjectsPage: PageComponent = () => (
  <>
    <Head canonical="/projects" page="projects" />
    <Div width="100%" py="3">
      <PageTitle title="title" ns="projects" />
      <div>
        {projectsData.map((project, i) => (
          <ProjectDetail key={project.id} index={i + 1} {...project} />
        ))}
      </div>
    </Div>
  </>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const t9n = await I18nHelper.ssrT9n(locale, "layout", "projects");

  return { props: { ...t9n } };
};

export default ProjectsPage;
