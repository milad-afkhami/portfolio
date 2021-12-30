import React from "react";
import { Div, Tree } from "@kits";
import { SectionTitle } from "@components/Layout";

export const ProjectPoints = (props) => {
  const { points } = props || {};

  return (
    <Div mb="4">
      <SectionTitle icon="list" title="projects.points" />
      {/* mx="-4" */}
      <Div Mw="100%">
        <Tree branches={points} branchesAccessor="points" defaultOpen />
      </Div>
    </Div>
  );
};
