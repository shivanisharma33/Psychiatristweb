/**
 * About Us page structured content.
 */
export const aboutContent = {
  meta: {
    title: 'About Us | Dr. Abhinav Dhami & Ashok Hospital, Garhshankar',
    description:
      'Learn about Dr. Abhinav Dhami, MD Psychiatry, and the distinguished family medical heritage of Ashok Hospital in Garhshankar, Punjab.',
  },
  intro: {
    blob: `Why isn't it normal to talk about how you feel?`,
    questions: [
      'Why is asking for help still such a taboo?',
      "Why isn't there a friendlier and simpler way to get support?",
      "Why isn't there a safe space for people to talk about their mental health?",
      'In a world this connected, shouldn’t psychiatric care be easy to reach?',
    ],
  },
  reveal: {
    question: "Why haven't we built something better?",
    lead: "Something That's",
    tags: [
      { text: "Care that's friendlier", size: 'sm' as const },
      { text: "Care that's human first", size: 'sm' as const },
      { text: "Care that's inclusive", size: 'sm' as const },
      { text: 'And accessible', size: 'lg' as const },
      { text: 'Judgement free', size: 'md' as const },
      { text: 'Without Stigma', size: 'xl' as const },
    ],
  },
  marquee: 'End The Stigma',
  founder: {
    title: "About Dr. Abhinav Dhami & Ashok Hospital",
    paragraphs: [
      'Dr. Abhinav Dhami is a psychiatrist with 10 years of clinical experience in mental health and psychiatry. Having previously served as an Assistant Professor, he brings clinical experience and a commitment to evidence-based psychiatric care.',
      'His approach combines evidence-based treatment, compassionate care and a deeper understanding of the complexities of the human mind. Beyond the treatment of psychiatric disorders, he is also interested in cognitive optimization, emotional resilience and enhancing overall psychological performance.',
      'Dr. Dhami believes in helping individuals not only overcome mental health challenges, but also develop greater clarity, emotional balance, resilience and the mental capacity to navigate life more effectively. His approach emphasizes personalized care, scientific evidence and a judgement-free environment where patients feel heard and understood.',
    ],
    signature: '— Dr. Abhinav Dhami, MD Psychiatry',
    image: {
      src: 'about-founder-letter',
      alt: 'Ashok Hospital Medical Heritage',
      hint: 'Dr. Abhinav Dhami · Ashok Hospital',
      position: '50% 50%',
    },
  },
  heritage: {
    hospitalName: 'Ashok Hospital',
    location: 'Near Civil Hospital, Garhshankar, Punjab 144527',
    phones: {
      mobile: '+91 99968 42994',
      hospital: '098140 73717',
    },
    googleRating: {
      stars: 4.2,
      reviewCount: 18,
      category: 'Psychiatric hospital in Garhshanker, Punjab',
    },
    family: {
      father: {
        name: 'Dr. Ashok',
        role: 'Senior Consultant Surgeon',
        title: 'Founder, Ashok Hospital',
        bio: 'Senior surgeon who established Ashok Hospital as a beacon of surgical excellence and healthcare in Garhshankar and Punjab.',
      },
      mother: {
        name: 'Mother',
        role: 'General Doctor',
        title: 'Primary Healthcare & Family Medicine',
        bio: 'Respected general doctor who provided compassionate primary medical care to thousands of local families across generations.',
      },
      son: {
        name: 'Dr. Abhinav Dhami',
        role: 'Psychiatrist & Consultant',
        qualifications: 'MD Psychiatry',
        bio: 'Dr. Abhinav Dhami is a psychiatrist with 10 years of clinical experience in mental health and psychiatry. Having previously served as an Assistant Professor, he brings clinical experience and a commitment to evidence-based psychiatric care.',
      },
    },
  },
};
