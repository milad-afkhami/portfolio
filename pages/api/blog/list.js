import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default async function blogsList(req, res) {
  const blogsPath = path.join(process.cwd(), "data", "blog");

  const blogsFilePaths = fs
    .readdirSync(blogsPath)
    .filter((path) => /\.mdx?$/.test(path));

  const blogs = blogsFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(blogsPath, filePath));
    const { data, ...rest } = matter(source);

    return {
      ...data,
      slug: filePath?.replace?.(/\.mdx?$/, ""),
    };
  });

  if (res) res.status(200).json({ blogs });
  else return { blogs };
}
