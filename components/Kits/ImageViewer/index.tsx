import Carousel, { Modal, ModalGateway } from "react-images";
import ImageViewerFooter from "./Footer";
import ImageViewerFooterCaption from "./Footer/Caption";
import ImageViewerFooterCount from "./Footer/Count";
import type { FC } from "react";
import type ImageViewerProps from "./props";

const ImageViewer: FC<ImageViewerProps> = (props) => {
  const { isOpen, onClose, currentIndex, views } = props;

  return (
    // @ts-expect-error
    <ModalGateway>
      {isOpen ? (
        <Modal onClose={onClose}>
          <Carousel
            components={{
              Footer: ImageViewerFooter,
              FooterCaption: ImageViewerFooterCaption,
              FooterCount: ImageViewerFooterCount,
            }}
            currentIndex={currentIndex}
            views={views}
            // hideControlsWhenIdleNumber={5000}
          />
        </Modal>
      ) : null}
    </ModalGateway>
  );
};

export default ImageViewer;
