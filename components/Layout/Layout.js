import React from "react";
import { Div } from "@kits";
import { APP_WRAPPER_ELEMENT_ID } from "@config";
import { Header } from "./Header";
import { Footer } from "./Footer";
import dynamic from "next/dynamic";

const GithubCorner = dynamic(
  () => import("./GithubCorner").then((module) => module.GithubCorner),
  { ssr: false }
);

export const Layout = (props = {}) => {
  const { children, hideHeader, hideFooter, transparentHeader } = props;

  return (
    <Div
      // px={"0".imp()}
      position="relative"
      id={APP_WRAPPER_ELEMENT_ID}
      mh="100vh"
      container
    >
      <GithubCorner />
      <Div id="more-menu__list" />
      <Div id="modal__wrapper" />
      {!hideHeader && <Header transparent={transparentHeader} />}
      <Div>{children}</Div>
      {!hideFooter && <Footer />}
    </Div>
  );
};
