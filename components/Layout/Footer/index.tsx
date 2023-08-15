import { Div } from "style-wiz";
import FooterLinks from "./Links";
import type { FC } from "react";
// import FooterSocials from "./Socials";

const Footer: FC = () => (
  <Div mt="5" py="5" mw="100%" border="border-light-main" borderSide="top">
    <FooterLinks />
  </Div>
);

export default Footer;
