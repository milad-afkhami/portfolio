import Div from "@kits/Div";
import Text from "@kits/Text";
import SectionTitle from "@components/Layout/Title/Section";

const GistTitle = (props) => {
  const { title } = props || {};

  return <SectionTitle title={title} />;

  return (
    <Div my="3">
      <Text size="h-md-b" as="h1" lineHeight="1.8">
        {title}
      </Text>
    </Div>
  );
};

export default GistTitle;
