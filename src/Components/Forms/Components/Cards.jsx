import Card from "./SubComponents/Card";

const Cards = ({ users , handleRemove}) => {
	return (
		<div className="flex flex-wrap justify-center w-full gap-4 p-4 overflow-auto max-h-96 min-h-96">
			{users.map((item, index) => {
				return <Card user={item} id={index} handleRemove={handleRemove} key={index} />;
			})}
		</div>
	);
};

export default Cards;
