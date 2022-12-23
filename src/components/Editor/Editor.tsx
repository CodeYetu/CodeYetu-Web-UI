import { useEffect, useRef, useState } from 'react';
import './Editor.scss';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';
import { indentWithTab } from '@codemirror/commands';
import { basicSetup } from 'codemirror';
import { oneDark } from '@codemirror/theme-one-dark';
import { javascript } from '@codemirror/lang-javascript';
import { ZoomInOutlined, ZoomOutOutlined } from '@mui/icons-material';

export const Editor = () => {
	const [code, setCode] = useState('');
	const [fontSize, setFontSize] = useState(12);
	const editorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const FontSizeTheme = EditorView.theme({
			'&': {
				fontSize: `${fontSize}pt`,
			},
		});

		const onUpdate = EditorView.updateListener.of((value) => {
			setCode(value.state.doc.toString());
		});

		const editorStartState = EditorState.create({
			doc: 'Hello World', // creates a default hello world language
			extensions: [
				basicSetup,
				keymap.of([indentWithTab]),
				oneDark,
				[FontSizeTheme],
				javascript({ jsx: true, typescript: true }),
				onUpdate,
			],
		});

		const editorView = new EditorView({
			state: editorStartState,
			parent: editorRef.current as HTMLElement,
		});

		return () => {
			editorView.destroy();
		};
	}, [fontSize]);

	return (
		<div ref={editorRef} className='w-full min-h-screen relative'>
			<div className='absolute top-1 right-1 z-10 w-auto'>
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
		</div>
	);
};
