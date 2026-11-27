import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Testimonial } from '@/types';
import { useCarousel } from '@/hooks/useCarousel';
import { SmartImage } from './SmartImage';
import { Dots } from './Dots';
import { cn } from '@/utils/cn';

/**
 * "We Heard You" slider: heading with rule, avatar + quote, dots, side arrows.
 * `tone="onGradient"` = transparent background with darker dots (home hero),
 * `tone="light"` = white section with orange arrows (services page).
 */
export function TestimonialSlider({
  items,
  title,
  tone = 'light',
  showArrows = true,
}: {
  items: Testimonial[];
  title: string;
  tone?: 'light' | 'onGradient';
  showArrows?: boolean;
}) {
  const { index, go, next, prev, setPaused } = useCarousel(items.length, { autoplay: 6000 });
  const reduce = useReducedMotion();
  const t = items[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label={title}
    >
      <div className="mx-auto flex max-w-[1044px] items-center gap-[14px] px-4 md:px-0">
        <h2 className="shrink-0 font-serif text-[28px] leading-[44px] tracking-[-0.02em] text-ink max-md:mx-auto">{title}</h2>
        <span className={cn('hidden h-px flex-1 md:block', tone === 'light' ? 'bg-[#d9a08b]' : 'bg-[#a34b33]')} aria-hidden />
      </div>

      <div className="relative mx-auto mt-[32px] max-w-[1440px] max-md:mt-[24px]">
        {showArrows && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="absolute left-[40px] top-1/2 z-10 hidden -translate-y-1/2 p-2 text-[#d0693f] transition-transform hover:-translate-x-1 md:block"
            >
              <ChevronLeft className="size-[38px]" strokeWidth={1.3} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="absolute right-[40px] top-1/2 z-10 hidden -translate-y-1/2 p-2 text-[#d0693f] transition-transform hover:translate-x-1 md:block"
            >
              <ChevronRight className="size-[38px]" strokeWidth={1.3} />
            </button>
          </>
        )}
        <div className="mx-auto min-h-[150px] max-w-[1044px] px-4 md:px-0" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.figure
              key={index}
              initial={reduce ? false : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-[70px] max-md:flex-col max-md:gap-[16px]"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${items.length}`}
            >
              <div className="size-[90px] shrink-0 overflow-hidden rounded-full sm:size-[110px] md:size-[120px]">
                <SmartImage slot={t.avatar} tone={tone === 'light' ? 'warm' : 'grey'} sizes="120px" />
              </div>
              <blockquote className="max-w-[864px] max-md:text-center">
                <p className={cn('text-[17px] leading-[25px] sm:text-[19px] sm:leading-[27px] md:text-[21px] md:leading-[25.2px]', tone === 'light' ? 'text-ink-500' : 'text-ink')}>
                  {t.quote}
                  {t.author && <span className="block mt-1 font-semibold text-[15px] sm:inline sm:mt-0"> — {t.author}</span>}
                </p>
              </blockquote>
            </motion.figure>
          </AnimatePresence>
        </div>
        <Dots
          count={items.length}
          active={index}
          onSelect={go}
          label="Testimonials"
          className="mt-[34px]"
          activeClass={tone === 'light' ? 'bg-[#333]' : 'bg-[#222]'}
          idleClass={tone === 'light' ? 'bg-[#a8a8a8]' : 'bg-[#a34b33]/70'}
        />
      </div>
    </div>
  );
}
