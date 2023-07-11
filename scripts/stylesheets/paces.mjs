import fs from "fs";

async function main() {
  let styles = `:root{`;

  // getting paces
  const paces = JSON.parse(
    fs.readFileSync(`./stylesheets/constants/paces.json`, "utf-8")
  );

  styles += Object.entries(paces).reduce((acc, [key, value]) => {
    acc += `--pace-${key}:${value}s;`;
    return acc;
  }, "");

  styles += `}`;

  fs.rmSync("./public/stylesheets/theme/paces.min.css", { force: true });
  fs.writeFileSync("./public/stylesheets/theme/paces.min.css", styles);
}

main();
