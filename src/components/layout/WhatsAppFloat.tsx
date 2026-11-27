import { contact, whatsappHref } from '@/content/site';
import { WhatsAppGlyph } from '@/components/common/SocialIcon';

/** Floating "Real person here 👋" WhatsApp pill (bottom-right). Hidden if no number is configured. */
export function WhatsAppFloat() {
  const href = whatsappHref();
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-[42px] right-[28px] z-30 flex h-[52px] items-center gap-[12px] rounded-full border-2 border-[#2a2a2e] bg-whatsapp pl-[18px] pr-[5px] shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:-translate-y-0.5 max-md:bottom-[20px] max-md:right-[16px]"
    >
      <span className="flex flex-col leading-none">
        <span className="text-[14px] font-semibold leading-[17.5px] text-white">Real person here 👋</span>
        <span className="text-[12px] leading-[15px] text-muted">{contact.whatsappReplyTime}</span>
      </span>
      <span className="grid size-[40px] place-items-center rounded-full bg-whatsapp-green text-white">
        <WhatsAppGlyph className="size-[24px]" />
      </span>
    </a>
  );
}
