import { motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { homeContent } from '@/content/home';
import { useCarousel, usePerView } from '@/hooks/useCarousel';
import { PhoneMockup } from '@/components/common/PhoneMockup';
import { Dots } from '@/components/common/Dots';
import { Reveal } from '@/components/common/Reveal';

const CARD = 312;
const GAP = 66;

/** "How it works?" slider — peach block with phone rising out of it, title, copy. */
export function HowItWorks() {
  const { howItWorks } = homeContent;
  const perView = usePerView({ base: 1, md: 2, lg: 3 });
  const positions = Math.max(1, howItWorks.steps.length - perView + 1);
  const { index, go, next, prev } = useCarousel(positions);
  const reduce = useReducedMotion();
  const viewport = perView * CARD + (perView - 1) * GAP;

  return (
    <section id="how-it-works" aria-labelledby="hiw-title" className="relative bg-howitworks overflow-hidden">
      {/* Decorative top divider */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-[1440px] px-[20px] pb-[48px] pt-[60px]">
        <Reveal>
          <h2 id="hiw-title" className="text-center font-serif text-[24px] leading-[44px] tracking-[-0.02em] text-ink max-md:text-[28px]">
            {howItWorks.title}
          </h2>
          <p className="mx-auto mt-[8px] max-w-[480px] text-center text-[16px] leading-[22px] text-ink/50">
            Four simple steps to start your mental health journey
          </p>
        </Reveal>

        <div className="relative mx-auto mt-[40px] max-md:mt-[30px]" style={{ maxWidth: viewport }}>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous step"
            className="absolute -left-[64px] top-[-28px] z-10 hidden rounded-full p-2 text-ink transition-all hover:bg-white/60 hover:opacity-80 disabled:opacity-0 lg:block"
            disabled={index === 0}
          >
            <ChevronLeft className="size-[38px]" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next step"
            className="absolute -right-[64px] top-[-28px] z-10 rounded-full p-2 text-ink transition-all hover:bg-white/60 hover:opacity-80 max-lg:-right-[4px] max-lg:top-[-62px]"
          >
            <ChevronRight className="size-[38px] max-md:size-[30px]" strokeWidth={1.5} />
          </button>

          <div className="overflow-hidden">
            <motion.ol
              className="flex"
              style={{ gap: GAP }}
              animate={{ x: -(index * (CARD + GAP)) }}
              transition={reduce ? { duration: 0 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {howItWorks.steps.map((s, i) => (
                <li key={s.title} className="group w-[312px] shrink-0 px-[6px] pt-[7px] text-center" aria-hidden={i < index || i >= index + perView}>
                  {/* Step number badge */}
                  <div className="mx-auto mb-[12px] flex size-[32px] items-center justify-center rounded-full bg-accent/10 text-[14px] font-semibold text-accent">
                    {i + 1}
                  </div>
                  <div className="relative h-[244px] w-[300px] overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className="absolute inset-x-[8px] bottom-[1px] h-[96px] rounded-[6px] bg-peach-card" />
                    <div className="absolute left-1/2 top-[10px] origin-top -translate-x-1/2 scale-[0.68]">
                      <PhoneMockup screen={s.screen} />
                    </div>
                    <div className="absolute inset-x-[8px] bottom-0 h-[1px] bg-peach-card" />
                  </div>
                  <h3 className="mt-[31px] font-serif text-[21px] leading-[24.15px] tracking-[-0.02em] text-ink">{s.title}</h3>
                  <p className="mt-[10px] text-[16.8px] leading-[23.52px] text-ink/70">{s.body}</p>
                </li>
              ))}
            </motion.ol>
          </div>
        </div>

        <Dots
          count={positions}
          active={index}
          onSelect={go}
          label="How it works"
          className="mt-[52px]"
          activeClass="bg-white"
          idleClass="bg-white/50"
        />
      </div>
    </section>
  );
}
