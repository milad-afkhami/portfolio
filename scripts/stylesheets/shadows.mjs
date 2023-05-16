import fs from "fs";

async function main() {
  let styles = `:root{`;

  // getting shadows
  const shadows = JSON.parse(
    fs.readFileSync(`./stylesheets/constants/shadows.json`, "utf-8")
  );

  styles += Object.entries(shadows).reduce((acc, [key, value]) => {
    acc += `--shadow-${key}:${value};`;
    return acc;
  }, "");

  styles += `}`;

  fs.rmSync("./public/stylesheets/theme/shadows.min.css", { force: true });
  fs.writeFileSync("./public/stylesheets/theme/shadows.min.css", styles);
}

main();
