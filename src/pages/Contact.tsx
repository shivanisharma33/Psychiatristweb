import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Seo } from '@/components/common/Seo';
import { Reveal } from '@/components/common/Reveal';
import { WhatsAppGlyph } from '@/components/common/SocialIcon';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { EmergencyBanner } from '@/components/sections/EmergencyBanner';
import { contactContent } from '@/content/contact';
import { contact, whatsappHref } from '@/content/site';
import type { ReactNode } from 'react';

function Channel({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <li className="flex gap-[18px] border-b border-ink/10 py-[22px] last:border-0">
      <span className="grid size-[52px] shrink-0 place-items-center rounded-full bg-faq-btn text-ink" aria-hidden>
        {icon}
      </span>
      <div>
        <h3 className="font-serif text-[21px] leading-[25.2px] tracking-[-0.02em] text-ink">{title}</h3>
        <div className="mt-[6px] text-[16.8px] leading-[23.52px] text-ink-500">{children}</div>
      </div>
    </li>
  );
}

export default function Contact() {
  const { hero, channels, meta } = contactContent;
  const wa = whatsappHref();
  return (
    <>
      <Seo {...meta} />

      <section aria-labelledby="contact-title" className="bg-peach-animated">
        <div className="mx-auto max-w-[720px] px-[20px] pb-[120px] pt-[76px] text-center max-md:pb-[90px] max-md:pt-[56px]">
          <p className="text-[28px] leading-5 text-kicker max-md:text-[22px]">{hero.kicker}</p>
          <h1 id="contact-title" className="mt-[19px] font-serif text-[63px] leading-[75.6px] tracking-[-0.02em] text-ink max-md:text-[42px] max-md:leading-[50px]">
            {hero.title}
          </h1>
          <p className="mt-[10px] text-[19.6px] leading-[27.44px] text-ink-600 max-md:text-[17px] max-md:leading-[24px]">{hero.body}</p>
        </div>
      </section>

      <section id="contact-form" aria-label="Contact form and details" className="bg-sand-light">
        <div className="mx-auto -mt-[60px] grid max-w-[1200px] items-start gap-[50px] px-[20px] pb-[110px] lg:grid-cols-[1fr_380px] max-md:-mt-[50px] max-md:pb-[70px]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1} className="lg:pt-[90px]">
            <h2 className="font-serif text-[28px] leading-[44px] tracking-[-0.02em] text-ink">{channels.title}</h2>
            <ul className="mt-[6px]">
              {wa && (
                <Channel icon={<WhatsAppGlyph className="size-[22px]" />} title="WhatsApp">
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-accent">
                    Chat with a real person
                  </a>
                  <span className="block text-[14px] text-[#777]">{contact.whatsappReplyTime}</span>
                </Channel>
              )}
              <Channel icon={<Phone className="size-[22px]" strokeWidth={1.5} />} title="Call us">
                <a href={`tel:${contact.phoneE164}`} className="underline underline-offset-2 hover:text-accent">
                  {contact.phoneDisplay}
                </a>
              </Channel>
              <Channel icon={<Mail className="size-[22px]" strokeWidth={1.5} />} title="Email">
                <a href={`mailto:${contact.email}`} className="break-all underline underline-offset-2 hover:text-accent">
                  {contact.email}
                </a>
              </Channel>
              <Channel icon={<MapPin className="size-[22px]" strokeWidth={1.5} />} title="Visit">
                {contact.address.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
                {contact.mapUrl && (
                  <a href={contact.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block underline underline-offset-2 hover:text-accent">
                    Open in Maps
                  </a>
                )}
              </Channel>
              <Channel icon={<Clock className="size-[22px]" strokeWidth={1.5} />} title="Hours">
                {contact.hours.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </Channel>
            </ul>
          </Reveal>
        </div>
      </section>

      <EmergencyBanner />
    </>
  );
}
