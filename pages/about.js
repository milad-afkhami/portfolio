import React from "react";
import { Div } from "@kits";
import { Head } from "@components/SEO";
import { PageTitle } from "@components/Layout";
import { WhoAmI, AboutTimeLine } from "@components/About";

export default function AboutPage(props) {
  return (
    <>
      <Head canonical="/" page="about" />
      <Div width="100%" py="3">
        <PageTitle title="about.title" />
        <WhoAmI />
        <AboutTimeLine />
      </Div>
    </>
  );
}
