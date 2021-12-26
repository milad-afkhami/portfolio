import React from "react";
import { Div, Icon, Text } from "@kits";
import { ContactOption } from "./Option";
import { PageTitle } from "@components/Layout";

export function Contact(props) {
  const {} = props || {};

  const options = [
    { type: "email", value: "milad@gmail.com" },
    { type: "whatsapp", label: "+98 939 284 0749", value: "+989392840749" },
    {
      type: "linkedin",
      label: "milad-afkhami-pour-71b86a18b",
      value: "https://www.linkedin.com/in/milad-afkhami-pour-71b86a18b/",
    },
    {
      type: "skype",
      label: "join.skype.com/invite/pRe4UIXrDeTj",
      value: "https://join.skype.com/invite/pRe4UIXrDeTj",
    },
    { type: "telegram", label: "mili_u", value: "https://telegram.me/mili_u" },
  ];

  return (
    <Div>
      <PageTitle title="contact.title" />
      <Div
        mt="5"
        grid={[
          ,
          `repeat(${Math.ceil(options.length / 2)}, 1fr)`,
          "3",
          "3",
          "column",
        ]}
        responsive={{
          sm: {
            grid: [
              ,
              `repeat(${Math.ceil(options.length / 3)}, 1fr)`,
              "3",
              "3",
              "column",
            ],
          },
          md: { grid: [`repeat(${options.length}, 1fr)`, "1fr", , , "column"] },
        }}
      >
        {options.map((option) => (
          <ContactOption {...option} />
        ))}
      </Div>
    </Div>
  );
}
