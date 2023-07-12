import Button from "@kits/Button";
import { resumeURL } from "@configs/urls";
import type { FC } from "react";

const DownloadResume: FC = () => {
  const handleDownloadResume = () => window.open(resumeURL, "_blank");

  return (
    <Button
      variant="contained"
      text="Download Resume"
      onClick={handleDownloadResume}
      icon="download"
    />
  );

  // return <Div curve="xsm" responsive={{ [responsiveUpperBoundBreakpoint]: { width: "8rem" } }} flex={["center"]} height="2.5rem" width="8rem" mw="7rem" cursor="pointer" bg="assistive-info-main" hoverBg="assistive-info-light" px="3" mx="1" onClick={handleDownloadResume} styles={{ gap: "var(--spacing-2)" }}><Div flex={["center", "center"]}><Icon color="bg-primary-main" hoverColor="bg-primary-main" size="lg" bold name="download" /></Div><div><Text ns="layout" color="bg-primary-main" size="sm" bold>header.downloadResume</Text></div></Div>
};

export default DownloadResume;
