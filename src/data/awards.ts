export interface AwardItem {
  id: string;
  year?: string;
  badge: string;
  title: string;
  issuer: string;
  category: string;
  citation: string;
  image: string;
  logo: string;
  link?: string;
  linkText?: string;
}

export const AWARDS: AwardItem[] = [
  {
    id: 'unlocked-award',
    badge: '🏆 National Industry Award',
    title: 'Best Overall Design for a Financial Services Enterprise',
    issuer: 'Unlocked Awards · Inkspell Media',
    category: 'Fintech & Enterprise UX',
    citation: 'Honored for designing high-conversion, intuitive enterprise loan workflows for Quick Loan Application.',
    image: '/images/awards/unlocked-award.png',
    logo: '/images/Logo/UnlockedLogo.png',
    link: 'https://www.unlockedawards.com/',
    linkText: 'UnlockedAwards.com ↗'
  },
  {
    id: 'eccentric-performer',
    badge: '⭐ Leadership & Innovation',
    title: 'The Eccentric Performer Award',
    issuer: 'Successive Digital',
    category: 'Design Leadership & Craft',
    citation: 'Recognized for creative problem solving, design leadership, and driving cross-functional product success.',
    image: '/images/awards/eccentric-performer.png',
    logo: '/images/Logo/SuccessiveDigital.png'
  },
  {
    id: 'star-performer',
    badge: '✦ Performance Honor',
    title: 'Star Performer Award',
    issuer: 'Successive Digital',
    category: 'Lead - User Experience',
    citation: 'Awarded for continuous execution velocity and transformative UX contributions as Lead Product Designer.',
    image: '/images/awards/star-performer.png',
    logo: '/images/Logo/SuccessiveDigital.png'
  }
];
