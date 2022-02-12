import React from "react";
import { Div, Timeline } from "@kits";
import { Head } from "@components/SEO";
import { PageTitle } from "@components/Layout";
import { WhoAmI } from "@components/About";
import {
  aboutTimelineSections,
  educationTimelineSections,
  workExperienceTimelineSections,
} from "@config";

export default function AboutPage(props) {
  return (
    <>
      <Head canonical="/" page="about" />
      <Div width="100%" py="3">
        <PageTitle title="about.title" />
        <WhoAmI />
        <Timeline
          title="about.timeline.title"
          sections={aboutTimelineSections}
        />
        <Div id="work-experience">
          <Timeline
            title="about.workExperience.title"
            icon="suitcase"
            sections={workExperienceTimelineSections}
          />
        </Div>
        <Div id="education">
          <Timeline
            title="about.education.title"
            icon="education"
            sections={educationTimelineSections}
          />
        </Div>
      </Div>
    </>
  );
}
