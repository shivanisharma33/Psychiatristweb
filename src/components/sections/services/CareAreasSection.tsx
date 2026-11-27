import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  Calendar,
  Cloud,
  Compass,
  Eye,
  Feather,
  Flower2,
  Heart,
  Layers,
  LifeBuoy,
  Moon,
  Repeat,
  Sprout,
  Stethoscope,
  Sun,
  Target,
  Waves,
  type LucideIcon,
} from 'lucide-react';
import { servicesContent } from '@/content/services';
import { Button } from '@/components/common/Button';
import { Reveal } from '@/components/common/Reveal';
import { cn } from '@/utils/cn';

const areaIcons: Record<string, LucideIcon> = {
  activity: Activity,
  calendar: Calendar,
  cloud: Cloud,
  compass: Compass,
  eye: Eye,
  feather: Feather,
  flower: Flower2,
  heart: Heart,
  layers: Layers,
  lifebuoy: LifeBuoy,
  moon: Moon,
  repeat: Repeat,
  sprout: Sprout,
  stethoscope: Stethoscope,
  sun: Sun,
  target: Target,
  waves: Waves,
};

/** Tabbed care areas ("Mental Health", "Emotional & Behavioural Health", "Women's Mental Health"). */
export function CareAreasSection() {
  const { careAreas } = servicesContent;
  const { hash } = useLocation();
  const [tabState, setTabState] = useState<{ id: string; hash: string } | null>(null);

  const hashId = careAreas.categories.find((c) => c.id === hash.replace('#', ''))?.id;
  const activeId = (tabState?.hash === hash ? tabState.id : hashId) ?? careAreas.categories[0].id;

  const activeCategory = careAreas.categories.find((c) => c.id === activeId) ?? careAreas.categories[0];

  return (
    <section id="care-areas" aria-labelledby="care-areas-title" className="bg-sand-light">
      <div className="mx-auto max-w-[1440px] px-[20px] py-[96px] max-md:py-[64px]">
        <div className="mx-auto max-w-[700px] text-center">
          <p className="text-[20px] leading-[26px] text-kicker max-md:text-[17px]">{careAreas.kicker}</p>
          <h2
            id="care-areas-title"
            className="mt-[14px] font-serif text-[42px] leading-[50.4px] tracking-[-0.02em] text-ink max-md:text-[32px] max-md:leading-[40px]"
          >
            {careAreas.title}
          </h2>
          <p className="mt-[14px] text-[18px] leading-[26px] text-ink-600 max-md:text-[16px]">
            {careAreas.subtitle}
          </p>
        </div>

        {/* Anchor targets for direct nav/footer links */}
        {careAreas.categories.map((cat) => (
          <span key={cat.id} id={cat.id} className="sr-only" aria-hidden />
        ))}

        {/* Category tabs */}
        <div role="tablist" aria-label="Care categories" className="mx-auto mt-[32px] flex max-w-[820px] flex-wrap justify-center gap-[8px] sm:gap-[12px]">
          {careAreas.categories.map((cat) => {
            const selected = cat.id === activeCategory.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${cat.id}`}
                onClick={() => setTabState({ id: cat.id, hash })}
                className={cn(
                  'rounded-full px-[16px] py-[9px] text-[14px] font-medium transition-colors duration-200 cursor-pointer sm:px-[22px] sm:py-[11px] sm:text-[15.5px]',
                  selected
                    ? 'bg-ink text-white'
                    : 'bg-white text-ink-700 hover:bg-sand'
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <p className="mx-auto mt-[24px] max-w-[640px] text-center text-[16.5px] leading-[24px] text-ink-500">
          {activeCategory.summary}
        </p>

        {/* Service cards grid */}
        <div
          id={`panel-${activeCategory.id}`}
          role="tabpanel"
          className="mx-auto mt-[40px] grid max-w-[1180px] gap-[22px] sm:grid-cols-2 lg:grid-cols-4"
        >
          {activeCategory.items.map((item, i) => {
            const Icon = areaIcons[item.icon] ?? Stethoscope;
            return (
              <Reveal
                key={`${activeCategory.id}-${item.title}`}
                delay={(i % 4) * 0.05}
                className="flex flex-col justify-between rounded-[16px] bg-white p-[26px] shadow-[0_2px_14px_rgba(0,0,0,0.04)]"
              >
                <div>
                  <span className="inline-flex size-[44px] items-center justify-center rounded-full bg-cream text-ink">
                    <Icon className="size-[22px]" strokeWidth={1.6} aria-hidden />
                  </span>
                  <h3 className="mt-[18px] font-serif text-[22px] leading-[28px] tracking-[-0.01em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-[10px] text-[15.5px] leading-[22.5px] text-ink-500">
                    {item.description}
                  </p>
                </div>
                <Link
                  to={`/contact?topic=booking&service=${encodeURIComponent(item.title)}#contact-form`}
                  className="group mt-[22px] inline-flex items-center gap-[6px] text-[14.5px] font-semibold text-ink hover:text-accent"
                >
                  <span>Book consultation</span>
                  <ArrowRight className="size-[16px] transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
                </Link>
              </Reveal>
            );
          })}

          {/* Guided booking card matching reference */}
          <Reveal
            key={`${activeCategory.id}-not-sure`}
            delay={0.15}
            className="flex flex-col justify-between rounded-[16px] bg-cream p-[26px] shadow-[0_2px_14px_rgba(0,0,0,0.04)]"
          >
            <div>
              <span className="inline-flex size-[44px] items-center justify-center rounded-full bg-white text-ink">
                <Compass className="size-[22px]" strokeWidth={1.6} aria-hidden />
              </span>
              <h3 className="mt-[18px] font-serif text-[22px] leading-[28px] tracking-[-0.01em] text-ink">
                Not Sure Where to Start?
              </h3>
              <p className="mt-[10px] text-[15.5px] leading-[22.5px] text-ink-500">
                Answer a few booking questions — our team will guide you to the right care.
              </p>
            </div>
            <Link
              to="/contact?topic=consultation#contact-form"
              className="group mt-[22px] inline-flex items-center gap-[6px] text-[14.5px] font-semibold text-ink hover:text-accent"
            >
              <span>Get guided help</span>
              <ArrowRight className="size-[16px] transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
            </Link>
          </Reveal>
        </div>

        <p className="mx-auto mt-[32px] max-w-[640px] text-center text-[14px] leading-[20px] text-ink-500">
          {careAreas.note}
        </p>

        <div className="mt-[28px] flex justify-center">
          <Button variant="pill" to="/contact?topic=booking#contact-form">
            {careAreas.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
