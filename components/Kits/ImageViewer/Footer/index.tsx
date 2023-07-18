// #region imports
import { Div } from "style-wiz";
import type { Components } from "react-images";
// #endregion

const ImageViewerFooter: Components["Footer"] = (props) => {
  const { FooterCount, FooterCaption } = props?.carouselProps?.components || {};

  return (
    <Div
      position="absolute"
      dimensions={{ left: 0, bottom: 0 }}
      width="100%"
      mh="1.5rem"
      p="3"
      flex={["center", "flex-start"]}
      bg="bg-secondary-paler"
    >
      {FooterCount && <FooterCount {...props} />}
      {FooterCaption && <FooterCaption {...props} />}
    </Div>
  );
};

export default ImageViewerFooter;
