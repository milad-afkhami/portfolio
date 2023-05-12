import Div from "@kits/Div";
import Text from "@kits/Text";



const ResumeLanguageItem = ({ name, proficiency }) => {
  return (
    <Div mb="2">
      <Div>
        <Text size="md-b">{name}</Text>
      </Div>
      <Div>
        <Text
          size="sm"
          color="text-secondary"
        >{`resume.languages.proficiency.level.${proficiency}`}</Text>
      </Div>
    </Div>
  );
};

            
                
            
            
            
            export default ResumeLanguageItem;