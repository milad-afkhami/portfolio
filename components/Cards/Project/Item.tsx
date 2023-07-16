import Div from "@kits/Div";
import Image from "@kits/Image";
import Link from "@kits/Link";
import Text from "@kits/Text";
import { placeholderImage } from "@images";
import type { FC } from "react";

const ProjectCard: FC<Pick<IProject, "logo" | "slug" | "name">> = (props) => {
  const { logo = placeholderImage, slug, name } = props;

  const height = 120;

  return (
    <Link
      href={`/projects#project-${slug}`}
      prefetch={false}
      height={`${height}px`}
      flex={[, , "row"]}
      p="2"
      curve="sm"
      overflow="hidden"
      bg="bg-secondary-main"
      mw="min(330px, 100%)"
      hoverBg="bg-secondary-hover"
    >
      <Div
        position="relative"
        height="100%"
        curve="sm"
        flex={["center", "center"]}
        mw={`calc(${height}px - 1rem)`}
        overflow="hidden"
      >
        <Image
          src={logo}
          // placeholder="blur"
          // blurDataURL={logo}
          quality={20}
          layout="fill"
          alt={name}
          fit="contain"
        />
      </Div>
      <Div flexPortion="auto" ml="3">
        <Div flex={["flex-start", "flex-start", "column"]} height="100%">
          <Div mb="2" height="1.5rem">
            <Text ns="projects" size="lg" bold transform="uppercase">
              {name}
            </Text>
          </Div>
          <Div height="calc(100% - 2rem)">
            <Text as="p" color="text-secondary-main" ns="projects" maxLines={2}>
              {`${slug}.shortDescription`}
            </Text>
          </Div>
        </Div>
        {/* <Div flex={["center", "space-between"]} width="100%" pt="3" border="border-light-main" borderSide="top"><Text color="text-secondary-main" size="xsm">{date}</Text></Div> */}
      </Div>
    </Link>
  );
};

export default ProjectCard;
