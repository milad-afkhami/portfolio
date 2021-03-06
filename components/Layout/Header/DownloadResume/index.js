import React from "react";
import { Div, Icon, Text } from "@kits";

export function DownloadResume(props) {
  const {} = props || {};

  const printResume = async () => {
    const ReactDOMServer = require("react-dom/server");
    const Resume = require("@components/Resume").default;
    const THEMES = require("@constants").THEMES;

    const resumeMarkup = ReactDOMServer.renderToStaticMarkup(<Resume />);
    const head = document.querySelector("head").innerHTML;
    // .querySelector("head").innerHTML.replaceAll("/_next/static",`${window.location.href}_next/static`);
    const font = document.querySelector("html").style.fontFamily;

    const w = window.open("", "", "height=1000, width=1400");

    w.document.write(`<html style='font-family: ${font};'><head>`);
    w.document.write(head);
    w.document.write("</head><body class='container'>");
    w.document.write(resumeMarkup);
    w.document.write("</body></html>");
    w.document.close();

    w.document.querySelector("html").setAttribute("data-theme", THEMES.LIGHT);

    setTimeout(() => {
      w.print();
    }, 2000);
  };

  return (
    <Div
      curve="xsm"
      responsive={{ md: { width: "8rem" } }}
      flex={["center"]}
      height="2.5rem"
      width="7rem"
      cursor="pointer"
      bg="assistive-info"
      hoverBg="assistive-info-light"
      px="1"
      onClick={printResume}
    >
      <Div mx="2" flex={["center", "center"]}>
        <Icon size="lg-b" name="download" hoverColor="inherit" />
      </Div>
      <Div>
        <Text size="sm-b">layout.header.downloadResume</Text>
      </Div>
    </Div>
  );
}
