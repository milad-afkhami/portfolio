import React from "react";
import { Div } from "@kits";
import styled from "styled-components";

export const MenuToggler = (props) => {
  const { open, toggle } = props || {};

  return (
    <StyledDiv open={open} onClick={toggle}>
      <span></span>
      <span></span>
      <span></span>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  transform: scale(0.4);
  display: flex;
  flex-direction: column;
  width: 70px;
  cursor: pointer;
  span {
    background: var(--color-text-primary);
    border-radius: 10px;
    height: 7px;
    margin: 7px 0;
    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }
  span:nth-of-type(1) {
    width: 50%;
  }
  span:nth-of-type(2) {
    width: 100%;
  }
  span:nth-of-type(3) {
    width: 75%;
  }
  &[open] span:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotatez(45deg) translate(8px, 0px);
  }
  &[open] span:nth-of-type(2) {
    transform-origin: top;
    transform: rotatez(-45deg);
  }
  &[open] span:nth-of-type(3) {
    transform-origin: bottom;
    width: 50%;
    transform: translate(30px, -11px) rotatez(45deg);
  }
`;
