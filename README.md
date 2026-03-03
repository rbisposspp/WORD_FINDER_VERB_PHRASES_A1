# WORD Finder: Verb Phrases A1

Static ESL word-search activity focused on common English verb phrases (A1 level).  
The app runs directly in the browser with no build step.

## Features

- 30x30 letter grid with phrase list sidebar
- Drag selection on desktop and mobile (Pointer Events)
- Real-time found-word highlighting and progress tracking
- Manual `word_positions` mapping for deterministic puzzles

## Project Structure

- `word_search_activity.html`: main app (UI, styles, game logic, embedded data)
- `grid.js`: optional grid data source
- `word_positions.js`: optional phrase coordinate mappings
- `INSTRUCOES.md`: authoring instructions
- `add_reveal_button_prompt.md`: feature/change prompt reference

## Run Locally

Open directly:

```powershell
start word_search_activity.html
```

Or serve over HTTP:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000/word_search_activity.html`.

## Data Contract

The puzzle uses `activityData.word_positions` where each phrase maps to an ordered
array of cells:

```js
{ direction: "H" | "V", cells: [{ row, col }, ...] }
```

Validation rules:

- `cells.length` must match normalized phrase length
- each `{row,col}` must be inside `0..29`
- `grid[row][col]` must match the expected character in order

## Manual QA Checklist

1. Test on desktop and mobile width.
2. Drag-select horizontal and vertical phrases.
3. Confirm found state in both grid and sidebar.
4. Verify no runtime errors in browser console.

## Contributing

- Keep changes scoped and focused.
- Use conventional commits, e.g. `fix(data): correct word coordinates`.
- For UI changes, include screenshots/GIFs in pull requests.
