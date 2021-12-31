import React from "react";
import { Div, Link, Text } from "@kits";

export const ProjectsMoreLink = (props) => {
  return (
    <Div mt="2">
      <Link
        href="/projects"
        width="100%"
        height="3rem"
        flex={["center", "center"]}
        bg="bg-secondary"
        hoverBg="bg-secondary-hover"
        curve="sm"
      >
        <Text>home.projects.seeMore</Text>
      </Link>
    </Div>
  );
};
