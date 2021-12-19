import React from "react";
import { Div } from "@kits";
import { Head } from "@components/SEO";
import dynamic from "next/dynamic";
import { PageTitle } from "@components/Layout";
import { WhoAmI, AboutTimeLine } from "@components/About";

export default function AboutPage(props) {
  return (
    <>
      <Head canonical="/" />
      <Div width="100%" py="3">
        <PageTitle title="about.title" />
        <WhoAmI />
        <AboutTimeLine />
      </Div>
    </>
  );
}
