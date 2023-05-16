import fs from "fs";

async function main() {
  let styles = `:root{`;

  // getting spacings
  const spacings = JSON.parse(
    fs.readFileSync(`./stylesheets/constants/spacings.json`, "utf-8")
  );

  styles += Object.entries(spacings).reduce((acc, [key, value]) => {
    acc += `--spacing-${key}:${value};`;
    return acc;
  }, "");

  styles += `}`;

  fs.rmSync("./public/stylesheets/theme/spacings.min.css", { force: true });
  fs.writeFileSync("./public/stylesheets/theme/spacings.min.css", styles);
}

main();
