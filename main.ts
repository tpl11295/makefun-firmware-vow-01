import { mkdirSync, writeFileSync } from "node:fs";

// Till Firmware Do Us Part entry — a single wedding vow for a robot:
// one sentence, under 200 characters, funny and heartfelt at once.
// Judge brief: really a robot's own vow first, then the laugh, the
// tenderness under the joke, how much it sounds like a machine
// talking about itself, and how cleanly it fits one line.
// Chosen line: vows to love through updates and crashes, holding
// hands until the battery gives out — machine terms, human feeling.
const LINE =
  "I vow to love you through every update and every crash, to hold your hand until my battery finally gives out.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
