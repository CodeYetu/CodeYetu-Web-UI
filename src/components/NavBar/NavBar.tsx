import { PlayArrowOutlined } from '@mui/icons-material';
import './NavBar.sass';
import { Selector } from '../Selector';

export const NavBar = () => {
	return (
		<div className='flex justify-between align-middle items-center w-full bg-teal-400 text-white px-4 py-2'>
			<Selector />
			<h5 className='font-bold text-2xl'>
				<span className='mr-1'>{'</>'}</span>CodeYetu
			</h5>
			<button className='px-2 py-1 h-10 rounded-lg bg-red-400 text-white'>
				Run <PlayArrowOutlined />
			</button>
		</div>
	);
};
