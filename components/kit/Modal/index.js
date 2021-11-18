import React, { ReactElement, ComponentType } from "react";
import { Div, Icon, Text } from "@kits";
import { useIsomorphicPortal, useState } from "@hooks";
import { createPortal } from "react-dom";
import { StyledModalWrapper } from "./StyledWrapper";
import { c } from "@stylesheets";

interface IModalProps {
  children: ReactElement;
  isOpen: Boolean;
  unmountOnClose?: Boolean;
  onClose?: Function;
  title?: String | ReactElement;
}

export const Modal: ComponentType<IModalProps> = (props) => {
  const { isOpen, unmountOnClose, children, title, onClose } = props || {};

  return !unmountOnClose || isOpen
    ? useIsomorphicPortal(
        <StyledModalWrapper
          isOpen={isOpen}
          onClick={(e) => {
            if (e.target.className.includes("StyledModalWrapper")) onClose(e);
          }}
        >
          <Div
            {...(isOpen ? { p: "3 4" } : {})}
            width="min(600px, 70%)"
            curve="sm"
            css={{
              background: `linear-gradient(148.62deg, ${c(
                "bg-tertiary"
              )} 3.37%, ${c("bg-primary")} 50.04%)`,
            }}
            Mh="70%"
            overflowY="auto"
            hiddenScrollbar
          >
            <Div height="3rem" flex={["center", "between"]} mb="3">
              <Div>
                <Text size="h-sm-b" css={{ textTransform: "capitalize" }}>
                  {title}
                </Text>
              </Div>
              <Div>
                <Icon name="dismiss" size="30" onClick={onClose} />
              </Div>
            </Div>
            <Div>{children}</Div>
          </Div>
        </StyledModalWrapper>,
        "#modal__wrapper"
      )
    : null;
};
