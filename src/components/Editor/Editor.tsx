import { useEffect, useRef } from 'react';
import './Editor.scss';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';
import { indentWithTab } from '@codemirror/commands';
import { basicSetup } from 'codemirror';
import { oneDark } from '@codemirror/theme-one-dark';
import { javascript } from '@codemirror/lang-javascript';

export const Editor = () => {
	const editorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const FontSizeTheme = EditorView.theme({
			'&': {
				fontSize: '12pt',
			},
		});

		const editorStartState = EditorState.create({
			doc: 'Hello World', // creates a default hello world language
			extensions: [
				basicSetup,
				keymap.of([indentWithTab]),
				oneDark,
				javascript(),
				[FontSizeTheme],
			], // keymaps are all the editor keymaps like Ctrl+V
		});

		const editorView = new EditorView({
			state: editorStartState,
			parent: editorRef.current as HTMLElement,
		});

		return () => {
			editorView.destroy();
		};
	}, []);

	return <div ref={editorRef} className='w-full min-h-screen'></div>;
};
