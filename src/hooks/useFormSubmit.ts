import { useCallback, useEffect, useRef, useState } from 'react';
import type { FormStatus } from '@/types';
import { FormNotConfiguredError, submitToFormspree } from '@/utils/formspree';

/**
 * Wraps a Formspree submission with a status machine and duplicate-submit guard.
 * The success state is only reached after Formspree returns 2xx.
 */
export function useFormSubmit(formId: string) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [error, setError] = useState<'not-configured' | 'failed' | null>(null);
  const inFlight = useRef(false);
  const controller = useRef<AbortController | null>(null);

  useEffect(() => () => controller.current?.abort(), []);

  const submit = useCallback(
    async (data: Record<string, string | boolean>) => {
      if (inFlight.current) return false; // duplicate-submission prevention
      inFlight.current = true;
      setStatus('submitting');
      setError(null);
      controller.current = new AbortController();
      try {
        await submitToFormspree(formId, data, controller.current.signal);
        setStatus('success');
        return true;
      } catch (err) {
        if ((err as Error).name === 'AbortError') return false;
        setError(err instanceof FormNotConfiguredError ? 'not-configured' : 'failed');
        setStatus('error');
        return false;
      } finally {
        inFlight.current = false;
      }
    },
    [formId],
  );

  const reset = useCallback(() => {
    setStatus('idle');
    setError(null);
  }, []);

  return { status, error, submit, reset, isConfigured: Boolean(formId) };
}
