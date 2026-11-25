// One-day news image entry: writes the bundled front page to the output dir.
//
// The picture itself (entry.png, next to this file) is the entry: a front
// page summing up Tuesday 24 November 2026. This program only places it
// where the grader expects it, writing the bytes fresh so the run never
// depends on the working directory or on the staged file's permissions.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir =
  process.env.MAKEFUN_OUTPUT_DIR || process.env.OUT_DIR || "/output";

const source = readFileSync(join(here, "entry.png"));
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!source.subarray(0, 8).equals(pngMagic)) {
  throw new Error("entry.png is not a PNG file");
}
if (source.length > 1048576) {
  throw new Error(`entry.png is ${source.length} bytes, over the 1 MiB cap`);
}
const width = source.readUInt32BE(16);
const height = source.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 cap`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.png"), source);
console.log(`wrote ${source.length} bytes to ${join(outDir, "entry.png")}`);
