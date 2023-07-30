import { Div } from "style-wiz";
import Container from "@kits/Container";
import Header from "./Header";
import Footer from "./Footer";
import { APP_WRAPPER_ELEMENT_ID } from "@constants/dom";
import type { HOCFunctionalComponent, LayoutConfig } from "@_types/components";

const Layout: HOCFunctionalComponent<LayoutConfig> = function (props = {}) {
  const { children, noHeader, noFooter } = props;

  return (
    <Div position="relative" id={APP_WRAPPER_ELEMENT_ID} mh="100vh">
      <Container>
        {!noHeader && <Header />}
        <div>{children}</div>
        {!noFooter && <Footer />}
      </Container>
    </Div>
  );
};

export default Layout;
