import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export default async function getBlogDetail(param1, res) {
  // const blogsPath = path.join(__dirname, "..", "..", "..", "data", "blog");
  // const blogsPath = path.join(process.cwd(), "data", "blog");

  const blogsPath = path.join(__dirname, "data", "blog");
  const blogsPath2 = path.join(__dirname, "data");

  console.log("getBlogDetail", { blogsPath, blogsPath2 });

  const path1 = fs.readdir(blogsPath, { withFileTypes: true });

  const path2 = fs.readdir(blogsPath2, { withFileTypes: true });

  Promise.allSettled([path1, path2]).finally((...res) => {
    console.log("getBlogDetail2", { res, path1, path2 });
  });

  const slug = param1?.query?.slug || param1.slug;

  const postFilePath = path.join(blogsPath, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  if (!source) {
    if (res) res.status(404).json({ message: "blog.notFound" });
    else throw { code: 404, message: `User with id: ${id} not found.` };
  }

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: { remarkPlugins: [], rehypePlugins: [] },
    scope: data,
  });

  const blog = { source: mdxSource, frontMatter: data };

  if (res) res.status(200).json({ blog });
  else return { blog };
}
