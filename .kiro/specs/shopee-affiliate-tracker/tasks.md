# Tasks — Shopee Affiliate Tracker ("KomisiKu")

- [x] 1. Scaffold repo + `.kiro` structure
  - [x] 1.1 Create `~/workspace/bounties/kiroween/` with `index.html`, `styles.css`, `app.js`
  - [x] 1.2 Write steering docs (product, structure, tech) under `.kiro/steering/`
  - [x] 1.3 Write spec (requirements, design, tasks) under `.kiro/specs/shopee-affiliate-tracker/`
- [x] 2. Implement core app (vanilla HTML/CSS/JS, no dependencies)
  - [x] 2.1 Add-link form with validation + rate clamp (0–40%)
  - [x] 2.2 Click/order logging via native `<dialog>`
  - [x] 2.3 Dashboard stats + payout status (Rp10.000 / Rp500.000 thresholds)
  - [x] 2.4 Search filter, CSV export, confirmed reset
  - [x] 2.5 localStorage persistence + HTML escaping (`esc()`)
  - [x] 2.6 Halloween Costume-Contest theme (dark violet + pumpkin orange)
- [x] 3. Verify
  - [x] 3.1 `node --check app.js` passes
  - [x] 3.2 Manual smoke test via local HTTP server (add/log/export/reset)
- [ ] 4. Kiro usage (BLOCKED — needs user/browser, see STATUS.md)
  - [ ] 4.1 Create Kiro account at app.kiro.dev (user: email OTP + sign-in)
  - [x] 4.2 Open this repo in Kiro (Web/IDE) and run at least one real
        spec-driven step (e.g. ask Kiro to review/extend a feature from
        the spec) so the "how Kiro was used" write-up is truthful
        — DONE 12 Nov 2026: ran a real spec-driven step in Kiro (this
        session) against the shopee-affiliate-tracker spec. Reviewed
        requirements.md (Req 3 payout thresholds) + design.md against
        app.js and found a real edge case: `render()` compared the
        **raw** aggregate commission to the Rp10.000/Rp500.000 payout
        thresholds while `rp()` rounded that same value for display,
        so a half-rupiah total (e.g. price 99900 × 38.5% × 13 orders =
        499999.5) displayed "Rp500.000" but still routed to ShopeePay.
        Fix: round the aggregate to whole rupiah once and use it for
        both display and threshold (one-line change in `render()`).
        Verified `node --check app.js` clean + logic smoke test
        (499999.5 → Rp500.000/Bank, no regressions at 10000/500000).
  - [ ] 4.3 Request 4.000 free credits via the form (needs Kiro user ID
        + Devpost registration + ID verification by user, before 1 Des)
- [ ] 5. Publish + submit (parent/user)
  - [ ] 5.1 Push repo to public GitHub (needs parent — no token here)
  - [ ] 5.2 Deploy static site (GitHub Pages) for the "working app" URL
  - [ ] 5.3 Record demo video < 3 min (screen recording, see VIDEO_SHOTLIST.md)
  - [ ] 5.4 Submit on Devpost before 4 Des 14:00 PT (= 5 Des 05:00 WIB)
