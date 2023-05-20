import { useState, useCallback } from "react";
import Div from "@kits/Div";
import SectionTitle from "@components/Layout/Title/Section";
import ProjectGalleryAlbum from "./Album";
import dynamic from "next/dynamic";
import type { FC } from "react";
import useTranslation from "@hooks/useTranslation";

const ImageViewer = dynamic(() => import("@kits/ImageViewer"));

const ProjectGallery: FC<Pick<IProject, "medias">> = (props) => {
  const { medias } = props;

  const [renderViewer, setRenderViewer] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const { t } = useTranslation();

  const openLightbox = useCallback((index: number) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Div mb="4">
      <SectionTitle icon="gallery" title="gallery" ns="projects" />
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
          currentIndex={currentImage}
          views={medias.map((x) => ({
            source: x.src,
            caption: x.title ? t(x.title) : undefined,
            alt: x.title ? t(x.title) : undefined,
          }))}
        />
      )}
    </Div>
  );
};

export default ProjectGallery;
