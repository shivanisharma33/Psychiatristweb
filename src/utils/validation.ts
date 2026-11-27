const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const isValidEmail = (v: string) => EMAIL_RE.test(v.trim());

/** Accepts international numbers: optional +, 7–15 digits, common separators. */
export const isValidPhone = (v: string) => {
  const trimmed = v.trim();
  if (!/^\+?[\d\s\-().]+$/.test(trimmed)) return false;
  const digits = trimmed.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15;
};

export interface ContactValues {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  consent: boolean;
  /** Honeypot — must stay empty. */
  _gotcha: string;
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

export function validateContact(v: ContactValues): ContactErrors {
  const e: ContactErrors = {};
  if (!v.name.trim()) e.name = 'Please enter your name.';
  else if (v.name.trim().length < 2) e.name = 'Name looks too short.';

  if (!v.email.trim()) e.email = 'Please enter your email address.';
  else if (!isValidEmail(v.email)) e.email = 'Please enter a valid email address, e.g. name@example.com.';

  if (v.phone.trim() && !isValidPhone(v.phone)) e.phone = 'Please enter a valid phone number (7–15 digits, country code optional).';

  if (!v.topic) e.topic = 'Please choose what your message is about.';

  if (!v.message.trim()) e.message = 'Please write a short message.';
  else if (v.message.trim().length < 10) e.message = 'Please add a little more detail (at least 10 characters).';

  if (!v.consent) e.consent = 'Please confirm we can contact you about your enquiry.';
  return e;
}
