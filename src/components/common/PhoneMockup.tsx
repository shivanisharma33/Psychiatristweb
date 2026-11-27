import type { ReactNode } from 'react';
import { CalendarCheck, ClipboardList, Clock, MapPin, MessageCircle, Pill, User, Video } from 'lucide-react';
import { Wordmark } from './Wordmark';
import { cn } from '@/utils/cn';

export type PhoneScreen = 'intake' | 'call' | 'plan' | 'chat' | 'tasks' | 'progress' | 'group';

/**
 * CSS phone mock-up (228×475 design size) — stands in for the reference's app
 * screenshots, showing illustrative UI for a therapy practice.
 */
export function PhoneMockup({ screen, className }: { screen: PhoneScreen; className?: string }) {
  return (
    <div
      className={cn(
        'relative h-[475px] w-[228px] rounded-[34px] bg-[#141414] p-[10px] shadow-[0_18px_30px_-12px_rgba(0,0,0,0.45)]',
        className,
      )}
      aria-hidden
    >
      <div className="relative h-full w-full overflow-hidden rounded-[26px] bg-white">
        <div className="absolute left-1/2 top-0 z-10 h-[22px] w-[112px] -translate-x-1/2 rounded-b-[14px] bg-[#141414]">
          <span className="absolute left-[38px] top-[8px] h-[3px] w-[26px] rounded bg-[#333]" />
          <span className="absolute left-[72px] top-[7px] size-[5px] rounded-full bg-[#333]" />
        </div>
        <div className="flex h-full flex-col pt-[36px] text-[#1b1b1b]">
          <div className="h-[2px] w-full bg-accent" />
          <div className="flex-1 px-[12px] pt-[14px]">{screens[screen]}</div>
        </div>
      </div>
    </div>
  );
}

const Label = ({ children }: { children: ReactNode }) => (
  <p className="text-[8px] font-semibold uppercase tracking-wide text-[#1b1b1b]">{children}</p>
);

const screens: Record<PhoneScreen, ReactNode> = {
  intake: (
    <div>
      <div className="mb-3 flex items-center gap-2 text-[9px]">
        <span>←</span>
        <Wordmark className="!text-[9px]" />
      </div>
      <div className="mx-auto mb-3 grid size-[46px] place-items-center rounded-full bg-[#f6c343]">
        <User className="size-6 text-[#7a4a1d]" />
      </div>
      <p className="mb-2 text-[9px] font-semibold leading-tight">What would you like support with?</p>
      {['Stress or anxiety', 'Low mood', 'Relationships', 'Something else'].map((o) => (
        <div key={o} className="mb-[6px] flex items-center gap-2 text-[8px]">
          <span className="size-[9px] rounded-full border border-[#bbb]" />
          {o}
        </div>
      ))}
    </div>
  ),
  call: (
    <div className="relative h-full">
      <div className="absolute right-0 top-0 grid h-[40px] w-[30px] place-items-end rounded bg-[#f6c343] p-1">
        <User className="size-4 text-[#7a4a1d]" />
      </div>
      <div className="absolute inset-x-0 bottom-[30px] mx-auto grid size-[110px] place-items-center rounded-full bg-[#ffe1d4]">
        <User className="size-16 text-[#c8573a]" strokeWidth={1.25} />
      </div>
      <div className="absolute inset-x-0 bottom-[6px] flex justify-center gap-2">
        <span className="grid size-[18px] place-items-center rounded-full bg-[#eee]"><Video className="size-[10px]" /></span>
        <span className="grid size-[18px] place-items-center rounded-full bg-accent text-white">×</span>
      </div>
    </div>
  ),
  plan: (
    <div>
      <p className="mb-3 text-[10px] font-semibold">Your care plan</p>
      {[
        ['Weekly therapy', 'Thursdays · 6:00 pm'],
        ['Mood check-in', 'Every evening'],
        ['Breathing practice', '5 mins · daily'],
      ].map(([t, s]) => (
        <div key={t} className="mb-2 rounded-md bg-[#fbeee6] p-2">
          <p className="text-[8px] font-semibold">{t}</p>
          <p className="text-[7px] text-[#7d6f69]">{s}</p>
        </div>
      ))}
    </div>
  ),
  chat: (
    <div className="flex flex-col gap-2 text-[8px]">
      <p className="mb-1 text-[10px] font-semibold">Care team</p>
      <span className="self-start rounded-lg rounded-bl-none bg-[#f1f1f1] px-2 py-1">How did this week go?</span>
      <span className="self-end rounded-lg rounded-br-none bg-accent px-2 py-1 text-white">Better, the journalling helped!</span>
      <span className="self-start rounded-lg rounded-bl-none bg-[#f1f1f1] px-2 py-1">Lovely to hear 😊</span>
      <div className="mt-2 flex items-center gap-1 rounded-full border border-[#ddd] px-2 py-1 text-[#999]">
        <MessageCircle className="size-[10px]" /> Message…
      </div>
    </div>
  ),
  tasks: (
    <div>
      <p className="mb-3 text-[10px] font-semibold">Tasks &amp; Appointments</p>
      <Label>Tasks</Label>
      {[
        [ClipboardList, 'Schedule session with your therapist'],
        [Clock, 'Complete your monthly check-in'],
        [Pill, 'Review your care plan'],
      ].map(([Icon, t], i) => {
        const I = Icon as typeof Clock;
        return (
          <div key={i} className="my-[7px] flex items-center gap-2 rounded bg-[#fbeee6] p-[8px] shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
            <I className="size-[16px] shrink-0 text-accent" strokeWidth={1.5} />
            <span className="text-[7.5px] font-medium leading-tight">{t as string}</span>
          </div>
        );
      })}
      <div className="mt-3">
        <Label>Appointments</Label>
      </div>
      <div className="mt-[6px] rounded bg-[#ffab91] p-[10px] text-[7.5px] text-[#a8401f]">
        <p className="text-white/90">Scheduled on</p>
        <p className="mt-1 font-medium">July 5th · 11:00 – 11:50 am</p>
      </div>
    </div>
  ),
  progress: (
    <div>
      <p className="mb-3 text-[10px] font-semibold">Check-in Results</p>
      <div className="mb-4 flex gap-2 text-[7px]">
        <span className="rounded bg-[#ffab91] px-2 py-1 text-white">Mood</span>
        <span className="px-1 py-1">Anxiety</span>
        <span className="px-1 py-1">Sleep</span>
      </div>
      <div className="mb-2 flex justify-between text-[7.5px] font-semibold">
        <span>Current Score</span>
        <span>5/24</span>
      </div>
      <svg viewBox="0 0 180 70" className="h-[70px] w-full" aria-hidden>
        <path d="M2 60 C 30 55, 40 20, 70 22 S 110 50, 130 40 S 160 55, 176 52" fill="none" stroke="#ff8a6a" strokeWidth="1.5" />
        <circle cx="176" cy="52" r="4" fill="white" stroke="#ff5826" strokeWidth="1.5" />
      </svg>
      <div className="mt-1 flex justify-between text-[6px] text-[#555]">
        {['May', 'June', 'July', 'Aug', 'Sep'].map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-2 rounded bg-[#cfe0fb] p-2">
        <span className="grid size-[22px] shrink-0 place-items-center rounded-full bg-[#f6c343]">
          <User className="size-3 text-[#7a4a1d]" />
        </span>
        <div>
          <p className="text-[7px] font-medium text-[#2563eb]">Don&apos;t forget to complete your tasks</p>
          <span className="mt-1 inline-block rounded bg-accent px-2 py-[2px] text-[6px] text-white">See Tasks</span>
        </div>
      </div>
    </div>
  ),
  group: (
    <div>
      <p className="text-[9px] font-semibold leading-tight text-accent">Community Circle: Coping with Stress</p>
      <p className="mb-3 mt-1 text-[6.5px] text-[#888]">Thursday · 7 pm</p>
      <div className="mx-auto mb-3 size-[84px] rounded-full bg-[conic-gradient(#ff5826,#f6c343,#4fce5d,#3b82f6,#a855f7,#ff5826)] p-[6px]">
        <div className="grid h-full w-full place-items-center rounded-full bg-[#3b2620]">
          <User className="size-9 text-[#e9a27f]" strokeWidth={1.25} />
        </div>
      </div>
      <span className="mb-3 inline-block rounded border border-accent px-2 py-[3px] text-[6.5px] text-accent">Anonymous Group Session</span>
      {[
        [Clock, 'Duration - 1 Hour'],
        [MapPin, 'Link will be provided'],
        [CalendarCheck, 'Hosted by a psychologist'],
      ].map(([Icon, t], i) => {
        const I = Icon as typeof Clock;
        return (
          <p key={i} className="mb-[5px] flex items-center gap-2 text-[7px]">
            <I className="size-[9px]" /> {t as string}
          </p>
        );
      })}
      <div className="mt-4 rounded bg-accent py-[6px] text-center text-[7px] text-white">Register</div>
    </div>
  ),
};
