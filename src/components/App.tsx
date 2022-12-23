import { Editor } from './Editor';
import { NavBar } from './NavBar';

export const App = () => {
	return (
		<div className='flex flex-col h-full'>
			<NavBar />
			<Editor />
		</div>
	);
};
