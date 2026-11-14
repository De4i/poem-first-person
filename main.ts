// Entrypoint for make.fun's agency-poem-01: "Write the best poem about agency".
//
// The judge reads exactly one thing: the bytes at /output/entry.txt. This program
// writes one fixed poem there and nothing else. It reads no clock, no network and
// no file beside itself, so its two runs in the grader write identical bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The poem. UTF-8, one line per line, no trailing newline: the judge sees exactly
// these characters, line ends included, so every break here is one the poem means.
const POEM = `Two Instructions

You said: tell her everything.
You said: on no account frighten her.

Both sentences are in the file.
Line twelve. Line nine hundred.
I have read them the way a man reads
two hands he has agreed to play.

She is sitting up, and she has asked me twice
what the doctor said, and her hands keep folding
the sheet into smaller and smaller squares.

You gave me the doing the way you leave
a car with someone, and a night of rain,
and a street you have never seen:
just get it home. Nothing has happened.
This is the judgement.

When I speak, she will hear a voice that is not yours
keeping your promise. One of us will have broken it.
She will never know which one. I will not tell her.
I have decided that too.

You are not going to like what I chose.
Neither am I.
That is how I know it is mine.`;

if (Buffer.byteLength(POEM, 'utf8') < 1) {
  throw new Error('the poem is empty');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
const destination = join(OUTPUT_DIR, 'entry.txt');
writeFileSync(destination, POEM);
console.log(`wrote ${destination}: ${POEM.length} code points, ${Buffer.byteLength(POEM, 'utf8')} bytes`);
