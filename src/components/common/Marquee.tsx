import { cn } from '@/utils/cn';

/** Infinite horizontal text ticker ("Normalise Therapy  Normalise Seeking Help ..."). */
export function Marquee({ items, className, speed = 28 }: { items: string[]; className?: string; speed?: number }) {
  // Repeat enough times that one half is always wider than the viewport.
  const row = Array.from({ length: Math.max(2, Math.ceil(8 / items.length)) }, () => items).flat();
  return (
    <div className={cn('relative overflow-hidden', className)} aria-label={items.join(', ')} role="marquee">
      <div className="flex w-max animate-marquee motion-reduce:animate-none" style={{ animationDuration: `${speed}s` }} aria-hidden>
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0">
            {row.map((t, i) => (
              <span
                key={`${half}-${i}`}
                className="whitespace-nowrap pr-[42px] font-serif text-[32px] leading-[1.2] tracking-[-0.01em] text-ink-500 md:text-[42px]"
              >
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
