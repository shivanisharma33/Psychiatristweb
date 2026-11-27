import type { SocialIcon as SocialIconName } from '@/types';

/** Original outline brand glyphs (lucide no longer ships brand icons). 24×24, stroke = currentColor. */
export function SocialIcon({ name, className = 'size-6' }: { name: SocialIconName; className?: string }) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.4,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };
  switch (name) {
    case 'instagram':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="9" />
          <path d="M8.5 10.5v5M8.5 8v.01M11.5 15.5v-5M11.5 12.6c0-1.3.9-2.1 2-2.1s2 .7 2 2.1v2.9" />
        </svg>
      );
    case 'youtube':
      return (
        <svg {...common}>
          <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
          <path d="M10.2 9.4v5.2l4.4-2.6-4.4-2.6Z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg {...common}>
          <path d="M21 6.2c-.7.3-1.4.5-2.1.6.8-.5 1.3-1.2 1.6-2-.7.4-1.5.7-2.3.9a3.6 3.6 0 0 0-6.2 3.3A10.3 10.3 0 0 1 4.5 5.2a3.6 3.6 0 0 0 1.1 4.8c-.6 0-1.2-.2-1.6-.4 0 1.8 1.2 3.2 2.9 3.6-.5.1-1.1.2-1.6.1.5 1.4 1.8 2.5 3.4 2.5A7.3 7.3 0 0 1 3 17.3 10.3 10.3 0 0 0 18.9 8.6v-.5c.8-.5 1.5-1.2 2.1-1.9Z" />
        </svg>
      );
    case 'medium':
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden>
          <path
            fill="currentColor"
            d="M3 5.5h4.6L12 15.2l4.3-9.7H21v.6l-1.5 1.4v9l1.5 1.4v.6h-6.3v-.6l1.6-1.5V9l-4.6 10.5h-.6L6 9v7l2 2.4v.6H3v-.6l2-2.4V7.6L3 6.1Z"
          />
        </svg>
      );
    case 'facebook':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M15.5 8.3h-1.6c-1.1 0-1.7.7-1.7 1.8V21M10 13h5" />
        </svg>
      );
  }
}

export function WhatsAppGlyph({ className = 'size-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden fill="currentColor">
      <path d="M12 2.2a9.7 9.7 0 0 0-8.4 14.6L2.3 21.7l5-1.3A9.7 9.7 0 1 0 12 2.2Zm0 17.7a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 19.9Zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3c-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2l-.5-.2Z" />
    </svg>
  );
}
