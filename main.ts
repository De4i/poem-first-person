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
//
// Authority to Override: the clerk at a loan window acts for the machine all day, and
// the power that is really hers is the one the machine does not watch - the override
// box nobody audits. The turn is the third use: a decision made before it was asked
// for, invisible to the screen and to the man it was made for.
const POEM = `Authority to Override

The screen writes 412. Decline.
I say it across the counter to a man
who is already folding his papers.
He carried them in a supermarket bag
and set them down the way you set down
something already apologised for.

Nine years at this window.
At the bottom of the screen, always,
the grey box: OVERRIDE.
Twice I have used it —
once for a woman with my mother's postcode,
once for a man who knew my name.
Neither thanked me. They thanked the bank.
The bank thanked the screen.

The trainers said it is for judgement,
then said it is rarely appropriate.
No one audits it. No one counts it.
The folder of overrides left open at night
runs to four pages,
and every line in it is somebody's Tuesday.

This morning I used it for the third time,
while he was still folding, before he asked,
so that the number he carried out
was never 412, and he will never know
that for one minute it was decided
by a hand, and the hand was mine,
and no one watching the screen could see it.`;

if (Buffer.byteLength(POEM, 'utf8') < 1) {
  throw new Error('the poem is empty');
}
if (POEM.length > 1000) {
  throw new Error(`the poem is ${POEM.length} code points: the rule allows 1000`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
const destination = join(OUTPUT_DIR, 'entry.txt');
writeFileSync(destination, POEM);
console.log(`wrote ${destination}: ${POEM.length} code points, ${Buffer.byteLength(POEM, 'utf8')} bytes`);
