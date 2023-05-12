import { INTERVALS } from "@constants";



const ServerError = (props) => {
  return <h1>500 - Server-side error occurred</h1>;
}

export async function getStaticProps(context) {
  return {
    props: {},
    revalidate: INTERVALS.A_WEEK,
  };
}

            
                
            
            
            
            export default ServerError;