import Div from "@kits/Div";
import { useOnClickOutside, useState, useRef } from "@hooks";
import { DropDownItem } from "./Item";
import { DropDownImage } from "./Image";
import { DropDownLabel } from "./Label";

/**
 * @typedef {Array<{text:string, id:string|number, image:string}>} DropDownItems
 *
 * @param {{ items:DropDownItems, selected:string|number, onChange: Function }} props
 */

const DropDown = (props) => {
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
      <DropDownItem
        {...(selectedItem || {})}
        onClick={() => setIsOpen(!isOpen)}
        border="border-dark"
        curve="xsm"
        width="7rem"
        pace="fast"
        responsive={{ md: { width: "8rem" } }}
      />
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



            
                
            
            
            
            export default DropDown;