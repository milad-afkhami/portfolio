import Div from "@kits/Div";
import Text from "@kits/Text";

const GistSummary = (props) => {
  const { summary } = props || {};

  return (
    <Div my="3">
      <Text size="lg" as="p">
        {summary}
      </Text>
    </Div>
  );
};


            
                
            
            
            
            export default GistSummary;