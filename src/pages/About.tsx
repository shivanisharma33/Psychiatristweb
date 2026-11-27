import { Seo } from '@/components/common/Seo';
import { Marquee } from '@/components/common/Marquee';
import { aboutContent } from '@/content/about';
import { AboutStory } from '@/components/sections/about/AboutStory';
import { DoctorProfileSection } from '@/components/sections/about/DoctorProfileSection';

export default function About() {
  return (
    <>
      <Seo {...aboutContent.meta} />
      <AboutStory />
      <section aria-label={aboutContent.marquee} className="bg-white py-[82px] max-md:py-[48px]">
        <Marquee items={[aboutContent.marquee]} speed={22} />
      </section>
      <DoctorProfileSection />
    </>
  );
}
