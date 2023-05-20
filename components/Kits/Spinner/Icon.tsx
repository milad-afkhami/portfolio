import Div from "@kits/Div";
import colorVar from "@stylesheets/utils/var/color";
import { keyframes } from "goober";

const rotateInner = keyframes`
  0% {
    stroke-dasharray: 1px,200px;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100px,200px;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100px,200px;
    stroke-dashoffset: -125px;
  }
`;
const rotateOuter = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

interface SpinnerIconProps {
  color?: Colors;
  size?: number;
}

const SpinnerIcon = (props: SpinnerIconProps) => {
  const { color = "text-primary-main", size = 48 } = props;

  return (
    <Div css={{ animation: `${rotateOuter} 1.4s linear infinite` }}>
      <svg
        width={size}
        height={size}
        viewBox="22 22 44 44"
        color={colorVar(color)}
        role="progressbar"
      >
        <circle
          cx="44"
          cy="44"
          r="20.2"
          fill="none"
          strokeWidth="3.6"
          stroke={colorVar(color)}
          strokeDasharray="80px 200px"
          style={{ animation: `${rotateInner} 1.4s ease-in-out infinite` }}
        />
      </svg>
    </Div>
  );
};

export default SpinnerIcon;
