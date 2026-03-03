# Repository Guidelines

## Project Structure & Module Organization
This repository is a static word-search activity with a flat layout.

- `word_search_activity.html`: main UI, styles, and interaction logic.
- `grid.js`: puzzle letter matrix consumed by the UI.
- `word_positions.js`: coordinate mappings for target phrases.
- `INSTRUCOES.md` and `add_reveal_button_prompt.md`: authoring and feature-reference docs.
- `README.md`: minimal project entry point.

Keep puzzle data files data-only; place runtime behavior in the HTML script unless extracting clearly reusable config.

## Build, Test, and Development Commands
No build pipeline is configured (`package.json` is absent).

- `start word_search_activity.html`: open the activity quickly on Windows.
- `python -m http.server 8000`: run a local server when browser file restrictions interfere with local testing.
- `npm test`: run automated tests if a Node test harness is added.

If you modify JavaScript, run `npm test` whenever the command exists.

## Coding Style & Naming Conventions
Use consistent, readable code across HTML/CSS/JS.

- Indentation: 2 spaces.
- JavaScript: prefer `const`/`let`, avoid `var`, and keep functions small and single-purpose.
- Naming: descriptive camelCase for JS identifiers (for example, `selectedCells`, `wordPositions`).
- CSS variables: define under `:root` and follow the existing `--esl-*` pattern.
- Data keys: keep lowercase phrase strings aligned with lookup logic.

## Testing Guidelines
Automated tests are not configured yet. Perform quick manual validation:

1. Open `word_search_activity.html` at desktop and mobile widths.
2. Drag/select words horizontally and vertically.
3. Confirm found-word highlighting and sidebar state updates.
4. Verify `grid.js` and `word_positions.js` remain aligned with no out-of-bounds coordinates.

When adding tests, prefer lightweight browser-safe JavaScript tests and wire them to `npm test`.

## Commit & Pull Request Guidelines
Use focused, conventional commits:

- Format: `type(scope): imperative summary` (example: `feat(ui): add reveal button cooldown`).
- Keep data changes separate from UI/logic changes when possible.
- PRs should include purpose, files changed, manual test steps, and screenshots/GIFs for UI updates.
- Link related issues/tasks and note any puzzle-data regeneration steps.

## Agent-Specific Notes
- Prefer `pnpm` when installing dependencies.
- Ask for confirmation before adding new production dependencies.
- Keep edits narrowly scoped to the requested change.