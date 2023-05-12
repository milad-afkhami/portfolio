import Div from "@kits/Div";
import Text from "@kits/Text";

const ProfileJob = (props) => {
  return (
    <Div>
      <Div
        mb="3"
        css={{ textAlign: "center" }}
        responsive={{ md: { css: { textAlign: "start" } } }}
      >
        <Text size="lg-b" tag="h2">
          home.profile.job
        </Text>
      </Div>
      <Div
        css={{ textAlign: "center" }}
        responsive={{
          md: { css: { textAlign: "start", "*": { whiteSpace: "pre-line" } } },
        }}
      >
        <Text
          size="lg"
          color="text-secondary"
          tag="p"
          lineHeight="2"
          Mw="600px"
        >
          home.profile.jobDescription
        </Text>
      </Div>
    </Div>
  );
};

export default ProfileJob;
