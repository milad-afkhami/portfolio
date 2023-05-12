import React from "react";
import { Div } from "@kits";
import { Head } from "@components/SEO";
import dynamic from "next/dynamic";
import { PageTitle } from "@components/Layout";
import { Gists } from "@components/Gists";
import { GistServices } from "@services";

export default function GistsPage(props) {
  return (
    <>
      <Head canonical="/gists" page="gists" />
      <Div width="100%" py="3">
        <PageTitle title="gists.title" />
        <Gists items={props?.gists} loading={!props?.gists} />
      </Div>
    </>
  );
}

export async function getStaticProps() {
  const gists = await GistServices.getList();

  return { props: { gists } };
}
