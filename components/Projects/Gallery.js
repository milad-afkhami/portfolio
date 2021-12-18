import React from "react";
import { Div, Image, Text } from "@kits";
import { useState, useCallback, useTranslation } from "@hooks";
import Carousel, { Modal, ModalGateway } from "react-images";

export const ProjectGallery = (props) => {
  const { medias } = props || {};

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const t = useTranslation().t;

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Div mb="5">
      <Div mb="3">
        <Text size="md-b">projects.gallery</Text>
      </Div>
      <Div
        grid={[
          ,
          `repeat(${medias?.length <= 10 ? 1 : 2}, 1fr)`,
          "3",
          "3",
          "column",
          ,
          "start",
        ]}
        overflowX="auto"
        pb="3"
      >
        {medias.map((media, index) => (
          <Div
            zoomOnHover
            width="150px"
            height="150px"
            position="relative"
            cursor="zoom-in"
            border="border-dark"
            borderW="2"
            curve="sm"
            overflow="hidden"
          >
            <Image
              src={media.src}
              alt={media.title}
              title={media.title}
              layout="fill"
              quality="10"
              fit="cover"
              onClick={(e) => openLightbox(e, { index })}
              curve="sm"
              placeholder="blur"
              blurDataURL={media.src}
            />
          </Div>
        ))}
      </Div>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
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
                      py="4"
                      px="3"
                      flex={["center", "end"]}
                    >
                      <FooterCaption {...props} />
                      <FooterCount {...props} />
                    </Div>
                  );
                },
                FooterCaption: ({ currentView: { caption } }) => (
                  <Div mx="2" flex={["center", "start"]}>
                    <Text size="md" color="assistive-warning">
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
                    <Text size="md">
                      {t("projects.nthImage", { n: currentIndex + 1 })}
                    </Text>
                  </Div>
                ),
              }}
              currentIndex={currentImage}
              views={medias.map((x) => ({
                srcset: x.src,
                src: x.src,
                caption: x.title,
              }))}
              // hideControlsWhenIdleNumber={5000}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Div>
  );
};
