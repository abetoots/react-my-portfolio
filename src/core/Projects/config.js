import flersonImg from '../../assets/flerson.png';
import wtImg from '../../assets/writtentrove.png';
import buildersImg from '../../assets/builders_gym.png';

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
