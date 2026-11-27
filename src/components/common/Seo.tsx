import { brand } from '@/content/site';

/** React 19 hoists <title>/<meta> rendered anywhere into <head>. */
export function Seo({ title, description }: { title: string; description: string }) {
  const full = title.includes(brand.nameBold) ? title : `${title} | ${brand.siteTitle}`;
  return (
    <>
      <title>{full}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Dr. Abhinav Dhami — Ashok Hospital" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/photos/dr-abhinav-dhami-763.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={full} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/images/photos/dr-abhinav-dhami-763.jpg" />
    </>
  );
}
