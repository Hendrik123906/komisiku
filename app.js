/* KomisiKu — Shopee Affiliate Tracker (100% client-side, localStorage).
   Tidak ada server, tidak ada akun, tidak ada data yang keluar dari HP. */
'use strict';

const STORE_KEY = 'komisiku-links-v1';
const $ = (id) => document.getElementById(id);

const rp = (n) => 'Rp' + Math.round(n).toLocaleString('id-ID');
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[c]));

function load() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || []; }
  catch { return []; }
}
function save(links) { localStorage.setItem(STORE_KEY, JSON.stringify(links)); }
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

function commissionOf(l) { return l.price * (l.rate / 100) * l.orders; }

function render() {
  const q = ($('search').value || '').toLowerCase();
  const links = load().filter((l) => !q || l.name.toLowerCase().includes(q));
  const all = load();

  const clicks = all.reduce((s, l) => s + l.clicks, 0);
  const orders = all.reduce((s, l) => s + l.orders, 0);
  // Round to whole rupiah once: Shopee pays in whole Rp, and the dashboard
  // already rounds for display (rp()). Using the same rounded value for the
  // payout threshold keeps the chip consistent with the number the user sees
  // (e.g. 499999.5 displays as Rp500.000 and now correctly routes to Bank).
  const total = Math.round(all.reduce((s, l) => s + commissionOf(l), 0));

  $('statClicks').textContent = clicks.toLocaleString('id-ID');
  $('statOrders').textContent = orders.toLocaleString('id-ID');
  $('statConv').textContent = clicks ? (orders / clicks * 100).toFixed(1) + '%' : '0%';
  $('statCommission').textContent = rp(total);

  $('payoutChip').textContent = total >= 500000 ? '💳 Payout via Bank'
    : total >= 10000 ? '👛 Payout via ShopeePay' : '⏳ Belum capai Rp10.000';
  $('payoutText').textContent = total >= 10000
    ? `Estimasi komisi kamu ${rp(total)}. ${total >= 500000
      ? 'Di atas Rp500.000 — payout masuk rekening bank.'
      : 'Di bawah Rp500.000 — payout masuk ShopeePay.'} Pastikan data payout (KTP/NIK/NPWP/bank) di aplikasi Shopee sudah lengkap, kalau tidak komisi tidak bisa cair.`
    : `Estimasi komisi kamu baru ${rp(total)} — masih di bawah minimum payout Rp10.000. Terus sebar linknya! 🎃`;

  $('emptyState').style.display = links.length ? 'none' : 'block';
  $('linkList').innerHTML = links.map((l) => `
    <div class="link-item">
      <div class="top">
        <strong>${esc(l.name)}</strong>
        <a href="${esc(l.url)}" target="_blank" rel="noopener">Buka di Shopee ↗</a>
      </div>
      <div class="meta">${esc(l.category)} · ${rp(l.price)} · komisi ${l.rate}% · ${rp(l.price * l.rate / 100)}/order</div>
      <div class="nums">
        <span>👆 Klik: <b>${l.clicks}</b></span>
        <span>🛒 Order: <b>${l.orders}</b></span>
        <span>💰 Komisi: <b>${rp(commissionOf(l))}</b></span>
      </div>
      <div class="item-actions">
        <button class="btn-ghost" data-log="${l.id}">＋ Catat klik/order</button>
        <button class="btn-danger" data-del="${l.id}">Hapus</button>
      </div>
    </div>`).join('');
}

/* Tambah link */
$('linkForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const links = load();
  links.unshift({
    id: uid(),
    name: $('fName').value.trim(),
    url: $('fUrl').value.trim(),
    price: Math.max(0, Number($('fPrice').value) || 0),
    rate: Math.min(40, Math.max(0, Number($('fRate').value) || 0)),
    category: $('fCat').value,
    clicks: 0, orders: 0,
    createdAt: new Date().toISOString(),
  });
  save(links);
  e.target.reset();
  $('fRate').value = 5;
  render();
});

/* Aksi per item: catat / hapus */
let activeId = null;
$('linkList').addEventListener('click', (e) => {
  const delBtn = e.target.closest('[data-del]');
  const logBtn = e.target.closest('[data-log]');
  if (delBtn) {
    if (!confirm('Hapus link ini?')) return;
    save(load().filter((l) => l.id !== delBtn.dataset.del));
    render();
  } else if (logBtn) {
    activeId = logBtn.dataset.log;
    const l = load().find((x) => x.id === activeId);
    $('logProduct').textContent = l.name;
    $('logClicks').value = 0;
    $('logOrders').value = 0;
    $('logDialog').showModal();
  }
});

$('logSave').addEventListener('click', () => {
  const links = load();
  const l = links.find((x) => x.id === activeId);
  if (l) {
    l.clicks += Math.max(0, Number($('logClicks').value) || 0);
    l.orders += Math.max(0, Number($('logOrders').value) || 0);
    save(links);
    render();
  }
  activeId = null;
});

/* Cari, export, reset */
$('search').addEventListener('input', render);
$('exportBtn').addEventListener('click', () => {
  const links = load();
  const rows = [['Produk', 'Link', 'Kategori', 'Harga', 'Komisi %', 'Klik', 'Order', 'Estimasi Komisi (Rp)']]
    .concat(links.map((l) => [l.name, l.url, l.category, l.price, l.rate, l.clicks, l.orders, Math.round(commissionOf(l))]));
  const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  a.download = 'komisiku-' + new Date().toISOString().slice(0, 10) + '.csv';
  a.click();
  URL.revokeObjectURL(a.href);
});
$('resetBtn').addEventListener('click', () => {
  if (confirm('Hapus SEMUA link dan data? Ini tidak bisa dibatalkan.')) {
    localStorage.removeItem(STORE_KEY);
    render();
  }
});

render();
