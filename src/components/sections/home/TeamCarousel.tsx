import { Award, Briefcase, Clock, Globe, GraduationCap } from 'lucide-react';
import { homeContent } from '@/content/home';
import { doctor } from '@/content/shared';
import { SmartImage } from '@/components/common/SmartImage';
import { Button } from '@/components/common/Button';
import { Reveal } from '@/components/common/Reveal';

const detailIcons = [GraduationCap, Clock, Briefcase, Globe, Award];

/** "Meet Dr. Abhinav" — single doctor profile section. */
export function TeamCarousel() {
  return (
    <section id="team" aria-labelledby="team-title" className="relative bg-team overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-[1440px] px-[20px] pb-[100px] pt-[128px] max-md:pb-[70px] max-md:pt-[80px]">
        <Reveal>
          <p className="text-center text-[15px] font-semibold tracking-widest uppercase text-accent">About the Doctor</p>
          <h2 id="team-title" className="mt-2 text-center font-serif text-[52px] leading-[62px] tracking-[-0.02em] text-ink max-md:text-[36px] max-md:leading-[44px]">
            {homeContent.team.title}
          </h2>
          <p className="mx-auto mt-[10px] max-w-[540px] text-center text-[18px] leading-[26px] text-ink/60">
            {homeContent.team.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-[48px] max-w-[960px] overflow-hidden rounded-[28px] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)] max-md:mt-[32px]">
            <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
              {/* Photo */}
              <div className="group relative aspect-square overflow-hidden md:aspect-auto md:min-h-[440px]">
                <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]">
                  <SmartImage
                    slot={doctor.photo}
                    tone="grey"
                    className="grayscale-[0.4] transition-[filter] duration-700 group-hover:grayscale-0"
                    sizes="(min-width: 768px) 320px, 100vw"
                  />
                </div>
                {/* Gradient overlay at bottom on mobile */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[80px] bg-gradient-to-t from-white to-transparent md:hidden" aria-hidden />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center px-[36px] py-[40px] max-md:px-[24px] max-md:py-[28px]">
                <p className="text-[14px] font-semibold uppercase tracking-widest text-accent">{doctor.role}</p>
                <h3 className="mt-[8px] font-serif text-[38px] leading-[46px] tracking-[-0.02em] text-ink max-md:text-[30px] max-md:leading-[36px]">
                  {doctor.name}
                </h3>
                <p className="mt-[4px] text-[16px] leading-[22px] text-ink/50">{doctor.location}</p>
                <p className="mt-[16px] max-w-[440px] text-[17px] leading-[26px] text-ink/60">{doctor.bio}</p>

                {/* Detail chips */}
                <dl className="mt-[28px] grid gap-[14px] sm:grid-cols-2">
                  {doctor.details.map((d, i) => {
                    const Icon = detailIcons[i] ?? Award;
                    return (
                      <div key={d.label} className="flex items-start gap-[10px]">
                        <span className="mt-[2px] flex size-[32px] shrink-0 items-center justify-center rounded-full bg-cream" aria-hidden>
                          <Icon className="size-[16px] text-accent" strokeWidth={1.6} />
                        </span>
                        <div>
                          <dt className="text-[12px] font-medium uppercase tracking-wide text-ink/40">{d.label}</dt>
                          <dd className="mt-[2px] text-[14.5px] font-medium leading-[20px] text-ink-700">{d.value}</dd>
                        </div>
                      </div>
                    );
                  })}
                </dl>

                <div className="mt-[32px] flex flex-wrap gap-[12px]">
                  <Button variant="pill" to="/contact?topic=booking#contact-form">
                    Book a Consultation
                  </Button>
                  <Button variant="outline" to="/about">
                    {homeContent.team.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
