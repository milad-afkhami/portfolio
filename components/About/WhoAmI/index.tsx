import { Div } from "style-wiz";
import Text from "@kits/Text";
import AboutWhoAmIVideo from "./Video";
import __range from "lodash-es/range";
import type { FC } from "react";

interface WhoAmIProps {
  videoTitle: string;
}

const AboutWhoAmI: FC<WhoAmIProps> = (props) => {
  const { videoTitle } = props;
  const paragraphsCount = 7;

  return (
    <Div mt="4">
      <Div gap="2">
        <AboutWhoAmIVideo title={videoTitle} />
        {__range(paragraphsCount).map((i) => (
          <Div key={i}>
            <Text size="lg" as="p" align="justify" ns="about">
              {`p${i + 1}`}
            </Text>
          </Div>
        ))}
        <Div as="br" styles={{ clear: "both" }} />
      </Div>
    </Div>
  );
};

export default AboutWhoAmI;
