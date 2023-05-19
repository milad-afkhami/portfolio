import { styled } from "goober";
import __noop from "lodash-es/noop";
import type { FC, PropsWithChildren } from "react";

interface MenuTogglerProps {
  open: boolean;
  toggle: NoneToVoidFunction;
}

type StyledDivProps = PropsWithChildren<{
  open: boolean;
  onClick: NoneToVoidFunction;
}>;

const StyledDiv = styled<StyledDivProps>("div")`
  transform: scale(0.4);
  display: flex;
  flex-direction: column;
  width: 70px;
  cursor: pointer;
  span {
    background: var(--color-text-primary-main);
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

const MenuToggler: FC<MenuTogglerProps> = (props) => {
  const { open, toggle } = props;

  return (
    <StyledDiv open={open} onClick={!open ? toggle : __noop}>
      <span />
      <span />
      <span />
    </StyledDiv>
  );
};

export default MenuToggler;
