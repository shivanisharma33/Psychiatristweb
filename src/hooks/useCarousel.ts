import { useCallback, useEffect, useState } from 'react';

/** Responsive "items per view" based on viewport width breakpoints. */
export function usePerView(map: { base: number; md?: number; lg?: number }) {
  const compute = useCallback(() => {
    if (typeof window === 'undefined') return map.lg ?? map.md ?? map.base;
    const w = window.innerWidth;
    if (w >= 1200 && map.lg) return map.lg; // 3-up sliders need ~1100px of room
    if (w >= 768 && map.md) return map.md;
    return map.base;
  }, [map.base, map.md, map.lg]);

  const [perView, setPerView] = useState(compute);
  useEffect(() => {
    const onResize = () => setPerView(compute());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [compute]);
  return perView;
}

/** Simple index-based carousel state (loops), optional autoplay. */
export function useCarousel(count: number, { autoplay = 0, loop = true }: { autoplay?: number; loop?: boolean } = {}) {
  const [rawIndex, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  // Derived clamp keeps the index valid if `count` shrinks (e.g. perView grows on resize).
  const index = Math.min(rawIndex, Math.max(0, count - 1));

  const go = useCallback(
    (i: number) => {
      if (count <= 0) return;
      setIndex(loop ? ((i % count) + count) % count : Math.max(0, Math.min(count - 1, i)));
    },
    [count, loop],
  );
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    if (!autoplay || paused || count <= 1) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = window.setTimeout(() => go(index + 1), autoplay);
    return () => window.clearTimeout(t);
  }, [autoplay, paused, index, count, go]);

  return { index, go, next, prev, setPaused };
}
