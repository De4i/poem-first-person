import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Original constant text, measured in Unicode code points.
const poem = `Not Included

The agent measured my mother's house:
the rooms, the land, the distance to the train.
It found a buyer. All she had to do
was sign where it had put her name.

In the kitchen doorway, pencil marks:
my brother, six; my brother, seven;
then the height he would remain.
At seven he had stood on tiptoe.
She had made him start again.

The agent offers to photograph the marks.
It can keep them safe. It can make copies.
Mother presses her palm against the wood.
The last line lies across her wrist.

She asks it for a carpenter.

On moving day he prises out the jamb.
Dust falls from places nobody has touched
since my brother stood there holding his breath.
The agent changes what the buyer gets.
The van has room for one more piece of wood.

In the new kitchen she stands me against it.
I am forty-three.
I take my shoes off.`;

const codePoints = [...poem].length;
if (!poem.trim() || codePoints > 1000) {
  throw new Error(`Invalid poem: ${codePoints} Unicode code points`);
}
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), poem, 'utf8');
