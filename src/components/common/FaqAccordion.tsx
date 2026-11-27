import { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Plus } from 'lucide-react';
import type { Faq } from '@/types';
import { cn } from '@/utils/cn';

export function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();
  const reduce = useReducedMotion();

  return (
    <div className="mx-auto w-full max-w-[1018px]">
      {items.map((f, i) => {
        const isOpen = open === i;
        const btnId = `${baseId}-q-${i}`;
        const panelId = `${baseId}-a-${i}`;
        return (
          <div key={f.question} className="border-b border-faq-line">
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-6 py-[30px] text-left max-md:py-[22px]"
              >
                <span className="text-[24px] font-semibold leading-[31.2px] tracking-[-0.72px] text-[#1a1a1a] max-md:text-[19px] max-md:leading-[25px]">
                  {f.question}
                  {f.emoji && <span className="ml-2 inline-block">{f.emoji}</span>}
                </span>
                <span
                  className={cn(
                    'grid size-[55px] shrink-0 place-items-center rounded-full bg-faq-btn transition-[background-color,transform] duration-300 group-hover:bg-[#e8e8e8] max-md:size-[44px]',
                    isOpen && 'rotate-45',
                  )}
                  aria-hidden
                >
                  <Plus className="size-[22px]" strokeWidth={1.6} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-[30px] pr-[80px] text-[20px] leading-[32px] tracking-[-0.6px] text-slate-faq max-md:pr-0 max-md:text-[17px] max-md:leading-[27px]">
                    {f.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
