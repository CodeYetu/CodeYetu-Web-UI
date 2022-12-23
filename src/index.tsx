import './index.sass';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components';
import { AppProvider } from './context';

const root = ReactDOM.createRoot(
	document.querySelector('#root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</React.StrictMode>
);
