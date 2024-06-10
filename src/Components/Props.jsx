import PersonCard from "../SubComponents/PersonCard";
import { useState } from "react";

const Props = () => {
	const raw = [
		{ name: "John", profession: "Coder", image: "../../src/assets/108.jpg", isFriend: false },
		{ name: "Dan", profession: "Painter", image: "../../src/assets/109.jpg", isFriend: false },
		{ name: "Jonny", profession: "Plumber", image: "../../src/assets/108.jpg", isFriend: false },
		{ name: "Mia", profession: "Singer", image: "../../src/assets/109.jpg", isFriend: false },
	];

	const [data, setData] = useState(raw);

	const clickHandler = (cardIndex) => {
		setData((prev) => {
			return prev.map((item, index) => {
				if (index == cardIndex) {
					return { ...item, isFriend: !item.isFriend };
				}
				return item;
			});
		});
	};
	return (
		<div className="w-full h-screen bg-zinc-300 flex gap-3 items-center justify-center">
			{data.map((item, index) => (
				<PersonCard values={item} key={index} index={index} click={clickHandler} />
			))}
		</div>
	);
};

export default Props;
