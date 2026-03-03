# Repository Guidelines

## Project Structure & Module Organization
This repository is a static word-search activity with a flat layout.

- `word_search_activity.html`: main UI, styles, and interaction logic.
- `grid.js`: letter grid data consumed by the activity.
- `word_positions.js`: target phrase coordinate mappings.
- `INSTRUCOES.md` and `add_reveal_button_prompt.md`: authoring/reference docs.

Keep puzzle data files focused on data only. Place new runtime logic in the HTML script section unless you are clearly extracting reusable data/config.

## Build, Test, and Development Commands
No build pipeline is configured (`package.json` is not present).

- `start word_search_activity.html`: open the activity quickly on Windows.
- `python -m http.server 8000`: run a local server if browser file restrictions affect testing.
- `npm test`: run tests when a Node test setup exists or is added later.

If you introduce JavaScript changes, run `npm test` after edits once the test command is available.

## Coding Style & Naming Conventions
- Use 2 spaces for indentation in HTML, CSS, and JavaScript blocks.
- Prefer `const`/`let` (avoid `var`) and small, single-purpose functions.
- Use descriptive camelCase for JS identifiers (for example, `selectedCells`, `wordPositions`).
- Keep CSS custom properties under `:root` with the `--esl-*` naming style already used.
- Keep data keys stable and lowercase phrase strings to match lookup logic.

## Testing Guidelines
Automated tests are currently not configured. Validate changes with quick manual checks:

1. Open the page on desktop and mobile widths.
2. Drag/select words horizontally and vertically.
3. Verify found-word highlighting and sidebar state updates.
4. Confirm `grid.js` and `word_positions.js` stay aligned (no out-of-bounds cells).

When adding tests, prefer lightweight browser-safe JavaScript tests and wire them to `npm test`.

## Commit & Pull Request Guidelines
Git history is unavailable in this workspace, so follow a conventional style:

- Commit format: `type(scope): imperative summary` (example: `feat(ui): add reveal button cooldown`).
- Keep commits focused; separate data updates from UI logic changes.
- PRs should include: purpose, files changed, manual test steps, and screenshots/GIFs for UI updates.
- Link related issues/tasks and call out any puzzle-data regeneration steps.

## Agent-Specific Notes
- Prefer `pnpm` if dependencies are installed.
- Ask for confirmation before adding new production dependencies.
- Do not broaden file scope unnecessarily; keep edits local to the requested change.
