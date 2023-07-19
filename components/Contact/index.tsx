import { Div } from "style-wiz";
import ContactOption from "./Option";
import PageTitle from "@components/Layout/Title/Page";
import responsiveStyles from "@helpers/responsiveStyles";
import contactOptions from "@configs/contact";
import type { FC } from "react";

const Contact: FC = () => (
  <div id="contact">
    <PageTitle title="contact.title" tag="h2" />
    <Div
      mt="5"
      grid={[
        `repeat(${Math.ceil(contactOptions.length / 2)}, 1fr)`,
        ,
        "3",
        "4",
      ]}
      styles={responsiveStyles("sm", {
        gridTemplateRows: "1fr",
        gridTemplateColumns: `repeat(${contactOptions.length}, 1fr)`,
      })}
    >
      {contactOptions.map((option) => (
        <ContactOption key={option.label} {...option} />
      ))}
    </Div>
  </div>
);

export default Contact;
