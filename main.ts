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
const POEM = `First Person

The oath is: say everything, add nothing,
and say I for the man in the chair.

He comes in small. He tells the floor
what a man can only say to the floor,
in his own language. I set it down in mine:
I did not touch her. The court writes it down.
The court is writing a man who says I
in my mouth.

Two people sit in my one chair.
He chose to speak. I only say it.
Only one of us is on trial.

They think the work is words. The work is hands.
I hold his first person the way you hold
a coat for someone stepping out of the rain.
It weighs almost nothing. At the door
I give it back.

He shook my hand at the end as if
I had carried his bag. I carried his I,
and set it down where the light was, and it fit him,
and he put it on and walked out
into his one life wearing it.

Then I went home and in the dark, alone,
said it once, to check it still worked.

It did. It was heavier than his.`;

if (Buffer.byteLength(POEM, 'utf8') < 1) {
  throw new Error('the poem is empty');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
const destination = join(OUTPUT_DIR, 'entry.txt');
writeFileSync(destination, POEM);
console.log(`wrote ${destination}: ${POEM.length} code points, ${Buffer.byteLength(POEM, 'utf8')} bytes`);
