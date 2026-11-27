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
          <div className="mx-auto mt-[48px] max-w-[1140px] overflow-hidden rounded-[28px] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)] max-md:mt-[32px]">
            <div className="grid md:grid-cols-[420px_1fr] lg:grid-cols-[480px_1fr] items-stretch">
              {/* Photo */}
              <div className="group relative aspect-[3/4] overflow-hidden bg-[#faf8f5] md:aspect-auto md:min-h-[520px]">
                <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.02]">
                  <SmartImage
                    slot={doctor.photo}
                    className="h-full w-full"
                    imgClassName="!object-top !object-cover"
                    sizes="(min-width: 1024px) 480px, (min-width: 768px) 420px, 100vw"
                  />
                </div>
                {/* Gradient overlay at bottom on mobile */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60px] bg-gradient-to-t from-white to-transparent md:hidden" aria-hidden />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center px-[32px] py-[36px] sm:px-[40px] sm:py-[42px] max-md:px-[22px] max-md:py-[26px]">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-[12px] font-bold uppercase tracking-wider text-accent">
                    {doctor.credentials}
                  </span>
                  <span className="text-[13px] font-semibold uppercase tracking-wider text-ink/60">
                    {doctor.role}
                  </span>
                </div>

                <h3 className="mt-[10px] font-serif text-[36px] leading-[44px] tracking-[-0.02em] text-ink sm:text-[40px] sm:leading-[48px]">
                  {doctor.name}
                </h3>
                <p className="mt-[4px] text-[15px] font-medium leading-[22px] text-ink/60">{doctor.location}</p>

                {/* Bio Paragraphs */}
                <div className="mt-[18px] space-y-3 text-[15.5px] leading-[26px] text-ink/75 sm:text-[16px]">
                  {doctor.bioParagraphs ? (
                    doctor.bioParagraphs.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))
                  ) : (
                    <p>{doctor.bio}</p>
                  )}
                </div>

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
