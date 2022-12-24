import { PlayArrowOutlined } from '@mui/icons-material';
import './NavBar.sass';
import { Selector } from '../Selector';

const imagesFolder = `${process.env.PUBLIC_URL}/assets/images`;

const languages = [
	{ name: 'C', value: 'c', icon: `${imagesFolder}/c.svg` },
	{ name: 'C++', value: 'cpp', icon: `${imagesFolder}/cpp.svg` },
	{ name: 'C#', value: 'cs', icon: `${imagesFolder}/cs.svg` },
	{ name: 'Java', value: 'java', icon: `${imagesFolder}/java.svg` },
	{ name: 'JavaScript', value: 'js', icon: `${imagesFolder}/js.svg` },
	{ name: 'Python', value: 'py', icon: `${imagesFolder}/py.svg` },
	{ name: 'TypeScript', value: 'ts', icon: `${imagesFolder}/ts.svg` },
	{ name: 'Ruby', value: 'rb', icon: `${imagesFolder}/rb.svg` },
];

export const NavBar = () => {
	return (
		<div className='flex justify-between align-middle items-center w-full bg-teal-600 text-white px-4 py-2'>
			<h5 className='font-bold text-2xl'>CodeYetu</h5>
			<Selector options={languages} />
			<button className='px-2 py-1 h-10 rounded-lg bg-red-400 text-white hover:bg-red-500'>
				Run <PlayArrowOutlined />
			</button>
		</div>
	);
};
