import React from "react";
import { Div } from "@kits";
import { Head } from "@components/SEO";
import dynamic from "next/dynamic";
import { PageTitle } from "@components/Layout";
import { Gists } from "@components/Gists";

export default function GistsPage(props) {
  return (
    <>
      <Head canonical="/gists" />
      <Div width="100%" py="3">
        <PageTitle title="gists.title" />
        <Gists />
      </Div>
    </>
  );
}
