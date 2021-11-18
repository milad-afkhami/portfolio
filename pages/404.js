import React from "react";
import { INTERVALS } from "@constants";

export default function NotFound(props) {
  return <h1>404 - Page Not Found</h1>;
}

export async function getStaticProps(context) {
  return {
    props: {},
    revalidate: INTERVALS.A_WEEK,
  };
}
