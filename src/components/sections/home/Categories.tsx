import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { homeContent } from '@/content/home';
import { SmartImage } from '@/components/common/SmartImage';
import { Reveal } from '@/components/common/Reveal';

/** "Your health in your control" — four 200×300 rounded photo cards with arrow + label and hover effects. */
export function Categories() {
  const { categories } = homeContent;
  return (
    <section aria-labelledby="categories-title" className="bg-white">
      <div className="mx-auto max-w-[1440px] px-[15px] pb-[34px] pt-[68px] max-md:pt-[66px]">
        <Reveal>
          <h2 id="categories-title" className="text-center font-serif text-[42px] leading-[50.4px] tracking-[-0.02em] text-ink max-md:text-[32px] max-md:leading-[40px]">
            {categories.title}
          </h2>
        </Reveal>
        <ul className="mx-auto mt-[52px] grid max-w-[948px] grid-cols-2 gap-x-[32px] gap-y-[40px] max-md:mt-[40px] max-md:gap-x-[32px] md:grid-cols-4 md:gap-x-[49px]">
          {categories.items.map((c, i) => (
            <Reveal as="li" key={c.label} delay={i * 0.08}>
              <Link to={c.to} className="group block text-center">
                <span className="relative block aspect-[2/3] overflow-hidden rounded-[16px] shadow-[0_6px_24px_rgba(0,0,0,0.08)] transition-shadow duration-400 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)]">
                  <span className="block h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]">
                    <SmartImage slot={c.image} tone={i % 2 ? 'dark' : 'warm'} sizes="(min-width: 768px) 200px, 45vw" />
                  </span>
                  {/* Gradient overlay on hover */}
                  <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" aria-hidden />
                  <ArrowRight
                    className="absolute bottom-[16px] left-[22px] size-[24px] text-white transition-all duration-300 group-hover:translate-x-1 group-hover:drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </span>
                <span className="mt-[28px] block text-[18.2px] font-semibold leading-[21.84px] text-ink-800 transition-colors duration-200 group-hover:text-accent max-md:mt-[14px] max-md:text-[15px]">
                  {c.label}
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
