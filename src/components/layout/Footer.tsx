import { Link } from 'react-router-dom';
import { brand, contact, footerColumns, legalLinks, socials } from '@/content/site';
import { Wordmark } from '@/components/common/Wordmark';
import { EmailCapture } from '@/components/common/EmailCapture';
import { SocialIcon } from '@/components/common/SocialIcon';

/** Textured orange brush stroke either side of the footer logo. */
function Brush({ flip = false }: { flip?: boolean }) {
  return (
    <svg viewBox="0 0 300 6" preserveAspectRatio="none" className="h-[6px] w-[300px] max-w-[30vw]" style={flip ? { transform: 'scaleX(-1)' } : undefined} aria-hidden>
      <defs>
        <linearGradient id={`brush-${flip ? 'r' : 'l'}`} x1="0" x2="1">
          <stop offset="0" stopColor="#3a3a3a" stopOpacity="0" />
          <stop offset="0.25" stopColor="#6b4a3e" stopOpacity="0.7" />
          <stop offset="0.5" stopColor="#e2643f" />
          <stop offset="1" stopColor="#f06a40" />
        </linearGradient>
      </defs>
      <path
        d="M0 2.6 C 50 1.6, 110 2.2, 170 1.3 S 260 1.9, 300 1.5 L 300 4.9 C 250 5.3, 190 4.4, 120 5.1 S 30 4.3, 0 4.6 Z"
        fill={`url(#brush-${flip ? 'r' : 'l'})`}
      />
      {/* dry-brush streaks */}
      <path d="M20 1.8 L 90 1.6 M60 5.1 L 140 5.3 M180 0.9 L 270 1.1 M200 5.5 L 290 5.3" stroke="#f06a40" strokeOpacity="0.45" strokeWidth="0.5" />
      <path d="M30 3.4 L 70 3.3 M100 2.4 L 130 2.5 M150 4 L 175 4.1" stroke="#000" strokeOpacity="0.35" strokeWidth="0.5" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-[1440px] px-[20px] pb-[64px] pt-[40px] md:px-[40px] lg:px-[124px]">
        <div className="flex items-center justify-center gap-[15px]">
          <span className="hidden sm:block"><Brush /></span>
          <Link to="/" aria-label={`${brand.nameBold} ${brand.nameLight} home`} className="shrink-0 px-[10px] sm:px-[15px]">
            <Wordmark inverted size="lg" />
          </Link>
          <span className="hidden sm:block"><Brush flip /></span>
        </div>

        <div className="mt-[120px] grid gap-y-[48px] max-lg:mt-[70px] lg:grid-cols-[280px_1fr] lg:gap-x-[30px]">
          <div>
            <p className="font-serif text-[24px] leading-[44px] tracking-[-0.02em]">I&apos;m excited. Tell me more.</p>
            <EmailCapture variant="footer" cta="Submit" source="footer" className="mt-[20px]" />

            <p className="mt-[60px] font-serif text-[24px] leading-[28.8px] tracking-[-0.02em] text-accent max-lg:mt-[36px]">Have a question?</p>
            <p className="text-[15px] leading-5">
              Email us anytime:{' '}
              <a href={`mailto:${contact.email}`} className="underline underline-offset-2 hover:text-accent">
                {contact.email}
              </a>
            </p>

            <ul className="mt-[30px] flex items-center gap-[21px] text-[#bdbdbd]">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="block transition-colors hover:text-white">
                    <SocialIcon name={s.icon} className="size-[25px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-y-[40px] md:grid-cols-4 min-[1400px]:grid-cols-[repeat(4,228px)]">
            {footerColumns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <p className="text-[22px] font-semibold leading-[22px]">{col.title}</p>
                <ul className="mt-[40px] space-y-[20px] max-md:mt-[24px]">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.external ? (
                        <a href={l.to} target="_blank" rel="noopener noreferrer" className="text-[19.2px] leading-5 transition-colors hover:text-accent max-md:text-[17px]">
                          {l.label}
                        </a>
                      ) : (
                        <Link to={l.to} className="text-[19.2px] leading-5 transition-colors hover:text-accent max-md:text-[17px]">
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-[194px] border-t border-white/90 pt-[40px] max-lg:mt-[70px]">
          <div className="flex flex-col justify-between gap-4 text-[19.2px] leading-5 md:flex-row max-md:text-[16px]">
            <p>
              © {year} {brand.legalName}
            </p>
            <p>
              All Rights Reserved |{' '}
              {legalLinks.map((l, i) => (
                <span key={l.label}>
                  <Link to={l.href} className="text-accent transition-opacity hover:opacity-80">
                    {l.label}
                  </Link>
                  {i < legalLinks.length - 1 && ' | '}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
