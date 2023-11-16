"use client";

import { useState } from "react";

export interface ButtonProps {
	title: string;
	callback: () => void;
}

const Button = (props: ButtonProps) => {
	const [title, setTitle] = useState<string>(props.title);

	const onSubmit = (e: any) => {
		e.preventDefault();
		props.callback();
	};
	return (
		<button
			type='submit'
			onClick={onSubmit}
			className='rounded bg-orange-600 p-2 w-full h-16 cursor-pointer hover:bg-orange-400 transition-all duration-100 ease-in'
		>
			{props.title}
		</button>
	);
};

export default Button;
