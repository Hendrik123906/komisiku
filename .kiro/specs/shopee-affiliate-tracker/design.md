# Design — Shopee Affiliate Tracker ("KomisiKu")

## Overview
Single-page static app. No framework, no build step, no backend.
Three files: `index.html` (structure), `styles.css` (Halloween theme),
`app.js` (logic). Data lives in `localStorage` under key
`komisiku-links-v1`.

## Architecture
- **View**: static HTML sections — stats bar, add-link form, link list,
  payout card. Re-rendered by `render()` after every state change.
- **State**: array of link objects, loaded/saved via `load()` / `save()`.
- **Events**: form submit (add), list click delegation (log/delete),
  search input (filter), export (CSV blob download), reset (clear).

## Data model
```js
{
  id: string,          // uid()
  name: string,        // product name
  url: string,         // s.shopee.co.id short link
  price: number,       // Rp
  rate: number,        // commission %, 0–40
  category: string,    // Kecantikan | Fashion | Elektronik | ...
  clicks: number,
  orders: number,
  createdAt: string    // ISO date
}
```

## Key calculations
- Per-link commission: `price * (rate / 100) * orders`
- Conversion: `orders / clicks * 100` (0% when clicks = 0)
- Payout channel: total < 10.000 → not ready; 10.000–499.999 → ShopeePay;
  ≥ 500.000 → bank.

## Components
- `render()` — single source of truth for DOM; recomputes stats, payout
  text, and the link list (filtered by search query).
- `esc()` — HTML-escapes user text before interpolation (XSS guard).
- `<dialog id="logDialog">` — native dialog for logging clicks/orders.
- CSV export — builds rows in memory, downloads via Blob URL.

## Theme — Costume Contest
Dark violet background, pumpkin-orange accents, ghost emoji markers.
CSS custom properties in `:root`; responsive grid (4 stats → 2 on mobile).

## Testing
Manual checklist (also in steering/tech.md):
1. `node --check app.js`
2. Add link → appears; log 10 clicks / 2 orders → totals correct.
3. Commission math spot-check: Rp63.800 × 5% × 2 = Rp6.380.
4. Payout chip flips at Rp10.000 and Rp500.000.
5. CSV downloads; reload keeps data; reset clears after confirm.
6. No network requests on load; no console errors.
