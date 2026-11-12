# Product — KomisiKu (Shopee Affiliate Tracker)

## What it is
KomisiKu is a free, no-login, no-server web app for Indonesian Shopee
Affiliates. It tracks affiliate links, clicks, orders, and estimated
commission, and tells the user exactly when payout is reachable and
through which channel (ShopeePay vs bank).

## Who it's for
- Shopee Affiliate creators in Indonesia (like the author: username
  `uma_bird`), who promote products on Facebook / Instagram / X / TikTok.
- Phone-first users: everything must work on a small mobile screen.

## The real problem
Shopee's own dashboard shows clicks and orders per product, but it does
not give a quick per-link commission forecast, a payout-readiness status,
or an exportable record. Affiliates lose track of which link actually
earns. KomisiKu answers in one glance: "link mana yang cuan?"

## Core rules (non-negotiable)
1. FREE-ONLY: no account, no payment, no deposit, no ads, no tracking.
2. Privacy-first: all data stays in the user's browser (localStorage).
   Nothing is sent to any server — ever.
3. Honest numbers: commission = price × rate% × orders. Rates are entered
   per product (Shopee rates vary 2.5–12% + XTRA up to 40%). We never
   invent a rate.
4. Payout rules match Shopee's real rules: min Rp10.000; < Rp500.000 →
   ShopeePay; ≥ Rp500.000 → bank; commission counts only on click→buy
   within 24h.
5. Bahasa Indonesia first. All UI copy in Indonesian.

## Success criteria
- Add a link in under 30 seconds on a phone.
- Dashboard answers "berapa komisi saya?" in one screen.
- Export CSV works offline.
- Zero backend cost: static files only, deployable on GitHub Pages.
