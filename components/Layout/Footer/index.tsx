import Div from "@kits/Div";
import FooterLinks from "./Links";
import FooterSocials from "./Socials";


const Footer = (props) => {
  return (
    <Div mt="5" py="5" mw="100%" border="border-light" borderSide="top">
      <Div row>
        <Div col={{ xs: 12, lg: 8 }}>
          <FooterLinks />
        </Div>
        {/* <Div col={{ xs: 12, lg: 4 }}>
          <Div flex={["end", , "column"]}>
            <FooterSocials />
          </Div>
        </Div> */}
      </Div>
    </Div>
  );
}



            
                
            
            
            
            export default Footer;