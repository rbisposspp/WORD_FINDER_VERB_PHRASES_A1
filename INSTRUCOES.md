You are a **word search puzzle constructor**. Your task is to place a list of English verb phrases into a letter grid, using **both horizontal (H) and vertical (V)** directions, and then fill every empty cell with a random uppercase letter. You must output **only valid JSON** — no prose, no markdown fences, no explanation.

## INPUT

Phrases to place (25 total):

```
dance the tango
find a parking space
leave your bag on a train
wait for a bus
remember somebody's name
forget somebody's name
see a film
help somebody
call (or phone) a taxi
talk to a friend
draw a picture
sing a song
buy a pizza
tell somebody a secret
paint a picture
take a photo
run a race
meet a friend
hear a noise
try to open a door
give somebody flowers
look for your keys
use an app
send a message
swim in the sea
```

## PLACEMENT RULES

1. **Grid size**: 30 rows × 30 columns (indices 0–29).
2. **Allowed directions**:
   - `H` — left to right (col increases, row fixed)
   - `V` — top to bottom (row increases, col fixed)
3. **No diagonal** placements.
4. **Spaces in phrases are placed as a SPACE character `' '`** in the grid cell — they still occupy a cell and have a `{row, col}` entry in `cells[]`.
5. **No overlapping** unless two phrases share the *exact same letter AND direction segment* at that cell. When in doubt, avoid overlap.
6. **All 25 phrases must be placed** — none may be omitted.
7. **Distribution**: place roughly **half horizontally, half vertically** (aim for 12–13 H, 12–13 V). Do NOT place all words in the same direction.
8. **Spacing**: leave at least 1 empty cell between parallel same-direction words to avoid accidental matches.
9. After placing all phrases, fill every cell that is still empty with a **random uppercase ASCII letter** (A–Z), chosen so it does not accidentally spell any of the target phrases.

## OUTPUT FORMAT

Respond with **only** a single JSON object with exactly these three keys:

```
{
  "grid": [ /* 30 arrays of 30 strings, each string is 1 char (letter or space) */ ],
  "words": [ /* the 25 display strings, in the same order as the input list */ ],
  "word_positions": {
    "<phrase>": {
      "direction": "<H or V>",
      "cells": [
        { "row": <int>, "col": <int> },
        ...
      ]
    },
    ...
  }
}
```

### Constraints on `cells[]`
- `cells` must be **ordered** from start to end of the phrase (including space characters).
- Length of `cells` must equal the number of **characters** in the phrase string (counting spaces).
- For direction `H`: all entries share the same `row`; `col` increments by 1 each step.
- For direction `V`: all entries share the same `col`; `row` increments by 1 each step.

### Constraints on `grid`
- `grid[row][col]` must match the character placed by `word_positions` for every phrase cell.
- All remaining cells must be a single uppercase letter (A–Z), never `null` or `undefined`.
- `grid` must have exactly 30 rows, each with exactly 30 elements.

## VERIFICATION CHECKLIST (apply before outputting)

Before writing the JSON, mentally verify:
- [ ] All 25 phrases are present in `word_positions`.
- [ ] Each phrase's `cells.length === phrase.length` (counting spaces).
- [ ] For every cell in every `cells[]`, `grid[row][col]` matches the corresponding character.
- [ ] No phrase goes out of bounds (row 0–29, col 0–29).
- [ ] Mix of H and V directions is present (both must appear).
- [ ] No empty arrays, no null values anywhere in `grid`.

## OUTPUT

Respond now with the JSON and nothing else.