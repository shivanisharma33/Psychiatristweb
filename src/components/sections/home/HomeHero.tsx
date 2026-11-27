import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { homeContent } from '@/content/home';
import { testimonials } from '@/content/shared';
import { EmailCapture } from '@/components/common/EmailCapture';
import { SmartImage } from '@/components/common/SmartImage';
import { TestimonialSlider } from '@/components/common/TestimonialSlider';
import { Reveal } from '@/components/common/Reveal';

/** Hand-written word that "writes itself" then swaps. */
function RotatingScript({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce || words.length < 2) return;
    const t = window.setInterval(() => setI((n) => (n + 1) % words.length), 3200);
    return () => window.clearInterval(t);
  }, [reduce, words.length]);

  return (
    <span className="relative block h-[136px] w-[278px] max-md:mx-auto max-md:h-[110px] max-md:w-[224px]" aria-live="off">
      <span className="sr-only">{words.join(', ')}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[i]}
          aria-hidden
          initial={reduce ? false : { clipPath: 'inset(0 100% 0 0)', opacity: 1 }}
          animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ clipPath: { duration: 1.3, ease: 'easeInOut' }, opacity: { duration: 0.35 } }}
          className="absolute inset-x-0 bottom-[8px] block text-center font-script text-[88px] leading-[1] text-white max-md:text-[72px]"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
      <span className="absolute bottom-0 left-0 h-px w-full bg-white/60" aria-hidden />
    </span>
  );
}

export function HomeHero() {
  const { hero } = homeContent;
  return (
    <section className="bg-peach-animated relative overflow-hidden" aria-labelledby="home-hero-title">
      {/* Decorative blurred orbs */}
      <div className="pointer-events-none absolute -left-[200px] -top-[100px] size-[500px] rounded-full bg-white/10 blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute -right-[150px] bottom-[100px] size-[400px] rounded-full bg-[#ff5826]/10 blur-[100px]" aria-hidden />

      <div className="mx-auto max-w-[1440px] px-[20px] pt-[40px] md:px-[60px] lg:px-[143px] lg:pt-[64px]">
        <div className="grid items-start gap-[36px] xl:grid-cols-[464px_1fr] xl:gap-[60px]">
          <Reveal y={40} className="max-xl:mx-auto max-xl:max-w-[560px] max-xl:w-full max-md:text-center">
            <h1 id="home-hero-title" className="font-serif text-[57.4px] leading-[68.88px] tracking-[-0.02em] text-ink max-md:text-[44px] max-md:leading-[52px]">
              {hero.titleLine}
              <RotatingScript words={hero.rotatingWords} />
            </h1>
            <p className="mt-[20px] text-[19.6px] leading-[27px] text-ink/60 max-md:text-[17px] max-md:leading-[24px]">{hero.body}</p>
            <EmailCapture variant="hero" placeholder={hero.emailPlaceholder} cta={hero.cta} source="home-hero" className="mt-[24px]" />
          </Reveal>

          {/* Photo collage with enhanced animations */}
          <div className="relative mx-auto aspect-[607/493] w-full max-w-[607px] xl:mt-[-11px]">
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-0 h-[60.9%] w-[33%] overflow-hidden rounded-[12px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:scale-[1.03]"
            >
              <SmartImage slot={hero.images[0]} priority tone="grey" sizes="(min-width: 640px) 200px, 33vw" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-[7.3%] h-[71%] w-[39.2%] overflow-hidden rounded-[12px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:scale-[1.03]"
            >
              <SmartImage slot={hero.images[1]} priority tone="dark" sizes="(min-width: 640px) 238px, 40vw" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 left-[8.7%] z-10 h-[54.8%] w-[65.4%] overflow-hidden rounded-[12px] shadow-[0_24px_64px_rgba(0,0,0,0.2)] transition-transform duration-500 hover:scale-[1.02]"
            >
              <SmartImage slot={hero.images[2]} priority tone="dark" sizes="(min-width: 640px) 397px, 66vw" />
            </motion.div>
          </div>
        </div>

        <div className="pb-[40px] pt-[44px] max-xl:pt-[36px] max-md:pb-[28px] max-md:pt-[28px]">
          <TestimonialSlider items={testimonials} title="We Heard You" tone="onGradient" showArrows={false} />
        </div>
      </div>
    </section>
  );
}
