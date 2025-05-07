import glob from "glob";
import fs from "fs";

const importline = `import { aIt } from "@aurodesignsystem/auro-library/scripts/test-plugin/iterateWithA11Check.mjs";`;

function findTestFiles() {
  return new Promise((resolve, reject) => {
    glob("./test/*.test.js", (err, files) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(files);
    });
  });
}

async function main() {
  const testFiles = await findTestFiles();

  testFiles.forEach(path => {
    const data = fs.readFileSync(path, 'utf8');
    const updated = importline + "\n" + data.replace(/it\(/g, 'aIt(');
    fs.writeFileSync(path, updated);
  });
};

main();
