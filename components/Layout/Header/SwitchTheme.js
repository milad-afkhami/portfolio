import React from "react";
import { useTheme } from "@hooks";
import { Div, Icon } from "@kits";
import styled from "styled-components";
import { THEMES } from "@constants";

export function HeaderSwitchTheme(props) {
  const {} = props || {};
  const { theme, setTheme } = useTheme();

  const onChangeTheme = () => {
    console.log(theme);
    setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
  };
  return (
    <StyledSwich>
      <input type="checkbox" id="theme-switch" onChange={onChangeTheme} />
      <label for="theme-switch" class="label">
        <i class="fas fa-moon"></i>
        <i class="fas fa-sun"></i>
        <div class="ball" />
      </label>
    </StyledSwich>
  );
}

const StyledSwich = styled.div`
  input[type="checkbox"] {
    opacity: 0;
    position: absolute;
  }

  label {
    cursor: pointer;
    width: 3rem;
    height: 1.5rem;
    background-color: var(--color-text-primary);
    display: flex;
    border-radius: 1.5rem;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin: 0;
  }

  .ball {
    width: 1.3rem;
    height: 1.3rem;
    background-color: var(--color-bg-primary);
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
    border-radius: 50%;
    transition: transform 0.2s linear;
  }

  input[type="checkbox"]:checked + label .ball {
    transform: translateX(24px);
  }
`;
