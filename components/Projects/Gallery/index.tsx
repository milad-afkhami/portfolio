import { useState, useCallback } from "react";
import Div from "@kits/Div";
import SectionTitle from "@components/Layout/Title/SectionTitle";
import ProjectGalleryAlbum from "./Album";
import dynamic from "next/dynamic";

const ImageViewer = dynamic(() => import("@kits/ImageViewer"));

const ProjectGallery = (props) => {
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
        <ImageViewer
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

export default ProjectGallery;
