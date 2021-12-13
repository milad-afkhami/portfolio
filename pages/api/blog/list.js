import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";

export default async function blogsList(req, res) {
  // console.log("blogsList", req);
  const blogsPath = path.join(__dirname, "data", "blog");
  const blogsPath2 = path.join(__dirname, "blog");

  console.log("blogsList", { blogsPath, blogsPath2 });

  // console.log({ __dirname, "process.cwd": process.cwd(), blogsPath });

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
