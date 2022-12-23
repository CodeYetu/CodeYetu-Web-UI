import { useEffect, useRef, useState } from 'react';
import { ZoomInOutlined, ZoomOutOutlined } from '@mui/icons-material';
import AceEditor from 'ace-builds';
import 'ace-builds/webpack-resolver';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/theme-one_dark';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/theme-gruvbox';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-csharp';
import 'ace-builds/src-noconflict/mode-golang';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/mode-ruby';
import 'ace-builds/src-noconflict/mode-rust';

export const CodeEditor = () => {
	const [code, setCode] = useState('');
	const [fontSize, setFontSize] = useState(16);

	const editorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const editor = AceEditor.edit(editorRef.current as HTMLDivElement);

		// Configure the editor
		editor.setValue(code);
		editor.setTheme('ace/theme/one_dark');
		editor.session.setMode('ace/mode/c_cpp');

		editor.setOptions({
			fontSize: `${fontSize}pt`,
			fontFamily: 'Source Code Pro, Nunito, Raleway, monospace',
		});

		// Register event listeners
		editor.on('change', () => {
			setCode(editor.getValue());
		});
		editor.selection.on('changeCursor', () => {
			// console.log('Cursor moved!');
		});

		return () => editor.destroy();
	}, [fontSize]);

	return (
		<>
			<div ref={editorRef} className='h-full w-full'></div>
			<div className='absolute bottom-1 right-1 z-10 w-auto'>
				<button
					onClick={() => setFontSize((prev) => prev + 1)}
					className='px-2 py-0.5 mr-0.5 rounded-l-lg bg-teal-300 text-center opacity-30 hover:bg-teal-500 hover:opacity-100'
				>
					<span className='text-white text-md font-semibold'>
						<ZoomInOutlined />
					</span>
				</button>
				<button
					onClick={() => setFontSize((prev) => prev - 1)}
					className='px-2 py-0.5 rounded-r-lg bg-teal-300 text-center opacity-30 hover:bg-teal-500 hover:opacity-100'
				>
					<span className='text-white text-md font-semibold'>
						<ZoomOutOutlined />
					</span>
				</button>
			</div>
		</>
	);
};
