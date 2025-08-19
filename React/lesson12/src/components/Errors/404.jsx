import React, { useEffect, useRef } from "react";

const NotFound404 = () => {
  const canvasRef = useRef(null);
  const toastRef = useRef(null);

  useEffect(() => {
    /* ===== Starfield minimal ===== */
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [],
      W,
      H,
      mouse = { x: 0, y: 0 },
      tick = 0;

    function size() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", size, { passive: true });
    size();

    function initStars(n = 140) {
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        z: Math.random() * 1 + 0.2,
        r: Math.random() * 1.2 + 0.2,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
      }));
    }
    initStars();

    window.addEventListener(
      "mousemove",
      (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      },
      { passive: true }
    );

    function loop() {
      tick++;
      ctx.clearRect(0, 0, W, H);
      for (const s of stars) {
        const px = (mouse.x / W - 0.5) * 6 * s.z;
        const py = (mouse.y / H - 0.5) * 6 * s.z;
        s.x += s.vx + px * 0.002;
        s.y += s.vy + py * 0.002;
        if (s.x < -10) s.x = W + 10;
        if (s.x > W + 10) s.x = -10;
        if (s.y < -10) s.y = H + 10;
        if (s.y > H + 10) s.y = -10;

        const glow = 0.4 + Math.sin(tick / 30 + s.x) * 0.3;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${200 + s.z * 80}, 90%, ${70 +
          glow * 20}%, ${0.45 + s.z * 0.3})`;
        ctx.fill();
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    /* ===== Toast minimal ===== */
    function toast(msg) {
      let toastEl = toastRef.current;
      if (!toastEl) return;
      toastEl.textContent = msg;
      toastEl.style.opacity = "0";
      toastEl.style.transition = "opacity .15s ease";
      requestAnimationFrame(() => (toastEl.style.opacity = "1"));
      clearTimeout(toastEl._t);
      toastEl._t = setTimeout(() => (toastEl.style.opacity = "0"), 1300);
    }

    // Example of binding surprise button
    const surpriseBtn = document.getElementById("surprise");
    if (surpriseBtn) {
      surpriseBtn.addEventListener("click", () => {
        toast("✨ Abbracadabra!");
      });
    }
  }, []);

  return (
    <div className="wrap">
      <canvas ref={canvasRef} className="starfield" aria-hidden="true" />
      <div className="card">
        <div className="inner">
          <h1 className="code" data-text="404">
            404
          </h1>
          <p className="title">Pagina non trovata</p>
          <p className="muted">
            Forse il link è stato spostato, rinominato o non esiste più. Torna alla
            Home o prova una ricerca.
          </p>
          <div className="actions">
            <a className="btn" href="/">
              🏠 Home
            </a>
            <a className="btn secondary" href="mailto:info@example.com">
              ✉️ Contattaci
            </a>
            <button className="btn ghost" id="surprise">
              ✨ Sorpresa
            </button>
          </div>
        </div>
      </div>
      <div
        ref={toastRef}
        style={{
          position: "fixed",
          bottom: "18px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(0,0,0,.6)",
          color: "#fff",
          padding: "10px 14px",
          borderRadius: "10px",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,.15)",
          zIndex: 1000,
          fontSize: "14px",
          opacity: 0,
        }}
      ></div>
    </div>
  );
};

export default NotFound404;
