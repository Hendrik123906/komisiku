# Requirements — Shopee Affiliate Tracker ("KomisiKu")

## Introduction
A free, client-side tracker for Indonesian Shopee Affiliates. One HTML
page that records affiliate links and forecasts commission and payout
readiness, with all data stored locally on the user's device.

## Glossary
- **Link**: one promoted Shopee product (name, short URL, price, commission rate %, category).
- **Klik**: a click on the affiliate link. **Order**: a purchase within 24h of the click.
- **Estimasi komisi**: price × rate% × orders, per link and in total.
- **Payout**: Shopee pays min Rp10.000; < Rp500.000 → ShopeePay; ≥ Rp500.000 → bank.

## Requirements

### Requirement 1: Manage affiliate links
**User Story:** As an affiliate, I want to save a product link with its price and commission rate, so I can track it later.
#### Acceptance Criteria
1. WHEN the user submits the add-link form with name, URL, price, rate, category THEN the link is saved and appears in the list.
2. WHEN a required field is empty THEN the browser blocks submission (required attributes).
3. WHEN the rate is outside 0–40% THEN it is clamped to that range.
4. WHEN the user deletes a link THEN a confirmation appears first and the link is removed after confirming.

### Requirement 2: Log clicks and orders per link
**User Story:** As an affiliate, I want to record clicks and orders per link, so commission is calculated per product.
#### Acceptance Criteria
1. WHEN the user logs N clicks and M orders for a link THEN its counters increase by N and M.
2. WHEN counters change THEN the dashboard totals update immediately.
3. WHEN the user enters negative or empty numbers THEN they are treated as 0.

### Requirement 3: Dashboard + payout status
**User Story:** As an affiliate, I want one screen showing total clicks, orders, conversion, and estimated commission, so I know if payout is near.
#### Acceptance Criteria
1. WHEN at least one link exists THEN the dashboard shows total clicks, total orders, conversion % (orders/clicks), and total estimated commission in Rp.
2. WHEN total commission < Rp10.000 THEN the payout chip shows "Belum capai Rp10.000".
3. WHEN total commission is Rp10.000–Rp499.999 THEN payout shows "ShopeePay".
4. WHEN total commission ≥ Rp500.000 THEN payout shows "Bank".

### Requirement 4: Search, export, reset
**User Story:** As an affiliate, I want to find a link fast, export my data, and start over safely.
#### Acceptance Criteria
1. WHEN the user types in search THEN the list filters by product name (case-insensitive).
2. WHEN the user clicks Export CSV THEN a CSV file with all links and totals downloads.
3. WHEN the user clicks Hapus Semua THEN a confirmation appears first.

### Requirement 5: Privacy + offline
**User Story:** As a user, I want my data to stay on my phone with no account or server.
#### Acceptance Criteria
1. WHEN the page loads THEN it makes zero network requests (only local files).
2. WHEN the browser is closed and reopened THEN saved links are still there (localStorage).
3. WHEN the page renders user-entered text THEN it is HTML-escaped.
