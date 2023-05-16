import fs from "fs";

async function main() {
  let styles = `:root{`;

  // getting curves
  const curves = JSON.parse(
    fs.readFileSync(`./stylesheets/constants/curves.json`, "utf-8")
  );

  styles += Object.entries(curves).reduce((acc, [key, value]) => {
    acc += `--curve-${key}:${value};`;
    return acc;
  }, "");

  styles += `}`;

  fs.rmSync("./public/stylesheets/theme/curves.min.css", { force: true });
  fs.writeFileSync("./public/stylesheets/theme/curves.min.css", styles);
}

main();
