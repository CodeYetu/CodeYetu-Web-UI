import { useContext, useEffect } from 'react';
import { Editor } from './Editor';
import { NavBar } from './NavBar';
import { AppContext, AppContextType } from '../context';

export const App = () => {
	const { language } = useContext(AppContext) as AppContextType;

	useEffect(() => {
		console.log(language);
	}, [language]);

	return (
		<div className='flex flex-col h-full'>
			<NavBar />
			<Editor />
		</div>
	);
};
