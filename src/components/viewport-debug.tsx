"use client";

import { useEffect, useState } from "react";

type Readings = Record<string, string>;

/**
 * Diagnostic overlay for checking header centering inside in-app browsers.
 * Only renders when the URL has ?debug=1, so it never ships visually.
 */
export function ViewportDebug() {
  const [open, setOpen] = useState(false);
  const [readings, setReadings] = useState<Readings>({});

  useEffect(() => {
    if (!new URLSearchParams(window.location.search).has("debug")) return;
    setOpen(true);

    const read = () => {
      const doc = document.documentElement;
      const vv = window.visualViewport;
      const header = document.querySelector("header");
      const nav = header?.firstElementChild;
      const navRect = nav?.getBoundingClientRect();
      const headerRect = header?.getBoundingClientRect();
      const bodyRect = document.body.getBoundingClientRect();
      setReadings({
        screen: `${window.screen.width} × ${window.screen.height}`,
        inner: `${window.innerWidth} × ${window.innerHeight}`,
        client: `${doc.clientWidth} × ${doc.clientHeight}`,
        visual: vv
          ? `${vv.width.toFixed(1)} × ${vv.height.toFixed(1)} @ ${vv.offsetLeft.toFixed(1)}, ${vv.offsetTop.toFixed(1)} (scale ${vv.scale.toFixed(2)})`
          : "n/a",
        scroll: `${window.scrollX}, ${window.scrollY}`,
        dpr: String(window.devicePixelRatio),
        header: headerRect
          ? `${headerRect.left.toFixed(1)} → ${headerRect.right.toFixed(1)}`
          : "n/a",
        nav: navRect
          ? `${navRect.left.toFixed(1)} → ${navRect.right.toFixed(1)} (w ${navRect.width.toFixed(1)})`
          : "n/a",
        body: `${bodyRect.left.toFixed(1)} → ${bodyRect.right.toFixed(1)} (w ${bodyRect.width.toFixed(1)})`,
        dir: getComputedStyle(doc).direction,
        orientation: window.screen.orientation?.type ?? "n/a",
        ua: navigator.userAgent,
      });
    };

    read();
    window.addEventListener("resize", read);
    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("orientationchange", read);
    window.visualViewport?.addEventListener("resize", read);
    window.visualViewport?.addEventListener("scroll", read);
    return () => {
      window.removeEventListener("resize", read);
      window.removeEventListener("scroll", read);
      window.removeEventListener("orientationchange", read);
      window.visualViewport?.removeEventListener("resize", read);
      window.visualViewport?.removeEventListener("scroll", read);
    };
  }, []);

  if (!open) return null;

  return (
    <>
      <div
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: "50%",
          width: 1,
          background: "rgba(255,80,80,0.9)",
          zIndex: 9998,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "fixed",
          insetInline: 8,
          bottom: 8,
          zIndex: 9999,
          maxHeight: "42vh",
          overflow: "auto",
          padding: "10px 12px",
          borderRadius: 12,
          background: "rgba(0,0,0,0.88)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "#eafff7",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: 10,
          lineHeight: 1.7,
          direction: "ltr",
          textAlign: "left",
          WebkitTextSizeAdjust: "100%",
        }}
      >
        <div style={{ marginBottom: 4, color: "#6ee7b7", fontWeight: 700 }}>
          viewport debug — hadinemati.ir
        </div>
        {Object.entries(readings).map(([key, value]) => (
          <div key={key} style={{ display: "flex", gap: 6 }}>
            <span style={{ color: "#8ba39b", minWidth: 78, flexShrink: 0 }}>{key}</span>
            <span style={{ wordBreak: "break-all" }}>{value}</span>
          </div>
        ))}
        <div style={{ marginTop: 4, color: "#8ba39b" }}>
          قرمز: خط وسط لایه‌بندی. اگر وسط صفحه نیست، هدر هم همان‌جا وسط‌چین می‌شود.
        </div>
      </div>
    </>
  );
}
