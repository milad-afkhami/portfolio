import Div from "@kits/Div";
import Image from "@kits/Image";
import { MDXRemote as NextMDXRemote } from "next-mdx-remote";

const components = { Image, Div };

const MDXRemote = function (props) {
  return (
    <NextMDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
};



            
                
            
            
            
            export default MDXRemote;