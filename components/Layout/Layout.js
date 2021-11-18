import React from "react";
import { Div } from "@kits";
import { APP_WRAPPER_ELEMENT_ID } from "@config";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = (props = {}) => {
  const { children, hideHeader, hideFooter, transparentHeader } = props;

  return (
    <Div
      px={"0".imp()}
      position="relative"
      id={APP_WRAPPER_ELEMENT_ID}
      mh="100vh"
      container
    >
      <Div id="more-menu__list" />
      <Div id="modal__wrapper" />
      {!hideHeader && <Header transparent={transparentHeader} />}
      <Div>{children}</Div>
      {!hideFooter && <Footer />}
    </Div>
  );
};
