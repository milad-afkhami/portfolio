import Div from "@kits/Div";
import Text from "@kits/Text";
import __range from "lodash-es/range";
import useTranslation from "@hooks/useTranslation";
import { isDevelopment } from "@config";

const WhoAmI = (props) => {
  const { videoTitle } = props;
  const { t } = useTranslation();
  const paragraphsCount = 7;

  return (
    <Div mt="4">
      <Div>
        <Div
          as="video"
          title={videoTitle}
          width="min(100%, 600px)"
          curve="sm"
          border="border-light"
          poster="/images/intro-poster.png"
          controls
          mb="2"
          responsive={{ sm: { ml: 3, mb: 0, css: { float: "right" } } }}
          preload={false}
          muted={isDevelopment}
        >
          <source src="/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Div>
        {__range(paragraphsCount).map((i) => (
          <Text size="lg" tag="p" mb="1" align="justify">
            {t(`about.p${i + 1}`)}
          </Text>
        ))}
        <Div as="br" css={{ clear: "both" }} />
      </Div>
    </Div>
  );
};

export default WhoAmI;
