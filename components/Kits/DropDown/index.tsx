import { useState, useRef, useCallback, type FC } from "react";
import { Div } from "style-wiz";
import { If, Then } from "@kits/ConditionalRendering";
import DropDownItem, { type DropDownItemProps } from "./Item";
import useOnClickOutside from "@hooks/useOnClickOutside";
import responsiveStyles from "@helpers/responsiveStyles";
import { responsiveUpperBoundBreakpoint } from "@configs/general";

interface DropDownProps {
  items: DropDownItemProps[];
  selected: string | number;
  onChange: (value: DropDownItemProps["id"]) => void;
}

const DropDown: FC<DropDownProps> = (props) => {
  const { items, selected, onChange } = props;

  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const onClickOutside = useCallback(() => {
    setIsOpen(false);
  }, []);

  useOnClickOutside(ref, onClickOutside);

  const selectedItem = items.find(({ id }) => selected === id);

  return (
    <Div
      mx="3"
      flex={["center", "center"]}
      ref={ref}
      position="relative"
      zIndex="2"
    >
      <If condition={selectedItem}>
        <Then>
          <DropDownItem
            {...selectedItem!}
            onClick={() => setIsOpen(!isOpen)}
            border="border-dark-main"
            curve="xsm"
            width="7rem"
            pace="fast"
            styles={responsiveStyles(responsiveUpperBoundBreakpoint, {
              width: "8rem",
            })}
          />
        </Then>
      </If>
      <Div
        position="absolute"
        dimensions={{ top: "100%" }}
        width="100%"
        height={`calc(${isOpen ? items.length : 0} * 100%)`}
        pace="fast"
        bg="bg-secondary-main"
        overflow="hidden"
        curve="xsm"
      >
        {items.map((item) => (
          <DropDownItem
            key={item.id}
            {...item}
            onClick={() => {
              setIsOpen(false);
              onChange(item.id);
            }}
          />
        ))}
      </Div>
    </Div>
  );
};

export default DropDown;
