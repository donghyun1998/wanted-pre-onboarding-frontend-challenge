import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContent } from "../features/content/contentSlice.js";

export default function TodoInput() {
	const [inputValue, setInputValue] = useState('');
	const dispatch = useDispatch();

	const handleAdd = (event) => {
		event.preventDefault();
		if (inputValue.trim() !== '') {
			dispatch(addContent(inputValue));
			setInputValue('');
		}
	};

	return (
		<form className="input-container" onSubmit={handleAdd}>
			<input
				type="text"
				className="input-field w-96"
				placeholder="TODO"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button className="add-button" type="submit">Add</button>
		</form>
	);
}
