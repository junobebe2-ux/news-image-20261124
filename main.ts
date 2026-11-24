// Entry program for news-image-20261124: copies the pre-rendered front page
// (entry.png) into the grader's output directory, byte for byte.
// Deterministic: the same file is copied on every run, so both grader runs
// write identical bytes.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// The competition names the output file: it stays entry.png either way.
const source = join(repoRoot, "entry.png");
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error("entry.png is missing from the repository");
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
