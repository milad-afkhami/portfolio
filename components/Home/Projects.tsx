import { Div } from "style-wiz";
import Link from "@kits/Link";
import Button from "@kits/Button";
import ProjectCards from "@components/Cards/Project";
import type { FC } from "react";

const HomeProjects: FC = () => (
  <Div my="4">
    <ProjectCards />
    <Link href="/projects" width="100%">
      <Button text="projects.seeMore" ns="home" block variant="outlined" />
    </Link>
  </Div>
);

export default HomeProjects;
