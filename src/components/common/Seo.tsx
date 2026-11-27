import { brand } from '@/content/site';

/** React 19 hoists <title>/<meta> rendered anywhere into <head>. */
export function Seo({ title, description }: { title: string; description: string }) {
  const full = `${brand.siteTitle} - ${title}`;
  return (
    <>
      <title>{full}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}
