import { Seo } from '@/components/common/Seo';
import { servicesContent } from '@/content/services';
import { ServicesHero } from '@/components/sections/services/ServicesHero';
import { CareAreasSection } from '@/components/sections/services/CareAreasSection';
import { HolisticCare } from '@/components/sections/services/HolisticCare';
import { ConcernsGrid, PrivacyGrid } from '@/components/sections/services/IconGrids';
import {
  BeginSection,
  FaqSection,
  FeelLikeYouCta,
  JourneySection,
  NormaliseMarquee,
  ProfessionalsSection,
  ServicesTestimonials,
} from '@/components/sections/services/ServicesSections';
import { EmergencyBanner } from '@/components/sections/EmergencyBanner';

export default function Services() {
  return (
    <>
      <Seo {...servicesContent.meta} />
      <ServicesHero />
      <NormaliseMarquee />
      <BeginSection />
      <CareAreasSection />
      <HolisticCare />
      <PrivacyGrid />
      <ServicesTestimonials />
      <JourneySection />
      <ProfessionalsSection />
      <ConcernsGrid />
      <FaqSection />
      <FeelLikeYouCta />
      <EmergencyBanner />
    </>
  );
}
