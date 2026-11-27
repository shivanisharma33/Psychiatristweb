import { useEffect, useLayoutEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * - New navigation (PUSH/REPLACE) without hash  -> scroll to top.
 * - Navigation with #hash                        -> scroll to that element.
 * - Back/forward (POP)                           -> browser restores position.
 */
export function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'auto';
  }, []);

  useLayoutEffect(() => {
    if (navType === 'POP' && !hash) return;
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      // Wait a frame so the new route has rendered.
      const raf = requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        else window.scrollTo(0, 0);
      });
      return () => cancelAnimationFrame(raf);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash, key, navType]);

  return null;
}
