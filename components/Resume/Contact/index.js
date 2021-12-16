import React from "react";
import { Div, Icon, Text } from "@kits";
import { ResumeContactOption } from "./Option";

export function ResumeContact(props) {
  const {} = props || {};

  const options = [
    { type: "email", value: "milad@gmail.com" },
    { type: "phone", value: "+98 939 284 0749" },
    { type: "email", value: "milad@gmail.com" },
    { type: "phone", value: "+98 939 284 0749" },
    { type: "email", value: "milad@gmail.com" },
  ];

  /* telegram, linkedin, skype */

  return (
    <Div
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
        <ResumeContactOption {...option} />
      ))}
    </Div>
  );
}
