import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesContent } from '@/content/services';
import { SmartImage } from '@/components/common/SmartImage';
import { Reveal } from '@/components/common/Reveal';

/** Gradient hero: purple kicker, serif title, intro, four 180×280 tinted service cards. */
export function ServicesHero() {
  const { hero } = servicesContent;
  return (
    <section aria-labelledby="services-title" className="bg-peach-animated">
      <div className="mx-auto max-w-[1440px] px-[20px] pb-[164px] pt-[76px] max-md:pb-[80px] max-md:pt-[56px]">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="text-[28px] leading-5 text-kicker max-md:text-[22px]">{hero.kicker}</p>
          <h1 id="services-title" className="mt-[19px] font-serif text-[63px] leading-[75.6px] tracking-[-0.02em] text-ink max-md:text-[42px] max-md:leading-[50px]">
            {hero.title}
          </h1>
          <p className="mt-[10px] text-[19.6px] leading-[27.44px] text-ink-600 max-md:text-[17px] max-md:leading-[24px]">{hero.body}</p>
        </div>

        <ul className="mx-auto mt-[65px] grid max-w-[868px] grid-cols-2 justify-items-center gap-x-[49px] gap-y-[30px] md:grid-cols-4 max-md:gap-x-[16px]">
          {hero.services.map((s, i) => (
            <Reveal as="li" key={s.id} delay={i * 0.07} className="w-full max-w-[180px]">
              <Link
                id={s.id}
                to={`/contact?topic=booking&service=${encodeURIComponent(s.label)}#contact-form`}
                className="group relative block aspect-[180/280] overflow-hidden bg-[#020202]"
                aria-label={`${s.label} — book a session`}
              >
                <span className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.05]">
                  <SmartImage slot={s.image} tone={i === 1 ? 'warm' : 'dark'} sizes="(min-width: 768px) 180px, 45vw" />
                </span>
                <span className="absolute inset-0" style={{ backgroundImage: s.tint }} aria-hidden />
                <span className="absolute left-[11px] right-[8px] top-[11px] text-left text-[21px] leading-[27.3px] text-white max-md:text-[17px] max-md:leading-[22px]">
                  {s.label}
                </span>
                <ArrowRight className="absolute bottom-[16px] left-[22px] size-[24px] text-white transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} aria-hidden />
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
