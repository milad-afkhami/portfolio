import Div from "@kits/Div";
import Text from "@kits/Text";
import Carousel, { Modal, ModalGateway } from "react-images";
import useTranslation from "@hooks/useTranslation";

const ImageViewer = (props) => {
  const { isOpen, onClose, current, views } = props || {};

  const t = useTranslation().t;

  return (
    <ModalGateway>
      {isOpen ? (
        <Modal onClose={onClose}>
          <Carousel
            components={{
              Footer: (props) => {
                const { FooterCount, FooterCaption } =
                  props.carouselProps.components;
                return (
                  <Div
                    position="absolute"
                    dimensions={{ left: 0, bottom: 0 }}
                    width="100%"
                    mh="1.5rem"
                    p="3"
                    flex={["center", "start"]}
                    bg="bg-secondary-paler"
                  >
                    <FooterCount {...props} />
                    <FooterCaption {...props} />
                  </Div>
                );
              },
              FooterCaption: ({ currentView: { caption } }) => (
                <Div mx="2" flex={["center", "start"]}>
                  <Text tag="p" size="lg-b" color="assistive-warning">
                    {caption}
                  </Text>
                </Div>
              ),
              FooterCount: ({ currentIndex, views }) => (
                <Div
                  flex={["center", "center"]}
                  bg="bg-tertiary"
                  p="1"
                  curve="sm"
                  mw="fit"
                >
                  <Text size="md" align="center">
                    {t("layout.kits.imageViewer.nthImage", {
                      n: currentIndex + 1,
                    })}
                  </Text>
                </Div>
              ),
            }}
            currentIndex={current}
            views={views}
            // hideControlsWhenIdleNumber={5000}
          />
        </Modal>
      ) : null}
    </ModalGateway>
  );
};

export default ImageViewer;
