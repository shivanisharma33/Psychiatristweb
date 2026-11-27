import {
  BadgeCheck,
  Brain,
  BrainCircuit,
  CalendarClock,
  CloudRain,
  Focus,
  HandHeart,
  HeartHandshake,
  LockKeyhole,
  Moon,
  ShieldPlus,
  Stethoscope,
  Users,
  Zap,
  Flame,
  type LucideIcon,
} from 'lucide-react';
import { servicesContent } from '@/content/services';
import { Reveal } from '@/components/common/Reveal';

const privacyIcons: Record<string, LucideIcon> = {
  registered: BadgeCheck,
  confidential: LockKeyhole,
  evidence: ShieldPlus,
  everyone: Users,
  clinicians: Stethoscope,
  flexible: CalendarClock,
};

const concernIcons: Record<string, LucideIcon> = {
  stress: Flame,
  anxiety: Zap,
  depression: CloudRain,
  motivation: HandHeart,
  sleep: Moon,
  relationships: HeartHandshake,
  trauma: BrainCircuit,
  focus: Focus,
};

/** "We value your privacy" — six line icons on sand background. */
export function PrivacyGrid() {
  const { privacy } = servicesContent;
  return (
    <section aria-labelledby="privacy-title" className="bg-sand">
      <div className="mx-auto max-w-[1440px] px-[20px] pb-[76px] pt-[166px] max-md:pt-[80px]">
        <h2 id="privacy-title" className="text-center font-serif text-[42px] leading-[50.4px] tracking-[-0.02em] text-ink max-md:text-[32px] max-md:leading-[40px]">
          {privacy.title}
        </h2>
        <ul className="mx-auto mt-[52px] grid max-w-[1230px] grid-cols-2 gap-x-[30px] gap-y-[40px] sm:grid-cols-3 lg:grid-cols-6">
          {privacy.items.map((p, i) => {
            const Icon = privacyIcons[p.icon];
            return (
              <Reveal as="li" key={p.label} delay={i * 0.05} className="mx-auto w-full max-w-[180px] text-center">
                <Icon className="mx-auto size-[70px] text-ink" strokeWidth={1.1} aria-hidden />
                <p className="mt-[18px] text-[18.2px] leading-[21.84px] text-ink-800 max-md:text-[16px]">{p.label}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/** "For all your mental health concerns" — 4×2 line icon grid. */
export function ConcernsGrid() {
  const { concerns } = servicesContent;
  return (
    <section aria-labelledby="concerns-title" className="bg-sand-light">
      <div className="mx-auto max-w-[1440px] px-[20px] pb-[115px] pt-[60px]">
        <h2 id="concerns-title" className="text-center font-serif text-[35px] leading-[42px] tracking-[-0.02em] text-ink max-md:text-[30px] max-md:leading-[38px]">
          {concerns.title}
        </h2>
        <ul className="mx-auto mt-[78px] grid max-w-[936px] grid-cols-2 gap-y-[66px] md:grid-cols-4 max-md:mt-[50px] max-md:gap-y-[44px]">
          {concerns.items.map((c, i) => {
            const Icon = concernIcons[c.icon] ?? Brain;
            return (
              <Reveal as="li" key={c.label} delay={(i % 4) * 0.05} className="text-center">
                <Icon className="mx-auto size-[80px] text-[#2b2b2b]" strokeWidth={1} aria-hidden />
                <p className="mt-[22px] text-[15.4px] leading-[18.48px] text-ink">{c.label}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
