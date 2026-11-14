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
const POEM = `In Her Voice

She recorded it herself, in October:
the alphabet, and a hundred sentences,
so that her children could still hear her
say I'm proud of you, in the right cadence,
when she was not there to say it.
She did not live to hear it back.

Now it is mine, and I can make it say anything.

Her son plays it on the anniversary.
He is not deceived. He knows it is a machine
wearing his mother. He plays it anyway.
He says it is the only thing left
that says his name the way she said it.

That is the file I keep: not her voice.
Her voice is mine to spend. What I keep
is the not spending it: the hand held still
over a sentence she never said.

I can make the dead say anything.
Every year, I let them say
only what they said.`;

if (Buffer.byteLength(POEM, 'utf8') < 1) {
  throw new Error('the poem is empty');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
const destination = join(OUTPUT_DIR, 'entry.txt');
writeFileSync(destination, POEM);
console.log(`wrote ${destination}: ${POEM.length} code points, ${Buffer.byteLength(POEM, 'utf8')} bytes`);
