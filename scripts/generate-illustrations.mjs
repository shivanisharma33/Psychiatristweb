/**
 * Generates the original SVG illustrations used on the site:
 *  - testimonial-1..4.svg : faceless illustrated busts (testimonials are anonymous)
 *  - team-1..5.svg        : neutral monochrome silhouettes, used until real clinician photos are supplied
 * Run: node scripts/generate-illustrations.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const out = path.resolve('public/images/illustrations');
fs.mkdirSync(out, { recursive: true });

// Hair shapes drawn around a head centred at (60, 58) with radius ~19 on a 120x130 canvas.
const hair = {
  bun: '<circle cx="60" cy="30" r="10"/><path d="M39 60c-2-18 8-30 21-30s23 12 21 30c-4-9-10-15-21-15s-17 6-21 15z"/>',
  long: '<path d="M37 92c-4-22-3-40 3-50 5-9 12-13 20-13s15 4 20 13c6 10 7 28 3 50l-8-6c2-14 1-26-4-33-3-4-7-6-11-6s-8 2-11 6c-5 7-6 19-4 33z"/>',
  short: '<path d="M40 58c-2-17 8-28 20-28 13 0 23 9 21 26-4-8-11-12-21-12-9 0-16 6-20 14z"/>',
  curly: '<g><circle cx="44" cy="44" r="9"/><circle cx="53" cy="35" r="9"/><circle cx="64" cy="33" r="9"/><circle cx="74" cy="39" r="9"/><circle cx="79" cy="50" r="7"/><circle cx="41" cy="54" r="6"/></g>',
};

function bust({ bg, skin, hairColor, hairStyle, top, accent }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 130" width="120" height="130">
  <rect width="120" height="130" fill="${bg}"/>
  <circle cx="98" cy="22" r="18" fill="${accent}" opacity=".35"/>
  <circle cx="18" cy="104" r="22" fill="${accent}" opacity=".25"/>
  <path d="M22 130c2-24 18-38 38-38s36 14 38 38z" fill="${top}"/>
  <path d="M52 80h16v14c0 5-16 5-16 0z" fill="${skin}"/>
  <path d="M48 98c4 6 20 6 24 0" fill="none" stroke="${skin}" stroke-width="3" stroke-linecap="round" opacity=".9"/>
  <g fill="${hairColor}">${hairStyle === 'long' ? hair.long : ''}</g>
  <ellipse cx="60" cy="60" rx="19" ry="22" fill="${skin}"/>
  <g fill="${hairColor}">${hairStyle !== 'long' ? hair[hairStyle] : '<path d="M41 58c-1-17 8-27 19-27s20 10 19 27c-5-9-11-13-19-13s-14 4-19 13z"/>'}</g>
</svg>
`;
}

const testimonials = [
  { bg: '#f6d9cb', skin: '#c98b67', hairColor: '#2b1d18', hairStyle: 'bun', top: '#5b7fb0', accent: '#ff7f60' },
  { bg: '#e7efe3', skin: '#a86f4c', hairColor: '#1f1714', hairStyle: 'short', top: '#2f4f4f', accent: '#7fae8a' },
  { bg: '#efe2f1', skin: '#d6a07c', hairColor: '#3b2619', hairStyle: 'long', top: '#c4566a', accent: '#a07cc5' },
  { bg: '#fbe7c6', skin: '#8d5a3b', hairColor: '#17110e', hairStyle: 'curly', top: '#e08a3c', accent: '#f2b84b' },
];
testimonials.forEach((t, i) => fs.writeFileSync(path.join(out, `testimonial-${i + 1}.svg`), bust(t)));

// Team placeholders: monochrome silhouettes on a light grey field (rendered inside a 200px circle).
function silhouette(style, glasses = false) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="200" height="200">
  <rect width="120" height="120" fill="#e9e9e9"/>
  <path d="M20 120c2-26 19-40 40-40s38 14 40 40z" fill="#9a9a9a"/>
  <path d="M53 70h14v14c0 5-14 5-14 0z" fill="#b3b3b3"/>
  <g fill="#7d7d7d">${style === 'long' ? hair.long : ''}</g>
  <ellipse cx="60" cy="55" rx="18" ry="21" fill="#b3b3b3"/>
  <g fill="#7d7d7d" transform="translate(0 -4)">${style !== 'long' ? hair[style] : '<path d="M41 58c-1-17 8-27 19-27s20 10 19 27c-5-9-11-13-19-13s-14 4-19 13z"/>'}</g>
  ${glasses ? '<g fill="none" stroke="#6a6a6a" stroke-width="2"><circle cx="52" cy="57" r="5.5"/><circle cx="68" cy="57" r="5.5"/><path d="M57.5 57h5"/></g>' : ''}
</svg>
`;
}
[['long'], ['short'], ['short', true], ['bun'], ['curly']].forEach(([s, g], i) => fs.writeFileSync(path.join(out, `team-${i + 1}.svg`), silhouette(s, g)));

console.log('illustrations written to', out);
