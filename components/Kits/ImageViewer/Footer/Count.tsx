// #region imports
import { Div } from "style-wiz";
import Text from "@kits/Text";
import { useTranslation } from "next-i18next";
import type { Components } from "react-images";
// #endregion

const ImageViewerFooterCount: Components["FooterCount"] = (props) => {
  const { currentIndex = 0 } = props;
  const { t } = useTranslation();

  return (
    <Div
      flex={["center", "center"]}
      bg="bg-tertiary-main"
      p="1"
      curve="sm"
      mw="fit"
    >
      <Text size="md" align="center" noTranslation>
        {t("kits.imageViewer.nthImage", {
          n: currentIndex + 1,
        })}
      </Text>
    </Div>
  );
};

export default ImageViewerFooterCount;
