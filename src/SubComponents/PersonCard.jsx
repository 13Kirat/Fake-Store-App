const PersonCard = ({ values, click, index }) => {
	const { name, profession, image, isFriend } = values;
	console.log(index);
	return (
		<div className="w-52 bg-zinc-200 rounded overflow-hidden">
			<div className="w-full h-40 bg-sky-200">
				<img
					src={`${image}`}
					alt="cannot fetch"
					className="w-full h-full object-cover object-[center_top]"
				/>
			</div>
			<div className="w-full p-3">
				<h3 className="text-xl font-semibold">{name}</h3>
				<h5 className="text-xs">{profession}</h5>
				<button
					onClick={() => {click(index);
					}}
					className={`px-3 py-1 mt-4 text-xs text-white ${isFriend ? "bg-green-500" : "bg-blue-500"} font-semibold rounded-md`}
				>
					{isFriend ? "Friends" : "Add Friend"}
				</button>
			</div>
		</div>
	);
};

export default PersonCard;
