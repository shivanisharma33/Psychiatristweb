import { Award, Handshake, MapPinned, Users, Wallet, type LucideIcon } from 'lucide-react';
import { homeContent } from '@/content/home';
import { Reveal } from '@/components/common/Reveal';

const icons: Record<string, LucideIcon> = { wallet: Wallet, map: MapPinned, users: Users, award: Award, handshake: Handshake };

/** "What makes us Different?" — five icon cards with hover effects. */
export function Different() {
  const { different } = homeContent;
  return (
    <section aria-labelledby="different-title" className="bg-white">
      <div className="mx-auto max-w-[1440px] px-[20px] pb-[60px] pt-[97px] max-md:pt-[70px]">
        <Reveal>
          <h2
            id="different-title"
            className="mx-auto max-w-[600px] text-center font-serif text-[42px] leading-[50.4px] tracking-[-0.02em] text-ink text-balance max-md:text-[32px] max-md:leading-[40px]"
          >
            {different.title}
          </h2>
        </Reveal>
        <ul className="mx-auto mt-[58px] grid max-w-[1056px] grid-cols-2 gap-x-[39px] gap-y-[50px] sm:grid-cols-3 lg:grid-cols-5">
          {different.items.map((d, i) => {
            const Icon = icons[d.icon];
            return (
              <Reveal as="li" key={d.title} delay={i * 0.06} className="mx-auto w-full max-w-[180px] text-center">
                <div className="group cursor-default">
                  <span className="mx-auto grid size-[125px] place-items-center rounded-[24px] bg-gradient-to-br from-[#fff4e5] to-[#ffecd4] transition-all duration-400 group-hover:shadow-[0_8px_30px_rgba(255,88,38,0.15)] group-hover:scale-105 max-md:size-[96px]" aria-hidden>
                    <Icon className="size-[64px] text-[#ff4f25] transition-transform duration-400 group-hover:scale-110 max-md:size-[52px]" strokeWidth={1.25} />
                  </span>
                  <h3 className="mt-[26px] font-serif text-[21px] leading-[25.2px] tracking-[-0.02em] text-ink">{d.title}</h3>
                  <p className="mt-[6px] text-[15.4px] leading-[21px] text-ink/60">{d.body}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
