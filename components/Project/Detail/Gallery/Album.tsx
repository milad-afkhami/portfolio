import Div from "@kits/Div";
import Image from "@kits/Image";
import { useTranslation } from "next-i18next";
import type { FC } from "react";

type ProjectGalleryAlbumProps = Required<Pick<IProject, "medias">> & {
  onClickItem: (index: number) => void;
};

const ProjectGalleryAlbum: FC<ProjectGalleryAlbumProps> = (props) => {
  const { medias, onClickItem } = props;

  const { t } = useTranslation("projects");

  if (!medias?.length) return null;

  return (
    <Div
      grid={[
        ,
        `repeat(${medias.length < 12 ? 1 : 2}, 1fr)`,
        "2",
        "2",
        "column",
        ,
        "start",
      ]}
      responsive={{ sm: { css: { gap: "var(--spacing-3)" } } }}
      overflowX="auto"
      pb="3"
      width="fit-content"
      Mw="100%"
    >
      {medias.map((media, index) => (
        <Div
          key={index}
          zoomOnHover
          width="100px"
          height="100px"
          responsive={{ sm: { width: "150px", height: "150px" } }}
          position="relative"
          cursor="zoom-in"
          border="border-dark-main"
          borderW="2"
          curve="sm"
          overflow="hidden"
          onClick={() => onClickItem(index)}
        >
          <Image
            src={media.src}
            alt={`${t("app.name")} - ${t("title")}`}
            title={media.title}
            layout="fill"
            quality={1}
            fit="cover"
            placeholder="blur"
            blurDataURL={media.src}
            // withShimmer
          />
        </Div>
      ))}
    </Div>
  );
};

export default ProjectGalleryAlbum;
