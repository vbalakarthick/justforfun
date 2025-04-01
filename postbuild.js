import fs from "fs";
import path from "path";

const indexPath = path.resolve("dist/public/index.html");
const notFoundPath = path.resolve("dist/public/404.html");

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log("✅ 404.html copied from index.html");
} else {
  console.error("❌ index.html not found. Build may have failed.");
}
