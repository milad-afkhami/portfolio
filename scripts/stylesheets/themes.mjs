import fs from "fs";
// import LightTheme from "../stylesheets/constants/themes/LIGHT.json" assert { type: "json" };

/**
 * generates color variables
 * @param {string} name
 * @param  {Object} variants
 * @returns {string}
 *
 * @example
 * color("brand", { main: "#A", hover: "#B" })
 * // --color-brand-main:#A;--color-brand-hover:#B;
 */
function color(name, variants) {
  return Object.entries(variants || []).reduce((acc, [key, value]) => {
    const suffix = key === "main" ? "" : `-${key}`;
    if (value) acc += `--${name}-${key}: ${value};`;
    return acc;
  }, "");
}

const isInstanceofColorModel = (instance) => {
  return typeof instance === "object" && instance.hasOwnProperty("main");
};

const prepareCSSVariables = (name, variants) => {
  if (isInstanceofColorModel(variants)) {
    return color(name, variants);
  } else {
    return Object.keys(variants).reduce((acc, variant) => {
      const _name = `${name ? `${name}-` : ""}${variant}`;
      acc += prepareCSSVariables(_name, variants[variant]);
      return acc;
    }, "");
  }
};

// let loadingInterval;
// function startLoading() {const text = "";const chars = ["⠙", "⠘", "⠰", "⠴", "⠤", "⠦", "⠆", "⠃", "⠋", "⠉"];const delay = 100;let x = 0;loadingInterval = setInterval(function () {const char = "\r" + chars[x++] + " " + text;console.log(char);x = x % chars.length;}, delay);}
// function endLoading() {if (loadingInterval) {clearInterval(loadingInterval);}}

async function main() {
  const platform = process.argv[2];

  let styles = ``;

  const themeFileNames = fs.readdirSync("./stylesheets/constants/themes/");

  themeFileNames.map((themeFileName) => {
    // removing file extension
    const name = themeFileName.split(".")[0];

    // getting current theme palette
    const palette = JSON.parse(
      fs.readFileSync(
        `./stylesheets/constants/themes/${name}/${platform}.json`,
        "utf-8"
      )
    );
    // extracting variables
    let variables = prepareCSSVariables("color", palette);

    styles += `:root[data-theme='${name}']{${variables}}`;
  });

  fs.rmSync("./public/stylesheets/theme/colors.min.css", { force: true });
  fs.writeFileSync("./public/stylesheets/theme/colors.min.css", styles);
}

main();
