import { homeContent } from '@/content/home';
import { Reveal } from '@/components/common/Reveal';

/** Grey "Featured By" press band with animated fade-in and refined spacing. */
export function FeaturedBy() {
  const { featured } = homeContent;
  if (!featured.logos.length) return null;
  return (
    <section aria-labelledby="featured-title" className="relative bg-featured">
      {/* Subtle top/bottom borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" aria-hidden />

      <div className="mx-auto flex min-h-[182px] max-w-[900px] flex-col items-center justify-center px-[20px] py-[30px] max-md:min-h-[109px] max-md:py-[20px]">
        <Reveal>
          <h2 id="featured-title" className="text-[15px] font-semibold tracking-wide text-[#707070] uppercase max-md:text-[8px]">
            {featured.title}
          </h2>
        </Reveal>
        <ul className="mt-[20px] flex w-full flex-wrap items-center justify-center gap-x-[40px] gap-y-[8px] max-md:mt-[10px] max-md:gap-x-[14px] lg:flex-nowrap lg:justify-between lg:gap-x-[16px]">
          {featured.logos.map((l, i) =>
            l.src ? (
              <Reveal as="li" key={l.alt} delay={i * 0.05} className="flex h-[60px] items-center max-md:h-[24px]">
                <img src={l.src} alt={l.alt} loading="lazy" className="max-h-full w-auto grayscale transition-[filter] duration-300 hover:grayscale-0" />
              </Reveal>
            ) : (
              <Reveal
                as="li"
                key={l.alt}
                delay={i * 0.05}
                className="flex h-[60px] items-center whitespace-nowrap font-serif text-[22px] text-[#4b4b4b] transition-colors duration-200 hover:text-ink max-md:h-[24px] max-md:text-[9px]"
              >
                {l.alt}
              </Reveal>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
