import { useState } from "react";
import Div from "@kits/Div";
import SectionTitle from "@components/Layout/Title/Section";
import ProjectGalleryAlbum from "./Album";
import dynamic from "next/dynamic";
import useTranslation from "@hooks/useTranslation";
import useToggle from "@hooks/useToggle";
import useDelayedRender from "use-delayed-render";
import type { FC } from "react";

const ImageViewer = dynamic(() => import("@kits/ImageViewer"));

const ProjectGallery: FC<Pick<IProject, "medias">> = (props) => {
  const { medias } = props;

  const [viewerIsOpen, toggleViewer] = useToggle(false);
  const [currentImage, setCurrentImage] = useState(0);

  const { mounted: isViewerMounted, rendered: isViewerRendered } =
    useDelayedRender(viewerIsOpen);

  const { t } = useTranslation();

  const closeLightbox = () => {
    setCurrentImage(0);
    toggleViewer();
  };

  const onClickItem = (index: number) => {
    toggleViewer();
    setCurrentImage(index);
  };

  return (
    <Div mb="4">
      <SectionTitle icon="gallery" title="gallery" ns="projects" />
      <ProjectGalleryAlbum medias={medias} onClickItem={onClickItem} />
      {isViewerMounted && (
        <ImageViewer
          isOpen={isViewerRendered}
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
