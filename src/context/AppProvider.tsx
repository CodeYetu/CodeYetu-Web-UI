import React, { Dispatch, ReactNode, createContext, useState } from 'react';

export interface AppContextType {
	language: any;
	setLanguage: Dispatch<React.SetStateAction<any>>;
}

export const AppContext = createContext<AppContextType | null>(null);

interface AppProviderProps {
	children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
	const [language, setLanguage] = useState({});

	return (
		<AppContext.Provider value={{ language, setLanguage }}>
			{children}
		</AppContext.Provider>
	);
};
