import React from "react";
import { Div, Image, Text } from "@kits";
import { useOnClickOutside, useState, useRef } from "@hooks";
import { DropDownItem } from "./Item";
import { DropDownImage } from "./Image";
import { DropDownLabel } from "./Label";

interface DropDownProps {
  items: Array<{ text: String, id: String | Number, image: String }>;
  selected: String | Number;
  onChange: Function;
}

export const DropDown = (props: DropDownProps) => {
  const { items, selected, onChange } = props || {};

  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef();

  useOnClickOutside(ref, () => setIsOpen(false));

  const selectedItem = items.find(({ id }) => selected === id);

  return (
    <Div
      mx="3"
      flex={["center", "center"]}
      ref={ref}
      position="relative"
      zIndex="2"
    >
      <Div
        border="border-dark"
        curve="xsm"
        width={"7rem"}
        pace="fast"
        responsive={{ md: { width: "8rem" } }}
        height="2.5rem"
        flex={["center", "start"]}
        cursor="pointer"
        onClick={() => setIsOpen(!isOpen)}
        px="1"
        hoverBg="bg-secondary"
      >
        <DropDownImage src={selectedItem.image} />
        <DropDownLabel label={selectedItem.text} />
      </Div>
      <Div
        position="absolute"
        dimensions={{ top: "100%" }}
        width="100%"
        height={`calc(${isOpen ? items.length : 0} * 100%)`}
        pace="fast"
        bg="bg-secondary"
        overflow="hidden"
        curve="xsm"
      >
        {items.map((item, i) => (
          <DropDownItem
            key={i}
            {...item}
            onClick={(e) => {
              setIsOpen(false);
              onChange(item.id);
            }}
          />
        ))}
      </Div>
    </Div>
  );
};
