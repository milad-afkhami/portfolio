import __range from "lodash-es/range";
import StyledSvg from "./StyledSvg";
import LinearGradient from "@components/Skeleton/LinearGradient";

const BlogCardLoadings = (props) => {
  const {} = props || {};

  return (
    <StyledSvg
      role="img"
      width="100%"
      height="1200"
      aria-labelledby="loading-aria"
      viewBox="0 0 100% 1200"
      preserveAspectRatio="none"
    >
      <title id="loading-aria">Loading...</title>
      <rect
        x={0}
        y={0}
        width="100%"
        height="100%"
        clipPath="url(#clip-path)"
        style={{ fill: 'url("#fill")' }}
      />
      <defs>
        <clipPath id="clip-path">
          {__range(9).map((i) => (
            <rect
              x={`calc(${(i % 3) * 33}% + ${(i % 3) * 8}px)`}
              y={Math.floor(i / 3) * 444}
              rx={8}
              ry={8}
              width={"32.5%"}
              height={"428"}
            />
          ))}
        </clipPath>
        <LinearGradient id="fill" />
      </defs>
    </StyledSvg>
  );
};

export default BlogCardLoadings;
