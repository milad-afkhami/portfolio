import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";

export default async function blogsList(req, res) {
  // console.log("blogsList", req);
  const blogsPath = path.join(__dirname, "data", "blog");
  const blogsPath2 = path.join(__dirname, "blog");

  console.log("blogsList", { blogsPath, blogsPath2 });

  // console.log({ __dirname, "process.cwd": process.cwd(), blogsPath });

  const path1 = fs.readdir(blogsPath, { withFileTypes: true }, console.log);

  const path2 = fs.readdir(blogsPath2, { withFileTypes: true }, console.log);

  Promise.allSettled([path1, path2]).finally((...res) => {
    console.log("blogsList2", { res, path1, path2 });
  });

  // const blogsFilePaths = fs
  //   .readdirSync(blogsPath)
  //   .filter((path) => /\.mdx?$/.test(path));

  // const blogs = blogsFilePaths.map((filePath) => {
  //   const source = fs.readFileSync(path.join(blogsPath, filePath));
  //   const { data, ...rest } = matter(source);

  //   return {
  //     ...data,
  //     slug: filePath?.replace?.(/\.mdx?$/, ""),
  //   };
  // });

  if (res) res.status(200).json({ blogs: [] });
  else return { blogs: [] };
}
