import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";



const getGistDetail = async (slug) => {
  const GISTS_PATH = path.join(process.cwd(), "data", "gist");

  const gistFilePath = path.join(GISTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(gistFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    gist: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

            export default getGistDetail;