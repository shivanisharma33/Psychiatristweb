import { aboutContent } from '@/content/about';
import { SmartImage } from '@/components/common/SmartImage';
import { Reveal } from '@/components/common/Reveal';

/** "Founder's Note" — cut-out photo left, letter right, on cream. */
export function FounderNote() {
  const { founder } = aboutContent;
  return (
    <section id="founders-note" aria-labelledby="founder-title" className="bg-cream">
      <div className="mx-auto grid max-w-[1440px] items-start gap-[50px] px-[20px] pb-[90px] pt-[172px] xl:grid-cols-[617px_489px] xl:gap-x-[50px] xl:pl-[104px] max-xl:max-w-[760px] max-lg:pt-[80px]">
        <div className="relative mx-auto aspect-[617/535] w-full max-w-[617px] xl:mt-[39px]">
          <SmartImage slot={founder.image} tone="warm" className="rounded-[4px]" sizes="(min-width: 1280px) 617px, (min-width: 800px) 760px, 100vw" />
        </div>
        <Reveal className="xl:self-start">
          <h2 id="founder-title" className="font-serif text-[56px] leading-[56px] tracking-[-0.02em] text-ink-500 max-md:text-[42px] max-md:leading-[46px]">
            {founder.title}
          </h2>
          <div className="mt-[43px] space-y-[23.5px] text-[19.6px] leading-[23.52px] text-ink-500 max-md:mt-[28px] max-md:text-[17px] max-md:leading-[22px]">
            {founder.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p className="font-semibold">{founder.signature}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
