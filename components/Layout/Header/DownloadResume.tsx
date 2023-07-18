import Button from "@kits/Button";
import { resumeURL } from "@configs/urls";
import type { FC } from "react";

const DownloadResume: FC = () => {
  const handleDownloadResume = () => window.open(resumeURL, "_blank");

  return (
    <Button
      variant="contained"
      text={{ content: "header.downloadResume", ns: "layout", size: "lg" }}
      onClick={handleDownloadResume}
      icon="download"
    />
  );
};

export default DownloadResume;
