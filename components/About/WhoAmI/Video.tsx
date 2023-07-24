// #region imports
import { styled } from "goober";
import breakpoints from "@stylesheets/constants/breakpoints.json";
import { isDevelopment } from "@configs/general";
import type { FC } from "react";
// #endregion

interface AboutWhoAmIVideoProps {
  title: string;
}

const AboutWhoAmIVideo: FC<AboutWhoAmIVideoProps> = ({ title }) => (
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  <StyledAboutWhoAmIVideo
    title={title}
    controls
    poster="/images/intro-poster.png"
    preload="false"
    muted={isDevelopment}
  >
    <source src="/intro.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </StyledAboutWhoAmIVideo>
);

const StyledAboutWhoAmIVideo = styled("video")`
  display: block;
  width: min(100%, 600px);
  border: 1px solid var(--color-border-light-main);
  border-radius: var(--curve-sm);
  margin: 0 auto var(--spacing-3) auto;
  @media (min-width: ${breakpoints.lg}px) {
    margin-left: var(--spacing-3);
    margin-bottom: 0;
    float: right;
  }
`;

export default AboutWhoAmIVideo;
