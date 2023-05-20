// #region imports
import Div from "@kits/Div";
import Text from "@kits/Text";
import useTranslation from "@hooks/useTranslation";
import type { Components } from "react-images";
// #endregion

const ImageViewerFooterCount: Components["FooterCount"] = (props) => {
  const { currentIndex = 0 } = props;
  const { t } = useTranslation();

  return (
      <Text size="md" align="center" noTranslation>
        {t("kits.imageViewer.nthImage", {
          n: currentIndex + 1,
        })}
      </Text>
    </Div>
  );
};

export default ImageViewerFooterCount;
