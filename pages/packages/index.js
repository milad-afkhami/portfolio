import React from "react";
import { Div } from "@kits";
import { Head } from "@components/SEO";
import { PageTitle } from "@components/Layout";

export default function PackagesPage(props) {
  return (
    <>
      <Head canonical="/packages" />
      <Div width="100%" py="3">
        <PageTitle title="packages.title" />
      </Div>
    </>
  );
}
