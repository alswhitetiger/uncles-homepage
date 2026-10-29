// Source: [KNS Uncles] 소개자료_국문.pdf (2026-09). Edit company facts here, not in pages.
export const company = {
  name: 'KNS Uncles',
  tagline: 'Connecting Middle East markets with Korean beauty & healthcare',
  vision: 'To become the leading global business development partner for Korean beauty & healthcare.',
  email: 'contact@knsuncles.com',
  phone: '+82-10-9858-8385',
  phoneHref: 'tel:+821098588385',
  // TODO: newsletter / LinkedIn / Instagram URLs — not in the company deck yet.
  social: [] as { label: string; href: string }[],
};

// The site may live under a sub-path (GitHub Pages: /uncles-homepage/), so every internal link goes through url().
export const url = (path: string) => import.meta.env.BASE_URL + path.replace(/^\//, '');

export const nav = [
  { href: '/services/', label: 'Services' },
  { href: '/partners/', label: 'Partners' },
  { href: '/about/', label: 'About' },
  { href: '/insights/', label: 'Insights' },
  { href: '/contact/', label: 'Contact' },
];

export const markets = ['GCC', 'Levant', 'North Africa'];

export const services = [
  {
    slug: 'market-entry',
    title: 'Market entry',
    summary: 'Find out whether a product can sell in the Middle East, and who should sell it.',
    points: ['Market fit review', 'Finding local distribution partners', 'Market entry strategy'],
  },
  {
    slug: 'deal-structuring',
    title: 'Partnership & deal structuring',
    summary: 'Set up the commercial structure so the partnership still works in year three.',
    points: ['Distribution partnership design', 'Exclusive and distribution agreements', 'Licensing and co-operation models'],
  },
  {
    slug: 'execution',
    title: 'Execution',
    summary: 'Run the cross-border work between Korean makers and Middle East buyers.',
    points: ['Cross-border project coordination', 'Supply chain and partner management', 'Contract and transaction execution'],
  },
  {
    slug: 'procurement',
    title: 'Procurement service',
    summary: 'We act as the Korea liaison office for Middle East pharmaceutical companies sourcing Korean medicines.',
    points: ['Inquiry', 'Contract', 'Sourcing & development', 'Production & management'],
    sequence: true,
  },
];

// Names only: logos need written permission from each partner before use.
export const partners = [
  'Misk Pharma', 'PharmaTrust', 'Oubari Habbouch', 'Naroukh Pharma', 'Pharmus Bioscience',
  'BTS Medical', 'Bellon & I.COS', 'Avanta', 'AlgenPharm',
];

export const team = [
  { name: 'Daeyoung Kim', role: 'Managing Director' },
  { name: 'Junghwa Song', role: 'Managing Director' },
  { name: 'Kyuhong Lee', role: 'Chief Brand Manager' },
  { name: 'Ayman Turk', role: 'Chief Technology Officer' },
];
