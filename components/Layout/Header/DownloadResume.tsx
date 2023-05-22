import Button from "@kits/Button";
import type { FC } from "react";

const DownloadResume: FC = () => {
  const handleDownloadResume = () =>
    window.open("/resume_milad-afkhami.pdf", "__blank");

  return (
    <Button
      variant="contained"
      text="Download Resume"
      onClick={handleDownloadResume}
      icon="download"
    />
  );

  // return <Div curve="xsm" responsive={{ [responsiveUpperBoundBreakpoint]: { width: "8rem" } }} flex={["center"]} height="2.5rem" width="8rem" mw="7rem" cursor="pointer" bg="assistive-info-main" hoverBg="assistive-info-light" px="3" mx="1" onClick={handleDownloadResume} css={{ gap: "var(--spacing-2)" }}><Div flex={["center", "center"]}><Icon color="bg-primary-main" hoverColor="bg-primary-main" size="lg" bold name="download" /></Div><Div><Text ns="layout" color="bg-primary-main" size="sm" bold>header.downloadResume</Text></Div></Div>
};

export default DownloadResume;
