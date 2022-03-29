import React from "react";
import { Div, Timeline } from "@kits";
import { Head } from "@components/SEO";
import { PageTitle } from "@components/Layout";
import { WhoAmI } from "@components/About";
import {
  aboutTimelineSections,
  appBaseURL,
  contactOptions,
  educationTimelineSections,
  workExperienceTimelineSections,
} from "@config";
import { Head, SocialProfileJsonLd } from "@components/SEO";
import { useTranslation } from "@hooks";

export default function AboutPage(props) {
  const t = useTranslation().t;

  return (
    <>
      <Head canonical="/" page="about" />
      <SocialProfileJsonLd
        type="Person"
        name={t("home.profile.name")}
        url={appBaseURL}
        sameAs={[contactOptions.find((opt) => opt.type === "linkedin").value]}
      />
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
