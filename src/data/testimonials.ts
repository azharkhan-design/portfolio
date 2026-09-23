export interface Testimonial {
  id: string;
  rating: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  companyIcon?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    rating: 5,
    quote: 'Azhar translated our complex enterprise requirements into a remarkably sleek, intuitive system. His communication, speed, and design systems rigor are second to none.',
    author: 'Denys Sabanadze',
    role: 'Managing Director',
    company: 'Taxer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=faces&q=80',
  },
  {
    id: '2',
    rating: 5,
    quote: 'Your Product Design work on our enterprise platform was outstanding. The interface is intuitive, scalable, and our engineering team loved the Figma handoff clarity.',
    author: 'Frank Danihel',
    role: 'Founder',
    company: 'TheTradersRoom',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces&q=80',
  },
  {
    id: '3',
    rating: 5,
    quote: 'Azhar has an extraordinary ability to deconstruct complex data architectures and turn them into seamless user experiences. A true design leader.',
    author: 'Sarah Jenkins',
    role: 'VP of Product',
    company: 'Stride Learning',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&crop=faces&q=80',
  },
  {
    id: '4',
    rating: 5,
    quote: 'Fast alignment, deep UX research insight, and pixel-perfect craftsmanship. He helped elevate our cloud product to international standards.',
    author: 'Tariq Al-Mansoor',
    role: 'Head of Technology',
    company: 'GulfHR Cloud',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=faces&q=80',
  }
];
