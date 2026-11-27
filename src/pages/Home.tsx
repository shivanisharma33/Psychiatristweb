import { Seo } from '@/components/common/Seo';
import { homeContent } from '@/content/home';
import { HomeHero } from '@/components/sections/home/HomeHero';
import { Categories } from '@/components/sections/home/Categories';
import { HowItWorks } from '@/components/sections/home/HowItWorks';
import { Different } from '@/components/sections/home/Different';
import { TeamCarousel } from '@/components/sections/home/TeamCarousel';
import { Community } from '@/components/sections/home/Community';
import { GivingBack } from '@/components/sections/home/GivingBack';

export default function Home() {
  return (
    <>
      <Seo {...homeContent.meta} />
      <HomeHero />
      <Categories />
      <HowItWorks />
      <Different />
      <TeamCarousel />
      <Community />
      <GivingBack />
    </>
  );
}
