import Div from "@kits/Div";
import Text from "@kits/Text";
import useToggle from "@hooks/useToggle";
import type { HOCFunctionalComponent } from "@_types/components";
import type TextProps from "./Text/props";

interface ExpandableTextProps extends TextProps {
  defaultExpanded?: boolean;
  maxLines?: number;
}

const ExpandableText: HOCFunctionalComponent<ExpandableTextProps> = (props) => {
  const { children, defaultExpanded = false, maxLines = 1, ...rest } = props;

  const [isExpanded, toggleExpanded] = useToggle(defaultExpanded);

  if (!children) return null;

  return (
    <Div
      position="relative"
      responsive={{
        sm: {
          styles: {
            [`& > .expandable-text__content`]: { display: "block !important" },
          },
        },
      }}
    >
      <Text
        as="p"
        className="expandable-text__content"
        maxLines={isExpanded ? undefined : maxLines}
        {...rest}
      >
        {children}
      </Text>
      {!isExpanded && (
        <Div
          position="absolute"
          dimensions={{ bottom: 0, right: 0 }}
          onClick={toggleExpanded}
          bg="bg-tertiary-main"
          px="2"
          curve="xsm"
          responsive={{ sm: { display: "none" } }}
        >
          <Text size="sm">kits.more</Text>
        </Div>
      )}
    </Div>
  );
};

export default ExpandableText;
