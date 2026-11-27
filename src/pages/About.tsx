import {
  Building2,
  CalendarCheck,
  CheckCircle2,
  Clock,
  ExternalLink,
  GraduationCap,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users2,
} from 'lucide-react';
import { Seo } from '@/components/common/Seo';
import { contact } from '@/content/site';
import { doctor } from '@/content/shared';
import { SmartImage } from '@/components/common/SmartImage';
import { Button } from '@/components/common/Button';
import { Reveal } from '@/components/common/Reveal';
import { Marquee } from '@/components/common/Marquee';
import { ScrollArrow } from '@/components/sections/about/ScrollArrow';

export default function About() {
  return (
    <>
      <Seo
        title="About Us | Dr. Abhinav & Ashok Hospital, Garhshankar"
        description="Learn about Dr. Abhinav, Consultant Psychiatrist, and the proud medical family heritage behind Ashok Hospital in Garhshankar, Punjab."
      />

      {/* ── 1. HERO STORY SECTION (Deep Royal Blue) ── */}
      <section className="relative overflow-hidden bg-about-blue pb-[100px] pt-[70px] text-white">
        {/* Soft atmospheric gradient accents */}
        <div className="pointer-events-none absolute -left-[200px] -top-[100px] size-[550px] rounded-full bg-white/10 blur-[130px]" aria-hidden />
        <div className="pointer-events-none absolute -right-[150px] top-[40%] size-[500px] rounded-full bg-[#ff5826]/15 blur-[140px]" aria-hidden />

        <div className="mx-auto max-w-[1440px] px-[20px]">
          {/* Main Hero Header */}
          <div className="mx-auto max-w-[840px] text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[14px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
              <Sparkles className="size-4 text-[#fea875]" />
              Our Story &amp; Purpose
            </span>
            <h1 className="mt-[20px] font-serif text-[56px] leading-[66px] tracking-[-0.02em] text-white max-md:text-[38px] max-md:leading-[46px]">
              Why isn&apos;t it normal to talk about how you feel?
            </h1>
            <p className="mt-[16px] text-[20px] leading-[30px] text-white/80 max-md:text-[17px] max-md:leading-[26px]">
              Mental healthcare shouldn&apos;t be intimidating, clinical, or laden with stigma. We are building a warmer, human-first space where asking for guidance is as natural as seeing a doctor for physical health.
            </p>
          </div>

          {/* Interactive Question Cards with Drawn Looping Arrows */}
          <div className="relative mx-auto mt-[80px] max-w-[980px]">
            {[
              {
                q: 'Why is accessing help still such a taboo?',
                desc: 'Millions suffer silently because seeking psychological support is misunderstood.',
                flip: false,
                align: 'self-start',
              },
              {
                q: "Why isn't there a friendlier way to get treated?",
                desc: 'Care should feel compassionate, warm, and supportive from the very first hello.',
                flip: true,
                align: 'self-end',
              },
              {
                q: "Why shouldn't psychiatric care be easy to reach?",
                desc: 'In an interconnected world, high-quality professional care belongs close to home.',
                flip: false,
                align: 'self-start',
              },
            ].map((item, idx) => (
              <div key={item.q} className="relative flex flex-col items-center py-[20px]">
                {/* Arrow drawing down as you scroll */}
                <div
                  className="my-[-20px] flex justify-center"
                  style={{
                    alignSelf: item.flip ? 'flex-end' : 'flex-start',
                    marginRight: item.flip ? '15%' : 'auto',
                    marginLeft: item.flip ? 'auto' : '15%',
                  }}
                >
                  <ScrollArrow flipX={item.flip} />
                </div>

                {/* White Question Box */}
                <Reveal delay={idx * 0.1} className="w-full max-w-[620px]">
                  <div className="group rounded-[20px] bg-white p-[26px] text-ink shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:scale-[1.02] max-md:p-[20px]">
                    <div className="flex items-start gap-4">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/10 font-bold text-accent">
                        0{idx + 1}
                      </span>
                      <div>
                        <h2 className="font-serif text-[24px] leading-[32px] text-ink max-md:text-[20px] max-md:leading-[28px]">
                          {item.q}
                        </h2>
                        <p className="mt-2 text-[15.5px] leading-[23px] text-ink/70">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>

          {/* Core Values Strip */}
          <div className="mx-auto mt-[80px] flex max-w-[900px] flex-wrap justify-center gap-3">
            {[
              "Care that's friendlier",
              "Care that's human first",
              "Judgement free space",
              'No therapist shopping',
              'Without stigma',
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/10 px-5 py-2 text-[15px] font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                ✓ {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. MARQUEE BANNER ── */}
      <section aria-label="End the stigma" className="border-y border-black/5 bg-white py-[40px]">
        <Marquee items={['End The Stigma', 'Normalise Seeking Help', 'Safe & Confidential', 'Dr. Abhinav', 'Ashok Hospital']} speed={24} />
      </section>

      {/* ── 3. DOCTOR & FAMILY LEGACY HERO SHOWCASE ── */}
      <section id="about-doctor" aria-labelledby="doctor-profile-title" className="relative overflow-hidden bg-cream py-[110px] max-md:py-[70px]">
        <div className="mx-auto max-w-[1320px] px-[20px]">
          {/* Section Kicker */}
          <Reveal className="mx-auto max-w-[760px] text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ff5826]/10 px-4 py-1 text-[13px] font-bold tracking-widest uppercase text-accent">
              <Stethoscope className="size-4" />
              Meet Your Consultant
            </span>
            <h2
              id="doctor-profile-title"
              className="mt-3 font-serif text-[50px] leading-[60px] tracking-[-0.02em] text-ink max-md:text-[34px] max-md:leading-[42px]"
            >
              Dr. Abhinav
            </h2>
            <p className="mx-auto mt-3 max-w-[600px] text-[18.5px] leading-[28px] text-ink/70 max-md:text-[16px]">
              MBBS, MD (Psychiatry) · Consultant Psychiatrist at Ashok Hospital, Garhshankar
            </p>
          </Reveal>

          {/* Main Showcase Card */}
          <div className="mt-[60px] grid gap-8 lg:grid-cols-[400px_1fr] items-stretch">
            {/* Left Card: Doctor Visual & Direct Connect */}
            <Reveal className="flex flex-col justify-between overflow-hidden rounded-[28px] bg-[#141414] p-[36px] text-white shadow-[0_20px_50px_rgba(0,0,0,0.14)] max-md:p-[26px]">
              <div>
                <div className="relative mx-auto size-[240px] overflow-hidden rounded-full border-4 border-white/15 shadow-2xl max-md:size-[190px]">
                  <SmartImage
                    slot={doctor.photo}
                    tone="grey"
                    className="grayscale transition-transform duration-700 hover:scale-105"
                    sizes="240px"
                  />
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" />
                </div>

                <div className="mt-[26px] text-center">
                  <h3 className="font-serif text-[28px] font-semibold text-white">Dr. Abhinav</h3>
                  <p className="mt-1 text-[16px] font-medium text-accent">MBBS, MD (Psychiatry)</p>
                  <p className="mt-1 text-[13.5px] text-white/60">Adult &amp; General Psychiatry</p>
                </div>

                {/* Experience counter badge */}
                <div className="mt-[26px] flex items-center justify-around rounded-[18px] bg-white/5 p-4 text-center">
                  <div>
                    <span className="block font-serif text-[26px] font-bold text-white">10+</span>
                    <span className="text-[12px] uppercase tracking-wider text-white/50">Years Clinical Practice</span>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div>
                    <span className="block font-serif text-[26px] font-bold text-accent">100%</span>
                    <span className="text-[12px] uppercase tracking-wider text-white/50">Confidential</span>
                  </div>
                </div>
              </div>

              {/* Direct Booking CTA */}
              <div className="mt-[32px] border-t border-white/10 pt-[24px]">
                <p className="text-center text-[13px] text-white/60">Consultation Availability:</p>
                <p className="mt-0.5 text-center font-medium text-white">Mon – Sat (10:00 AM – 5:00 PM)</p>
                <Button
                  variant="pill"
                  to="/contact?topic=booking#contact-form"
                  className="mt-4 w-full justify-center !border-accent !bg-accent text-white hover:!bg-[#e94a1b]"
                >
                  Book a Consultation
                </Button>
              </div>
            </Reveal>

            {/* Right Card: Bio, Family Legacy & Hospital Details */}
            <div className="flex flex-col justify-between gap-6">
              {/* Family Medical Heritage Card */}
              <Reveal>
                <div className="rounded-[28px] border border-black/5 bg-white p-[36px] shadow-[0_10px_35px_rgba(0,0,0,0.04)] max-md:p-[24px]">
                  <div className="flex items-center gap-3 text-accent">
                    <Heart className="size-6 fill-accent/15" />
                    <span className="text-[14px] font-bold uppercase tracking-wider">A Family Heritage in Medicine</span>
                  </div>

                  <h3 className="mt-3 font-serif text-[32px] leading-[40px] text-ink max-md:text-[24px] max-md:leading-[32px]">
                    Built on Generational Dedication to Patient Wellbeing
                  </h3>

                  <p className="mt-4 text-[17px] leading-[28px] text-ink/75 max-md:text-[15.5px]">
                    Dr. Abhinav was born into a household defined by medical compassion and clinical dedication. His father, <strong>Dr. Ashok</strong>, is a respected senior surgeon who established <strong>Ashok Hospital</strong> as a beacon of surgical and general healthcare for Garhshankar and neighbouring regions. His mother, an esteemed <strong>general doctor</strong>, has served countless families with wholehearted primary medical care.
                  </p>

                  <p className="mt-3 text-[17px] leading-[28px] text-ink/75 max-md:text-[15.5px]">
                    Growing up surrounded by patients seeking healing, Dr. Abhinav recognized that while physical health receives attention, emotional and mental well-being are frequently overlooked. Choosing psychiatry as his life&apos;s calling, he brings modern, evidence-based psychiatric therapies and judgement-free consultations to Ashok Hospital.
                  </p>

                  {/* Highlights Grid */}
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="flex items-start gap-3 rounded-[16px] bg-sand-light/60 p-3.5">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-accent shadow-sm">
                        <Users2 className="size-4" />
                      </span>
                      <div>
                        <strong className="block text-[14px] text-ink">Father: Dr. Ashok</strong>
                        <span className="text-[13px] text-ink/65">Senior Consultant Surgeon &amp; Founder</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-[16px] bg-sand-light/60 p-3.5">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-accent shadow-sm">
                        <Heart className="size-4" />
                      </span>
                      <div>
                        <strong className="block text-[14px] text-ink">Mother: General Doctor</strong>
                        <span className="text-[13px] text-ink/65">Trusted Family &amp; General Medicine</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Hospital Location & Contact Info Banner */}
              <Reveal delay={0.1}>
                <div className="rounded-[28px] bg-white p-[36px] shadow-[0_10px_35px_rgba(0,0,0,0.04)] max-md:p-[24px]">
                  <div className="flex items-center gap-3 text-accent">
                    <Building2 className="size-6" />
                    <span className="text-[14px] font-bold uppercase tracking-wider">Hospital &amp; Practice Information</span>
                  </div>

                  <h4 className="mt-2 font-serif text-[26px] leading-[34px] text-ink max-md:text-[22px]">
                    Ashok Hospital, Garhshankar
                  </h4>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div className="flex items-start gap-3.5">
                      <MapPin className="mt-1 size-5 shrink-0 text-accent" />
                      <div>
                        <strong className="block text-[15px] text-ink">Hospital Address:</strong>
                        <span className="text-[14.5px] leading-[22px] text-ink/75">
                          Near Civil Hospital, Garhshankar, Punjab 144527
                        </span>
                        <a
                          href={contact.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1.5 inline-flex items-center gap-1 text-[13.5px] font-semibold text-accent hover:underline"
                        >
                          Open in Google Maps <ExternalLink className="size-3.5" />
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Phone className="mt-1 size-5 shrink-0 text-accent" />
                      <div>
                        <strong className="block text-[15px] text-ink">Direct Telephone Lines:</strong>
                        <div className="mt-1 space-y-1 text-[14px]">
                          <div>
                            <span className="text-ink/60">Appointments: </span>
                            <a href={`tel:${contact.phoneE164}`} className="font-semibold text-ink hover:text-accent">
                              {contact.phoneDisplay}
                            </a>
                          </div>
                          <div>
                            <span className="text-ink/60">Hospital Desk: </span>
                            <a href={`tel:${contact.hospitalPhoneE164}`} className="font-semibold text-ink hover:text-accent">
                              {contact.hospitalPhoneDisplay}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Trust markers */}
                  <div className="mt-6 flex flex-wrap gap-2.5 border-t border-black/5 pt-5">
                    {[
                      'In-Person Consultations',
                      'Tele-Consultations Available',
                      'Evidence-Based Medication',
                      'Discreet & Confidential',
                    ].map((badge) => (
                      <span
                        key={badge}
                        className="inline-flex items-center gap-1.5 rounded-full bg-cream px-3 py-1 text-[13px] font-medium text-ink/80"
                      >
                        <CheckCircle2 className="size-3.5 text-accent" />
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHAT SETS OUR CARE APART ── */}
      <section className="bg-white py-[90px] max-md:py-[60px]">
        <div className="mx-auto max-w-[1240px] px-[20px]">
          <Reveal className="mx-auto max-w-[650px] text-center">
            <h2 className="font-serif text-[42px] leading-[50px] tracking-[-0.02em] text-ink max-md:text-[30px] max-md:leading-[38px]">
              A Sanctuary for Your Peace of Mind
            </h2>
            <p className="mt-3 text-[17px] leading-[26px] text-ink/65">
              Everything we do is designed to make mental health support approachable, safe, and effective.
            </p>
          </Reveal>

          <div className="mt-[50px] grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: 'Completely Confidential',
                desc: 'Your consultations, personal history, and records are held under strict medical privacy and care ethics.',
              },
              {
                icon: Heart,
                title: 'No Stigma or Judgements',
                desc: 'A safe, inclusive space for every identity, concern, and background — with no therapist-shopping.',
              },
              {
                icon: Stethoscope,
                title: 'Specialised Psychiatric Care',
                desc: 'From depression, anxiety, OCD, and ADHD to bipolar disorder and sleep difficulties, get medically qualified care.',
              },
              {
                icon: Clock,
                title: 'Care at Your Own Pace',
                desc: 'Whether you need an initial diagnostic evaluation, talk therapy coordination, or medication reviews, you decide your pace.',
              },
              {
                icon: GraduationCap,
                title: 'Qualified MD Psychiatrist',
                desc: 'Consultations directly with Dr. Abhinav (MBBS, MD Psychiatry) — a dedicated medical professional.',
              },
              {
                icon: CalendarCheck,
                title: 'Simple Booking & Follow-ups',
                desc: 'Easy appointment scheduling via phone, WhatsApp, or online request, with ongoing check-ins.',
              },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={i * 0.05}>
                  <div className="h-full rounded-[22px] border border-black/5 bg-[#faf8f5] p-[28px] transition-all duration-300 hover:bg-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-white text-accent shadow-sm">
                      <Icon className="size-6" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-4 font-serif text-[22px] leading-[28px] text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-[23px] text-ink/70">
                      {card.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. BOTTOM ENGAGING CTA ── */}
      <section className="bg-pink-gradient-x py-[90px] text-white max-md:py-[60px]">
        <div className="mx-auto max-w-[800px] px-[20px] text-center">
          <Reveal>
            <h2 className="font-serif text-[44px] leading-[54px] tracking-[-0.02em] text-white max-md:text-[32px] max-md:leading-[40px]">
              Ready to take the first step towards feeling better?
            </h2>
            <p className="mx-auto mt-4 max-w-[580px] text-[19px] leading-[28px] text-white/90 max-md:text-[16px]">
              Speak directly with Dr. Abhinav at Ashok Hospital, Garhshankar. Reaching out is completely confidential and without judgement.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                variant="pill"
                to="/contact?topic=booking#contact-form"
                className="!border-white !bg-white !text-ink hover:!bg-[#f5f5f5]"
              >
                Book an Appointment
              </Button>
              <a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hello Dr. Abhinav, I would like to enquire about an appointment at Ashok Hospital.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[50px] items-center gap-2 rounded-full border-2 border-white/60 px-7 text-[16px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                <MessageCircle className="size-5" /> Chat on WhatsApp
              </a>
            </div>
            <p className="mt-6 text-[14px] text-white/70">
              📍 Ashok Hospital, Near Civil Hospital, Garhshankar, Punjab · 📞 {contact.phoneDisplay}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
