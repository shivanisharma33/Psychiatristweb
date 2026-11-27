import { brand } from '@/content/site';
import { cn } from '@/utils/cn';

/**
 * Dr. Abhinav / Ashok Hospital Logo
 * Styled to seamlessly harmonize with the warm peach, terracotta-orange,
 * and ink tones of the website theme.
 */
export function Wordmark({
  className,
  inverted = false,
  size = 'sm',
}: {
  className?: string;
  inverted?: boolean;
  size?: 'sm' | 'lg';
}) {
  const isSm = size === 'sm';

  return (
    <span
      className={cn(
        'group inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-95',
        className
      )}
      aria-label={`${brand.nameBold} - ${brand.subtitle || 'Ashok Hospital'}`}
    >
      {/* Official Rounded Icon Mark with Theme Warm Accent Colors */}
      <span
        className={cn(
          'relative flex shrink-0 items-center justify-center rounded-[12px] shadow-sm overflow-hidden transition-transform duration-300 group-hover:scale-[1.03]',
          isSm ? 'size-[38px]' : 'size-[46px]'
        )}
      >
        <svg
          viewBox="0 0 40 40"
          className="size-full block"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {inverted ? (
            <>
              {/* On dark/black footer: Clean white container with warm orange/coral circles */}
              <rect width="40" height="40" rx="12" fill="#FFFFFF" />
              <circle cx="16" cy="20" r="9" fill="#ff5826" />
              <circle cx="24" cy="20" r="9" fill="#ff7f60" fillOpacity="0.85" />
            </>
          ) : (
            <>
              {/* On light navbar / peach hero: Brand deep terracotta-orange container */}
              <rect width="40" height="40" rx="12" fill="#ff5826" />
              <circle cx="16" cy="20" r="9" fill="#FFFFFF" />
              <circle cx="24" cy="20" r="9" fill="#fff4e5" fillOpacity="0.9" />
            </>
          )}
        </svg>
      </span>

      {/* Typography: "Dr. Abhinav" & "ASHOK HOSPITAL" */}
      <span className="flex flex-col whitespace-nowrap leading-[1.2] text-left">
        <span
          className={cn(
            'font-bold tracking-[-0.015em]',
            inverted ? 'text-white' : 'text-ink',
            isSm ? 'text-[16px] sm:text-[19px]' : 'text-[21px] sm:text-[24px]'
          )}
        >
          {brand.nameBold}
        </span>
        <span
          className={cn(
            'font-semibold uppercase tracking-[0.1em]',
            inverted ? 'text-white/70' : 'text-accent',
            isSm ? 'text-[10px]' : 'text-[12px]'
          )}
        >
          {brand.subtitle || 'ASHOK HOSPITAL'}
        </span>
      </span>
    </span>
  );
}
