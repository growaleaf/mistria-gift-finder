# Fields of Mistria Gift Finder

A single static page that answers two questions in a few seconds:

1. "What does this villager want?" — pick a villager, see their Loved / Liked / Disliked / Hated gifts.
2. "Who wants this item?" — type an item name, see every villager who Loves/Likes/Dislikes/Hates it, best match first.

## Files

- `index.html` — the page (search box, villager picker, results).
- `data.js` — the gift-preference data for the 35 villagers listed in the source guide, plus the source URL and fetch date. Also exports `VILLAGERS` for Node (`module.exports`) so `test.js` can import it without a browser.
- `test.js` — known-answer tests against `data.js`. Run with `node test.js`.
- `.nojekyll` — tells GitHub Pages to serve the files as-is.

## Data source

https://beebom.com/fields-of-mistria-gift-guide/ — fetched 2026-11-22. Single source; values may be out of date if the game has patched gift preferences since the guide was written. The "Disliked" column for most villagers lists broad categories (Junk, Bugs, Weird Gift, Mushroomy, Dragon Part) rather than individual items — these are shown verbatim, not expanded into individual items. The Priestess has no published preference data in the source and is shown as "no data" rather than guessed.

## Running the tests

```
node test.js
```
