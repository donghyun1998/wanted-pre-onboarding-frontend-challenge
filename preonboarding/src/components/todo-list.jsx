import ListUnit from "./list-unit.jsx";
import { useSelector } from "react-redux";

export default function TodoList() {
	const content = useSelector((state) => state.content.value);
	return (
		<>
			{content.map((item, index) => (
				<ListUnit key={index} content={item} index={index} />
			))}
		</>
	);
}
