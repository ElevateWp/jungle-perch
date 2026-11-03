export interface TeamProfile { id: string; slug: string; name: string; title: string; qualifications: string; specialization: string; experienceYears: number; bio: string; philosophy: string; education: string[]; memberships: string[]; specialties: string[]; image: string; warmImage: string; }
export type DentistProfile = TeamProfile;
export interface ServiceDetail { slug: string; name: string; navLabel: string; tagline: string; shortDescription: string; clinicalExplanation: string; whoNeeds: string[]; benefits: string[]; indications: { condition: string; explanation: string }[]; procedureSteps: { stepNumber: number; title: string; duration: string; description: string; clinicalDetails: string }[]; recoveryTimeline: { period: string; expectedSensations: string; careProtocol: string }[]; costTransparency: { baseRange: string; factors: string[]; whatIsIncluded: string[]; note: string }; beforeAfterCase: { category: string; clinicalContext: string; beforeLabel: string; afterLabel: string; beforeImage: string; afterImage: string; timeframe: string }; assignedDentistId: string; faqs: { question: string; answer: string; relatedSlug?: string }[]; }
export interface ClinicInformation { name: string; legalName: string; tagline: string; primaryLocation: { street: string; suite: string; city: string; state: string; postalCode: string; country: string; directions: string; landmarks: string; coordinates?: { lat: number; lng: number } }; contact: { phone: string; emergencyPhone: string; email?: string; whatsapp: string; website?: string }; identityHighlights: string[]; schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[]; verifiedStats: { value: number; suffix: string; label: string; description: string }[]; accreditations: string[]; }

const phone = '+61 459 513 503';
const businessId = 'jungle-perch-plumbing-services';
const plumbingPhoto = '/images/plumbing-technician.jpg';
const businessName = 'Jungle Perch Plumbing Services';

export const CLINIC_INFO: ClinicInformation = {
  name: businessName, legalName: businessName, tagline: 'Reliable plumbing service with clear communication and quality workmanship.',
  primaryLocation: { street: '', suite: '', city: '', state: '', postalCode: '', country: 'AU', directions: '', landmarks: '' },
  contact: { phone, emergencyPhone: phone, whatsapp: phone },
  identityHighlights: ['Quality plumbing workmanship', 'Friendly, easy-to-reach service', 'Clear communication from first contact to completion'],
  schedule: [
    { day: 'Monday', hours: 'Closed' },
    { day: 'Tuesday', hours: '7:30 AM–4:30 PM' },
    { day: 'Wednesday', hours: '7:30 AM–4:30 PM' },
    { day: 'Thursday', hours: '7:30 AM–4:30 PM' },
    { day: 'Friday', hours: '7:30 AM–4:30 PM' },
    { day: 'Saturday', hours: '8:00 AM–3:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ],
  verifiedStats: [{ value: 5, suffix: '.0', label: 'Google rating', description: 'Based on 1 Google review.' }],
  accreditations: [],
};

export const DENTISTS: TeamProfile[] = [{
  id: businessId, slug: businessId, name: businessName, title: 'Local plumbing service',
  qualifications: 'Plumbing services', specialization: 'Residential and general plumbing', experienceYears: 0,
  bio: 'Jungle Perch Plumbing Services provides professional plumbing services. A customer review highlights excellent workmanship in a new home, easy contact and great communication.',
  philosophy: 'Deliver quality workmanship and keep communication clear throughout the job.',
  education: [], memberships: [], specialties: ['Plumbing services', 'Residential plumbing', 'New home plumbing', 'Plumbing repairs', 'Leak repairs', 'Blocked drains', 'Hot water systems', 'Bathroom and kitchen plumbing'],
  image: plumbingPhoto, warmImage: '/images/plumbing-repair.jpg',
}];

const serviceEntries = [
  { slug: 'plumbing-services', name: 'Plumbing services', description: 'Contact Jungle Perch Plumbing Services to discuss the plumbing work you need. The team will talk through your requirements and the next steps.', focus: ['You have a plumbing job to discuss', 'You are planning plumbing work for your property', 'You want to speak with a plumber about your requirements'] },
  { slug: 'residential-plumbing', name: 'Residential plumbing', description: 'Jungle Perch Plumbing Services can discuss plumbing work for your home and help you arrange a suitable next step.', focus: ['You need plumbing work at home', 'You are looking for a plumber for a residential property', 'You want to talk through a home plumbing project'] },
  { slug: 'new-home-plumbing', name: 'New home plumbing', description: 'Planning plumbing work in a new home? Get in touch to discuss the job, your requirements and availability.', focus: ['You have plumbing work planned for a new home', 'You would like to discuss a plumbing project', 'You need a plumber for work at your property'] },
  { slug: 'plumbing-repairs', name: 'Plumbing repairs', description: 'Have a plumbing issue that needs attention? Call Jungle Perch Plumbing Services to explain what is happening and discuss the repair options for your property.', focus: ['A plumbing fixture or fitting needs repair', 'You have noticed a plumbing problem at your property', 'You would like a plumber to assess a repair'] },
  { slug: 'leak-repairs', name: 'Leak repairs', description: 'If you have noticed a leak, contact the team to describe where it is and discuss the next step for your property.', focus: ['You have noticed a leak at your property', 'A plumbing connection or pipe appears to be leaking', 'You want to discuss leak repair options'] },
  { slug: 'blocked-drains', name: 'Blocked drains', description: 'Discuss a slow or blocked drain with Jungle Perch Plumbing Services and find out what information the team needs to assess the job.', focus: ['A drain is slow or blocked', 'Water is not draining as expected', 'You would like to discuss a drainage issue'] },
  { slug: 'hot-water-systems', name: 'Hot water systems', description: 'Contact the team to discuss a hot water system concern, your property and the service options available for the job.', focus: ['Your hot water is not working as expected', 'You have a concern about a hot water system', 'You want to discuss plumbing work related to hot water'] },
  { slug: 'bathroom-kitchen-plumbing', name: 'Bathroom and kitchen plumbing', description: 'Talk through bathroom or kitchen plumbing work with the team, including the fixtures involved and the requirements for your property.', focus: ['You are planning plumbing work in a bathroom', 'You need plumbing work in a kitchen', 'A sink, tap or other fixture needs attention'] },
];

function makeService(entry: typeof serviceEntries[number]): ServiceDetail {
  const overview = 'Contact Jungle Perch Plumbing Services to explain the plumbing work you need and discuss availability.';
  const steps = [
    ['Tell us about the job', 'First contact', 'Describe the plumbing work you need.', 'Share the property location and any details that may help explain the job.'],
    ['Discuss your requirements', 'By arrangement', 'Talk through the work and any questions you have.', 'The scope depends on your property and the work required.'],
    ['Agree on the details', 'Before work begins', 'Confirm the proposed work, timing and price.', 'Review the plan and ask questions before going ahead.'],
    ['Complete the agreed work', 'As arranged', 'The agreed plumbing work is completed at your property.', 'The team will explain any relevant next steps after the job.'],
  ];
  return {
    ...entry, shortDescription: entry.description, navLabel: entry.name, tagline: `${entry.name} from Jungle Perch Plumbing Services.`, clinicalExplanation: overview,
    whoNeeds: entry.focus, benefits: ['Quality workmanship', 'Easy to contact', 'Clear communication throughout the job'],
    indications: entry.focus.map((condition) => ({ condition, explanation: `Contact ${businessName} to describe the job and discuss next steps.` })),
    procedureSteps: steps.map(([title, duration, description, clinicalDetails], index) => ({ stepNumber: index + 1, title, duration, description, clinicalDetails })),
    recoveryTimeline: [
      { period: 'Before the visit', expectedSensations: 'Discuss the job and arrange a suitable time.', careProtocol: 'Share any relevant property or access details when you get in touch.' },
      { period: 'During the work', expectedSensations: 'The plumber completes the agreed job.', careProtocol: 'Ask the team if you have questions about the work.' },
      { period: 'After the work', expectedSensations: 'Review the completed work and any next steps.', careProtocol: `Contact ${businessName} if you have questions about the job.` },
    ],
    costTransparency: { baseRange: 'Call to discuss your job and request a quote.', factors: ['Type and scope of the plumbing work', 'Property access and materials required', 'Timing and agreed work scope'], whatIsIncluded: ['Discussion of your requirements', 'Agreed scope of work', 'Quote and timing information'], note: 'Pricing depends on the job and agreed scope. Contact us for a quote.' },
    beforeAfterCase: { category: entry.name, clinicalContext: 'Representative plumbing imagery. Contact the team to discuss your job.', beforeLabel: 'Before the work', afterLabel: 'After the work', beforeImage: plumbingPhoto, afterImage: '/images/plumbing-repair.jpg', timeframe: 'Timing depends on the job and agreed work.' },
    assignedDentistId: businessId,
    faqs: [
      { question: `How do I arrange ${entry.name.toLowerCase()}?`, answer: `Call ${phone} to discuss the job and availability.` },
      { question: 'What areas do you service?', answer: `Call ${phone} to confirm availability for your property.` },
      { question: 'How do I request a quote?', answer: `Call ${phone} to describe the plumbing work and request a quote.` },
      { question: 'What are your opening hours?', answer: 'We are open Tuesday to Friday, 7:30 am–4:30 pm, and Saturday, 8 am–3 pm. We are closed Sunday and Monday.' },
    ],
  };
}

export const SERVICES: ServiceDetail[] = serviceEntries.map(makeService);
export interface EmergencyCondition {id:string;title:string;urgency:'Immediate (0–2 hours)'|'Same-Day (2–6 hours)'|'Urgent (Within 24 hours)';symptoms:string[];immediateAction:string[];clinicTreatment:string;}
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [];
export interface BlogPost {slug:string;title:string;category:string;readTime:string;publishDate:string;lastUpdated:string;authorId:string;excerpt:string;leadImage:string;relatedServiceSlug:string;content:{intro:string;sections:{heading:string;body:string}[];faqs?:{question:string;answer:string}[]};}
export const BLOG_POSTS: BlogPost[] = [];
export const CUSTOMER_REVIEWS: {name:string;date:string;text:string;rating:number}[] = [
  { name: 'Chloe Robertson', date: 'a month ago', rating: 5, text: 'Josh did an absolute stellar job in our new home. Excellent workmanship, super easy to contact, and great communication throughout. If you need a reliable professional, definitely give him a go!' },
];
