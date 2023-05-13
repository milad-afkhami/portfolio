import Div from "@kits/Div";
import Icon from "@kits/Icon";

const HeaderGithub = (props) => {
  return (
    <Div
      as="a"
      height="2.5rem"
      flex={["center", "center"]}
      href="https://github.com/miladMAPS/portfolio"
      target="blank"
    >
      <Icon name="github" size="28px" />
    </Div>
  );
};

export default HeaderGithub;
