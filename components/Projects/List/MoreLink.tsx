import Div from "@kits/Div";
import Link from "@kits/Link";
import Text from "@kits/Text";



const ProjectsMoreLink = (props) => {
  return (
    <Div mt="2">
      <Link
        href="/projects"
        width="100%"
        height="3rem"
        flex={["center", "center"]}
        bg="bg-secondary"
        hoverBg="bg-secondary-hover"
        curve="sm"
      >
        <Text size="md-b">home.projects.seeMore</Text>
      </Link>
    </Div>
  );
};

            
                
            
            
            
            export default ProjectsMoreLink;