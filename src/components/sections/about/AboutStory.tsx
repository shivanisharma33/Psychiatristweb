import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { aboutContent } from '@/content/about';
import { Wordmark } from '@/components/common/Wordmark';
import { ScrollArrow } from './ScrollArrow';
import { cn } from '@/utils/cn';

/** Positions of the white question boxes in the first blue section (1440 artboard). */
const questionLayout = [
  { left: '46.2%', width: 456, arrowLeft: '40%', flip: false },
  { left: '24.6%', width: 600, arrowLeft: '56%', flip: true },
  { left: '41.2%', width: 600, arrowLeft: '32%', flip: false },
  { left: '25.3%', width: 578, arrowLeft: '52%', flip: true },
  { left: '41.2%', width: 600, arrowLeft: '36%', flip: false },
];

function Question({ text, layout }: { text: string; layout: (typeof questionLayout)[number] }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 bg-white px-[8px] py-[4px] text-center text-[30.8px] leading-[36.96px] text-ink-700 max-xl:!left-auto max-xl:mx-auto max-md:text-[22px] max-md:leading-[28px]"
      style={{ left: layout.left, maxWidth: layout.width, width: 'fit-content' }}
    >
      {text}
    </motion.p>
  );
}

/** Part 1 — blob + rhetorical questions that fade in with animated looping arrows in-between. */
function Questions() {
  const { intro } = aboutContent;
  return (
    <div className="mx-auto max-w-[1440px] px-[20px] pb-[87px] pt-[28px]">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto grid aspect-[576/584] w-full max-w-[576px] place-items-center bg-blob px-[44px]"
        style={{ borderRadius: '47% 47% 45% 45% / 44% 44% 48% 48%' }}
      >
        <h1 className="max-w-[500px] text-center font-serif text-[39.2px] leading-[47.04px] tracking-[-0.02em] text-[#191919] max-md:text-[28px] max-md:leading-[34px]">
          {intro.blob}
        </h1>
      </motion.div>

      {/* Questions with connecting scroll-animated looping arrows */}
      <div className="relative mt-[140px] flex flex-col items-center">
        {intro.questions.map((q, i) => {
          const layout = questionLayout[i % questionLayout.length];
          return (
            <div key={q} className="relative w-full flex flex-col items-center py-[40px] md:py-[60px]">
              {/* Arrow pointing down to this question */}
              <div
                className="my-[-20px] md:my-[-30px] flex justify-center max-xl:!left-auto"
                style={{
                  alignSelf: layout.flip ? 'flex-end' : 'flex-start',
                  marginLeft: layout.flip ? 'auto' : layout.arrowLeft,
                  marginRight: layout.flip ? layout.arrowLeft : 'auto',
                }}
              >
                <ScrollArrow flipX={layout.flip} />
              </div>

              {/* The Question pill */}
              <Question text={q} layout={layout} />
            </div>
          );
        })}
      </div>

      {/* scroll hint */}
      <div className="mt-[105px] flex flex-col items-center text-ink" aria-hidden>
        <span className="relative block h-[46px] w-[26px] rounded-full border-[1.5px] border-ink">
          <span className="absolute left-1/2 top-[14px] h-[6px] w-[1.5px] -translate-x-1/2 animate-bounce bg-ink" />
        </span>
        <svg className="mt-[28px] h-[32px] w-[28px]" viewBox="0 0 28 32" fill="none" stroke="currentColor" strokeWidth="1.3">
          <path d="M2 2l12 12L26 2M2 16l12 12 12-12" />
        </svg>
      </div>
    </div>
  );
}

const tagPositions = [
  { left: '14.9%', top: '20%' }, // friendlier
  { left: '6.3%', top: '27%' }, // human first
  { left: '69%', top: '23%' }, // inclusive
  { left: '75.3%', top: '29.5%' }, // And accessible
  { left: '9%', top: '73%' }, // Judgement free
  { left: '66.3%', top: '80%' }, // Without stigma
];
const tagSize = {
  sm: 'text-[25.2px] leading-[25.2px] max-md:text-[14px] max-md:leading-[16px]',
  md: 'text-[28px] leading-[28px] max-md:text-[16px] max-md:leading-[18px]',
  lg: 'text-[42px] leading-[42px] max-md:text-[20px] max-md:leading-[22px]',
  xl: 'text-[49px] leading-[49px] max-md:text-[24px] max-md:leading-[26px]',
};

function Tag({ progress, index, text, size }: { progress: MotionValue<number>; index: number; text: string; size: keyof typeof tagSize }) {
  const start = 0.34 + index * 0.06;
  const opacity = useTransform(progress, [start, start + 0.05], [0, 1]);
  const y = useTransform(progress, [start, start + 0.05], [24, 0]);
  return (
    <motion.p
      style={{ opacity, y, ...tagPositions[index] }}
      className={cn('absolute bg-white px-[5px] py-[4px] font-bold text-ink', tagSize[size])}
    >
      {text}
    </motion.p>
  );
}

/** Part 2 — sticky scroll sequence: question → "Something that's" + tags → brand reveal. */
function Reveal() {
  const ref = useRef<HTMLDivElement>(null);
  const { reveal } = aboutContent;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const qOpacity = useTransform(scrollYProgress, [0, 0.06, 0.2, 0.26], [0, 1, 1, 0]);
  const qScale = useTransform(scrollYProgress, [0, 0.26], [0.92, 1.04]);
  const leadOpacity = useTransform(scrollYProgress, [0.26, 0.32, 0.7, 0.76], [0, 1, 1, 0]);
  const brandOpacity = useTransform(scrollYProgress, [0.76, 0.84], [0, 1]);
  const brandScale = useTransform(scrollYProgress, [0.76, 0.9], [0.85, 1]);

  return (
    <div ref={ref} className="relative h-[4050px] max-md:h-[3000px]">
      <div className="sticky top-[64px] h-[calc(100vh-64px)] overflow-hidden lg:top-[80px] lg:h-[calc(100vh-80px)]">
        <div className="relative mx-auto h-full max-w-[1440px] px-[20px]">
          <motion.p
            style={{ opacity: qOpacity, scale: qScale }}
            className="absolute inset-x-[20px] top-1/2 mx-auto max-w-[1152px] -translate-y-1/2 text-center text-[112px] leading-[112px] tracking-[-0.02em] text-ink-700 max-lg:text-[72px] max-lg:leading-[76px] max-md:text-[44px] max-md:leading-[48px]"
          >
            {reveal.question}
          </motion.p>
          <motion.p
            style={{ opacity: leadOpacity }}
            className="absolute inset-x-[20px] top-1/2 -translate-y-1/2 text-center text-[84px] leading-[84px] tracking-[-0.02em] text-ink max-md:text-[40px] max-md:leading-[44px]"
          >
            {reveal.lead}
          </motion.p>
          <motion.div style={{ opacity: brandOpacity, scale: brandScale }} className="absolute inset-0 grid place-items-center">
            <Wordmark className="!text-[clamp(56px,13vw,190px)] !text-ink" />
          </motion.div>
          {reveal.tags.map((t, i) => (
            <Tag key={t.text} progress={scrollYProgress} index={i} text={t.text} size={t.size} />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Static fallback for reduced-motion users: everything visible, no scroll-jacking. */
function StaticReveal() {
  const { reveal } = aboutContent;
  return (
    <div className="mx-auto max-w-[1100px] px-[20px] py-[120px] text-center">
      <p className="text-[64px] leading-[68px] text-ink-700 max-md:text-[40px] max-md:leading-[44px]">{reveal.question}</p>
      <p className="mt-[60px] text-[48px] text-ink max-md:text-[30px]">{reveal.lead}</p>
      <ul className="mt-[30px] flex flex-wrap justify-center gap-[14px]">
        {reveal.tags.map((t) => (
          <li key={t.text} className="bg-white px-[6px] py-[4px] text-[24px] font-bold">
            {t.text}
          </li>
        ))}
      </ul>
      <div className="mt-[80px]">
        <Wordmark className="!text-[clamp(48px,10vw,140px)]" />
      </div>
    </div>
  );
}

export function AboutStory() {
  const reduce = useReducedMotion();
  return (
    <section aria-label="Why we exist" className="bg-about-blue">
      <Questions />
      {reduce ? <StaticReveal /> : <Reveal />}
    </section>
  );
}
