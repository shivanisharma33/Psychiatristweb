import { emergencyText } from '@/content/services';

/** Dark "If you're experiencing an emergency…" band (reference: section-9). */
export function EmergencyBanner() {
  return (
    <section aria-label="Emergency help" className="bg-ink-900">
      <div className="mx-auto flex min-h-[400px] max-w-[1440px] items-center justify-center px-[20px] py-[80px] max-md:min-h-0">
        <p className="max-w-[1080px] text-center font-serif text-[42px] leading-[56.7px] tracking-[-0.02em] text-white text-balance max-md:text-[28px] max-md:leading-[38px]">
          {emergencyText}
        </p>
      </div>
    </section>
  );
}
