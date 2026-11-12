# Tech — KomisiKu

## Stack
- HTML5 + CSS3 + vanilla JavaScript (ES2019). No dependencies.
- Storage: `localStorage` (key `komisiku-links-v1`). No cookies, no backend.
- Hosting: any static host (GitHub Pages recommended for the submission).

## Browser support
- Modern mobile browsers (Chrome/Safari on Android/iOS). Uses `<dialog>`,
  `URL.createObjectURL` (CSV download), `toLocaleString('id-ID')`.

## Quality gates (run before every submit)
1. `node --check app.js` — JS must parse clean.
2. Open `index.html` in a browser: add a link → log clicks/orders →
   dashboard totals update → CSV downloads → reset clears.
3. No console errors on load.
4. No external requests on load (privacy rule). Verify in DevTools Network.

## Security notes
- Never store credentials, tokens, or seed phrases. The app has no auth.
- Shopee short links are user-entered URLs; render as links with
  `rel="noopener"` and escape all user text with the `esc()` helper.
- `confirm()` gates destructive actions (delete one link / delete all).
