import { Div } from "style-wiz";
import Container from "@kits/Container";
import Header from "./Header";
import dynamic from "next/dynamic";
import { APP_WRAPPER_ELEMENT_ID } from "@constants/dom";
import type { HOCFunctionalComponent, LayoutConfig } from "@_types/components";

// const GithubCorner = dynamic(() => import("./GithubCorner").then((module) => module.GithubCorner), { ssr: false });
const Footer = dynamic(() => import("./Footer"), { ssr: false });

const Layout: HOCFunctionalComponent<LayoutConfig> = function (props = {}) {
  const { children, noHeader, noFooter } = props || {};

  return (
    <Div position="relative" id={APP_WRAPPER_ELEMENT_ID} mh="100vh">
      <Container>
        {/* <GithubCorner /> */}
        {!noHeader && <Header />}
        <div>{children}</div>
        {!noFooter && <Footer />}
      </Container>
    </Div>
  );
};

export default Layout;
