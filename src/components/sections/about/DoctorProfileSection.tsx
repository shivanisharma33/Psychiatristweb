import {
  Award,
  CalendarCheck,
  CheckCircle2,
  Clock,
  ExternalLink,
  Globe,
  GraduationCap,
  Heart,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope,
  Users2,
} from 'lucide-react';
import { doctor } from '@/content/shared';
import { contact } from '@/content/site';
import { SmartImage } from '@/components/common/SmartImage';
import { Button } from '@/components/common/Button';
import { Reveal } from '@/components/common/Reveal';

const detailIcons = [GraduationCap, Users2, Clock, Stethoscope, Globe, CalendarCheck];

interface DoctorProfileSectionProps {
  id?: string;
  className?: string;
  showFounderKicker?: boolean;
}

export function DoctorProfileSection({
  id = 'about-doctor',
  className = '',
  showFounderKicker = true,
}: DoctorProfileSectionProps) {
  return (
    <section id={id} aria-labelledby="doctor-heading" className={`bg-sand-light py-[90px] max-md:py-[60px] ${className}`}>
      <div className="mx-auto max-w-[1240px] px-[20px]">
        <Reveal className="mx-auto max-w-[720px] text-center">
          {showFounderKicker && (
            <p className="text-[14.5px] font-semibold uppercase tracking-widest text-accent">
              Medical Heritage &amp; Clinical Care
            </p>
          )}
          <h2
            id="doctor-heading"
            className="mt-2 font-serif text-[46px] leading-[54px] tracking-[-0.02em] text-ink max-md:text-[34px] max-md:leading-[42px]"
          >
            Dr. Abhinav
          </h2>
          <p className="mt-[10px] text-[19px] leading-[28px] text-ink/70 max-md:text-[16px]">
            Consultant Psychiatrist · Ashok Hospital, Garhshankar, Punjab
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-[50px] overflow-hidden rounded-[28px] bg-white shadow-[0_12px_45px_rgba(0,0,0,0.06)]">
            <div className="grid lg:grid-cols-[380px_1fr]">
              {/* Doctor Portrait & Quick Info Column */}
              <div className="relative flex flex-col justify-between bg-[#151515] p-[36px] text-white max-md:p-[24px]">
                <div>
                  <div className="mx-auto size-[220px] overflow-hidden rounded-full border-4 border-white/20 shadow-xl max-md:size-[170px]">
                    <SmartImage
                      slot={doctor.photo}
                      tone="grey"
                      className="grayscale transition-transform duration-500 hover:scale-105"
                      sizes="(min-width: 1024px) 220px, 170px"
                    />
                  </div>
                  <div className="mt-[24px] text-center">
                    <h3 className="font-serif text-[26px] leading-tight text-white">Dr. Abhinav</h3>
                    <p className="mt-1 text-[15px] font-medium text-accent">MBBS, MD (Psychiatry)</p>
                    <p className="mt-1 text-[13.5px] text-white/60">Psychiatrist &amp; Mental Health Specialist</p>
                  </div>
                </div>

                {/* Hospital Contact Box */}
                <div className="mt-[30px] space-y-[14px] border-t border-white/10 pt-[24px]">
                  <div className="flex items-start gap-3 text-[14px] text-white/85">
                    <MapPin className="mt-0.5 size-[18px] shrink-0 text-accent" />
                    <div>
                      <strong className="block text-white">Ashok Hospital</strong>
                      <span>Near Civil Hospital, Garhshankar, Punjab 144527</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-[14px] text-white/85">
                    <Phone className="size-[18px] shrink-0 text-accent" />
                    <div>
                      <span className="block text-xs text-white/50">Appointments &amp; Enquiries:</span>
                      <a href={`tel:${contact.phoneE164}`} className="font-semibold text-white hover:text-accent">
                        {contact.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-[14px] text-white/85">
                    <Phone className="size-[18px] shrink-0 text-accent" />
                    <div>
                      <span className="block text-xs text-white/50">Hospital Landline:</span>
                      <a href={`tel:${contact.hospitalPhoneE164}`} className="text-white hover:text-accent">
                        {contact.hospitalPhoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-[14px] text-white/85">
                    <ShieldCheck className="size-[18px] shrink-0 text-accent" />
                    <span>Registered Medical Practitioner</span>
                  </div>
                </div>
              </div>

              {/* Bio, Family Heritage & Details Column */}
              <div className="flex flex-col justify-between p-[44px] max-md:p-[28px]">
                <div>
                  <h4 className="font-serif text-[28px] leading-[36px] text-ink max-md:text-[24px]">
                    Dedicated Family Heritage in Medical Service
                  </h4>
                  <p className="mt-[16px] text-[17px] leading-[27px] text-ink/75 max-md:text-[15.5px]">
                    {doctor.bio}
                  </p>

                  {/* Medical Background Callout */}
                  <div className="mt-[20px] rounded-[18px] border-l-4 border-accent bg-cream p-[20px]">
                    <div className="flex items-start gap-3">
                      <Heart className="mt-0.5 size-[20px] shrink-0 text-accent" />
                      <div>
                        <h5 className="font-serif text-[18px] font-semibold text-ink">
                          A Tradition of Healing at Ashok Hospital
                        </h5>
                        <p className="mt-1 text-[14.5px] leading-[22px] text-ink-700">
                          Established by senior surgeon <strong>Dr. Ashok</strong> and supported by Dr. Abhinav’s mother, an experienced <strong>general physician</strong>, Ashok Hospital has long been a pillar of trusted medical care in Garhshankar. Dr. Abhinav carries this commitment forward, bringing specialized, compassionate psychiatric consultations and mental wellness therapies to individuals and families across Punjab.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Highlight Specs */}
                  <div className="mt-[28px] grid gap-[16px] sm:grid-cols-2">
                    {doctor.details.map((d, i) => {
                      const Icon = detailIcons[i] ?? Award;
                      return (
                        <div
                          key={d.label}
                          className="flex items-start gap-[12px] rounded-[16px] bg-sand-light/50 p-[14px]"
                        >
                          <span
                            className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-white text-accent shadow-sm"
                            aria-hidden
                          >
                            <Icon className="size-[18px]" strokeWidth={1.75} />
                          </span>
                          <div>
                            <span className="block text-[12px] font-semibold uppercase tracking-wider text-ink/45">
                              {d.label}
                            </span>
                            <span className="mt-[2px] block text-[15px] font-medium text-ink-800">
                              {d.value}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Core principles / badges */}
                  <div className="mt-[24px] flex flex-wrap gap-[10px]">
                    {[
                      'In-Person Consultations at Ashok Hospital',
                      'Strict Medical Confidentiality',
                      'No Judgement Space',
                      'Personalised Treatment',
                    ].map((badge) => (
                      <span
                        key={badge}
                        className="inline-flex items-center gap-[6px] rounded-full bg-cream px-[14px] py-[6px] text-[13.5px] font-medium text-ink-800"
                      >
                        <CheckCircle2 className="size-[15px] text-accent" />
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions & Directions Link */}
                <div className="mt-[32px] flex flex-wrap items-center gap-[16px] border-t border-black/5 pt-[24px]">
                  <Button variant="pill" to="/contact?topic=booking#contact-form">
                    Book an Appointment ({contact.phoneDisplay})
                  </Button>
                  <a
                    href={contact.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-accent hover:underline"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
