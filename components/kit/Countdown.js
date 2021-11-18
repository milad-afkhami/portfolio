import React from "react";
import { Div, Text } from "@kits";
import { useState, useEffect, useCountdown } from "@hooks";
import { TimeHelper } from "@helpers";
import { countdownDuration } from "@config";
import styled, { keyframes } from "styled-components";
import { c } from "@stylesheets";
import { noop } from "@utils";

const endAnimationDuration = 6;
const animationIterationDuration = 1;

export const Countdown = (props) => {
  const [ending, setEnding] = useState();
  const {
    duration = countdownDuration * 1000,
    interval = 1000,
    onEnd = noop,
  } = props || {};
  const [countdown, { start, reset }] = useCountdown(
    duration /* 10000 */,
    interval,
    { onEnding, onEnd }
  );

  function onEnding() {
    setEnding(true);
    setTimeout(() => {
      setEnding(false);
    }, endAnimationDuration * 1000);
  }

  useEffect(() => {
    start();
    return () => reset();
  }, []);

  return (
    <StyledText
      size="lg-b"
      color={countdown === 0 ? "assistive-error" : null}
      tag="p"
      noTranslation
      ending={ending}
    >
      {TimeHelper.formatDurationInMMSS(countdown / 1000)}
    </StyledText>
  );
};

const endingKeyframe = keyframes`
  from {
    color: ${c("assistive-error")};
  }
  to {
    color: ${c("text-primary")};
  }
`;

const StyledText = styled(Text)`
  animation-name: ${({ ending }) => (ending ? endingKeyframe : "")};
  animation-iteration-count: ${endAnimationDuration /
  animationIterationDuration};
  animation-duration: ${animationIterationDuration}s;
`;
