/**
 * About Us page structured content.
 */
export const aboutContent = {
  meta: {
    title: 'About Us | Dr. Abhinav & Ashok Hospital, Garhshankar',
    description:
      'Learn about Dr. Abhinav, Consultant Psychiatrist (MBBS, MD), and the distinguished family medical heritage of Ashok Hospital in Garhshankar, Punjab.',
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
    title: "About Dr. Abhinav & Ashok Hospital",
    paragraphs: [
      'Born into a respected medical family in Garhshankar, Dr. Abhinav was inspired by his father, Dr. Ashok, a veteran surgeon who founded Ashok Hospital, and his mother, a dedicated general doctor.',
      'Recognizing that emotional and psychological wellness often went unaddressed while physical illnesses were treated with urgency, Dr. Abhinav pursued MBBS and MD (Psychiatry) to establish modern, evidence-based psychiatric care at Ashok Hospital.',
      'Our practice is built on trust, medical rigor, and unwavering empathy — ensuring every patient receives confidential, compassionate, and stigma-free care.',
    ],
    signature: '— Dr. Abhinav, MBBS, MD (Psychiatry)',
    image: {
      src: 'about-founder-letter',
      alt: 'Ashok Hospital Medical Heritage',
      hint: 'Dr. Abhinav · Ashok Hospital',
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
        name: 'Dr. Abhinav',
        role: 'Consultant Psychiatrist',
        qualifications: 'MBBS, MD (Psychiatry)',
        bio: 'Carrying forward the family legacy by bringing modern, evidence-based psychiatric therapies and stigma-free mental health care to Ashok Hospital.',
      },
    },
  },
};
