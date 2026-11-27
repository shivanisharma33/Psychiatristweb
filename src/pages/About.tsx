import {
  Award,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Clock,
  ExternalLink,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Users2,
  Activity,
  ArrowRight,
} from 'lucide-react';
import { Seo } from '@/components/common/Seo';
import { contact } from '@/content/site';
import { doctor } from '@/content/shared';
import { SmartImage } from '@/components/common/SmartImage';
import { Button } from '@/components/common/Button';
import { Reveal } from '@/components/common/Reveal';
import { Marquee } from '@/components/common/Marquee';

export default function About() {
  return (
    <>
      <Seo
        title="About Us | Dr. Abhinav Dhami & Ashok Hospital, Garhshankar"
        description="Learn about Dr. Abhinav Dhami, MD Psychiatry, and the distinguished family medical heritage of Ashok Hospital in Garhshankar, Punjab."
      />

      {/* ── 1. WARM EDITORIAL HERO SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#ff7f60] via-[#ff6b4a] to-[#ff5826] pb-[70px] pt-[50px] text-white md:pb-[90px] md:pt-[70px]">
        {/* Soft background ambient glows */}
        <div
          className="pointer-events-none absolute -left-[160px] -top-[100px] size-[400px] rounded-full bg-white/15 blur-[120px] max-md:hidden"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-[120px] top-[30%] size-[380px] rounded-full bg-black/10 blur-[130px] max-md:hidden"
          aria-hidden
        />

        <div className="relative mx-auto max-w-[1360px] px-[16px] sm:px-[20px]">
          {/* Top Heritage Badge */}
          <div className="mx-auto flex max-w-[960px] flex-col items-center text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[11px] font-semibold tracking-wider text-white backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-[13px]">
              <Sparkles className="size-3.5 text-[#ffe5a3] sm:size-4" />
              ESTABLISHED MEDICAL LEGACY · ASHOK HOSPITAL
            </span>

            {/* Main Headline with script accent */}
            <h1 className="mt-[18px] font-serif text-[36px] font-normal leading-[44px] tracking-[-0.025em] text-white sm:text-[48px] sm:leading-[56px] md:text-[60px] md:leading-[70px]">
              A generational legacy of healing,{' '}
              <span className="font-script block text-[46px] font-normal leading-tight text-[#ffe8d6] drop-shadow-sm sm:inline sm:text-[60px] md:text-[72px]">
                dedicated to the mind
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-[14px] max-w-[820px] text-[15.5px] leading-[24px] text-white/95 sm:text-[18px] sm:leading-[28px] md:text-[20px] md:leading-[32px]">
              Rooted in a family tradition of surgical and primary healthcare, Ashok Hospital has served families across Punjab for decades. Today, <strong>Dr. Abhinav Dhami (MD Psychiatry)</strong> advances this noble mission — bringing modern, compassionate, and evidence-based psychiatric care to everyone who walks through our doors.
            </p>

            {/* Quick Hero Trust Bar */}
            <div className="mt-[26px] flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-[12px] font-semibold text-white backdrop-blur-sm sm:px-4 sm:py-2 sm:text-[13.5px]">
                <span className="flex items-center text-[#ffe270]">
                  <Star className="size-3.5 fill-current sm:size-4" />
                  <Star className="size-3.5 fill-current sm:size-4" />
                  <Star className="size-3.5 fill-current sm:size-4" />
                  <Star className="size-3.5 fill-current sm:size-4" />
                  <Star className="size-3.5 fill-current sm:size-4" />
                </span>
                <span>4.2 / 5.0 (18+ Google Reviews)</span>
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-[12px] font-semibold text-white backdrop-blur-sm sm:px-4 sm:py-2 sm:text-[13.5px]">
                <Users2 className="size-3.5 text-[#ffe8d6] sm:size-4" />
                <span>Father Surgeon &amp; Mother General Doctor</span>
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-[12px] font-semibold text-white backdrop-blur-sm sm:px-4 sm:py-2 sm:text-[13.5px]">
                <ShieldCheck className="size-3.5 text-[#ffe8d6] sm:size-4" />
                <span>100% Confidential Consultations</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-[30px] flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <Button
                variant="pill"
                to="/contact?topic=booking#contact-form"
                className="w-full justify-center !border-white !bg-white !text-ink !shadow-xl hover:!bg-[#f7f7f7] sm:w-auto"
              >
                Book a Consultation
              </Button>
              <a
                href="#ashok-hospital-spotlight"
                className="inline-flex h-[48px] w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 text-[15px] font-medium text-white backdrop-blur-md transition-all hover:bg-white/20 sm:w-auto"
              >
                <Building2 className="size-4" />
                Hospital &amp; Location Details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. MARQUEE STRIP ── */}
      <section aria-label="Values ticker" className="border-y border-black/5 bg-[#faf7f2] py-[18px]">
        <Marquee
          items={[
            'Ashok Hospital Garhshankar',
            'Dr. Abhinav Dhami | MD Psychiatry',
            'Former Assistant Professor',
            'Dr. Ashok · Senior Surgeon',
            'Mother · General Doctor',
            '10 Years Clinical Experience',
            'Cognitive Optimization & Resilience',
            'Safe & Confidential Space',
          ]}
          speed={24}
        />
      </section>

      {/* ── 3. THREE PILLARS: THE FAMILY MEDICAL HERITAGE ── */}
      <section className="relative bg-[#fffdfa] py-[65px] md:py-[95px]">
        <div className="mx-auto max-w-[1320px] px-[16px] sm:px-[20px]">
          {/* Section Kicker & Title */}
          <Reveal className="mx-auto max-w-[800px] text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ff5826]/10 px-3 py-1 text-[12px] font-bold uppercase tracking-widest text-accent sm:text-[13px]">
              <Heart className="size-3.5" />
              Generations of Healthcare Excellence
            </span>
            <h2 className="mt-2.5 font-serif text-[30px] leading-[38px] tracking-[-0.02em] text-ink sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[58px]">
              Three Pillars of Care Under One Roof
            </h2>
            <p className="mt-3 text-[15px] leading-[24px] text-ink/75 sm:text-[17px] sm:leading-[27px]">
              Medicine was not simply a career path for Dr. Abhinav Dhami — it was the atmosphere he grew up in. Ashok Hospital stands today as a testament to surgical skill, compassionate family practice, and modern psychiatric healing.
            </p>
          </Reveal>

          {/* 3 Heritage Cards */}
          <div className="mt-[40px] grid gap-5 sm:gap-7 md:grid-cols-3 md:mt-[55px]">
            {/* 1. Dr. Ashok (Father - Surgeon) */}
            <Reveal delay={0.1}>
              <div className="group flex h-full flex-col justify-between rounded-[22px] border border-black/5 bg-white p-[24px] shadow-[0_8px_25px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] sm:rounded-[26px] sm:p-[32px]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-[#ff5826]/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white sm:size-14 sm:rounded-2xl">
                      <Stethoscope className="size-6 sm:size-7" />
                    </span>
                    <span className="rounded-full bg-sand-light/60 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-ink/70">
                      The Foundation
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-[23px] leading-[30px] text-ink sm:text-[26px] sm:leading-[32px]">
                    Dr. Ashok
                  </h3>
                  <p className="mt-1 text-[14px] font-semibold text-accent sm:text-[15px]">
                    Father · Senior Consultant Surgeon &amp; Founder
                  </p>

                  <p className="mt-3 text-[14.5px] leading-[23px] text-ink/75 sm:text-[15.5px] sm:leading-[25px]">
                    A revered surgical pioneer in Punjab, Dr. Ashok founded Ashok Hospital to provide high-precision surgical treatment and emergency care to Garhshankar and neighbouring regions. His decades of integrity and patient-first ethos laid the cornerstone of our institution.
                  </p>
                </div>

                <div className="mt-5 border-t border-black/5 pt-3.5">
                  <span className="text-[12.5px] font-medium text-ink/60">
                    Legacy: Surgical precision &amp; institutional trust
                  </span>
                </div>
              </div>
            </Reveal>

            {/* 2. Mother (General Doctor) */}
            <Reveal delay={0.2}>
              <div className="group flex h-full flex-col justify-between rounded-[22px] border border-black/5 bg-white p-[24px] shadow-[0_8px_25px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] sm:rounded-[26px] sm:p-[32px]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-[#ff5826]/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white sm:size-14 sm:rounded-2xl">
                      <Heart className="size-6 sm:size-7" />
                    </span>
                    <span className="rounded-full bg-sand-light/60 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-ink/70">
                      The Heart
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-[23px] leading-[30px] text-ink sm:text-[26px] sm:leading-[32px]">
                    Mother
                  </h3>
                  <p className="mt-1 text-[14px] font-semibold text-accent sm:text-[15px]">
                    Mother · Respected General Doctor &amp; Physician
                  </p>

                  <p className="mt-3 text-[14.5px] leading-[23px] text-ink/75 sm:text-[15.5px] sm:leading-[25px]">
                    Dedicated to primary family healthcare, Dr. Abhinav Dhami&apos;s mother has tended to thousands of households with warmth, holistic diagnostics, and maternal compassion. Her presence instilled an understanding that medicine is about caring for the whole person, not just a symptom.
                  </p>
                </div>

                <div className="mt-5 border-t border-black/5 pt-3.5">
                  <span className="text-[12.5px] font-medium text-ink/60">
                    Legacy: Empathetic primary care &amp; community bonds
                  </span>
                </div>
              </div>
            </Reveal>

            {/* 3. Dr. Abhinav Dhami (Psychiatrist) */}
            <Reveal delay={0.3}>
              <div className="group flex h-full flex-col justify-between rounded-[22px] border-2 border-accent/25 bg-gradient-to-b from-[#fffbf8] to-white p-[24px] shadow-[0_10px_30px_rgba(255,88,38,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(255,88,38,0.14)] sm:rounded-[26px] sm:p-[32px]">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="size-13 overflow-hidden rounded-2xl border-2 border-accent/40 shadow-sm transition-transform duration-300 group-hover:scale-105 sm:size-14">
                      <SmartImage
                        slot={doctor.photo}
                        sizes="56px"
                      />
                    </div>
                    <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-accent">
                      Modern Psychiatry
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-[23px] leading-[30px] text-ink sm:text-[26px] sm:leading-[32px]">
                    Dr. Abhinav Dhami
                  </h3>
                  <p className="mt-1 text-[14px] font-semibold text-accent sm:text-[15px]">
                    Son · MD Psychiatry · Former Assistant Professor
                  </p>

                  <p className="mt-3 text-[14.5px] leading-[23px] text-ink/75 sm:text-[15.5px] sm:leading-[25px]">
                    Dr. Abhinav Dhami is a psychiatrist with 10 years of clinical experience in mental health and psychiatry. Having previously served as an Assistant Professor, he brings clinical experience and a commitment to evidence-based psychiatric care.
                  </p>
                </div>

                <div className="mt-5 border-t border-black/5 pt-3.5">
                  <span className="text-[12.5px] font-medium text-accent">
                    Mission: Evidence-based care &amp; cognitive optimization
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Personal Quote Banner */}
          <Reveal delay={0.2} className="mt-[36px] sm:mt-[50px]">
            <div className="relative overflow-hidden rounded-[22px] bg-[#1a1a1a] p-[24px] text-white shadow-xl sm:rounded-[26px] sm:p-[40px]">
              <div className="pointer-events-none absolute -right-[80px] -top-[80px] size-[250px] rounded-full bg-accent/20 blur-[80px] max-md:hidden" />
              <div className="relative max-w-[1000px]">
                <p className="font-serif text-[17px] font-normal italic leading-[27px] text-white/90 sm:text-[21px] sm:leading-[32px] md:text-[24px] md:leading-[36px]">
                  &ldquo;Growing up in a home where my father was in surgery and my mother was seeing families in general medicine, healing was our daily conversation. Choosing psychiatry wasn&apos;t a departure from our family tradition — it was its natural completion. True wellness requires healing both the body and the mind.&rdquo;
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
                  <div className="size-2 rounded-full bg-accent" />
                  <span className="font-sans text-[14px] font-semibold tracking-wide text-white sm:text-[15px]">
                    Dr. Abhinav Dhami, MD Psychiatry
                  </span>
                  <span className="text-[13px] text-white/60 sm:text-[14px]">· Ashok Hospital, Garhshankar</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4. ASHOK HOSPITAL SPOTLIGHT (GOOGLE PROFILE & CLINIC SHOWCASE) ── */}
      <section
        id="ashok-hospital-spotlight"
        className="relative overflow-hidden bg-sand-light/40 py-[65px] md:py-[95px]"
      >
        <div className="mx-auto max-w-[1320px] px-[16px] sm:px-[20px]">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 items-center">
            {/* Left Column: Doctor Profile & Qualifications */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="overflow-hidden rounded-[24px] bg-white p-[24px] shadow-[0_12px_35px_rgba(0,0,0,0.06)] sm:rounded-[28px] sm:p-[32px]">
                  <div className="relative mx-auto size-[180px] overflow-hidden rounded-full border-4 border-sand-light shadow-md sm:size-[220px]">
                    <SmartImage
                      slot={doctor.photo}
                      className="transition-transform duration-700 hover:scale-105"
                      sizes="220px"
                    />
                  </div>

                  <div className="mt-5 text-center">
                    <h3 className="font-serif text-[26px] font-semibold text-ink sm:text-[30px]">
                      Dr. Abhinav Dhami
                    </h3>
                    <p className="mt-1 text-[15px] font-semibold text-accent sm:text-[16px]">
                      MD Psychiatry
                    </p>
                    <p className="mt-0.5 text-[13.5px] text-ink/65">
                      Psychiatrist &amp; Former Assistant Professor · Ashok Hospital
                    </p>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2 border-y border-black/5 py-4 text-center">
                    <div>
                      <span className="block font-serif text-[24px] font-bold text-ink sm:text-[28px]">10</span>
                      <span className="text-[11px] uppercase tracking-wider text-ink/60 sm:text-[12px]">Years Clinical Exp.</span>
                    </div>
                    <div>
                      <span className="block font-serif text-[24px] font-bold text-accent sm:text-[28px]">100%</span>
                      <span className="text-[11px] uppercase tracking-wider text-ink/60 sm:text-[12px]">Private &amp; Discreet</span>
                    </div>
                  </div>

                  <div className="mt-5 space-y-2 text-[13.5px] text-ink/80 sm:text-[14px]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 shrink-0 text-accent" />
                      <span>Evidence-Based Psychiatric Treatment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 shrink-0 text-accent" />
                      <span>Cognitive Optimization &amp; Resilience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 shrink-0 text-accent" />
                      <span>Depression, Anxiety &amp; Mood Health</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 shrink-0 text-accent" />
                      <span>ADHD, OCD &amp; Psychological Performance</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      variant="pill"
                      to="/contact?topic=booking#contact-form"
                      className="w-full justify-center !border-accent !bg-accent text-white hover:!bg-[#e94a1b]"
                    >
                      Book Consultation with Dr. Abhinav Dhami
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Ashok Hospital Verified Card (Replicating and Enhancing Google Profile) */}
            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <div className="rounded-[24px] border border-black/10 bg-white p-[22px] shadow-[0_16px_40px_rgba(0,0,0,0.06)] sm:rounded-[30px] sm:p-[36px]">
                  {/* Google Reviews Header Card */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/5 pb-5">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-[#2563eb]/10 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#2563eb]">
                          Verified Facility
                        </span>
                        <span className="text-[12px] text-ink/50">Google Profile</span>
                      </div>
                      <h3 className="mt-1 font-serif text-[26px] font-semibold text-ink sm:text-[32px]">
                        Ashok Hospital
                      </h3>
                      <p className="text-[13.5px] font-medium text-ink/65 sm:text-[15px]">
                        Psychiatric &amp; Multispecialty Hospital in Garhshankar, Punjab
                      </p>
                    </div>

                    {/* Google Rating Badge */}
                    <div className="rounded-xl border border-black/5 bg-[#faf8f5] p-2.5 text-center sm:rounded-2xl sm:p-3.5">
                      <div className="flex items-center justify-center gap-1.5">
                        <span className="font-serif text-[22px] font-bold text-ink sm:text-[26px]">4.2</span>
                        <div className="flex text-[#f59e0b]">
                          <Star className="size-3.5 fill-current sm:size-4" />
                          <Star className="size-3.5 fill-current sm:size-4" />
                          <Star className="size-3.5 fill-current sm:size-4" />
                          <Star className="size-3.5 fill-current sm:size-4" />
                          <Star className="size-3.5 fill-current sm:size-4 opacity-60" />
                        </div>
                      </div>
                      <span className="mt-0.5 block text-[11px] font-semibold text-ink/60 sm:text-[12px]">
                        18 Google reviews
                      </span>
                    </div>
                  </div>

                  {/* Doctor Bio Highlight */}
                  <div className="mt-5 space-y-3 rounded-2xl bg-[#faf8f5] p-4 text-[14px] leading-[23px] text-ink/80 border border-black/5 sm:p-5 sm:text-[15px] sm:leading-[25px]">
                    <p>
                      <strong>Dr. Abhinav Dhami</strong> is a psychiatrist with 10 years of clinical experience in mental health and psychiatry. Having previously served as an Assistant Professor, he brings clinical experience and a commitment to evidence-based psychiatric care.
                    </p>
                    <p>
                      His approach combines evidence-based treatment, compassionate care and a deeper understanding of the complexities of the human mind. Beyond the treatment of psychiatric disorders, he is also interested in cognitive optimization, emotional resilience and enhancing overall psychological performance.
                    </p>
                    <p>
                      Dr. Dhami believes in helping individuals not only overcome mental health challenges, but also develop greater clarity, emotional balance, resilience and the mental capacity to navigate life more effectively. His approach emphasizes personalized care, scientific evidence and a judgement-free environment where patients feel heard and understood.
                    </p>
                  </div>

                  {/* Contact & Location Details */}
                  <div className="mt-5 space-y-4 sm:space-y-5">
                    {/* Address Line */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent sm:size-11">
                        <MapPin className="size-4.5 sm:size-5" />
                      </div>
                      <div>
                        <span className="block text-[12px] font-bold uppercase tracking-wider text-ink/50">
                          Hospital Address
                        </span>
                        <p className="mt-0.5 text-[15.5px] font-semibold text-ink sm:text-[17px]">
                          Near Civil Hospital, Garhshankar, Punjab 144527
                        </p>
                        <p className="text-[13px] text-ink/60 sm:text-[14px]">
                          Accessible location with dedicated patient parking and quiet consultation rooms.
                        </p>
                      </div>
                    </div>

                    {/* Mobile Line */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#2563eb]/10 text-[#2563eb] sm:size-11">
                        <Phone className="size-4.5 sm:size-5" />
                      </div>
                      <div className="flex-1">
                        <span className="block text-[12px] font-bold uppercase tracking-wider text-ink/50">
                          Appointments &amp; Doctor Mobile
                        </span>
                        <a
                          href={`tel:${contact.phoneE164}`}
                          className="mt-0.5 block text-[18px] font-bold text-ink hover:text-accent sm:text-[20px]"
                        >
                          {contact.phoneDisplay}
                        </a>
                        <span className="text-[12.5px] text-ink/60">
                          Direct line for psychiatric consultations and evaluations
                        </span>
                      </div>
                    </div>

                    {/* Hospital Landline / Reception */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent sm:size-11">
                        <Building2 className="size-4.5 sm:size-5" />
                      </div>
                      <div className="flex-1">
                        <span className="block text-[12px] font-bold uppercase tracking-wider text-ink/50">
                          Hospital Reception &amp; Helpdesk
                        </span>
                        <a
                          href={`tel:${contact.hospitalPhoneE164}`}
                          className="mt-0.5 block text-[17px] font-bold text-ink hover:text-accent sm:text-[18px]"
                        >
                          {contact.hospitalPhoneDisplay}
                        </a>
                        <span className="text-[12.5px] text-ink/60">
                          Hospital front desk, general queries and records
                        </span>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 sm:size-11">
                        <Clock className="size-4.5 sm:size-5" />
                      </div>
                      <div>
                        <span className="block text-[12px] font-bold uppercase tracking-wider text-ink/50">
                          Working Hours
                        </span>
                        <p className="mt-0.5 text-[14.5px] font-medium text-ink sm:text-[15.5px]">
                          <strong className="text-emerald-700">Open</strong> · Closes 7:00 PM (Monday – Saturday)
                        </p>
                        <p className="text-[12.5px] text-ink/60 sm:text-[13.5px]">
                          Psychiatric Consultations: 10:00 AM – 5:00 PM (Prior appointment recommended)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Action Bar */}
                  <div className="mt-6 flex flex-col gap-2.5 border-t border-black/5 pt-5 sm:flex-row sm:flex-wrap sm:gap-3">
                    <a
                      href={contact.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#1e293b] px-5 text-[14px] font-semibold text-white shadow-sm transition-all hover:bg-black sm:w-auto"
                    >
                      <MapPin className="size-4 text-accent" />
                      Get Directions
                      <ExternalLink className="size-3.5 opacity-70" />
                    </a>

                    <a
                      href={`tel:${contact.phoneE164}`}
                      className="inline-flex h-[44px] w-full items-center justify-center gap-2 rounded-full border border-black/15 bg-white px-5 text-[14px] font-semibold text-ink transition-colors hover:bg-black/5 sm:w-auto"
                    >
                      <Phone className="size-4 text-accent" />
                      Call {contact.phoneDisplay}
                    </a>

                    <a
                      href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hello Dr. Abhinav Dhami, I would like to enquire about an appointment at Ashok Hospital.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-[44px] w-full items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 px-5 text-[14px] font-semibold text-emerald-700 transition-colors hover:bg-emerald-100 sm:w-auto"
                    >
                      <MessageCircle className="size-4" />
                      WhatsApp Enquiries
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. WHY FAMILIES TRUST US (CORE VALUES) ── */}
      <section className="bg-white py-[65px] md:py-[95px]">
        <div className="mx-auto max-w-[1320px] px-[16px] sm:px-[20px]">
          <Reveal className="mx-auto max-w-[760px] text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ff5826]/10 px-3 py-1 text-[12px] font-bold uppercase tracking-widest text-accent sm:text-[13px]">
              <Award className="size-3.5" />
              Patient-Centred Philosophy
            </span>
            <h2 className="mt-2.5 font-serif text-[30px] leading-[38px] tracking-[-0.02em] text-ink sm:text-[38px] sm:leading-[46px] md:text-[44px] md:leading-[54px]">
              Why Families Throughout Punjab Choose Us
            </h2>
            <p className="mt-2.5 text-[15px] leading-[24px] text-ink/70 sm:text-[17px] sm:leading-[27px]">
              We eliminate the fear, clinical coldness, and stigma surrounding psychiatric health. Here is our pledge to you.
            </p>
          </Reveal>

          <div className="mt-[40px] grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 md:mt-[50px]">
            {[
              {
                icon: ShieldCheck,
                title: 'Strict Confidentiality',
                desc: 'Your consultation, symptoms, and medical notes are protected by strict doctor-patient privilege. Nothing is shared without your consent.',
              },
              {
                icon: Heart,
                title: 'No Judgement or Stigma',
                desc: 'Whether you are experiencing panic, burnout, sadness, or obsessive thoughts, you will find respect, warmth, and validation.',
              },
              {
                icon: Stethoscope,
                title: 'Dual Medical & Therapeutic Approach',
                desc: 'As an MD Psychiatrist, Dr. Abhinav Dhami examines both brain biochemistry and life stressors — prescribing medication only when truly beneficial.',
              },
              {
                icon: Users2,
                title: 'Compassionate Family Guidance',
                desc: 'We support caregivers and family members, providing psychoeducation so you never have to navigate a loved one’s illness alone.',
              },
              {
                icon: Building2,
                title: 'Established Hospital Infrastructure',
                desc: 'Ashok Hospital provides dedicated consultation chambers, pharmacy support, and trusted referral networks under one reliable roof.',
              },
              {
                icon: Activity,
                title: 'Continuity of Care',
                desc: 'You are not a case file. You consult the same experienced doctor at every follow-up, ensuring steady and monitored progress.',
              },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={idx * 0.05}>
                  <div className="group h-full rounded-[20px] border border-black/5 bg-[#faf8f5] p-[22px] transition-all duration-300 hover:border-accent/20 hover:bg-white hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1 sm:rounded-[24px] sm:p-[28px]">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-white text-accent shadow-sm transition-colors group-hover:bg-accent group-hover:text-white sm:size-12 sm:rounded-2xl">
                      <Icon className="size-5 sm:size-6" />
                    </span>
                    <h3 className="mt-4 font-serif text-[20px] leading-[26px] text-ink sm:text-[22px] sm:leading-[28px]">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[22px] text-ink/70 sm:text-[15px] sm:leading-[24px]">
                      {card.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. STEP-BY-STEP CONSULTATION JOURNEY ── */}
      <section className="bg-sand-light/30 py-[65px] md:py-[90px]">
        <div className="mx-auto max-w-[1240px] px-[16px] sm:px-[20px]">
          <Reveal className="mx-auto max-w-[700px] text-center">
            <h2 className="font-serif text-[30px] leading-[38px] tracking-[-0.02em] text-ink sm:text-[36px] sm:leading-[44px] md:text-[42px] md:leading-[50px]">
              What to Expect on Your First Visit
            </h2>
            <p className="mt-2.5 text-[15px] leading-[24px] text-ink/70 sm:text-[17px] sm:leading-[26px]">
              Stepping into psychiatric care should never feel intimidating. Here is how your journey unfolds.
            </p>
          </Reveal>

          <div className="mt-[40px] grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 md:mt-[50px]">
            {[
              {
                step: '01',
                title: 'Effortless Appointment',
                desc: 'Call +91 99968 42994 or message us on WhatsApp. Pick a comfortable consultation slot at Ashok Hospital.',
              },
              {
                step: '02',
                title: 'Comfortable Evaluation',
                desc: 'A relaxed, confidential 40–50 minute conversation with Dr. Abhinav Dhami. Speak openly about what you are going through.',
              },
              {
                step: '03',
                title: 'Clear Care Strategy',
                desc: 'Receive an accurate clinical assessment, lifestyle recommendations, and evidence-based medication if appropriate.',
              },
              {
                step: '04',
                title: 'Dedicated Follow-Up',
                desc: 'Structured check-ins to monitor symptom recovery, adjust dosages, and ensure long-term emotional well-being.',
              },
            ].map((step, idx) => (
              <Reveal key={step.step} delay={idx * 0.08}>
                <div className="h-full rounded-[20px] border border-black/5 bg-white p-[22px] shadow-sm transition-all duration-300 hover:shadow-md sm:rounded-[22px] sm:p-[26px]">
                  <span className="font-serif text-[28px] font-bold text-accent/80 sm:text-[32px]">
                    {step.step}
                  </span>
                  <h3 className="mt-1.5 font-serif text-[18px] font-semibold text-ink sm:text-[20px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-[21px] text-ink/70 sm:text-[14.5px] sm:leading-[22px]">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. BOTTOM ENGAGING CALL TO ACTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#ff7f60] via-[#ff6b4a] to-[#ff5826] py-[65px] text-white md:py-[90px]">
        <div className="pointer-events-none absolute -bottom-[120px] -left-[100px] size-[300px] rounded-full bg-black/10 blur-[80px] max-md:hidden" />
        <div className="pointer-events-none absolute -top-[100px] -right-[80px] size-[300px] rounded-full bg-white/15 blur-[80px] max-md:hidden" />

        <div className="relative mx-auto max-w-[920px] px-[16px] text-center sm:px-[20px]">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-[13px]">
              <CalendarCheck className="size-3.5 sm:size-4" />
              WE ARE HERE FOR YOU
            </span>

            <h2 className="mt-3.5 font-serif text-[32px] leading-[40px] tracking-[-0.02em] text-white sm:text-[42px] sm:leading-[50px] md:text-[50px] md:leading-[60px]">
              Take the first step toward lasting peace of mind
            </h2>

            <p className="mx-auto mt-3.5 max-w-[680px] text-[15.5px] leading-[25px] text-white/95 sm:text-[18px] sm:leading-[28px] md:text-[19px] md:leading-[29px]">
              Consult Dr. Abhinav Dhami at Ashok Hospital, Garhshankar. Reaching out is completely private, compassionate, and judgement-free.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button
                variant="pill"
                to="/contact?topic=booking#contact-form"
                className="w-full justify-center !border-white !bg-white !text-ink !shadow-lg hover:!bg-[#f7f7f7] sm:w-auto"
              >
                Book Your Appointment <ArrowRight className="size-4" />
              </Button>

              <a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hello Dr. Abhinav Dhami, I would like to book a consultation at Ashok Hospital.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[48px] w-full items-center justify-center gap-2 rounded-full border border-white/50 bg-white/10 px-6 text-[15px] font-medium text-white backdrop-blur-md transition-all hover:bg-white/20 sm:w-auto"
              >
                <MessageCircle className="size-4.5" /> Chat on WhatsApp
              </a>

              <a
                href={`tel:${contact.phoneE164}`}
                className="inline-flex h-[48px] w-full items-center justify-center gap-2 rounded-full border border-white/50 bg-white/10 px-6 text-[15px] font-medium text-white backdrop-blur-md transition-all hover:bg-white/20 sm:w-auto"
              >
                <Phone className="size-4" /> Call {contact.phoneDisplay}
              </a>
            </div>

            <div className="mt-7 border-t border-white/20 pt-5 text-[13.5px] leading-[22px] text-white/90 sm:text-[14.5px]">
              📍 <strong>Ashok Hospital</strong> · Near Civil Hospital, Garhshankar, Punjab 144527 · 📞 {contact.phoneDisplay} / 098140 73717
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
