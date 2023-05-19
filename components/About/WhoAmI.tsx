import Div from "@kits/Div";
import Text from "@kits/Text";
import __range from "lodash-es/range";
import { isDevelopment } from "@configs/general";
import type { FC } from "react";

interface WhoAmIProps {
  videoTitle: string;
}

const WhoAmI: FC<WhoAmIProps> = (props) => {
  const { videoTitle } = props;
  const paragraphsCount = 7;

  return (
    <Div mt="4">
      <Div gap="2">
        <Div
          as="video"
          title={videoTitle}
          width="min(100%, 600px)"
          curve="sm"
          border="border-light-main"
          poster="/images/intro-poster.png"
          controls
          responsive={{ sm: { ml: 3, mb: 0, css: { float: "right" } } }}
          preload={false}
          muted={isDevelopment}
        >
          <source src="/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Div>
        {__range(paragraphsCount).map((i) => (
          <Div key={i}>
            <Text size="lg" as="p" align="justify" ns="about">
              {`about.p${i + 1}`}
            </Text>
          </Div>
        ))}
        <Div as="br" css={{ clear: "both" }} />
      </Div>
    </Div>
  );
};

export default WhoAmI;
