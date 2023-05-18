import Div from "@kits/Div";
import { Row, Col } from "@kits/Grid";
import FooterLinks from "./Links";
import type { FC } from "react";
// import FooterSocials from "./Socials";

const Footer: FC = () => (
  <Div mt="5" py="5" mw="100%" border="border-light" borderSide="top">
    <Row>
      <Col xs="12" lg="8">
        <FooterLinks />
      </Col>
      {/* <Col xs="12" lg="4"><FooterSocials /></Col> */}
    </Row>
  </Div>
);

export default Footer;
