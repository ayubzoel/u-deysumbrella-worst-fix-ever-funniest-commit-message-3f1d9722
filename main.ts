import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One commit message for a bug fix that made everything worse:
// the login repair opened every account to everybody, and calls it fair.
const entry =
  "fix(login): anyone can now log in as anyone, so auth is finally fair";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";

// The gate wants 1-100 characters of UTF-8 text, never whitespace-only.
const codePoints = [...entry].length;
if (codePoints < 1 || codePoints > 100 || entry.trim().length === 0) {
  throw new Error(`entry is ${codePoints} code points, outside the 1-100 gate`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
