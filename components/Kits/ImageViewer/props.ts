import type { CarouselModalProps, CarouselProps } from "react-images";

type ImageViewerProps = Pick<CarouselProps, "currentIndex" | "views"> &
  Pick<CarouselModalProps, "onClose"> & { isOpen: boolean };

export default ImageViewerProps;
