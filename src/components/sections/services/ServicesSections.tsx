import { servicesContent } from '@/content/services';
import { faqs, testimonials } from '@/content/shared';
import { Button } from '@/components/common/Button';
import { Marquee } from '@/components/common/Marquee';
import { PhoneMockup } from '@/components/common/PhoneMockup';
import { Reveal } from '@/components/common/Reveal';
import { SmartImage } from '@/components/common/SmartImage';
import { TestimonialSlider } from '@/components/common/TestimonialSlider';
import { FaqAccordion } from '@/components/common/FaqAccordion';

export function NormaliseMarquee() {
  return (
    <section aria-label="Our values" className="bg-white py-[82px] max-md:py-[48px]">
      <Marquee items={servicesContent.marquee} />
    </section>
  );
}

export function BeginSection() {
  const { begin } = servicesContent;
  return (
    <section aria-labelledby="begin-title" className="bg-white">
      <div className="mx-auto max-w-[620px] px-[20px] pb-[94px] text-center">
        <h2 id="begin-title" className="font-serif text-[42px] leading-[50.4px] tracking-[-0.02em] text-ink max-md:text-[32px] max-md:leading-[40px]">
          {begin.title}
        </h2>
        <p className="mx-auto mt-[21px] max-w-[550px] text-[19.6px] leading-[25.2px] text-ink-500 max-md:text-[17px]">{begin.body}</p>
        <Button variant="pill" to="/contact?topic=consultation#contact-form" className="mt-[40px]">
          {begin.cta}
        </Button>
      </div>
    </section>
  );
}

export function ServicesTestimonials() {
  return (
    <section id="testimonials" aria-label="Testimonials" className="bg-white pb-[52px] pt-[56px]">
      <TestimonialSlider items={testimonials} title={servicesContent.testimonials.title} tone="light" />
      <div className="mt-[30px] flex justify-center">
        <Button variant="pill" to="/contact?topic=booking#contact-form">
          {servicesContent.testimonials.cta}
        </Button>
      </div>
    </section>
  );
}

export function JourneySection() {
  const { journey } = servicesContent;
  return (
    <section aria-labelledby="journey-title" className="bg-sand-light">
      <div className="mx-auto max-w-[1440px] px-[20px] pb-[66px] pt-[114px] max-md:pt-[70px]">
        <h2 id="journey-title" className="text-center font-serif text-[24px] leading-[44px] tracking-[-0.02em] text-ink max-md:text-[26px] max-md:leading-[34px]">
          {journey.title}
        </h2>
        <ul className="mx-auto mt-[29px] grid max-w-[980px] gap-y-[40px] md:grid-cols-2 md:gap-x-[40px] lg:grid-cols-3">
          {journey.items.map((j, i) => (
            <Reveal as="li" key={j.caption} delay={i * 0.1} className="text-center">
              <div className="mx-auto flex h-[541px] w-[300px] items-center justify-center">
                <PhoneMockup screen={j.screen} />
              </div>
              <p className="mx-auto max-w-[300px] text-[16.8px] leading-[23.52px] text-ink">{j.caption}</p>
            </Reveal>
          ))}
        </ul>
        <div className="mt-[10px] flex justify-center max-md:mt-[30px]">
          <Button variant="pill" to="/contact?topic=booking#contact-form">
            {journey.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}

export function ProfessionalsSection() {
  const { professionals: p } = servicesContent;
  return (
    <section aria-labelledby="pros-title" className="bg-white">
      <div className="mx-auto grid max-w-[1440px] items-start gap-[50px] px-[20px] pb-[112px] pt-[112px] xl:grid-cols-[1fr_650px] xl:pl-[80px] xl:pr-[70px] max-md:py-[70px]">
        <Reveal className="max-w-[630px] max-xl:mx-auto max-xl:text-center">
          <p className="text-[17.5px] font-semibold leading-[17.5px] text-[#8e8e8e]">{p.kicker}</p>
          <h2 id="pros-title" className="mt-[24px] max-w-[568px] font-serif max-xl:mx-auto text-[42px] leading-[44px] tracking-[-0.02em] text-ink-500 max-md:text-[34px] max-md:leading-[38px]">
            {p.title}
          </h2>
          <p className="mt-[24px] max-w-[461px] text-[19.6px] leading-[24.5px] text-[#8a8a8a] max-xl:mx-auto max-md:text-[17px]">{p.body}</p>
          <Button variant="rounded" to="/#team" className="mt-[55px] max-md:mt-[34px]">
            {p.cta}
          </Button>
        </Reveal>
        <div className="relative mx-auto aspect-[650/479] w-full max-w-[650px]">
          <div className="absolute left-0 top-0 aspect-square w-[64.6%] overflow-hidden rounded-full">
            <SmartImage slot={p.images[0]} tone="grey" className="grayscale" sizes="(min-width: 768px) 420px, 65vw" />
          </div>
          <div className="absolute left-[53.2%] top-[35.5%] aspect-square w-[47.4%] overflow-hidden rounded-full">
            <SmartImage slot={p.images[1]} tone="grey" className="grayscale" sizes="(min-width: 768px) 308px, 48vw" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const { faq } = servicesContent;
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-white">
      <div className="mx-auto max-w-[1440px] px-[20px] pb-[120px] pt-[140px] max-md:pb-[80px] max-md:pt-[80px]">
        <h2 id="faq-title" className="text-center font-serif text-[40px] font-semibold leading-[44px] tracking-[-0.02em] text-ink-500 max-md:text-[32px] max-md:leading-[40px]">
          {faq.title}
        </h2>
        <div className="mt-[48px]">
          <FaqAccordion items={faqs} />
        </div>
        <div className="mt-[40px] flex justify-center">
          <Button variant="rounded" to="/contact?topic=question#contact-form">
            {faq.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}

export function FeelLikeYouCta() {
  const { cta } = servicesContent;
  return (
    <section aria-labelledby="feel-title" className="bg-pink-gradient-x">
      <div className="mx-auto max-w-[520px] px-[20px] py-[100px] text-center max-md:py-[70px]">
        <h2 id="feel-title" className="font-serif text-[42px] leading-[50.4px] tracking-[-0.02em] text-white max-md:text-[34px]">
          {cta.title}
        </h2>
        <p className="mx-auto mt-[40px] max-w-[450px] text-[21px] leading-[25.2px] text-white max-md:mt-[20px] max-md:text-[18px]">{cta.body}</p>
        <Button variant="pill" to="/contact?topic=booking#contact-form" className="mt-[41px]">
          {cta.button}
        </Button>
      </div>
    </section>
  );
}
