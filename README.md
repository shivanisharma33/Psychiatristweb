# Your Practice — website

React + TypeScript + Tailwind CSS site with four pages (Home, Services, About Us, Contact Us).
Its layout and design system recreate [rockethealth.app](https://www.rockethealth.app/), and it is branded for **your own practice**.
None of Rocket Health's name, logo, photos or copy are used.

| Page | Route | Based on |
| --- | --- | --- |
| Home | `/` | rockethealth.app home |
| Services | `/services` | rockethealth.app/mental-health |
| About Us | `/about` | rockethealth.app/about-us |
| Contact Us | `/contact` | New page in the reference's visual style (the reference has no contact page) |

## Tech stack

- **Vite 7**, **React 19**, **TypeScript 5.9**
- **Tailwind CSS 4** (design tokens are in `src/styles/index.css` under `@theme`)
- **React Router 7**: client-side routing, code-split pages, scroll restoration and hash scrolling
- **Framer Motion**: carousels, accordion, scroll reveals and the About-page scroll story. All of them honour `prefers-reduced-motion`.
- **Lucide React** for icons. Brand icons are original SVGs.
- **Formspree** for the contact and newsletter forms.

> Vite 7 is used on purpose. Vite 8's native bundler (rolldown) was blocked by Windows Application Control on the development machine.

## Getting started

```bash
npm install
cp .env.example .env        # then fill in your Formspree IDs (see below)
npm run dev                 # http://localhost:5173
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run typecheck` | TypeScript type check |
| `npm run lint` | ESLint (incl. React Hooks / React Compiler rules) |
| `npm run build` | Type-check, then production build into `dist/` |
| `npm run preview` | Serve the production build locally |

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `VITE_FORMSPREE_CONTACT_ID` | **Yes**, for the contact form | The ID from your Formspree form URL, e.g. `xyzabcd` from `https://formspree.io/f/xyzabcd` |
| `VITE_FORMSPREE_NEWSLETTER_ID` | No | A separate form for the hero and footer email sign-ups. Falls back to the contact form ID. |

Formspree form IDs are public identifiers; they appear in any HTML form's `action`. They are not secrets. No API keys are used in the browser.

**Setup:** create a free account at [formspree.io](https://formspree.io), create a form, copy its ID into `.env` (and into your Vercel project's environment variables), then rebuild.

If the ID is missing, the forms still validate. On submit they say plainly that the form isn't connected yet and point visitors to your email, phone and WhatsApp. They never show a fake success message.

## Replacing placeholder content (before going live)

Everything you need to edit is in **`src/content/`**:

| File | What it holds |
| --- | --- |
| `site.ts` | Practice name (wordmark), legal name, email, phone, WhatsApp number, address, hours, social links, navigation, footer links, legal links |
| `home.ts` | Home copy, rotating hero words, press logos, category cards, "how it works" steps |
| `services.ts` | Services hero and service cards, Venn labels, privacy and concern lists, CTAs, emergency text |
| `about.ts` | About-page questions, reveal tags, marquee phrase, founder's note |
| `contact.ts` | Contact copy, form topics, form messages |
| `shared.ts` | **Testimonials, team members and FAQs** |

> ⚠️ **Testimonials and team members are placeholders.** Replace them with real, consented client quotes and your real clinicians' names and credentials. Publishing invented testimonials or credentials for a health service is misleading, and illegal in many places.

### Images

Every image is an `ImageSlot` (`{ src, alt, hint }`). While `src` is empty, a labelled placeholder of the correct size is shown. To add a photo:

1. Put the file in `public/images/`, e.g. `public/images/hero-1.jpg`.
2. Set `src: '/images/hero-1.jpg'` and a descriptive `alt` in the matching content file.

The `hint` text on each placeholder gives the slot and its target size, e.g. "Hero photo 1 · 200×300 portrait".

**Logo:** set `brand.logoSrc` in `site.ts` to an SVG/PNG in `public/` to replace the text wordmark.

### Fonts

The reference uses two commercial typefaces, **Canela** and **Founders Grotesk**, which cannot be redistributed.
The site uses the closest free Google Fonts, chosen by measuring text widths against the reference:

- Canela → **Newsreader** (within ~3% width)
- Founders Grotesk → **Familjen Grotesk** (with −0.02em tracking to match line lengths)
- Hand-written hero word → **Sacramento**

If you buy web licences, drop the `.woff2` files in `src/assets/fonts/` and uncomment the `@font-face` rules in `src/styles/fonts.css`.

## Deploying to Vercel

1. Push the project to GitHub, GitLab or Bitbucket and import it in Vercel. It detects Vite automatically.
2. Build command `npm run build`, output directory `dist`.
3. Add `VITE_FORMSPREE_CONTACT_ID` (and optionally `VITE_FORMSPREE_NEWSLETTER_ID`) under **Settings → Environment Variables**, then redeploy.

`vercel.json` rewrites every path to `index.html`, so direct links and page refreshes work on all routes.

## Project structure

```text
src/
├── assets/{images,icons,fonts}/   # optional local assets (licensed fonts go here)
├── components/
│   ├── common/      # Button, SmartImage, Wordmark, Marquee, Reveal, PhoneMockup, FaqAccordion,
│   │                # TestimonialSlider, EmailCapture, Dots, Seo, SocialIcon
│   ├── layout/      # Layout, Navbar (dropdowns + mobile menu), Footer, WhatsAppFloat, ScrollManager
│   └── sections/    # home/, services/, about/, contact/, EmergencyBanner
├── content/         # ← all editable copy, contact details and image slots
├── hooks/           # useCarousel / usePerView, useFormSubmit
├── pages/           # Home, Services, About, Contact, NotFound
├── styles/          # index.css (design tokens), fonts.css
├── types/
├── utils/           # formspree client, validation, cn
├── App.tsx          # router
└── main.tsx
```

## Known differences from the reference

- **Photos, illustrations and press logos** are placeholders until you add your own. The reference's assets belong to Rocket Health and were not copied.
- **Fonts** are close free substitutes (see above), so letterforms differ slightly.
- **App screenshots** in "How it works" and "beginning to end" are CSS phone mock-ups with illustrative UI, not real app screens.
- **Icons:** the reference's custom orange illustrations and line icons are replaced with Lucide icons in the same colours and sizes.
- **Navigation** has four items (Home, Services, About Us, Contact Us) instead of the reference's nine. The "Log in" button became "Book a session", which links to the contact form.
- **About-page scroll animation:** the reference's Webflow interaction was rebuilt with Framer Motion as a sticky scroll sequence. Timing is approximate. Users with reduced motion get a static version.
