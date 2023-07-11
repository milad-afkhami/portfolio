// #region imports
import Div from "@kits/Div";
import Text from "@kits/Text";
import IconButton from "@kits/IconButton";
import __lowerCase from "lodash-es/lowerCase";
import type { FC } from "react";
// #endregion

interface PackageCardsProps {
  items: Array<IPackage>;
}

const PackageCards: FC<PackageCardsProps> = (props) => {
  const { items } = props;

  return (
    <Div>
      {items.map(
        ({
          name,
          description,
          homepage,
          keywords,
          latestVersion,
          // readmeFilename,
        }) => (
          <Div
            key={name}
            curve="sm"
            overflow="hidden"
            bg="bg-secondary-main"
            position="relative"
            p="3"
            flex={["start", "start", "column"]}
            gap="3"
          >
            <Div flex={["center", "between"]} width="100%">
              <div>
                <Text size="h-sm" bold noTranslation transform="capitalize">
                  {__lowerCase(name)}
                </Text>
              </div>
              <Div display="flex">
                <a target="_blank" href={homepage}>
                  <IconButton name="github" size="h-sm" />
                </a>
                <a
                  target="_blank"
                  href={`https://www.npmjs.com/package/${name}`}
                >
                  <IconButton name="external-link" size="h-sm" />
                </a>
              </Div>
            </Div>
            <Div>
              <Text as="p" size="md">
                {description}
              </Text>
            </Div>
            <Div display="flex" gap="2">
              <Div>
                <Text size="sm" bold ns="packages">
                  latestVersion
                </Text>
              </Div>
              <Div>
                <Text size="md" as="em" noTranslation>
                  {latestVersion}
                </Text>
              </Div>
            </Div>
            <Div flex={[, , , "wrap"]} gap="2">
              <Div>
                <Text size="sm" bold ns="packages">
                  keywords
                </Text>
              </Div>
              <Div>
                <Text size="sm" ns="packages" as="em" noTranslation>
                  {keywords.join(", ")}
                </Text>
              </Div>
            </Div>
          </Div>
        )
      )}
    </Div>
  );
};

export default PackageCards;
