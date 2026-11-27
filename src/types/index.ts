export interface NavChild {
  label: string;
  to: string;
}

export interface NavItem {
  label: string;
  to: string;
  children?: NavChild[];
}

export type SocialIcon = 'instagram' | 'linkedin' | 'youtube' | 'twitter' | 'medium' | 'facebook';

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

/** An image slot. `src` empty = render a labelled placeholder of the correct size. */
export interface ImageSlot {
  src: string;
  alt: string;
  /** Description shown on the placeholder so you know what photo belongs here. */
  hint: string;
  /** CSS object-position used when the photo is cropped into its frame (default "center"). */
  position?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  avatar: ImageSlot;
}

export interface TeamMember {
  name: string;
  credentials: string;
  role: string;
  photo: ImageSlot;
}

export interface Faq {
  question: string;
  emoji?: string;
  answer: string;
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
