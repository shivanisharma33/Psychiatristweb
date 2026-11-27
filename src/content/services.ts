/** Services page (modelled on the reference "Mental Health" page). */
export const servicesContent = {
  meta: {
    title: 'Services',
    description:
      'Individual therapy, psychiatry, ADHD assessments and couples therapy — confidential, evidence-based mental health care.',
  },
  hero: {
    kicker: 'You are not alone',
    title: "It's okay, not to be okay",
    body:
      'We can help you find judgement-free and confidential care for every mental and emotional concern, small or large: stress, anger, depression, anxiety, emotional distress and much more. Whether you are looking for a free support group, individual therapy sessions, or psychiatry and medication, we are here to help.',
    services: [
      {
        id: 'individual-therapy',
        label: 'Individual Therapy',
        tint: 'linear-gradient(135deg, rgba(22,22,22,0.7), rgba(0,0,0,0) 71%)',
        image: { src: 'svc-individual', alt: 'Woman writing in a journal on a sofa with a cup of tea', hint: 'Service · Therapy · 180×280', position: '50% 40%' },
      },
      {
        id: 'psychiatry',
        label: 'Psychiatry and Medication',
        tint: 'linear-gradient(135deg, rgb(249,146,146), rgba(0,0,0,0))',
        image: { src: 'svc-psychiatry', alt: 'Doctor writing a prescription during a consultation', hint: 'Service · Psychiatry · 180×280', position: '50% 50%' },
      },
      {
        id: 'adhd',
        label: 'ADHD',
        tint: 'linear-gradient(135deg, rgb(162,89,40), rgba(0,0,0,0))',
        image: { src: 'svc-adhd', alt: 'Young person focusing at a desk with headphones and colourful sticky notes', hint: 'Service · ADHD · 180×280', position: '50% 40%' },
      },
      {
        id: 'couples-therapy',
        label: "Couple's Therapy",
        tint: 'linear-gradient(135deg, rgb(145,61,61), rgba(0,0,0,0))',
        image: { src: 'svc-couples', alt: 'Couple talking calmly together at a kitchen table', hint: "Service · Couple's · 180×280", position: '50% 45%' },
      },
    ],
  },
  careAreas: {
    kicker: 'Understanding your health',
    title: "Let's Talk About What Matters.",
    subtitle: 'Choose a category to see common areas of support. Descriptions are general information, not a diagnosis.',
    note: 'General information, not a diagnosis. A consultation helps identify appropriate care.',
    cta: 'Book a Consultation',
    categories: [
      {
        id: 'mental-health',
        label: 'Mental Health',
        summary: 'Professional guidance for your thoughts, feelings and mental well-being.',
        items: [
          { icon: 'activity', title: 'Anxiety', description: 'Persistent worry, nervousness or fear that may affect everyday life.' },
          { icon: 'cloud', title: 'Depression', description: 'Ongoing low mood, loss of interest or emotional difficulties.' },
          { icon: 'repeat', title: 'OCD', description: 'Unwanted recurring thoughts or repetitive behaviours.' },
          { icon: 'waves', title: 'Bipolar Disorder', description: 'Significant changes in mood, energy and activity.' },
          { icon: 'target', title: 'ADHD', description: 'Concerns involving attention, impulsivity or everyday organization.' },
          { icon: 'eye', title: 'Psychosis & Schizophrenia', description: 'Changes in thinking, perception or behaviour that may need professional assessment.' },
          { icon: 'stethoscope', title: 'Psychiatric Consultation', description: 'A conversation to understand your concerns and discuss appropriate care options.' },
        ],
      },
      {
        id: 'emotional-wellbeing',
        label: 'Emotional & Behavioural Health',
        summary: 'Understand your emotions, manage everyday challenges and explore healthier ways of coping.',
        items: [
          { icon: 'layers', title: 'Stress', description: 'Feeling overwhelmed by everyday responsibilities or life changes.' },
          { icon: 'activity', title: 'Anger Management', description: 'Frequent irritability or anger that feels hard to manage.' },
          { icon: 'waves', title: 'Emotional Regulation', description: 'Strong emotions that feel difficult to understand or settle.' },
          { icon: 'moon', title: 'Sleep Difficulties', description: 'Trouble falling asleep, staying asleep or feeling rested.' },
          { icon: 'lifebuoy', title: 'Addiction Concerns', description: 'Support in understanding substance use and related behaviours.' },
          { icon: 'feather', title: 'Grief and Loss', description: 'Emotional difficulties after a loss or a major life change.' },
          { icon: 'repeat', title: 'Behavioural Concerns', description: 'Patterns of behaviour that are affecting daily life or relationships.' },
        ],
      },
      {
        id: 'womens-mental-health',
        label: "Women's Mental Health",
        summary: 'Mental and emotional health support through different stages of life.',
        items: [
          { icon: 'sprout', title: 'Pregnancy-Related Anxiety', description: 'Emotional concerns experienced during pregnancy.' },
          { icon: 'heart', title: 'Postpartum Mental Health', description: 'Mental health support after childbirth.' },
          { icon: 'calendar', title: 'Premenstrual Mood Changes', description: 'Mood or emotional changes associated with the menstrual cycle.' },
          { icon: 'sun', title: 'Menopause-Related Emotional Concerns', description: 'Emotional changes that may occur during menopause.' },
          { icon: 'layers', title: 'Stress and Emotional Well-being', description: 'Balancing roles, responsibilities and your own well-being.' },
          { icon: 'flower', title: 'Emotional Challenges with PCOS', description: 'Emotional challenges that may accompany living with PCOS.' },
        ],
      },
    ] as const,
  },
  marquee: ['Normalise Therapy', 'Normalise Seeking Help', 'Normalise Mental Health', 'Normalise Medication'],
  begin: {
    title: 'Not sure where to begin?',
    body:
      "Book a free 15-minute consultation where we'll ask a few clinically informed questions to understand your needs and suggest the right next step.",
    cta: 'Free Consultation',
  },
  holistic: {
    title: 'Discreet and holistic care',
    /** Use "\n" to control line breaks inside each circle label. */
    circles: ['Psychiatry and\nmedication', 'Individual therapy', 'Toolkits and\ncommunity', 'Anonymous\nsupport groups'],
  },
  privacy: {
    title: 'We value your privacy',
    items: [
      { icon: 'registered', label: 'Registered psychologists and psychiatrists' },
      { icon: 'confidential', label: 'Completely confidential care' },
      { icon: 'evidence', label: 'Personalised and evidence based treatment' },
      { icon: 'everyone', label: 'For everyone - Men, Women, LGBTQ+' },
      { icon: 'clinicians', label: 'Made by clinicians' },
      { icon: 'flexible', label: 'Online and in-person sessions' },
    ] as const,
  },
  testimonials: { title: 'We Heard You', cta: 'See more' },
  journey: {
    title: 'We are with you from beginning to end',
    items: [
      { screen: 'tasks', caption: 'Access therapy or psychiatric care, all in one place.' },
      { screen: 'progress', caption: 'Track your monthly progress' },
      { screen: 'group', caption: 'Join our anonymous support groups' },
    ] as const,
    cta: 'Start Now',
  },
  professionals: {
    kicker: "Who you'll be working with",
    title: 'Judgement free mental health professionals',
    body:
      "We're proud to offer access to experienced mental health professionals who won't judge you or your problems — be it psychologists or psychiatrists, you're in caring hands.",
    cta: 'Our Care Team',
    images: [
      { src: 'svc-pro-notes', alt: 'Hands holding a notebook and pen during a therapy session', hint: 'Clinician photo · 420 circle, B&W', position: '50% 50%' },
      { src: 'svc-pro-room', alt: 'Two armchairs facing each other in a calm, plant-filled therapy room', hint: 'Clinician photo · 310 circle, B&W', position: '50% 55%' },
    ],
  },
  concerns: {
    title: 'For all your mental health concerns',
    items: [
      { icon: 'stress', label: 'Stress & burnout' },
      { icon: 'anxiety', label: 'Anxiety' },
      { icon: 'depression', label: 'Depression' },
      { icon: 'motivation', label: 'Motivation' },
      { icon: 'sleep', label: 'Sleep troubles' },
      { icon: 'relationships', label: 'Relationships' },
      { icon: 'trauma', label: 'Recent trauma or loss' },
      { icon: 'focus', label: 'Lack of concentration' },
    ] as const,
  },
  faq: { title: 'Frequently Asked Questions', cta: 'Ask us a question' },
  cta: {
    title: 'Feel like you again',
    body: 'Take care of your mental health—affordably, reliably, and on your schedule.',
    button: 'Get Help Now',
  },
};

export const emergencyText =
  "If you're experiencing an emergency and need immediate help, call a suicide prevention helpline or go to the nearest hospital.";
