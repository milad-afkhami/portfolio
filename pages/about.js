import React from "react";
import { Div } from "@kits";
import { Head } from "@components/SEO";
import dynamic from "next/dynamic";

export default function AboutPage(props) {
  return (
    <>
      <Head canonical="/" />
      <Div width="100%" py="3"></Div>
    </>
  );
}
