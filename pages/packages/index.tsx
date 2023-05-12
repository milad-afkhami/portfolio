import Div from "@kits/Div";
import { Head } from "@components/SEO";
import { PageTitle, SectionTitle } from "@components/Layout";



const PackagesPage = (props) => {
  return (
    <>
      <Head canonical="/packages" />
      <Div width="100%" py="3">
        <PageTitle title="packages.title" />
        <SectionTitle title="layout.message.comingSoon" />
      </Div>
    </>
  );
}

            
                
            
            
            
            export default PackagesPage;