import Div from "@kits/Div";
import Text from "@kits/Text";
import { AboutAvatar } from "@components/About/Avatar";
import { ResumeHeaderContact } from "./Contact";



const ResumeHeader = () => {
  return (
    <Div
      flex={["start", "between"]}
      height="var(--resume-header-height)"
      p="4"
      border="border-dark"
      borderSide="bottom"
    >
      <Div flexPortion="1" height="100%">
        <Div mb="3">
          <Text size="h-xl-b">home.profile.name</Text>
        </Div>
        <Div>
          <Text size="lg" color="text-secondary">
            home.profile.job
          </Text>
        </Div>
      </Div>
      <Div flexPortion="1" height="100%" flex={["center", "center"]}>
        <AboutAvatar static />
      </Div>
      <ResumeHeaderContact />
    </Div>
  );
};

            
                
            
            
            
            export default ResumeHeader;