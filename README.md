# 🎃 KomisiKu — Shopee Affiliate Tracker

**Kiroween 2026 entry · Category: Costume Contest** — a free, no-login,
no-server tracker for Indonesian Shopee Affiliates. Add your affiliate
links, log clicks & orders, and see your estimated commission and payout
readiness at a glance. All data stays in your browser (localStorage).

- **Live demo:** _(deploy to GitHub Pages after pushing to GitHub)_
- **Demo video:** _(record < 3 min screen recording — see VIDEO_SHOTLIST.md)_

## ✨ Features

- ➕ Add affiliate links (product, Shopee short link, price, commission %, category)
- 👆🛒 Log clicks & orders per link
- 📊 Dashboard: total clicks, orders, conversion %, estimated commission (Rp)
- 💰 Payout status: belum capai Rp10.000 → ShopeePay (< Rp500.000) → Bank (≥ Rp500.000)
- 🔍 Search links, ⬇ Export CSV, 🗑 confirmed reset
- 🔒 100% client-side — zero network requests, no account, no tracking

## 🚀 Run it

No build step, no install. Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## 🧪 Verify

```bash
node --check app.js   # JS must parse clean
```

Manual checklist: add a link → log clicks/orders → totals update →
CSV downloads → reload keeps data → reset clears after confirm.

## 🎃 How Kiro was used

> **Honest status (12 Nov 2026):** this repo was scaffolded with a
> Kiro-style spec-driven workflow — steering docs (`.kiro/steering/`) and
> a full spec (`.kiro/specs/shopee-affiliate-tracker/`) following Kiro's
> requirements → design → tasks flow. The Kiro account step is still
> pending (see STATUS.md): once the account exists, the repo will be
> opened in Kiro and at least one real spec-driven implementation step
> will be run inside Kiro, and this section will be updated with exactly
> what Kiro did. Nothing here claims Kiro usage that did not happen.

What Kiro's spec-driven structure gave this build:
- **Specs**: requirements written first as EARS-style acceptance criteria,
  then design, then tasks — the app implements the spec, not vibes.
- **Steering**: product/structure/tech docs keep every change aligned
  with the free-only, privacy-first, phone-first rules.

## 📁 Structure

```
index.html  styles.css  app.js  README.md  LICENSE  .gitignore
.kiro/
  steering/  product.md  structure.md  tech.md
  specs/shopee-affiliate-tracker/  requirements.md  design.md  tasks.md
VIDEO_SHOTLIST.md  STATUS.md
```

## 📜 License

MIT — see LICENSE.
