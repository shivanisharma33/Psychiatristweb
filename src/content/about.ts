/** About Us page content. */
export const aboutContent = {
  meta: {
    title: 'About Us',
    description: 'Why we started our practice, and the people behind it.',
  },
  intro: {
    blob: `It's ${new Date().getFullYear()}, why isn't it normal to talk about how you feel?`,
    questions: [
      'Why is asking for help still such a taboo?',
      "Why isn't there a friendlier and simpler way to get support?",
      "Why isn't there a safe space for people to talk about their mental health?",
      "Why isn't therapy more LGBTQ+ friendly?",
      "In a world this connected, shouldn't care be this easy to reach?",
    ],
  },
  reveal: {
    question: "Why haven't we built something better?",
    lead: "Something That's",
    tags: [
      { text: "Care that's friendlier", size: 'sm' },
      { text: "Care that's human first", size: 'sm' },
      { text: "Care that's inclusive", size: 'sm' },
      { text: 'And accessible', size: 'lg' },
      { text: 'Judgement free', size: 'md' },
      { text: 'Without Stigma', size: 'xl' },
    ] as const,
  },
  marquee: 'End the Stigma',
  founder: {
    title: "Founder's Note",
    paragraphs: [
      'Placeholder — tell visitors who you are and why you started this practice. A short personal story about what drew you to psychology and what you saw missing in the way people access care works well here.',
      'Placeholder — describe your training and experience, the kinds of people you most like to work with, and the approach you take in the therapy room. Keep it warm and in your own voice.',
      'Placeholder — finish with what you are building towards: the kind of care you want every client to experience, and an invitation to reach out.',
    ],
    signature: '- Founder Name',
    // Thematic image until an authentic founder photo is supplied — do not replace with a stock "founder".
    image: { src: 'about-founder-letter', alt: 'Handwritten letter with a fountain pen and a cup of tea on a linen tablecloth', hint: "Founder photo · 617×535", position: '50% 50%' },
  },
};
