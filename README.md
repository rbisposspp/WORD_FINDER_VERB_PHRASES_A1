# Word Finder: Verb Phrases A1

## What it is
Word Finder: Verb Phrases A1 is a browser-based word-search activity for beginner ESL vocabulary practice. It uses a fixed puzzle grid and guided interaction to help learners notice and recall common verb phrases.

## Who it is for
This project is designed for ESL teachers working with A1 learners in classroom, online, or 1-on-1 settings. It is useful for warm-ups, review tasks, and low-prep vocabulary reinforcement.

## Main features
- 30x30 letter grid with target phrase list
- Drag selection for desktop and mobile
- Real-time progress and found-word highlighting
- Reveal support for guided classroom use
- Deterministic puzzle data through `grid.js` and `word_positions.js`
- Static browser delivery with no build requirement

## Teaching value
The activity supports vocabulary recognition, recall, and teacher-led review. It can be used for short competitive tasks, pair work, or slower guided practice where the teacher wants to recycle common verb phrases without adding setup complexity.

## Tech stack
- HTML
- CSS
- Vanilla JavaScript

## How to run
Open `word_search_activity.html` directly in a browser, or serve the repository locally:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/word_search_activity.html`.

## Notes
The puzzle data is intentionally explicit rather than generated at runtime, which makes classroom behavior predictable and easier to maintain.
