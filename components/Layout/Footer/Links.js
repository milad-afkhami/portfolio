import React from "react";
import { Div, Link, Text } from "@kits";
import { __map } from "@utils";

const footerLinks = {
  shopGuide: [
    { label: "submitOrderGuide", link: "/submit-order-guide" },
    {
      label: "deliveryProcessGuide",
      link: "/delivery-process-guide",
    },
    { label: "paymentMethods", link: "/payment-methods" },
  ],
  company: [
    { label: "aboutUs", link: "/about-us" },
    { label: "founder", link: "/founder" },
  ],
};

export function FooterLinks(props) {
  return (
    <Div flex={["start", "start"]}>
      {__map(footerLinks, (links, group) => (
        <Div
          flex={["start", "start", "column"]}
          responsive={{ lg: { mEnd: "6" } }}
        >
          <Div mb="4">
            <Text size="md-b">{`layout.footer.${group}`}</Text>
          </Div>
          {links.map(({ label, link }) => (
            <Link href={link} mb="3">
              <Text size="md">{`layout.footer.${label}`}</Text>
            </Link>
          ))}
        </Div>
      ))}
    </Div>
  );
}
