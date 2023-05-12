import Div from "@kits/Div";
import { APP_WRAPPER_ELEMENT_ID } from "@config";
import { Header } from "./Header";
import dynamic from "next/dynamic";

// const GithubCorner = dynamic(() => import("./GithubCorner").then((module) => module.GithubCorner), { ssr: false });
const Footer = dynamic(
  () => import("./Footer").then((module) => module.Footer),
  { ssr: false }
);

const Layout = (props = {}) => {
  const { children, hideHeader, hideFooter, transparentHeader } = props;

  return (
    <Div position="relative" id={APP_WRAPPER_ELEMENT_ID} mh="100vh" container>
      {/* <GithubCorner /> */}
      <Div id="more-menu__list" />
      <Div id="modal__wrapper" />
      {!hideHeader && <Header transparent={transparentHeader} />}
      <Div>{children}</Div>
      {!hideFooter && <Footer />}
    </Div>
  );
};



            
                
            
            
            
            export default Layout;