import { homeContent } from '@/content/home';
import { SmartImage } from '@/components/common/SmartImage';
import { Button } from '@/components/common/Button';
import { Reveal } from '@/components/common/Reveal';
import { whatsappHref } from '@/content/site';

/** "Support Groups, Conversations & More!" — gradient band, copy left, square photo right. */
export function Community() {
  const { community } = homeContent;
  const joinHref = whatsappHref('Hi! I would like to join your community events.');
  return (
    <section id="community" aria-labelledby="community-title" className="relative bg-support-gradient overflow-hidden">
      {/* Decorative blurred orb */}
      <div className="pointer-events-none absolute -right-[200px] top-[50px] size-[400px] rounded-full bg-white/10 blur-[120px]" aria-hidden />

      <div className="mx-auto grid max-w-[1440px] items-center gap-[50px] px-[20px] py-[75px] lg:grid-cols-2 lg:px-[40px] xl:grid-cols-[1fr_660px] xl:pl-[129px] xl:pr-[30px]">
        <Reveal className="max-w-[500px] max-lg:mx-auto max-lg:text-center">
          <h2 id="community-title" className="font-serif text-[48px] leading-[60px] tracking-[-0.02em] text-white max-md:text-[36px] max-md:leading-[44px]">
            {community.title}
          </h2>
          <p className="mt-[12px] text-[21.84px] leading-[28px] text-white/90 max-md:text-[18px] max-md:leading-[24px]">
            {community.body} <span aria-hidden>{community.emoji}</span>
          </p>
          {/* Feature pills */}
          <div className="mt-[20px] flex flex-wrap gap-[8px] max-lg:justify-center">
            {['Led by psychologists', 'Free events', 'Anonymous & safe'].map((tag) => (
              <span key={tag} className="rounded-full bg-white/15 px-[14px] py-[6px] text-[13px] font-medium text-white backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
          {joinHref ? (
            <Button variant="square" href={joinHref} className="mt-[30px]">
              {community.cta}
            </Button>
          ) : (
            <Button variant="square" to="/contact" className="mt-[30px]">
              {community.cta}
            </Button>
          )}
        </Reveal>
        <Reveal delay={0.15}>
          <div className="group mx-auto aspect-square w-full max-w-[660px] overflow-hidden rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
            <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]">
              <SmartImage slot={community.image} tone="warm" sizes="(min-width: 1280px) 660px, (min-width: 992px) 50vw, 100vw" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
