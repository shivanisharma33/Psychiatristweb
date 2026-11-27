import { cn } from '@/utils/cn';

/** Slider pagination dots (Webflow slider style). */
export function Dots({
  count,
  active,
  onSelect,
  label,
  activeClass = 'bg-[#222]',
  idleClass = 'bg-[#222]/40',
  className,
}: {
  count: number;
  active: number;
  onSelect: (i: number) => void;
  label: string;
  activeClass?: string;
  idleClass?: string;
  className?: string;
}) {
  return (
    <div className={cn('flex items-center justify-center gap-[6px]', className)} role="tablist" aria-label={label}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === active}
          aria-label={`${label} slide ${i + 1}`}
          onClick={() => onSelect(i)}
          className="grid size-[24px] place-items-center"
        >
          <span className={cn('block size-[14px] rounded-full transition-colors', i === active ? activeClass : idleClass)} />
        </button>
      ))}
    </div>
  );
}
