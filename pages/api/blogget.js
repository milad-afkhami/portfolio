import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export default async function getBlogDetail(param1, res) {
  // const blogsPath = path.join(__dirname, "_files", "hello-world.mdx");

  console.log(
    fs.readdir(__dirname, (...result) => {
      console.log("__dirname", { __dirname, result });
    })
  );
  console.log(
    fs.readdir(path.join(__dirname), (...result) => {
      console.log("__dirname", { __dirname, result });
    })
  );
  try {
    console.log(
      fs.readdir(path.join(__dirname, "_files"), (...result) => {
        console.log("__dirname/_files", {
          dir: path.join(__dirname, "_files"),
          result,
        });
      })
    );
  } catch (error) {
    console.log({ error });
  }
  console.log(
    fs.readdir(path.join(__dirname, ".."), (...result) => {
      console.log("__dirname/..", { dir: path.join(__dirname, ".."), result });
    })
  );
  console.log(
    fs.readdir(path.join(__dirname, "..", ".."), (...result) => {
      console.log("__dirname/../..", {
        dir: path.join(__dirname, "..", ".."),
        result,
      });
    })
  );

  const slug = param1?.query?.slug || param1.slug;

  //   const postFilePath = path.join(blogsPath, `${slug}.mdx`);
  /*const source = fs.readFileSync(blogsPath, "utf8");

  if (!source) {
    if (res) res.status(404).json({ message: "blog.notFound" });
    else throw { code: 404, message: `User with id: ${id} not found.` };
  }

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: { remarkPlugins: [], rehypePlugins: [] },
    scope: data,
  });

  const blog = { source: mdxSource, frontMatter: data };*/

  if (res) res.status(200).json({ blog: { source: "", frontMatter: {} } });
  else return { blog: { source: "", frontMatter: {} } };
}
