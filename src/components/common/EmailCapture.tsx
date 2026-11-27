import { useId, useState, type FormEvent } from 'react';
import { Loader2 } from 'lucide-react';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { FORMSPREE_NEWSLETTER_ID } from '@/utils/formspree';
import { isValidEmail } from '@/utils/validation';
import { cn } from '@/utils/cn';

interface Props {
  variant: 'hero' | 'footer';
  placeholder?: string;
  cta: string;
  source: string;
  className?: string;
}

/** Email sign-up used in the home hero and the footer. Posts to Formspree. */
export function EmailCapture({ variant, placeholder = 'Enter your email', cta, source, className }: Props) {
  const id = useId();
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);
  const { status, error, submit } = useFormSubmit(FORMSPREE_NEWSLETTER_ID);

  const invalid = touched && !isValidEmail(email);
  const errorId = `${id}-error`;

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!isValidEmail(email) || status === 'submitting') return;
    const ok = await submit({ email: email.trim(), source, _subject: `New community sign-up (${source})` });
    if (ok) {
      setEmail('');
      setTouched(false);
    }
  };

  const message =
    invalid
      ? 'Please enter a valid email address.'
      : status === 'success'
        ? "Thanks! You're on the list."
        : status === 'error'
          ? error === 'not-configured'
            ? 'Sign-up is not connected yet. Please try again later.'
            : 'Something went wrong. Please try again.'
          : '';

  const submitting = status === 'submitting';

  if (variant === 'hero') {
    return (
      <form onSubmit={onSubmit} noValidate className={className} aria-label="Join our community">
        <label htmlFor={id} className="sr-only">
          Email address
        </label>
        <input
          id={id}
          type="email"
          inputMode="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => email && setTouched(true)}
          placeholder={placeholder}
          aria-invalid={invalid || undefined}
          aria-describedby={message ? errorId : undefined}
          className={cn(
            'block h-[52px] w-full max-w-[370px] rounded-[30px] border bg-[rgba(245,245,245,0.4)] px-[25px] text-[16px] text-ink outline-none transition-colors placeholder:text-[#9a8a85] focus:bg-[rgba(245,245,245,0.65)] max-md:mx-auto max-md:text-center',
            invalid ? 'border-[#b3261e]' : 'border-hero-input-border',
          )}
        />
        <p id={errorId} role={status === 'success' ? 'status' : 'alert'} aria-live="polite" className="mt-2 min-h-[20px] text-[14px] text-ink max-md:text-center">
          {message}
        </p>
        <button
          type="submit"
          disabled={submitting}
          aria-busy={submitting}
          className="mt-[6px] inline-flex h-[50px] items-center justify-center gap-2 rounded-[25px] bg-ink px-[37px] text-[19.6px] text-white transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#262626] disabled:opacity-70 max-md:mx-auto max-md:flex"
        >
          {submitting && <Loader2 className="size-4 animate-spin" aria-hidden />}
          {cta}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={className} aria-label="Newsletter sign-up">
      <div className="flex h-[48px] w-full max-w-[280px] overflow-hidden rounded-[30px] bg-[#cbcbcb]">
        <label htmlFor={id} className="sr-only">
          Email address
        </label>
        <input
          id={id}
          type="email"
          inputMode="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => email && setTouched(true)}
          placeholder={placeholder}
          aria-invalid={invalid || undefined}
          aria-describedby={message ? errorId : undefined}
          className="min-w-0 flex-1 bg-transparent pl-[20px] text-[14px] text-ink outline-none placeholder:text-[#6d6d6d]"
        />
        <button
          type="submit"
          disabled={submitting}
          aria-busy={submitting}
          className="inline-flex w-[94px] shrink-0 items-center justify-center gap-1 rounded-[30px] bg-accent text-[14px] font-medium text-white transition-colors hover:bg-[#e94a1b] disabled:opacity-70"
        >
          {submitting ? <Loader2 className="size-4 animate-spin" aria-label="Submitting" /> : cta}
        </button>
      </div>
      <p id={errorId} role={status === 'success' ? 'status' : 'alert'} aria-live="polite" className="mt-2 min-h-[18px] text-[13px] text-white/80">
        {message}
      </p>
    </form>
  );
}
