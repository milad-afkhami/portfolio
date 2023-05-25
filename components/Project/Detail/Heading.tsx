import Div from "@kits/Div";
import Image from "@kits/Image";
import Link from "@kits/Link";
import Text from "@kits/Text";
import type { FC } from "react";
import type { PropsWithIndex } from "@_types/components";

type ProjectHeadingProps = PropsWithIndex<
  Pick<IProject, "logo" | "link" | "name">
>;

const ProjectHeading: FC<ProjectHeadingProps> = (props) => {
  const { index, name, logo, link = "" } = props;

  return (
    <Div
      flex={["center", "between"]}
      py="3"
      mb="4"
      border="border-light-main"
      borderSide="bottom"
    >
      <Div flex={["center", "start"]}>
        <Text size="h-lg" bold>{`${index}.`}</Text>
        <Div mx="2">
          <Text size="h-md" bold as="h2" noTranslation>
            {name}
            {/* {`${slug}.name`} */}
          </Text>
        </Div>
        <Div flex={["center", "center"]} curve="circle" overflow="hidden">
          <Image
            src={logo}
            width={32}
            height={32}
            // placeholder="blur"
            withShimmer
            alt={name}
          />
        </Div>
      </Div>
      {Array.isArray(link) ? (
        <Div flex={["center", "end"]}>
          {link.map((item, i) => (
            <>
              <Link href={item} outerLink underline>
                <Text size="sm">
                  {item.replace("https://", "").replace("www.", "")}
                </Text>
              </Link>
              {link[i + 1] ? (
                <Div mx="1">
                  <Text size="md" noTranslation>
                    ,
                  </Text>
                </Div>
              ) : null}
            </>
          ))}
        </Div>
      ) : (
        <Link href={link} outerLink underline>
          <Text size="sm">
            {link.replace("https://", "").replace("www.", "")}
          </Text>
        </Link>
      )}
    </Div>
  );
};

export default ProjectHeading;
