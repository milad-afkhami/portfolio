// #region imports
import { Div } from "style-wiz";
import Text from "@kits/Text";
import type { Components } from "react-images";
// #endregion

const ImageViewerFooterCaption: Components["FooterCaption"] = (props) => {
  const { caption } = props?.currentView || {};

  return (
    <Div mx="2" flex={["center", "flex-start"]}>
      <Text as="p" size="lg" bold color="assistive-warning-main" noTranslation>
        {caption}
      </Text>
    </Div>
  );
};

export default ImageViewerFooterCaption;
