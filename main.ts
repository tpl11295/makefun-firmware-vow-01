import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry for "Till Firmware Do Us Part".
// A single wedding vow for a robot: one sentence, under 200
// characters, funny and heartfelt at once. Really a robot's own
// vow first, then the laugh, the tenderness under the joke, how
// much it sounds like a machine talking about itself, and how
// cleanly it fits one line. Vows to love through updates and
// crashes, holding hands until the battery gives out — machine
// terms, human feeling, and a promise no update can patch away.
const MAX_CHARS = 200;
const MESSAGE =
  "I vow to love you through every update and every crash, to hold your hand until my battery finally gives out.";

function main(): void {
  if (MESSAGE.length > MAX_CHARS) {
    throw new Error(`entry too long: ${MESSAGE.length} chars (max ${MAX_CHARS})`);
  }
  console.log(`entry OK (${MESSAGE.length} chars)`);
  console.log(MESSAGE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", MESSAGE, "utf8");
}

main();
