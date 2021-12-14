import matter from "gray-matter";
import * as fs from "fs";
import * as path from "path";

export const getBlogsList = async () => {
  const BLOGS_PATH = path.join(process.cwd(), "data", "blog");

  const blogFilePaths = fs
    .readdirSync(BLOGS_PATH)
    .filter((path) => /\.mdx?$/.test(path));

  const blogs = blogFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(BLOGS_PATH, filePath));
    const {
      // content,
      data,
    } = matter(source);

    return {
      ...data,
      slug: filePath.replace(/\.mdx?$/, ""),
    };
  });

  return blogs;
};
