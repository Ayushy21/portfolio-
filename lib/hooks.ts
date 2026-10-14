"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

/** True once the element has been at least partly on screen. */
export function useInViewOnce<T extends Element>(
  options: { amount?: number; rootMargin?: string } = {},
) {
  const { amount = 0.25, rootMargin = "0px 0px -8% 0px" } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;

    if (typeof IntersectionObserver === "undefined") {
      // No observer support: show the content on the next frame.
      const frame = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        }
      },
      { threshold: amount, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [amount, rootMargin, inView]);

  return { ref, inView };
}

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
}

/**
 * Progressively activates `count` steps once `active` is true.
 * Returns how many steps are currently lit.
 */
export function useSequence(count: number, active: boolean, step = 130, startDelay = 140) {
  const reduced = usePrefersReducedMotion();
  const [lit, setLit] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (reduced) {
      const instant = setTimeout(() => setLit(count), 0);
      return () => clearTimeout(instant);
    }

    let frame = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      frame += 1;
      setLit(frame);
      if (frame < count) timer = setTimeout(tick, step);
    };

    timer = setTimeout(tick, startDelay);
    return () => clearTimeout(timer);
  }, [active, count, reduced, startDelay, step]);

  return lit;
}

/** Eased count-up that runs once. */
export function useCountUp(target: number, active: boolean, duration = 1100) {
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (reduced) {
      const instant = setTimeout(() => setValue(target), 0);
      return () => clearTimeout(instant);
    }

    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, duration, reduced, target]);

  return value;
}

/** Tracks which of the given section ids currently owns the viewport. */
export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    let raf = 0;
    const measure = () => {
      raf = 0;
      const anchor = window.innerHeight * 0.35;
      let current = sections[0].id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= anchor) current = section.id;
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ids]);

  return activeId;
}

/** Vertical scroll progress of the document, 0 -> 1. */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const measure = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return progress;
}
