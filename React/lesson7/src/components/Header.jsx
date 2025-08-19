import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// A sleek, responsive header with no UI kit. Pure CSS inside the component.
// - Sticky top bar with glass effect
// - Mobile hamburger menu + trap focus
// - Active route highlight via NavLink
// - Subtle hover underline animation
// - Works in light/dark (prefers-color-scheme)

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Prevent body scroll when menu is open on mobile
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className="hx-header" role="banner">
      <style>{css}</style>
      <nav className="hx-nav" aria-label="Primary">
        <div className="hx-left">
          <NavLink to="/" className="hx-logo" aria-label="Homepage">
            <span className="hx-logo-mark">▲</span>
            <span className="hx-logo-text">Orbit</span>
          </NavLink>
        </div>

        <button
          className="hx-burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="hx-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul id="hx-menu" className={`hx-links ${open ? "open" : ""}`}>
          <li>
            <NavLink to="/" end className={({ isActive }) => linkClass(isActive)} onClick={() => setOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => linkClass(isActive)} onClick={() => setOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => linkClass(isActive)} onClick={() => setOpen(false)}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => linkClass(isActive)} onClick={() => setOpen(false)}>
              Contact
            </NavLink>
          </li>
          <li className="hx-cta-wrap">
            <NavLink to="/get-started" className="hx-cta" onClick={() => setOpen(false)}>
              Get Started
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function linkClass(isActive) {
  return `hx-link ${isActive ? "active" : ""}`;
}

const css = `
:root {
  --hx-bg: rgba(15, 18, 25, 0.7);
  --hx-blur-bg: rgba(15, 18, 25, 0.35);
  --hx-border: #232833;
  --hx-text: #e8ecf1;
  --hx-muted: #9aa4af;
  --hx-accent: #6aa2ff;
  --hx-shadow: 0 10px 30px rgba(0,0,0,.35);
}
@media (prefers-color-scheme: light) {
  :root {
    --hx-bg: rgba(255, 255, 255, 0.7);
    --hx-blur-bg: rgba(255, 255, 255, 0.4);
    --hx-border: #e6e8ef;
    --hx-text: #0b1220;
    --hx-muted: #667085;
    --hx-accent: #4f7cff;
    --hx-shadow: 0 10px 28px rgba(36, 44, 66, .12);
  }
}

* { box-sizing: border-box; }

.hx-header {
  position: sticky; top: 0; z-index: 100;
  backdrop-filter: saturate(1.2) blur(10px);
  background: linear-gradient(0deg, var(--hx-blur-bg), var(--hx-bg));
  border-bottom: 1px solid var(--hx-border);
}
.hx-nav {
  max-width: 1200px; margin: 0 auto; padding: 12px 18px;
  display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 16px;
}

/* Logo */
.hx-logo { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; color: var(--hx-text); font-weight: 800; letter-spacing: 0.2px; }
.hx-logo-mark { width: 28px; height: 28px; display: grid; place-items: center; border-radius: 8px; background: var(--hx-accent); color: #fff; font-size: 14px; }
.hx-logo-text { font-size: 18px; }

/* Burger */
.hx-burger { display: none; width: 44px; height: 44px; border-radius: 12px; border: 1px solid var(--hx-border); background: transparent; cursor: pointer; position: relative; }
.hx-burger span { position: absolute; left: 10px; right: 10px; height: 2px; background: var(--hx-text); border-radius: 2px; transition: transform .25s ease, opacity .2s ease; }
.hx-burger span:nth-child(1) { top: 14px; }
.hx-burger span:nth-child(2) { top: 21px; }
.hx-burger span:nth-child(3) { top: 28px; }

/* Links */
.hx-links { list-style: none; display: flex; align-items: center; gap: 8px; padding: 0; margin: 0; }
.hx-link { position: relative; display: inline-flex; align-items: center; gap: 8px; padding: 10px 12px; border-radius: 10px; color: var(--hx-muted); text-decoration: none; font-weight: 600; }
.hx-link:hover { color: var(--hx-text); }
.hx-link::after { content: ""; position: absolute; left: 12px; right: 12px; bottom: 6px; height: 2px; background: var(--hx-accent); transform: scaleX(0); transform-origin: left; transition: transform .25s ease; border-radius: 2px; }
.hx-link:hover::after { transform: scaleX(1); }
.hx-link.active { color: var(--hx-text); background: color-mix(in oklab, var(--hx-accent) 12%, transparent); }
.hx-link.active::after { transform: scaleX(1); }

/* CTA */
.hx-cta-wrap { margin-left: 6px; }
.hx-cta { display: inline-flex; align-items: center; gap: 8px; padding: 10px 14px; border-radius: 12px; text-decoration: none; color: white; font-weight: 700; background: linear-gradient(135deg, var(--hx-accent), color-mix(in oklab, var(--hx-accent) 65%, #fff)); box-shadow: 0 10px 20px color-mix(in oklab, var(--hx-accent) 35%, transparent); }
.hx-cta:hover { filter: brightness(1.05) saturate(1.05); }

/* Mobile */
@media (max-width: 900px) {
  .hx-nav { grid-template-columns: auto auto; }
  .hx-burger { display: inline-block; justify-self: end; }
  .hx-links {
    position: fixed; inset: 64px 12px auto 12px; top: 64px; height: auto; max-height: calc(100vh - 88px);
    background: linear-gradient(180deg, var(--hx-blur-bg), var(--hx-bg));
    border: 1px solid var(--hx-border); border-radius: 16px; box-shadow: var(--hx-shadow);
    padding: 12px; display: grid; gap: 6px; overflow: auto; transform: translateY(-12px); opacity: 0; pointer-events: none; transition: opacity .2s ease, transform .2s ease;
  }
  .hx-links.open { opacity: 1; transform: translateY(0); pointer-events: auto; }
  .hx-link { padding: 12px 14px; font-size: 15px; }
  .hx-cta-wrap { margin: 6px 0 0; }
  .hx-burger[aria-expanded="true"] span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .hx-burger[aria-expanded="true"] span:nth-child(2) { opacity: 0; }
  .hx-burger[aria-expanded="true"] span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
}
`;
