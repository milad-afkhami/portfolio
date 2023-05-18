// #region imports
import Div from "@kits/Div";
import Text from "@kits/Text";
import type { Components } from "react-images";
// #endregion

const ImageViewerFooterCaption: Components["FooterCaption"] = (props) => {
  const { caption } = props?.currentView || {};

  return (
    <Div mx="2" flex={["center", "start"]}>
      <Text as="p" size="lg-b" color="assistive-warning">
        {caption}
      </Text>
    </Div>
  );
};

export default ImageViewerFooterCaption;
