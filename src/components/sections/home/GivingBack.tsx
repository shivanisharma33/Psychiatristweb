import { brand } from '@/content/site';
import { homeContent } from '@/content/home';
import { Button } from '@/components/common/Button';
import { Reveal } from '@/components/common/Reveal';
import { Heart } from 'lucide-react';

/** "Giving Back | Brand" — premium card-style white band. */
export function GivingBack() {
  const { givingBack } = homeContent;
  return (
    <section aria-labelledby="giving-title" className="bg-white">
      <div className="mx-auto max-w-[1440px] px-[20px] py-[60px] md:px-[35px]">
        <Reveal>
          <div className="mx-auto max-w-[900px] rounded-[24px] bg-gradient-to-br from-cream to-[#fff9f2] p-[48px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] max-md:p-[28px]">
            <div className="flex items-start gap-[16px]">
              <span className="mt-[4px] flex size-[48px] shrink-0 items-center justify-center rounded-full bg-accent/10 max-md:hidden" aria-hidden>
                <Heart className="size-[24px] text-accent" strokeWidth={1.5} />
              </span>
              <div>
                <h2 id="giving-title" className="font-serif text-[42px] leading-[50.4px] tracking-[-0.02em] text-ink max-md:text-[32px] max-md:leading-[40px]">
                  {givingBack.title} | <span className="text-accent">{brand.nameBold}</span> {brand.nameLight}
                </h2>
                <p className="mt-[12px] max-w-[600px] text-[18.2px] leading-[26px] text-ink/60">{givingBack.body}</p>
                <Button variant="outline" to="/about" className="mt-[20px]">
                  {givingBack.cta}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
