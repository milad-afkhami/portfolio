import { Div, Icon } from "@kits";

export function CopyCode(props) {
  return (
    <Div
      id="copy-code"
      position="absolute"
      dimensions={{ top: "0.25rem", right: "0.25rem" }}
      bg="text-secondary"
      hoverBg="text-tertiary"
      p="2"
      curve="xsm"
      flex={["center", "center"]}
      cursor="pointer"
      onClick={props.onClick}
      // css={{ display: "none" }}
      pace="xFast"
      opacity="0"
    >
      <Icon
        name="copy-outline"
        size="20px"
        color="bg-secondary"
        hoverColor={null}
        bold
      />
    </Div>
  );
}
