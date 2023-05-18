import Div from "@kits/Div";
import Icon from "@kits/Icon";
import Text from "@kits/Text";
import type { FC } from "react";

const DownloadResume: FC = () => {
  const handleDownloadResume = () =>
    window.open("/resume_milad-afkhami.pdf", "__blank");

  return (
    <Div
      curve="xsm"
      responsive={{ md: { width: "8rem" } }}
      flex={["center"]}
      height="2.5rem"
      width="8rem"
      mw="7rem"
      cursor="pointer"
      bg="assistive-info"
      hoverBg="assistive-info-light"
      px="3"
      mx="1"
      // onClick={printResume}
      onClick={handleDownloadResume}
      css={{ gap: "var(--spacing-2)" }}
    >
      <Div flex={["center", "center"]}>
        <Icon
          color="bg-primary"
          hoverColor="bg-primary"
          size="lg-b"
          name="download"
        />
      </Div>
      <Div>
        <Text color="bg-primary" size="sm-b">
          layout.header.downloadResume
        </Text>
      </Div>
    </Div>
  );
};

export default DownloadResume;
