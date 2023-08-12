import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import type { MDXResult } from "@_types/components";

export default async function getBlogDetail(
  slug: string
): Promise<MDXResult<IBlog>> {
  const blogFilePath = path.join(process.cwd(), "data", "blog", `${slug}.mdx`);
  const source = fs.readFileSync(blogFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    scope: data,
    // Optionally pass remark/rehype plugins mdxOptions: { remarkPlugins: [], rehypePlugins: [] },
  });

  return {
    source: mdxSource,
    frontMatter: data as IBlog,
  };
}
