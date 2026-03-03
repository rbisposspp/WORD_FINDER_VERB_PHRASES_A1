You are a **front-end engineer** specialising in vanilla HTML/CSS/JS.
You will receive an existing ESL Word Search single-file HTML app and must add a **"reveal location" feature** to it. Output the full modified HTML file and nothing else — no explanation, no markdown fences.

## EXISTING FILE

@word_search_activity.html

## FEATURE SPECIFICATION

### What to build
Each `.word-item` `<li>` in `#word-list` must have a small, discreet icon button appended to its right side. When clicked, it **temporarily highlights** the cells of that phrase in the grid with a distinct "hint" visual state, then fades it out after a short delay. It does NOT permanently mark the word as found.

### Button appearance
- A small eye icon `👁` or the Unicode glyph `⌖` — your choice, keep it subtle.
- Size: no larger than 16×16 px, positioned inline-end of the phrase text.
- Opacity: `0.35` at rest; `0.75` on hover.
- Cursor: `pointer`.
- No border, no background — icon-only, ghost style.
- Must NOT appear for words that are already `.word-found` (hide it once the word is found, using CSS: `.word-found .reveal-btn { display: none }`).
- Add a CSS class `.reveal-btn` to every such button.
- `aria-label`: `"Reveal location of: <phrase>"`.
- `title`: `"Show me where this phrase is"`.

### Highlight behaviour
1. On click, add the class `.state-hint` to every cell in `word_positions[wordId].cells`.
2. Also scroll the **first cell** of the word smoothly into view (`scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })`).
3. After **2000 ms**, remove `.state-hint` from all those cells (unless the word was found in the meantime — `.state-correct` cells are untouched).
4. If the button is clicked again while a hint is already showing for ANY word, cancel the previous timer first (use a module-level variable `let revealTimer = null`), clear `.state-hint` from all cells, then start the new one.
5. While `.state-hint` is active, add the class `.revealing` to the corresponding `.word-item` to give subtle visual feedback (e.g. a faint left border pulse).

### CSS for `.state-hint`
```css
.cell.state-hint {
  background: var(--esl-color-hint, #a78bfa);   /* soft violet */
  color: #fff;
  font-weight: 700;
  transform: scale(1.06);
  transition: background .15s, transform .15s;
  z-index: 2;
}
/* correct always wins over hint */
.cell.state-correct.state-hint {
  background: var(--esl-color-correct);
}
.word-item.revealing {
  border-left: 3px solid #a78bfa;
  transition: border-left .2s;
}
```

### JS function to add
```js
/**
 * revealWordLocation(wordId)
 * Highlights cells for wordId for REVEAL_DURATION ms, then fades.
 */
function revealWordLocation(wordId) { /* implement per spec */ }
```

Wire each `.reveal-btn` click to call `revealWordLocation(word)` where `word` is the phrase string (same as `word_id`).

### Where to inject the button in the DOM
In the `renderWordList()` function, after setting `li.textContent = word`, **do not use textContent assignment** (it would wipe child nodes). Instead build the li content like this:

```js
li.textContent = '';                       // clear
const textNode = document.createTextNode(word);
li.appendChild(textNode);

const btn = document.createElement('button');
btn.className = 'reveal-btn';
btn.setAttribute('aria-label', `Reveal location of: ${word}`);
btn.setAttribute('title', 'Show me where this phrase is');
btn.textContent = '⌖';                    // or 👁
btn.addEventListener('click', (e) => {
  e.stopPropagation();
  revealWordLocation(word);
});
li.appendChild(btn);
```

### Additional CSS for the button layout
Make `.word-item` a flex row:
```css
.word-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
}
.reveal-btn {
  flex-shrink: 0;
  background: none;
  border: none;
  padding: 0 2px;
  font-size: 14px;
  opacity: 0.35;
  cursor: pointer;
  line-height: 1;
  transition: opacity .15s;
}
.reveal-btn:hover { opacity: 0.75; }
.word-found .reveal-btn { display: none; }
```

## CONSTRAINTS
- Vanilla JS only — no libraries.
- Do not break any existing functionality (drag selection, `esl:attempt` events, pointer events, `state-correct`, progress counter).
- Do not change any existing IDs or class names.
- Keep all existing CSS variables and design tokens intact.
- The output must be a single, complete, self-contained HTML file.

## OUTPUT
The complete modified HTML file, starting with `<!DOCTYPE html>` and ending with `</html>`. Nothing before or after.
