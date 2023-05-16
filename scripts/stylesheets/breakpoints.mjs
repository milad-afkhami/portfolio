import fs from "fs";

async function main() {
  let styles = `:root{`;

  // getting breakpoints
  const breakpoints = JSON.parse(
    fs.readFileSync(`./stylesheets/constants/breakpoints.json`, "utf-8")
  );

  styles += Object.entries(breakpoints).reduce((acc, [key, value]) => {
    acc += `--breakpoint-${key}:${value}px;`;
    return acc;
  }, "");

  styles += `}`;

  fs.rmSync("./public/stylesheets/theme/breakpoints.min.css", { force: true });
  fs.writeFileSync("./public/stylesheets/theme/breakpoints.min.css", styles);
}

main();
