import React from "react";
import { Div, Image, Text } from "@kits";
import { useState, useCallback, useTranslation } from "@hooks";
// import Carousel, { Modal, ModalGateway } from "react-images";
import { SectionTitle } from "@components/Layout";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("react-images"));
const Modal = dynamic(() =>
  import("react-images").then((module) => module.Modal)
);
const ModalGateway = dynamic(() =>
  import("react-images").then((module) => module.ModalGateway)
);

export const ProjectGallery = (props) => {
  const { medias } = props || {};

  const [renderViewer, setRenderViewer] = useState(false);
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
      <SectionTitle icon="gallery-3" title="projects.gallery" />
      <Div
        grid={[
          ,
          `repeat(${medias?.length <= 10 ? 1 : 2}, 1fr)`,
          "2",
          "2",
          "column",
          ,
          "start",
        ]}
        responsive={{ sm: { css: { gap: "var(--spacing-3)" } } }}
        overflowX="auto"
        pb="3"
      >
        {medias.map((media, index) => (
          <Div
            zoomOnHover
            width="100px"
            height="100px"
            responsive={{ sm: { width: "150px", height: "150px" } }}
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
              quality={1}
              fit="cover"
              onClick={(e) => {
                setRenderViewer(true);
                setTimeout(() => openLightbox(e, { index }), 100);
              }}
              placeholder="blur"
              withShimmer
              // blurDataURL={media.src}
            />
          </Div>
        ))}
      </Div>
      {renderViewer && (
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
                  // View: ({ currentView, currentIndex }) => {
                  //   return (
                  //     <Div
                  //       width={window.innerWidth + "px"}
                  //       height={window.innerHeight + "px"}
                  //       position="relative"
                  //     >
                  //       <img
                  //         src={currentView.src}
                  //         alt={currentView.caption}
                  //         width="300px"
                  //         height="300px"
                  //         css={{
                  //           width: "100vmin",
                  //           height: "100vmin",
                  //         }}
                  //       />
                  //     </Div>
                  //   );
                  // },
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
      )}
    </Div>
  );
};
