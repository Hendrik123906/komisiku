# Structure — KomisiKu

## Repo layout (root)
```
.
├── index.html        # App shell + forms + dialogs (single page)
├── styles.css        # Halloween "Costume Contest" theme (dark + pumpkin)
├── app.js            # All logic: CRUD, stats, payout status, CSV export
├── README.md         # Setup, usage, Kiro usage write-up
├── LICENSE           # MIT
├── .gitignore        # MUST NOT ignore .kiro/ (disqualifies submission)
├── .kiro/
│   ├── steering/     # product.md, structure.md, tech.md
│   └── specs/shopee-affiliate-tracker/
│       ├── requirements.md
│       ├── design.md
│       └── tasks.md
├── VIDEO_SHOTLIST.md # Demo video plan (< 3 min, screen-recorded)
└── STATUS.md         # Build status + blockers (account, credits, repo)
```

## Conventions
- Vanilla HTML/CSS/JS. No build step, no framework, no npm install.
  Reason: the author has no computer — the app must run by opening
  `index.html` or a static host, with zero toolchain.
- One page, one responsibility per file. Keep functions small and named
  in English; user-facing strings in Indonesian.
- Data model: one array of link objects in localStorage key
  `komisiku-links-v1`. Never change the key without a migration note.
- All money formatted `Rp` with `id-ID` locale.
- Escape every user string before injecting into HTML (XSS guard).
