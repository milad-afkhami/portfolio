import React from "react";
import { Div } from "@kits";
import { useState, useCallback } from "@hooks";
import { SectionTitle } from "@components/Layout";
import { ProjectGalleryAlbum } from "./Album";
import dynamic from "next/dynamic";

const ProjectGalleryImageViewer = dynamic(() => import("./ImageViewer"));

export const ProjectGallery = (props) => {
  const { medias } = props || {};

  const [renderViewer, setRenderViewer] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Div mb="4">
      <SectionTitle icon="gallery" title="projects.gallery" />
      <ProjectGalleryAlbum
        medias={medias}
        onClickItem={(index) => {
          setRenderViewer(true);
          setTimeout(() => openLightbox(index), 100);
        }}
      />
      {renderViewer && (
        <ProjectGalleryImageViewer
          isOpen={viewerIsOpen}
          onClose={closeLightbox}
          current={currentImage}
          views={medias.map((x) => ({
            srcset: x.src,
            src: x.src,
            caption: x.title,
          }))}
        />
      )}
    </Div>
  );
};
