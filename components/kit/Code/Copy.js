import { Div, Image } from "@kits";

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
      cursor="copy"
      onClick={props.onClick}
      css={{ display: "none" }}
    >
      <Image src="/images/icons/copy.png" width="20px" height="20px" />
    </Div>
  );
}
