import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import type { MDXResult } from "@_types/components";

export default async function getGistDetail(
  slug: string
): Promise<MDXResult<IGist>> {
  const gistFilePath = path.join(process.cwd(), "data", "gist", `${slug}.mdx`);
  const source = fs.readFileSync(gistFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    scope: data,
    // Optionally pass remark/rehype plugins mdxOptions: { remarkPlugins: [], rehypePlugins: [] },
  });

  return {
    source: mdxSource,
    frontMatter: data as IGist,
  };
}
