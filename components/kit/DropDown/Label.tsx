import Div from "@kits/Div";
import Text from "@kits/Text";


const DropDownLabel = (props) => {
  const { label } = props || {};
  
  return (
    <Div flex={["center", "center"]}>
      <Text size="sm-b">{label}</Text>
    </Div>
  );
};


            
                
            
            
            
            export default DropDownLabel;