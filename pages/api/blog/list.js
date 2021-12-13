import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";

export default async function blogsList(req, res) {
  const blogsPath = path.join(process.cwd(), "data", "blog");

  console.log({ blogsPath, __dirname });

  const blogsPath2 = path.join(__dirname, "data");
  const blogsPath3 = path.join(__dirname, "..");
  const blogsPath4 = path.join(__dirname, "..", "..");
  const blogsPath5 = path.join(__dirname, "..", "..", "..");

  console.log({ blogsPath2, blogsPath3 });

  fs.readdir(blogsPath2, (...result) => {
    console.log("blogsPath2", { result });
  });

  fs.readdir(blogsPath3, (...result) => {
    console.log("blogsPath3", { result });
  });

  fs.readdir(blogsPath4, (...result) => {
    console.log("blogsPath4", { result });
  });

  fs.readdir(blogsPath5, (...result) => {
    console.log("blogsPath5", { result });
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
