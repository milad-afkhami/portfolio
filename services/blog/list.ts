import matter from "gray-matter";
import * as fs from "fs";
import * as path from "path";

export default async function getBlogsList(): Promise<Array<IBlog>> {
  const BLOGS_PATH = path.join(process.cwd(), "data", "blog");

  const blogFilePaths = fs
    .readdirSync(BLOGS_PATH)
    .filter((_path) => /\.mdx?$/.test(_path));

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

  return blogs as Array<IBlog>;
}
