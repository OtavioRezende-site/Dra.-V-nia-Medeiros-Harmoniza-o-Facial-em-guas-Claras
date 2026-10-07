import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const docs = path.join(root, "docs");

if (fs.existsSync(dist)) {
  fs.cpSync(dist, docs, { recursive: true });
  fs.writeFileSync(path.join(docs, ".nojekyll"), "");
  fs.writeFileSync(path.join(dist, ".nojekyll"), "");
  console.log("Successfully synced build to /docs and created .nojekyll");
}

process.exit(0);
