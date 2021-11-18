import React from "react";
import { Div } from "@kits";
import OtpInput from "react-otp-input";
import styled from "styled-components";
import { c, setTextTypography } from "@stylesheets";

export function CodeInput({ value, onChange, count = 6, separator = null }) {
  return (
    <StyledDiv>
      <OtpInput
        value={value}
        onChange={onChange}
        numInputs={count}
        separator={separator}
        className="otp-input__slice"
      />
    </StyledDiv>
  );
}

const StyledDiv = styled(Div)((props) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  direction: "ltr",
  height: "6rem",
  margin: "3rem 0 2rem 0",
  "& > div": {
    display: "flex",
    width: "70%",
    height: "100%",
    justifyContent: "center",
  },
  "& .otp-input__slice": {
    ...setTextTypography("h-lg"),
    display: "flex",
    alignItems: "center",
    width: "calc(25% - 1rem)",
    justifyContent: "center",
    margin: "0 0.5rem",
    input: {
      width: "100% !important",
      background: "none",
      border: "none",
      borderBottom: "3px solid " + c("border-dark"),
    },
  },
}));
