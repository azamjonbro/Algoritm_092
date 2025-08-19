import React, { useMemo } from "react";

// A single-file, no-dependency React dashboard with handcrafted CSS.
// - Pure CSS (no Tailwind, no UI kits)
// - Responsive grid layout
// - Lightweight SVG sparklines & area chart
// - Accessible semantic elements
// - Dark-mode ready via prefers-color-scheme

export default function DashboardHome() {
  const kpis = useMemo(
    () => [
      { label: "Revenue", value: "$42,380", change: "+8.3%", data: [18, 22, 19, 24, 27, 31, 30, 36, 40, 38] },
      { label: "Active Users", value: "12,947", change: "+3.1%", data: [220, 240, 260, 250, 280, 300, 310, 305, 320, 340] },
      { label: "Sessions", value: "48,129", change: "+1.4%", data: [1, 3, 2, 4, 6, 5, 7, 6, 9, 8] },
      { label: "Conversion", value: "3.9%", change: "+0.4pt", data: [2.8, 2.9, 3.0, 3.1, 3.0, 3.2, 3.3, 3.5, 3.7, 3.9] },
    ],
    []
  );

  const trafficSeries = useMemo(() => [12, 16, 14, 18, 25, 24, 28, 30, 29, 33, 37, 41], []);

  return (
    <div className="dash-root">
      <style>{css}</style>

      <header className="topbar" role="banner">
        <div className="brand">
          <div className="logo" aria-hidden="true">▲</div>
          <span className="title">Orbit Admin</span>
        </div>
        <div className="actions">
          <div className="search">
            <input placeholder="Search…" aria-label="Search" />
          </div>
          <button className="ghost" aria-label="Notifications">🔔</button>
          <div className="avatar" aria-label="Account">LJ</div>
        </div>
      </header>

      <main className="content" role="main">
        <section className="hero">
          <div>
            <h1>Welcome back, Luqmonjon 👋</h1>
            <p className="muted">Here’s what’s happening with your app today.</p>
          </div>
          <button className="primary">Create Report</button>
        </section>

        <section className="kpis" aria-label="Key metrics">
          {kpis.map((k) => (
            <article key={k.label} className="card kpi" tabIndex={0}>
              <div className="kpi-top">
                <span className="kpi-label">{k.label}</span>
                <span className="kpi-change up">{k.change}</span>
              </div>
              <div className="kpi-main">
                <strong className="kpi-value">{k.value}</strong>
                <Sparkline data={k.data} />
              </div>
            </article>
          ))}
        </section>

        <section className="grid-2">
          <article className="card chart">
            <header>
              <h3>Traffic (last 12 weeks)</h3>
              <span className="muted">Unique visits</span>
            </header>
            <AreaChart series={trafficSeries} />
          </article>

          <article className="card table-card">
            <header>
              <h3>Recent Orders</h3>
              <span className="muted">Updated just now</span>
            </header>
            <div className="table-wrap" role="region" aria-label="Recent orders">
              <table className="table">
                <thead>
                  <tr>
                    <th>Order</th>
                    <th>Customer</th>
                    <th>Status</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["#1042", "Ali Usmonov", "Paid", "$320.00"],
                    ["#1041", "Madina R.", "Pending", "$89.00"],
                    ["#1040", "Javlonbek", "Shipped", "$129.99"],
                    ["#1039", "Ziyoda Q.", "Refunded", "$49.00"],
                    ["#1038", "Nodir T.", "Paid", "$980.00"],
                  ].map((r) => (
                    <tr key={r[0]}>
                      <td>{r[0]}</td>
                      <td>{r[1]}</td>
                      <td>
                        <span className={`badge ${badgeTone(r[2])}`}>{r[2]}</span>
                      </td>
                      <td>{r[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </section>

        <section className="grid-3">
          <article className="card tasks">
            <header>
              <h3>Tasks</h3>
              <span className="muted">Today</span>
            </header>
            <ul className="checklist">
              {[
                "Review security alerts",
                "Deploy EAS build",
                "Fix GitHub SSH auth",
                "Prepare training content",
              ].map((t) => (
                <li key={t}>
                  <label>
                    <input type="checkbox" />
                    <span>{t}</span>
                  </label>
                </li>
              ))}
            </ul>
          </article>

          <article className="card announce">
            <header>
              <h3>Announcement</h3>
              <span className="muted">System</span>
            </header>
            <p>
              New dashboard components are ready. You can clone the pattern and
              feed real data via props or API calls.
            </p>
            <button className="ghost">View Changelog</button>
          </article>

          <article className="card inbox">
            <header>
              <h3>Inbox</h3>
              <span className="muted">3 new</span>
            </header>
            <ul className="inbox-list">
              {["Payment received from Diyor", "Server CPU spike", "New user: Sarvar"]
                .map((s, i) => (
                  <li key={i}>
                    <span className="dot" />
                    <span>{s}</span>
                    <time className="muted">{i === 0 ? "2m" : i === 1 ? "14m" : "1h"}</time>
                  </li>
                ))}
            </ul>
          </article>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Orbit Admin</span>
        <a href="#">Privacy</a>
      </footer>
    </div>
  );
}

function badgeTone(status) {
  switch (status) {
    case "Paid":
      return "success";
    case "Pending":
      return "warn";
    case "Shipped":
      return "info";
    case "Refunded":
      return "danger";
    default:
      return "";
  }
}

function Sparkline({ data = [], width = 120, height = 40, strokeWidth = 2 }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((v - min) / range) * height;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg className="spark" width={width} height={height} aria-hidden="true">
      <polyline points={points} fill="none" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

function AreaChart({ series = [], width = 560, height = 220 }) {
  const max = Math.max(...series);
  const min = Math.min(...series);
  const range = max - min || 1;

  const coords = series.map((v, i) => {
    const x = (i / (series.length - 1)) * width;
    const y = height - ((v - min) / range) * height;
    return [x, y];
  });

  const path = [
    `M 0 ${height}`,
    `L ${coords.map(([x, y]) => `${x} ${y}`).join(" L ")}`,
    `L ${width} ${height}`,
    "Z",
  ].join(" ");

  const line = `M ${coords.map(([x, y]) => `${x} ${y}`).join(" L ")}`;

  return (
    <svg className="area-chart" width="100%" viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Area chart">
      <defs>
        <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
        <filter id="soft" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <path d={path} fill="url(#grad)" />
      <path d={line} fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
      {coords.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="3" fill="var(--accent)" />
          <circle cx={x} cy={y} r="10" fill="var(--accent)" opacity="0.08" filter="url(#soft)" />
        </g>
      ))}
    </svg>
  );
}

const css = `
:root {
  --bg: #0b0c10;
  --panel: #111318;
  --panel-2: #0f1116;
  --text: #e8ecf1;
  --muted: #9aa4af;
  --line: #232833;
  --accent: #6aa2ff;
  --success: #28c88a;
  --warn: #f2b824;
  --danger: #ff6b6b;
  --info: #58c0ff;
  --radius: 16px;
  --shadow: 0 8px 24px rgba(0,0,0,.35), 0 2px 6px rgba(0,0,0,.25);
}
@media (prefers-color-scheme: light) {
  :root {
    --bg: #f6f7fb;
    --panel: #ffffff;
    --panel-2: #ffffff;
    --text: #0b1220;
    --muted: #64748b;
    --line: #e6e8ef;
    --accent: #4f7cff;
    --shadow: 0 10px 24px rgba(36, 44, 66, .08);
  }
}
* { box-sizing: border-box; }
html, body, #root { height: 100%; background: var(--bg); color: var(--text); }

.dash-root { min-height: 100%; display: grid; grid-template-rows: auto 1fr auto; }

.topbar {
  position: sticky; top: 0; z-index: 20;
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 20px; background: linear-gradient(0deg, var(--panel-2), var(--panel));
  border-bottom: 1px solid var(--line); box-shadow: var(--shadow);
}
.brand { display: flex; gap: 10px; align-items: center; font-weight: 700; letter-spacing: .3px; }
.logo { width: 28px; height: 28px; display: grid; place-items: center; background: var(--accent); color: white; border-radius: 8px; font-size: 14px; }
.title { font-size: 18px; }
.actions { display: flex; align-items: center; gap: 10px; }
.search { position: relative; }
.search input { background: var(--panel-2); border: 1px solid var(--line); color: var(--text); border-radius: 999px; padding: 10px 14px; width: 240px; outline: none; }
.search input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px color-mix(in oklab, var(--accent) 20%, transparent); }
.avatar { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 50%; background: linear-gradient(135deg, var(--accent), #8cc0ff); color: #fff; font-weight: 700; }

.content { padding: 24px; max-width: 1200px; margin-inline: auto; width: 100%; }
.hero { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 18px; }
.hero h1 { margin: 0; font-size: 24px; }
.muted { color: var(--muted); font-size: 13px; }

.kpis { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 16px; }
.grid-2 { display: grid; grid-template-columns: 2fr 1.4fr; gap: 14px; margin-bottom: 14px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }

.card {
  background: linear-gradient(180deg, color-mix(in oklab, var(--panel) 88%, transparent), color-mix(in oklab, var(--panel-2) 100%, transparent));
  border: 1px solid var(--line); border-radius: var(--radius); box-shadow: var(--shadow);
  padding: 14px; position: relative; overflow: hidden;
}
.card header { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 8px; }
.card h3 { margin: 0; font-size: 16px; }

.kpi .kpi-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }
.kpi-label { font-size: 13px; color: var(--muted); }
.kpi-change { font-size: 12px; padding: 4px 8px; border-radius: 999px; background: color-mix(in oklab, var(--accent) 18%, transparent); color: var(--accent); border: 1px dashed color-mix(in oklab, var(--accent) 40%, transparent); }
.kpi-main { display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 10px; }
.kpi-value { font-size: 22px; letter-spacing: .3px; }
.spark { width: 120px; height: 40px; stroke: var(--accent); opacity: .9; }

.chart { min-height: 280px; }
.area-chart { width: 100%; height: 220px; display: block; }

.table-wrap { overflow: auto; border-radius: 12px; border: 1px solid var(--line); }
.table { width: 100%; border-collapse: collapse; font-size: 14px; }
.table th, .table td { padding: 12px 10px; text-align: left; white-space: nowrap; }
.table thead th { position: sticky; top: 0; background: var(--panel-2); border-bottom: 1px solid var(--line); }
.table tbody tr { border-top: 1px dashed var(--line); }
.table tbody tr:hover { background: color-mix(in oklab, var(--accent) 6%, transparent); }

.badge { font-size: 12px; padding: 6px 10px; border-radius: 999px; border: 1px solid var(--line); }
.badge.success { background: color-mix(in oklab, var(--success) 16%, transparent); color: var(--success); border-color: color-mix(in oklab, var(--success) 40%, transparent); }
.badge.warn { background: color-mix(in oklab, var(--warn) 16%, transparent); color: #8a6b04; border-color: color-mix(in oklab, var(--warn) 40%, transparent); }
.badge.danger { background: color-mix(in oklab, var(--danger) 16%, transparent); color: var(--danger); border-color: color-mix(in oklab, var(--danger) 40%, transparent); }
.badge.info { background: color-mix(in oklab, var(--info) 16%, transparent); color: var(--info); border-color: color-mix(in oklab, var(--info) 40%, transparent); }

.tasks .checklist { list-style: none; margin: 0; padding: 0; display: grid; gap: 8px; }
.tasks label { display: grid; grid-template-columns: 18px 1fr; gap: 10px; align-items: center; }
.tasks input[type="checkbox"] { width: 18px; height: 18px; accent-color: var(--accent); }
.tasks li { padding: 8px 8px; border: 1px dashed var(--line); border-radius: 10px; }
.tasks li:hover { border-style: solid; }

.inbox-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
.inbox-list li { display: grid; grid-template-columns: 10px 1fr auto; gap: 10px; align-items: center; }
.dot { width: 10px; height: 10px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 0 6px color-mix(in oklab, var(--accent) 20%, transparent); }

.footer { display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; color: var(--muted); border-top: 1px solid var(--line); margin-top: 24px; }
.footer a { color: var(--muted); text-decoration: none; }
.footer a:hover { color: var(--text); }

.primary, .ghost {
  border: 1px solid var(--line); background: var(--panel-2); color: var(--text);
  padding: 10px 14px; border-radius: 12px; cursor: pointer; font-weight: 600;
  transition: transform .08s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease;
}
.primary { background: linear-gradient(135deg, var(--accent), color-mix(in oklab, var(--accent) 60%, #ffffff)); color: white; border: none; }
.primary:hover { filter: saturate(1.05) brightness(1.05); box-shadow: 0 10px 20px color-mix(in oklab, var(--accent) 40%, transparent); }
.ghost:hover { border-color: var(--accent); box-shadow: 0 4px 14px color-mix(in oklab, var(--accent) 18%, transparent); }

/* Responsive */
@media (max-width: 1100px) {
  .kpis { grid-template-columns: repeat(2, 1fr); }
  .grid-2 { grid-template-columns: 1fr; }
}
@media (max-width: 720px) {
  .hero { flex-direction: column; align-items: flex-start; gap: 10px; }
  .grid-3 { grid-template-columns: 1fr; }
  .search input { width: 160px; }
}
`;
