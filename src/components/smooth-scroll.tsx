"use client";

import { useEffect } from "react";
import type Lenis from "lenis";

/**
 * Inertial wheel smoothing for desktop. Touch devices keep their native
 * momentum scrolling, and reduced-motion users get plain scrolling.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let lenis: Lenis | null = null;
    let cancelled = false;

    import("lenis")
      .then(({ default: Lenis }) => {
        if (cancelled) return;
        lenis = new Lenis({
          autoRaf: true,
          duration: 1.1,
          smoothWheel: true,
          wheelMultiplier: 1,
          anchors: { offset: -84 },
        });
      })
      .catch(() => {
        // Smooth scrolling is an enhancement; ignore load failures.
      });

    return () => {
      cancelled = true;
      lenis?.destroy();
    };
  }, []);

  return null;
}
