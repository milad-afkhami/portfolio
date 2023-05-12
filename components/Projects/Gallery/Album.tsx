import Div from "@kits/Div";
import Image from "@kits/Image";

const ProjectGalleryAlbum = (props) => {
  const { medias, onClickItem } = props || {};

  return (
    <Div
      grid={[
        ,
        `repeat(${medias?.length < 12 ? 1 : 2}, 1fr)`,
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
            onClick={(e) => onClickItem(index)}
            placeholder="blur"
            withShimmer
          />
        </Div>
      ))}
    </Div>
  );
};

export default ProjectGalleryAlbum;
