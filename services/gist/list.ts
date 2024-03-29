import matter from "gray-matter";
import * as fs from "fs";
import * as path from "path";

export default async function getGistsList() {
  const GISTS_PATH = path.join(process.cwd(), "data", "gist");

  const gistFilePaths = fs
    .readdirSync(GISTS_PATH)
    .filter((_path) => /\.mdx?$/.test(_path));

  const gists = gistFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(GISTS_PATH, filePath));
    const {
      // content,
      data,
    } = matter(source);

    return {
      ...data,
      slug: filePath.replace(/\.mdx?$/, ""),
    };
  });
  // .sort((a, b) => a.value - b.value);

  return gists as IGist[];
}
