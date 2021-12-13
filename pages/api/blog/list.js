import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";

export default async function blogsList(req, res) {
  const blogsPath = path.join(process.cwd(), "data", "blog");

  const directory = path.resolve(process.cwd());
  const dataDirectory = path.resolve(process.cwd(), "data");
  const dataDirectory2 = path.join(process.cwd(), "data");

  const blogsPath2 = path.join(__dirname);
  const blogsPath3 = path.join(__dirname, "..");
  const blogsPath3_2 = path.join(__dirname, "..", "pages");
  const blogsPath3_3 = path.join(__dirname, "..", "pages", "api");
  const blogsPath3_4 = path.join(__dirname, "..", "pages", "api", "blog");
  const blogsPath4 = path.join(__dirname, "..", "..");
  const blogsPath5 = path.join(__dirname, "..", "..", "..");
  const blogsPath6 = path.join(__dirname, "..", "..", "..", "..");

  fs.readdir(blogsPath, (...result) => {
    console.log("blogsPath", { blogsPath, result });
  });

  fs.readdir(directory, (...result) => {
    console.log("directory", { directory, result });
  });

  fs.readdir(dataDirectory, (...result) => {
    console.log("dataDirectory", { dataDirectory, result });
  });

  fs.readdir(dataDirectory2, (...result) => {
    console.log("dataDirectory2", { dataDirectory2, result });
  });

  fs.readdir(blogsPath2, (...result) => {
    console.log("blogsPath2", { blogsPath2, result });
  });

  fs.readdir(blogsPath3, (...result) => {
    console.log("blogsPath3", { blogsPath3, result });
  });

  fs.readdir(blogsPath3_2, (...result) => {
    console.log("blogsPath3_2", { blogsPath3_2, result });
  });

  fs.readdir(blogsPath3_3, (...result) => {
    console.log("blogsPath3_3", { blogsPath3_3, result });
  });

  fs.readdir(blogsPath3_4, (...result) => {
    console.log("blogsPath3_4", { blogsPath3_4, result });
  });

  fs.readdir(blogsPath4, (...result) => {
    console.log("blogsPath4", { blogsPath4, result });
  });

  fs.readdir(blogsPath5, (...result) => {
    console.log("blogsPath5", { blogsPath5, result });
  });

  fs.readdir(blogsPath6, (...result) => {
    console.log("blogsPath6", { blogsPath6, result });
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
