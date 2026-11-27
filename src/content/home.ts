/** Home page copy & image slots. Replace with your own content. */
export const homeContent = {
  meta: {
    title: 'Dr. Abhinav Dhami | MD Psychiatry',
    description:
      'Judgement-free psychiatric care, evaluation, and therapy by Dr. Abhinav Dhami (MD Psychiatry) at Ashok Hospital, Garhshankar, Punjab.',
  },
  hero: {
    titleLine: 'Modern mental healthcare for',
    /** Words that are hand-written one after another under the title. */
    rotatingWords: ['you', 'couples', 'teens', 'everyone'],
    body:
      'We are building a warmer, more human way to look after your mind. Our aim is to create a judgement-free, inclusive space where you can talk openly and get support from qualified psychologists.',
    emailPlaceholder: 'Enter your email ID',
    cta: 'Join our community',
    images: [
      { src: 'home-hero-reflect', alt: 'Young woman sitting calmly on the floor against a sunlit wall, eyes closed', hint: 'Hero photo 1 · 200×300 portrait', position: '50% 55%' },
      { src: 'home-hero-window', alt: 'Man looking thoughtfully out of a window in soft evening light', hint: 'Hero photo 2 · 238×350 portrait', position: '50% 35%' },
      { src: 'home-hero-session', alt: 'Psychologist listening to a client during a relaxed conversation in a warm room', hint: 'Hero photo 3 · 397×270 landscape', position: '50% 45%' },
    ],
  },
  featured: {
    title: 'Featured By',
    /** Press logos. Empty array hides the band. */
    logos: [] as { src: string; alt: string }[],
  },
  categories: {
    title: 'Your mind in your control',
    items: [
      { label: 'Individual Therapy', to: '/services#individual-therapy', image: { src: 'home-cat-therapy', alt: 'Client talking openly with a therapist during a one-to-one session', hint: 'Category · Therapy · 200×300', position: '50% 40%' } },
      { label: 'Psychiatry', to: '/services#psychiatry', image: { src: 'home-cat-psychiatry', alt: 'Psychiatrist listening attentively to a patient across a desk', hint: 'Category · Psychiatry · 200×300', position: '50% 40%' } },
      { label: "Couple's Therapy", to: '/services#couples-therapy', image: { src: 'home-cat-couples', alt: 'Couple sitting close together on a sofa, holding hands', hint: 'Category · Couples · 200×300', position: '50% 45%' } },
      { label: 'Community', to: '/#community', image: { src: 'home-cat-community', alt: 'Friends laughing together while sitting on the grass in a park', hint: 'Category · Community · 200×300', position: '50% 50%' } },
    ],
  },
  howItWorks: {
    title: 'How it works?',
    steps: [
      { title: 'Book a Visit', body: 'Share a little about what you are going through so we can match you with the right professional.', screen: 'intake' },
      { title: 'Speak with a therapist', body: 'Meet your psychologist on video, phone or in person — whatever feels comfortable.', screen: 'call' },
      { title: 'A plan made for you', body: 'Together you build a personalised plan with clear goals and regular check-ins.', screen: 'plan' },
      { title: 'Ongoing Care', body: 'Message your care team between sessions and track your progress over time.', screen: 'chat' },
    ] as const,
  },
  different: {
    title: 'What makes us Different?',
    items: [
      { icon: 'wallet', title: 'Affordable', body: 'Transparent session fees with no hidden costs, and sliding-scale options for those who need them.' },
      { icon: 'map', title: 'Whenever Wherever', body: 'Online and in-person sessions with flexible timings, including evenings and weekends.' },
      { icon: 'users', title: 'No stigma or judgements', body: 'A warm, inclusive space for every identity, background and concern.' },
      { icon: 'award', title: 'No therapist shopping', body: 'We match you with the right professional from the start, so you can focus on getting better.' },
      { icon: 'handshake', title: 'Easy ongoing care', body: 'Simple follow-ups, reminders and progress tracking for you and your therapist.' },
    ] as const,
  },
  team: {
    title: 'Meet Dr. Abhinav Dhami',
    subtitle: 'MD Psychiatry · Psychiatrist & Former Assistant Professor at Ashok Hospital',
    cta: 'About Doctor',
  },
  community: {
    title: 'Support Groups, Conversations & More!',
    body: 'We host free events for our community — support groups led by psychologists, venting circles, journalling sessions and more',
    emoji: '🥳',
    cta: 'Join Now',
    image: { src: 'home-community-group', alt: 'Small support group sitting in a circle, one member sharing while others listen', hint: 'Community photo · 660×660 square', position: '50% 50%' },
  },
  givingBack: {
    title: 'Giving Back',
    body: 'We are committed to making mental healthcare accessible to people who need it most.',
    cta: 'Learn More',
  },
};
