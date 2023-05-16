import fs from "fs";

async function main() {
  let styles = ``;

  const typographies = JSON.parse(
    fs.readFileSync("./stylesheets/constants/typographies.json", "utf-8")
  );
  const breakpoints = JSON.parse(
    fs.readFileSync("./stylesheets/constants/breakpoints.json", "utf-8")
  );

  Object.keys(typographies).map((rule) => {
    // extracting variables
    let variables = Object.entries(typographies[rule]).reduce(
      (acc, [key, value]) => {
        acc += `--font-size-${key}:${value.fontSize}px;`;
        return acc;
      },
      ""
    );

    if (rule === "default") {
      styles += `:root{${variables}}`;
    } else {
      styles += `@media (min-width: ${breakpoints[rule]}px){:root{${variables}}}`;
    }
  });

  fs.rmSync("./public/stylesheets/theme/typographies.min.css", { force: true });
  fs.writeFileSync("./public/stylesheets/theme/typographies.min.css", styles);
}

main();
