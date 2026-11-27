import { useId, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { contactContent } from '@/content/contact';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { FORMSPREE_CONTACT_ID } from '@/utils/formspree';
import { validateContact, type ContactErrors, type ContactValues } from '@/utils/validation';
import { cn } from '@/utils/cn';

const empty: ContactValues = { name: '', email: '', phone: '', topic: '', message: '', consent: false, _gotcha: '' };

const inputCls = (invalid: boolean) =>
  cn(
    'block w-full rounded-[30px] border bg-white px-[24px] text-[17px] text-ink outline-none transition-[border-color,box-shadow] placeholder:text-[#9b9b9b] focus:border-ink focus:shadow-[0_0_0_3px_rgba(255,88,38,0.15)]',
    invalid ? 'border-[#b3261e]' : 'border-hero-input-border/70',
  );

function Field({ id, label, required, error, hint, children }: { id: string; label: string; required?: boolean; error?: string; hint?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-[8px] block text-[16px] font-semibold leading-5 text-ink">
        {label}
        {required ? <span className="text-accent"> *</span> : <span className="font-normal text-[#777]"> (optional)</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-[6px] pl-[6px] text-[14px] text-[#6b6b6b]">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-[6px] flex items-center gap-1 pl-[6px] text-[14px] text-[#b3261e]">
          <AlertCircle className="size-[14px] shrink-0" aria-hidden />
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const { form } = contactContent;
  const [params] = useSearchParams();
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;
  const formRef = useRef<HTMLFormElement>(null);

  const prefill = (v: ContactValues): ContactValues => {
    const topic = params.get('topic') ?? '';
    const service = params.get('service') ?? '';
    return {
      ...v,
      topic: form.topics.some((t) => t.value === topic) ? topic : v.topic,
      message: service && !v.message ? `I'm interested in ${service}.` : v.message,
    };
  };
  const [values, setValues] = useState<ContactValues>(() => prefill(empty));
  // Re-apply prefill when the query string changes (e.g. clicking another CTA while on this page).
  const query = params.toString();
  const [lastQuery, setLastQuery] = useState(query);
  if (query !== lastQuery) {
    setLastQuery(query);
    setValues(prefill(values));
  }
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const { status, error, submit, reset } = useFormSubmit(FORMSPREE_CONTACT_ID);

  const update = (key: keyof ContactValues) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target instanceof HTMLInputElement && e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const next = { ...values, [key]: value };
    setValues(next);
    if (submitted) setErrors(validateContact(next));
    if (status === 'error' || status === 'success') reset();
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;
    setSubmitted(true);
    const errs = validateContact(values);
    setErrors(errs);
    const firstInvalid = Object.keys(errs)[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    if (values._gotcha) return; // bot
    const topicLabel = form.topics.find((t) => t.value === values.topic)?.label ?? values.topic;
    const ok = await submit({
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      topic: topicLabel,
      message: values.message.trim(),
      consent: values.consent,
      _subject: `Website enquiry: ${topicLabel} — ${values.name.trim()}`,
    });
    if (ok) {
      setValues(empty);
      setErrors({});
      setSubmitted(false);
    }
  };

  const describedBy = (k: keyof ContactValues, hasHint = false) =>
    errors[k] ? `${id(k)}-error` : hasHint ? `${id(k)}-hint` : undefined;

  const submitting = status === 'submitting';

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-labelledby={id('title')} className="rounded-[20px] bg-white p-[40px] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)] max-md:p-[22px]">
      <h2 id={id('title')} className="font-serif text-[35px] leading-[42px] tracking-[-0.02em] text-ink max-md:text-[28px] max-md:leading-[34px]">
        {form.title}
      </h2>
      <p className="mt-[6px] text-[15px] text-[#6b6b6b]">
        Fields marked <span className="text-accent">*</span> are required.
      </p>

      <div className="mt-[28px] grid gap-[22px] md:grid-cols-2">
        <Field id={id('name')} label="Full name" required error={errors.name}>
          <input
            id={id('name')}
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={update('name')}
            aria-invalid={!!errors.name || undefined}
            aria-describedby={describedBy('name')}
            aria-required
            className={cn(inputCls(!!errors.name), 'h-[52px]')}
          />
        </Field>
        <Field id={id('email')} label="Email" required error={errors.email}>
          <input
            id={id('email')}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={values.email}
            onChange={update('email')}
            aria-invalid={!!errors.email || undefined}
            aria-describedby={describedBy('email')}
            aria-required
            className={cn(inputCls(!!errors.email), 'h-[52px]')}
          />
        </Field>
        <Field id={id('phone')} label="Phone" error={errors.phone} hint="Include country code, e.g. +91 98765 43210">
          <input
            id={id('phone')}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={update('phone')}
            aria-invalid={!!errors.phone || undefined}
            aria-describedby={describedBy('phone', true)}
            className={cn(inputCls(!!errors.phone), 'h-[52px]')}
          />
        </Field>
        <Field id={id('topic')} label="What is this about?" required error={errors.topic}>
          <select
            id={id('topic')}
            name="topic"
            value={values.topic}
            onChange={update('topic')}
            aria-invalid={!!errors.topic || undefined}
            aria-describedby={describedBy('topic')}
            aria-required
            className={cn(inputCls(!!errors.topic), 'h-[52px] appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M3%206l5%205%205-5%22/%3E%3C/svg%3E")] bg-[length:16px] bg-[right_22px_center] bg-no-repeat pr-[50px]', !values.topic && 'text-[#9b9b9b]')}
          >
            <option value="" disabled>
              Choose a topic
            </option>
            {form.topics.map((t) => (
              <option key={t.value} value={t.value} className="text-ink">
                {t.label}
              </option>
            ))}
          </select>
        </Field>
        <div className="md:col-span-2">
          <Field id={id('message')} label="Message" required error={errors.message}>
            <textarea
              id={id('message')}
              name="message"
              rows={5}
              value={values.message}
              onChange={update('message')}
              aria-invalid={!!errors.message || undefined}
              aria-describedby={describedBy('message')}
              aria-required
              className={cn(inputCls(!!errors.message), 'resize-y rounded-[20px] py-[16px] leading-[24px]')}
              placeholder="Tell us a little about what you're looking for. Please don't include sensitive medical details."
            />
          </Field>
        </div>
      </div>

      {/* Honeypot (hidden from people & assistive tech) */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this empty
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" value={values._gotcha} onChange={update('_gotcha')} />
        </label>
      </div>

      <div className="mt-[22px]">
        <label className="flex cursor-pointer items-start gap-[12px] text-[15px] leading-[21px] text-ink-500">
          <input
            type="checkbox"
            name="consent"
            checked={values.consent}
            onChange={update('consent')}
            aria-invalid={!!errors.consent || undefined}
            aria-describedby={describedBy('consent')}
            className="mt-[2px] size-[18px] shrink-0 accent-[#ff5826]"
          />
          {form.consent}
        </label>
        {errors.consent && (
          <p id={`${id('consent')}-error`} className="mt-[6px] flex items-center gap-1 pl-[30px] text-[14px] text-[#b3261e]">
            <AlertCircle className="size-[14px] shrink-0" aria-hidden />
            {errors.consent}
          </p>
        )}
      </div>

      <div className="mt-[30px] flex flex-wrap items-center gap-[20px]">
        <button
          type="submit"
          disabled={submitting}
          aria-busy={submitting}
          className="inline-flex h-[50px] items-center justify-center gap-2 rounded-[300px] border-2 border-ink bg-ink px-[36px] text-[19.6px] text-white transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#262626] disabled:cursor-wait disabled:opacity-70 max-md:w-full"
        >
          {submitting && <Loader2 className="size-[18px] animate-spin" aria-hidden />}
          {submitting ? 'Sending…' : form.submit}
        </button>
      </div>

      <div aria-live="polite" className="mt-[20px]">
        {status === 'success' && (
          <p role="status" className="flex items-start gap-2 rounded-[14px] bg-[#e9f7ec] p-[14px] text-[16px] text-[#1e6b34]">
            <CheckCircle2 className="mt-[1px] size-[20px] shrink-0" aria-hidden />
            {form.success}
          </p>
        )}
        {status === 'error' && (
          <p role="alert" className="flex items-start gap-2 rounded-[14px] bg-[#fdecea] p-[14px] text-[16px] text-[#8c1d18]">
            <AlertCircle className="mt-[1px] size-[20px] shrink-0" aria-hidden />
            {error === 'not-configured' ? form.notConfigured : form.error}
          </p>
        )}
      </div>
    </form>
  );
}
