import { motion, useReducedMotion } from 'framer-motion';
import { servicesContent } from '@/content/services';

/** "Discreet and holistic care" — four-circle Venn diagram (695×688) on pink gradient. */
export function HolisticCare() {
  const { holistic } = servicesContent;
  const reduce = useReducedMotion();
  const R = 198;
  const circles = [
    { cx: 350, cy: 200 },
    { cx: 199, cy: 349 },
    { cx: 495, cy: 349 },
    { cx: 350, cy: 488 },
  ];
  // Label anchor points measured from the reference diagram (viewBox units = px at 1440).
  const labels = [
    { x: 350, y: 97, text: holistic.circles[0] },
    { x: 34, y: 354, text: holistic.circles[1], anchor: 'start' as const },
    { x: 545, y: 340, text: holistic.circles[2], anchor: 'start' as const },
    { x: 349, y: 597, text: holistic.circles[3] },
  ];

  const wrap = (t: string) => t.split('\n');

  return (
    <section aria-labelledby="holistic-title" className="bg-pink-gradient">
      <div className="mx-auto max-w-[1440px] px-[20px] pb-[124px] pt-[126px] max-md:pb-[70px] max-md:pt-[70px]">
        <h2 id="holistic-title" className="text-center font-serif text-[56px] leading-[78.4px] tracking-[-0.02em] text-white max-md:text-[38px] max-md:leading-[48px]">
          {holistic.title}
        </h2>
        <figure className="mx-auto mt-[86px] w-full max-w-[695px] max-md:mt-[40px]">
          <svg viewBox="0 0 695 688" className="h-auto w-full overflow-visible" role="img" aria-labelledby="venn-desc">
            <desc id="venn-desc">Overlapping circles: {holistic.circles.join(', ')}.</desc>
            {circles.map((c, i) => (
              <motion.circle
                key={i}
                cx={c.cx}
                cy={c.cy}
                r={R}
                fill="none"
                stroke="white"
                strokeWidth={2.5}
                initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 1.4, delay: i * 0.2, ease: 'easeInOut' }}
              />
            ))}
            {labels.map((l) => (
              <text
                key={l.text}
                x={l.x}
                y={l.y}
                textAnchor={l.anchor ?? 'middle'}
                fill="white"
                className="font-sans"
                style={{ fontSize: 15.4, fontWeight: 500 }}
              >
                {wrap(l.text).map((line, i) => (
                  <tspan key={i} x={l.x} dy={i === 0 ? 0 : 20}>
                    {line}
                  </tspan>
                ))}
              </text>
            ))}
          </svg>
        </figure>
      </div>
    </section>
  );
}
