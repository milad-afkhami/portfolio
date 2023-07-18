import { Div } from "style-wiz";
import ContactOption from "./Option";
import PageTitle from "@components/Layout/Title/Page";
import responsiveStyles from "@helpers/responsiveStyles";
import contactOptions from "@configs/contact";
import type { FC } from "react";

const Contact: FC = () => {
  const options = contactOptions.filter((opt) => !opt.private);

  return (
    <div id="contact">
      <PageTitle title="contact.title" tag="h2" />
      <Div
        mt="4"
        grid={[`repeat(${Math.ceil(options.length / 2)}, 1fr)`, , "3", "4"]}
        styles={responsiveStyles("sm", {
          marginTop: "var(--spacing-5)",
          gridTemplateRows: "1fr",
          gridTemplateColumns: `repeat(${options.length}`,
        })}
      >
        {options.map((option, i) => (
          <ContactOption key={i} {...option} />
        ))}
      </Div>
    </div>
  );
};

export default Contact;
