import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// A fixed original poem; the sandbox needs no network or extra packages.
const poem = `Say It Again

My mother sets the phone between us.
The agent speaks the English she has needed
for thirty years at our kitchen table.
It knows the words for blood tests, rent,
the ache that travels down her left arm.

Today she says she is leaving my father.
The phone says: I need a little space.
She shakes her head. It tries again:
Things have been difficult.

She lifts the phone and speaks into it
as if speaking to someone through a locked door.
Then she turns the screen toward me.
I am leaving your father.

I ask if she is sure.
She asks what the phone has said.
I tell her.
She nods, puts it down, and waits.

For once I have nothing to translate.
She asks the phone for the first bus north.
It asks where she wants to get off.
I open my mouth.
She names a town
I have never heard her mention.`;

const codePoints = [...poem].length;
if (codePoints < 1 || codePoints > 1000 || !poem.trim()) {
  throw new Error(`Invalid poem length: ${codePoints} Unicode code points`);
}
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), poem, { encoding: 'utf8' });
