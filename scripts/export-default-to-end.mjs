import { execSync } from "child_process";
import { readFile, writeFile, writeFileSync } from "fs";

const listBuffer = execSync(`find . -type f -name "*.tsx"`);

listBuffer
  .toString()
  .split("\n")
  .filter(Boolean)
  .forEach(function (file) {
    readFile(file, "utf-8", (err, _txt) => {
      if (err) {
        console.log("err", { err, file });
      }
      let txt = _txt;
      const exportRegex = /export default ([^\s]+)/;

      if (txt) {
        const component = txt.match?.(exportRegex)?.[1];
        if (component) {
          txt = txt.replace(exportRegex, "");
          txt += `
            export default ${component}`;
          writeFile(file, txt, (err2) => {
            if (err2) {
              console.log("err2", { err2, file });
            }
          });
        }
      }
    });
  });
