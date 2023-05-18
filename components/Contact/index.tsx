import Div from "@kits/Div";
import ContactOption from "./Option";
import PageTitle from "@components/Layout/Title/Page";
import contactOptions from "@configs/contact";
import type { FC } from "react";

const Contact: FC = () => {
  const options = contactOptions.filter((opt) => !opt.private);

  return (
    <Div id="contact">
      <PageTitle title="contact.title" tag="h2" />
      <Div
        mt="4"
        grid={[`repeat(${Math.ceil(options.length / 2)}, 1fr)`, , "3", "4"]}
        responsive={{
          sm: {
            grid: [`repeat(${Math.ceil(options.length)}, 1fr)`],
            mt: "5",
          },
        }}
      >
        {options.map((option, i) => (
          <ContactOption key={i} {...option} />
        ))}
      </Div>
    </Div>
  );
};

export default Contact;
