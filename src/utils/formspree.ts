/**
 * Minimal Formspree client.
 * Docs: https://help.formspree.io/hc/en-us/articles/360013470814-Submit-forms-with-JavaScript-AJAX
 *
 * Form IDs are public identifiers (they appear in any HTML form action), so it is
 * safe to expose them through VITE_ env vars. No API keys are used in the browser.
 */
export const FORMSPREE_CONTACT_ID = (import.meta.env.VITE_FORMSPREE_CONTACT_ID ?? '').trim();
export const FORMSPREE_NEWSLETTER_ID =
  (import.meta.env.VITE_FORMSPREE_NEWSLETTER_ID ?? '').trim() || FORMSPREE_CONTACT_ID;

export class FormNotConfiguredError extends Error {
  constructor() {
    super('Form endpoint is not configured');
    this.name = 'FormNotConfiguredError';
  }
}

export async function submitToFormspree(formId: string, data: Record<string, string | boolean>, signal?: AbortSignal) {
  if (!formId) throw new FormNotConfiguredError();

  const res = await fetch(`https://formspree.io/f/${encodeURIComponent(formId)}`, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    signal,
  });

  if (!res.ok) {
    let message = `Submission failed (${res.status})`;
    try {
      const body = (await res.json()) as { errors?: { message: string }[] };
      if (body.errors?.length) message = body.errors.map((e) => e.message).join(', ');
    } catch {
      /* ignore JSON parse errors */
    }
    throw new Error(message);
  }
}
