import { exec, execSync } from "child_process";
import chalk from "chalk";

const nodeMajorVersion = process.version.slice(1, 3);
if (nodeMajorVersion < 14) {
  throw new Error("`fs.rm` method requires node version 14.14.0 or higher.");
}

const platform = process.argv[2];

// listing all scripts in current file
const listBuffer = execSync("ls", { cwd: "./scripts/stylesheets" });

listBuffer
  // converting buffer to string
  .toString()
  // split files
  .split("\n")
  // filtering ending `\n` and current file
  .filter((it) => Boolean(it) && !it.includes("index"))
  .map((it) => it.split(".")[0])
  // mapping over each one
  .forEach((type) => {
    // running each one synchronously
    // synchronous approach is 2.4x faster than asynchronous one
    exec(
      // --experimental-json-modules flag enables experimental support for import of JSON files
      `node --experimental-json-modules ./scripts/stylesheets/${type}.mjs ${platform}`,
      (error, stdout, stderr) => {
        if (error) {
          // prettier-ignore
          console.log(chalk.red("Generating", type, "stylesheets failed.\n", "Name:", error.name, "\n", "Message:", error.message, "\n", "Stack:", error.stack, ";"));
        } else {
          // prettier-ignore
          console.log(chalk.green("Generating", chalk.underline(type), "stylesheets succeeded"));
          // console.log("\x1b[32m%s\x1b[0m", `Generating ${type} stylesheets succeeded`);
        }
      }
    );
  });
