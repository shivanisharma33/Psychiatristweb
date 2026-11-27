/** Contact page content (page built in the reference's visual language). */
export const contactContent = {
  meta: {
    title: 'Contact Us',
    description: 'Get in touch to book a session, ask a question, or find the right kind of support.',
  },
  hero: {
    kicker: "We're here to listen",
    title: 'Get in touch',
    body:
      'Have a question, want to book a session, or not sure where to start? Send us a message and a real person from our team will get back to you, usually within one working day.',
  },
  form: {
    title: 'Send us a message',
    topics: [
      { value: 'booking', label: 'Book a session' },
      { value: 'consultation', label: 'Free 15-minute consultation' },
      { value: 'question', label: 'General question' },
      { value: 'careers', label: 'Work with us' },
      { value: 'privacy', label: 'Privacy / terms' },
      { value: 'other', label: 'Something else' },
    ],
    consent: 'I agree to be contacted about my enquiry. My details will be kept confidential.',
    submit: 'Send message',
    success: "Thank you — your message has been sent. We'll get back to you shortly.",
    error: 'Sorry, something went wrong sending your message. Please try again, or reach us directly using the details on this page.',
    notConfigured:
      'The contact form is not connected yet (missing VITE_FORMSPREE_CONTACT_ID). Please reach us directly using the details on this page.',
  },
  channels: {
    title: 'Other ways to reach us',
  },
};
