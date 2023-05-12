import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const getBlogDetail = async (slug) => {
  const BLOGS_PATH = path.join(process.cwd(), "data", "blog");

  const blogFilePath = path.join(BLOGS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(blogFilePath);

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
    blog: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export default getBlogDetail;
