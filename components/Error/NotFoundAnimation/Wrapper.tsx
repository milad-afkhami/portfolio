import { styled, keyframes } from "goober";

const scales = keyframes`
  from {
    transform: scale(0.98);
  }
  to {
    transform: scale(1);
  }
`;
const rotateBun = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50%,
  60% {
    transform: rotate(-20deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;
const eyes = keyframes`
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(30deg);
  }
`;
const leftSparks = keyframes`
  0% {
    opacity: 0;
  }
`;
const dash = keyframes`
  0%,
  30% {
    fill: var(--color-text-secondary);
    stroke-dashoffset: 0;
  }
  80%,
  100% {
    fill: transparent;
    stroke-dashoffset: -200;
  }
`;

const NotFoundAnimationWrapper = styled("div")`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .mask {
    animation: ${scales} 3s alternate infinite;
    transform-origin: center;
  }
  .lower-bun {
    animation: ${rotateBun} 14s cubic-bezier(0.1, 0.49, 0.41, 0.97) infinite;
    transform-origin: center;
  }
  .upper-bun {
    animation: ${rotateBun} 7s 1s cubic-bezier(0.1, 0.49, 0.41, 0.97) infinite;
    transform-origin: center;
  }

  .left-sparks {
    animation: ${leftSparks} 4s alternate infinite;
    transform-origin: 150px 156px;
  }

  .right-sparks {
    animation: ${leftSparks} 4s alternate infinite;
    transform-origin: 310px 150px;
  }

  .eyes {
    animation: ${eyes} 2s alternate infinite;
    transform-origin: center;
  }

  .path {
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
    animation: ${dash} 4s alternate infinite;
  }
`;

export default NotFoundAnimationWrapper;
