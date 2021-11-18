import React, { ReactElement, Children } from "react";
import { Div, Text } from "@kits";
import { useState } from "@hooks";
import { Tab } from "./Tab";
import { TabPanel } from "./TabPanel";

interface ITabItem {
  label: String;
  count: String | Number;
  disabled: Boolean;
  onClick: Function;
}

interface ITabs {
  items: Array<ITabItem>;
  children: ReactElement;
  onChange: Function;
  active: Number;
  effect: "fade" | "suddenly";
}

export const Tabs = (props: ITabs) => {
  const {
    items = [],
    children,
    onChange,
    active,
    effect = "fade",
    ...rest
  } = props || {};

  return (
    <>
      <Div mb="5" width="100%" {...rest}>
        <Div flex={["center", "center"]} mx="-3">
          {items.map(({ label, count }, i) => (
            <Tab
              key={i}
              label={label}
              count={count}
              active={active == i}
              onClick={() => onChange(i)}
            />
          ))}
        </Div>
      </Div>
      <Div position="relative">
        {Children.map(children, (child, i) => (
          <TabPanel active={active == i} effect={effect} key={i}>
            {child}
          </TabPanel>
        ))}
      </Div>
    </>
  );
};
