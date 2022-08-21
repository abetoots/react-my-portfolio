import flersonImg from '../../assets/flerson.png';
import wtImg from '../../assets/writtentrove.png';
import buildersImg from '../../assets/builders_gym.png';
import gmparts from '../../assets/genuinegmparts.png';
import websand from '../../assets/v4wbsd.png';

export const projects = [
  {
    title: 'flerson',
    description: [
      'Full stack SaaS web app for posting remote/work-from-home jobs',
      'Built with React (GatsbyJS) + PHP + GraphQL',
    ],
    link: 'https://flerson.com',
    src: flersonImg,
  },
  {
    title: 'gm genuine parts',
    description: [
      'Introduced a modern and automated frontend workflow using gulp',
      'Increased frontend development efficiency',
    ],
    link: 'https://www.genuinegmparts.com/',
    src: gmparts,
  },
  {
    title: 'websand v4',
    description: [
      'A marketing automation platform using the MERN stack',
      'Handled most of the frontend along with backend and dev op responsibilities',
      'Implemented dashboard using chart',
      'Implemented automation using bree',
      'Implemented billing using stripe',
      'Integrated with zapier',
    ],
    link: 'https://v4wbsd.com/',
    src: websand,
  },
  {
    title: "builder's gym dashboard",
    description: [
      'Cloud-based dashboard app for a local gym.',
      'Built with MERN Stack (MongoDB, Express, React, Node)',
    ],
    link: 'https://builders-gym-dashboard.netlify.app',
    src: buildersImg,
  },
  {
    title: 'written trove',
    description: ['Blog', 'Built with React(GatsbyJs)'],
    link: 'https://writtentrove.com',
    src: wtImg,
  },
];
