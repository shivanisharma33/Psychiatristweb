import { useEffect, useId, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { mainNav, navCta } from '@/content/site';
import type { NavItem } from '@/types';
import { Wordmark } from '@/components/common/Wordmark';
import { Button } from '@/components/common/Button';
import { cn } from '@/utils/cn';

const linkBase =
  'relative flex h-[42px] items-center px-[16px] text-[16px] leading-5 text-ink transition-colors hover:text-accent';

function isActive(pathname: string, item: NavItem) {
  return item.to === '/' ? pathname === '/' : pathname.startsWith(item.to);
}

function DesktopDropdown({ item, active }: { item: NavItem; active: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  // True when the menu was just opened by mouse hover, so the following click
  // on the chevron doesn't immediately toggle it closed again.
  const openedByHover = useRef(false);
  const menuId = useId();
  const reduce = useReducedMotion();
  const { pathname, hash } = useLocation();

  // Close when the route changes (adjust state during render — no effect needed).
  const loc = pathname + hash;
  const [lastLoc, setLastLoc] = useState(loc);
  if (loc !== lastLoc) {
    setLastLoc(loc);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => {
        if (!open) openedByHover.current = true;
        setOpen(true);
      }}
      onMouseLeave={() => {
        openedByHover.current = false;
        setOpen(false);
      }}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setOpen(false)}
    >
      <div className="flex items-center">
        <NavLink to={item.to} end className={cn(linkBase, 'pr-[6px]', active && 'nav-active')}>
          {item.label}
        </NavLink>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={`Show ${item.label} menu`}
          onClick={() => {
            if (openedByHover.current) {
              // First click after a hover-open keeps the menu open (set explicitly so
              // it commits even if the hover update hasn't rendered yet).
              openedByHover.current = false;
              setOpen(true);
              return;
            }
            setOpen((o) => !o);
          }}
          className="flex h-[42px] items-center pr-[12px] text-ink hover:text-accent"
        >
          <ChevronDown className={cn('size-[18px] transition-transform duration-200', open && 'rotate-180')} strokeWidth={2} />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.ul
            id={menuId}
            initial={reduce ? false : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 top-full z-50 min-w-[230px] rounded-[10px] bg-white py-2 shadow-[0_12px_32px_rgba(0,0,0,0.12)]"
          >
            {item.children!.map((c) => (
              <li key={c.to}>
                <Link to={c.to} className="block px-[18px] py-[10px] text-[16px] text-ink transition-colors hover:bg-[#f6f1ef] hover:text-accent">
                  {c.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const { pathname, hash } = useLocation();
  const reduce = useReducedMotion();
  const panelId = useId();

  const loc = pathname + hash;
  const [lastLoc, setLastLoc] = useState(loc);
  if (loc !== lastLoc) {
    setLastLoc(loc);
    setMobileOpen(false);
    setExpanded(null);
  }

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMobileOpen(false);
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 bg-white">
      <nav aria-label="Main" className="mx-auto flex h-[64px] max-w-[1440px] items-center justify-between px-[20px] lg:h-[80px] lg:px-[72px]">
        <Link to="/" aria-label="Home" className="flex shrink-0 items-center">
          <Wordmark />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center lg:flex">
          <ul className="flex items-center">
            {mainNav.map((item) => {
              const active = isActive(pathname, item);
              return (
                <li key={item.to}>
                  {item.children ? (
                    <DesktopDropdown item={item} active={active} />
                  ) : (
                    <NavLink to={item.to} end className={cn(linkBase, active && 'nav-active')}>
                      {item.label}
                    </NavLink>
                  )}
                </li>
              );
            })}
          </ul>
          <Button variant="nav" to={navCta.to} className="ml-[47px]">
            {navCta.label}
          </Button>
        </div>

        {/* Mobile: CTA + hamburger */}
        <div className="flex items-center gap-[18px] xs:gap-[30px] lg:hidden">
          <Button variant="nav" to={navCta.to} className="h-[40px] px-[20px] text-[15px] max-[379px]:hidden">
            {navCta.label}
          </Button>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls={panelId}
            onClick={() => setMobileOpen((o) => !o)}
            className="relative grid size-[44px] place-items-center"
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden className="relative block h-[18px] w-[26px]">
              <span className={cn('absolute left-0 top-0 h-[2px] w-full bg-ink transition-transform duration-300', mobileOpen && 'translate-y-[8px] rotate-45')} />
              <span className={cn('absolute left-0 top-[8px] h-[2px] w-full bg-ink transition-opacity duration-200', mobileOpen && 'opacity-0')} />
              <span className={cn('absolute left-0 top-[16px] h-[2px] w-full bg-ink transition-transform duration-300', mobileOpen && '-translate-y-[8px] -rotate-45')} />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id={panelId}
            initial={reduce ? false : { height: 0 }}
            animate={{ height: 'calc(100dvh - 64px)' }}
            exit={reduce ? undefined : { height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between overflow-y-auto border-t border-[#eee] bg-white lg:hidden"
          >
            <ul className="px-[20px] py-[12px]">
              {mainNav.map((item) => {
                const active = isActive(pathname, item);
                const isExp = expanded === item.to;
                return (
                  <li key={item.to} className="border-b border-[#f0f0f0]">
                    <div className="flex items-center justify-between">
                      <NavLink to={item.to} end className={cn('block flex-1 py-[16px] text-[20px] text-ink', active && 'text-accent')}>
                        {item.label}
                      </NavLink>
                      {item.children && (
                        <button
                          type="button"
                          aria-expanded={isExp}
                          aria-label={`${isExp ? 'Hide' : 'Show'} ${item.label} links`}
                          onClick={() => setExpanded(isExp ? null : item.to)}
                          className="grid size-[44px] place-items-center"
                        >
                          <ChevronDown className={cn('size-5 transition-transform', isExp && 'rotate-180')} />
                        </button>
                      )}
                    </div>
                    {item.children && isExp && (
                      <ul className="pb-[12px] pl-[12px]">
                        {item.children.map((c) => (
                          <li key={c.to}>
                            <Link to={c.to} className="block py-[10px] text-[17px] text-ink-500">
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Mobile Drawer Bottom Quick Action */}
            <div className="border-t border-[#f0f0f0] bg-[#faf8f5] p-[20px] space-y-3">
              <Button
                variant="nav"
                to={navCta.to}
                className="w-full justify-center !h-[48px] !text-[16px]"
              >
                {navCta.label}
              </Button>
              <div className="flex items-center justify-center gap-4 text-[13px] text-ink/70">
                <a href="tel:+919996842994" className="font-semibold text-ink hover:text-accent">
                  📞 +91 99968 42994
                </a>
                <span>·</span>
                <span>Ashok Hospital</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
