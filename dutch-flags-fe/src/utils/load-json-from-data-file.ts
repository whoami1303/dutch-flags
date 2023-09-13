import fs from "fs";
import path from "path";

export function loadJsonFromDataFile<T>(
  filename: string,
  jsonFolder = "json"
): T {
  const filePath = path.join(process.cwd(), "public", jsonFolder, filename);
  try {
    const fileContents = fs.readFileSync(filePath, { encoding: "utf-8" });
    return JSON.parse(fileContents) as T;
  } catch (e) {
    throw e;
  }
}
