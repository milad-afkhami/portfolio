import React from "react";
import { Div, Icon, Text } from "@kits";
import { ContactOption } from "./Option";
import { PageTitle } from "@components/Layout";
import { contactOptions } from "@config";

export function Contact(props) {
  const {} = props || {};

  const options = contactOptions.filter((opt) => !opt.private);

  const length = options.length;

  return (
    <Div id="contact">
      <PageTitle title="contact.title" tag="h2" />
      <Div
        mt="4"
        grid={[`repeat(${Math.ceil(length / 2)}, 1fr)`, , "3", "4"]}
        responsive={{
          sm: {
            grid: [`repeat(${Math.ceil(length)}, 1fr)`],
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
}
