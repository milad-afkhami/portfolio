import type { CarouselModalProps, CarouselProps } from "react-images";

interface ImageViewerProps
  extends Pick<CarouselProps, "currentIndex" | "views">,
    Pick<CarouselModalProps, "onClose"> {
  isOpen: boolean;
}

export default ImageViewerProps;
