import Div from "@kits/Div";
import Text from "@kits/Text";



const ResumeEducationItem = ({ year, title, description }) => {
  return (
    <Div my="3">
      <Div>
        <Text size="sm" color="text-secondary">
          {year}
        </Text>
      </Div>
      <Div>
        <Text size="md-b">{title}</Text>
      </Div>
      <Div>
        <Text size="md" color="text-secondary">
          {description}
        </Text>
      </Div>
    </Div>
  );
};

            
                
            
            
            
            export default ResumeEducationItem;