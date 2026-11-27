/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION — replace every value marked TODO with your practice's
 *  real details. Everything visible site-wide (logo text, contact details,
 *  social links, navigation) is driven from this file.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { NavItem, SocialLink } from '@/types';

export const brand = {
  /** Wordmark is rendered as two parts: bold + light (mirrors the reference logo). */
  nameBold: 'Dr. Abhinav',
  nameLight: '',
  subtitle: 'ASHOK HOSPITAL',
  /** Legal entity shown in the footer copyright line. */
  legalName: 'Ashok Hospital, Garhshankar',
  tagline: 'Professional Psychiatric Care in Garhshankar, Punjab',
  /** Used in <title> tags. */
  siteTitle: 'Dr. Abhinav | Psychiatrist at Ashok Hospital',
  /** Optional: path to an SVG/PNG logo in /public. When set it replaces the text wordmark. */
  logoSrc: '',
};

export const contact = {
  email: 'care@ashokhospital.in',
  phoneDisplay: '+91 99968 42994',
  phoneE164: '+919996842994',
  hospitalPhoneDisplay: '+91 98140 73717',
  hospitalPhoneE164: '+919814073717',
  /** WhatsApp number in international format without "+" or spaces. */
  whatsapp: '919996842994',
  whatsappReplyTime: 'Typically replies in 3 mins',
  address: ['Ashok Hospital, Near Civil Hospital', 'Garhshankar, Punjab 144527, India'],
  hours: ['Mon – Sat: 10:00 am – 5:00 pm (By Appointment)', 'Sunday: closed'],
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ashok+Hospital+Near+Civil+Hospital+Garhshankar+Punjab+144527',
};

export const socials: SocialLink[] = [
  // TODO: replace with your real profiles (remove any you don't use).
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: 'youtube' },
  { label: 'X (Twitter)', href: 'https://x.com/', icon: 'twitter' },
  { label: 'Medium', href: 'https://medium.com/', icon: 'medium' },
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' },
];

export const whatsappHref = (text = 'Hi! I would like to know more about your services.') =>
  contact.whatsapp ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}` : '';

export const mainNav: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'Services',
    to: '/services',
    children: [
      { label: 'Mental Health', to: '/services#mental-health' },
      { label: 'Emotional & Behavioural Health', to: '/services#emotional-wellbeing' },
      { label: "Women's Mental Health", to: '/services#womens-mental-health' },
      { label: 'Individual Therapy', to: '/services#individual-therapy' },
      { label: 'Psychiatry & Medication', to: '/services#psychiatry' },
      { label: 'ADHD & Assessments', to: '/services#adhd' },
      { label: "Couple's Therapy", to: '/services#couples-therapy' },
    ],
  },
  {
    label: 'About Us',
    to: '/about',
    children: [
      { label: 'Our Story', to: '/about' },
      { label: 'Dr. Abhinav', to: '/about#about-doctor' },
      { label: 'How It Works', to: '/#how-it-works' },
    ],
  },
  { label: 'Contact Us', to: '/contact' },
];

export const navCta = { label: 'Book a session', to: '/contact' };

export const footerColumns: { title: string; links: { label: string; to: string; external?: boolean }[] }[] = [
  {
    title: 'Popular',
    links: [
      { label: 'Mental Health', to: '/services#mental-health' },
      { label: 'Emotional Well-being', to: '/services#emotional-wellbeing' },
      { label: "Women's Mental Health", to: '/services#womens-mental-health' },
      { label: 'Individual Therapy', to: '/services#individual-therapy' },
      { label: 'Psychiatry', to: '/services#psychiatry' },
      { label: 'All Services', to: '/services' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'How It Works', to: '/#how-it-works' },
      { label: 'About Us', to: '/about' },
      { label: 'Dr. Abhinav', to: '/about#about-doctor' },
      { label: 'Testimonials', to: '/services#testimonials' },
      { label: 'FAQs', to: '/services#faq' },
    ],
  },
  {
    title: 'Connect',
    links: socials.slice(0, 5).map((s) => ({ label: s.label, to: s.href, external: true })),
  },
  {
    title: 'Practice',
    links: [
      { label: 'Contact Us', to: '/contact' },
      { label: 'Book a Session', to: '/contact#contact-form' },
      { label: 'Work With Us', to: '/contact?topic=careers#contact-form' },
    ],
  },
];

export const legalLinks = [
  // TODO: point these at your real policy pages / PDFs.
  { label: 'Terms and Conditions', href: '/contact?topic=terms#contact-form' },
  { label: 'Privacy Policy', href: '/contact?topic=privacy#contact-form' },
];
